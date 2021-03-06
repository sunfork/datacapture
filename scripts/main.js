'use strict';

function deserialize(querystring) {
  var setValue = function(root, path, value) {
    if (path.length > 1) {
      var dir = path.shift();
      if( typeof root[dir] === 'undefined' ){
        root[dir] = path[0] === '' ? [] : {};
      }

      arguments.callee(root[dir], path, value);
    } else {
      if( root instanceof Array ){
        root.push(value);
      }else{
        root[path] = value;
      }
    }
  };

  var nvp = querystring.split('&');
  var data = {};
  for( var i = 0 ; i < nvp.length ; i++ ){
    var pair = nvp[i].split('=');
    var name = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);

    var path = name.match(/(^[^\[]+)(\[.*\]$)?/);
    var first = path[1];
    if(path[2]) {
      //case of 'array[level1]' || 'array[level1][level2]'
      path = path[2].match(/(?=\[(.*)\]$)/)[1].split('][');
    } else {
      //case of 'name'
      path = [];
    }
    path.unshift(first);

    setValue(data, path, value);
  }
  return data;
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}