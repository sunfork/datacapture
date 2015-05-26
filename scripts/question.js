'use strict';


//FIX! make this an object!
// return {
//   datacapture: {
//     questionTypes: [
//        ........
//     ]
//   }
// }

var questionTypes = [
  { icon: 'header', nsType: 'heading' },
  { icon: 'tasks', nsType: 'taskdata' }, 
  { icon: 'text-width', nsType: 'freetext' }, 
  { icon: 'question-sign', nsType: 'yesno' },
  { icon: 'list', nsType: 'multiplelist' }, 
  { icon: 'align-justify', nsType: 'list' },
  { icon: 'barcode', nsType: 'barcode' }, 
  { icon: 'qrcode', nsType: 'qrcode' },
  { icon: 'pencil', nsType: 'signature' },
  { icon: 'map-marker', nsType: 'geolocation' },
  { icon: 'calendar', nsType: 'date' },
  { icon: 'picture', nsType: 'photo' },
  { icon: 'volume-up', nsType: 'audio' },
  { icon: 'facetime-video', nsType: 'video' }
];

// var unique_id = function(el) {
//   var nsidNo = Math.floor((Math.random() * 100) + 1)  ;
//   var orig_id = ($orig.data('nsid') || 'nselement_-_');
//   // console.log(orig_id);
// }

//FIX! THIS G-DAMN function name
var getQuestionStructure = function(nsItem) {

  if (!nsItem.icon) {
    questionTypes.forEach(function(item) {
      if (item.nsType === nsItem.nsType) {
        nsItem.icon = item.icon;
        return false;
      }
    });  
  }

  //FIX! we must cache this stuff...
  switch(nsItem.nsType) {

    case 'heading':
      /*********************************************************************************************
       ******************************************* HEADING *****************************************
       *********************************************************************************************/
      return {
        nsItem: nsItem,
        nsText: '',
        attributes: {
          col: -1,  //FIX! slot_id
          mandatory: false //etc...
        },
        propertyHtml: function() {
          var $result = $('<form role="form">\
                            <div class="form-group">\
                              <input type="hidden" name="version" value="1"/>\
                              <input type="text" class="form-control" name="text" placeholder="your heading text goes here...                  eg. Personal Information"/>\
                            </div>\
                            <div class="form-group">\
                              <div class="checkbox">\
                                <label><input type="radio" name="size" value="small" checked> small</label>\
                                <label><input type="radio" name="size" value="large"> large</label>\
                              </div>\
                            </div>\
                          </form>');
                        // .clone(true, true);

          $result.find('input[type="radio"]').change(function() {
            //FIX! change gont
            //console.log($(this).val());
            console.log('sssssss', $result.parent());
            console.log('ssssss2', $(this).parent());
            console.log('ssssss3', $(this).data('question'));
            console.log('ssssss4', $result.data('question'));
          });
          
          //$result.find(
          return $result;
        }
      };
      break;
    case 'freetext':
      /*********************************************************************************************
       ******************************************* FREE TEXT ***************************************
       *********************************************************************************************/
      return {
        nsItem: nsItem,
        nsText: '',
        attributes: {
          col: -1,  //FIX! slot_id
          mandatory: false //etc...
        },
        propertyHtml: function() {
          var $result = $('<form role="form">\
                            <div class="form-group">\
                              <input type="hidden" name="version" value="1"/>\
                              <input type="text" class="form-control" name="text" placeholder="free text..."/>\
                            </div>\
                            <div class="form-group">\
                              <div class="checkbox">\
                                <label><input type="radio" name="size" value="small" checked> small</label>\
                                <label><input type="radio" name="size" value="large"> large</label>\
                              </div>\
                            </div>\
                          </form>');
                        // .clone(true, true);

          $result.find('input[type="radio"]').change(function() {
            //FIX! change gont
            console.log($(this).val());
            console.log('question', $(this).data('question'));

          });
          return $result;
        }
      };
      break;
    case 'taskdata':
      /*********************************************************************************************
       ******************************************* TASK DATA ***************************************
       *********************************************************************************************/
      return {
        nsItem: nsItem,
        nsText: '',
        attributes: {
          col: -1,  //FIX! slot_id
          mandatory: false //etc...
        },
        propertyHtml: function() {
          var $result = $('<form role="form">\
                            <div class="form-group">\
                              <input type="hidden" name="version" value="1"/>\
                              <input type="text" class="form-control" name="text" placeholder="free text..."/>\
                            </div>\
                            <div class="form-group">\
                              <div class="checkbox">\
                                <label><input type="radio" name="size" value="small" checked> small</label>\
                                <label><input type="radio" name="size" value="large"> large</label>\
                              </div>\
                            </div>\
                          </form>');
                        // .clone(true, true);

          $result.find('input[type="radio"]').change(function() {
            //FIX! change gont
            // console.log($(this).val());
            // console.log('question', $(this).data('question'));

          });
          return $result;
        }
      };
      break;
    default:
      /*********************************************************************************************
       ******************************************* FREETEXT ****************************************
       *********************************************************************************************/
      return {        
        nsItem: nsItem,
        nsText: '',
        attributes: {
          col: -1,  //FIX! slot_id
          mandatory: false //etc...
        },
        propertyHtml: function() {
          var $result = $('<form role="form">\
                            <div class="form-group">\
                              <input type="hidden" name="version" value="1"/>\
                              <label for="text">question text</label>\
                              <input type="text" class="form-control" name="text" value="' + nsItem.nsType + '"/>\
                            </div>\
                            <div class="form-group">\
                              <div class="checkbox">\
                                <label><input name="mandatory" type="checkbox" /> mandatory</label>\
                              </div>\
                            </div>\
                          </form>');

          return $result;
        }
      };
  }
};