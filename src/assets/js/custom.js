window.onload = function(){

function addClassAll(el, cls){
  for (var i = 0; i < el.length; ++i){
    if (!el[i].className.match('(?:^|\\s)'+cls+'(?!\\S)')){ el[i].className += ' '+cls; }
    }
  }
function delClassAll(el, cls){
  for (var i = 0; i < el.length; ++i){
    el[i].className = el[i].className.replace(new RegExp('(?:^|\\s)'+cls+'(?!\\S)'),'');
    }
  }
document.getElementById('filter-categories').onclick =function(evt) {
  evt = evt || window.event;
  var elem = evt.target || evt.srcElement;
  var filter = (elem.id == 'filter-all') ? '' : '.'+elem.id;
  var mask = document.querySelectorAll('#filter-mask');
  addClassAll(mask, 'filter-mask');
  setTimeout(function() {
    delClassAll(document.querySelectorAll('.filter-item'), 'selected');
    addClassAll(document.querySelectorAll('.filter-wrap'), 'filtered');
    addClassAll(document.querySelectorAll('.filter-item'+filter), 'selected');
    }, 500);
  setTimeout(function() { delClassAll(mask, 'filter-mask'); }, 800);
  }
}
