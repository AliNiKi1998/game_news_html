let bars = document.querySelector('#bars');
let menu = document.querySelector('#menu');
let close = document.querySelector('#close');
let search = document.querySelector('#search');
let searchBox = document.querySelector('#search-box');

bars.addEventListener('click', (e) => {
    menu.classList.add('nav-open');
    let child = [...menu.children];
    child.forEach(item => {
        item.classList.add('w-100');
    });
})

close.addEventListener('click', (e) => {
    menu.classList.remove('nav-open');
    let child = [...menu.children];
    child.forEach(item => {
        item.classList.remove('w-100');
    });
})

let show = true;
search.addEventListener('click', (e) => {
    let thisSearch = e.target.classList.contains('search');  
    let thisSearchIcon = e.target.classList.contains('search-icon');  
    if (show) {
        searchBox.classList.add('d-block')
        show = false
    } else if(!show  , thisSearch , thisSearchIcon) {
        searchBox.classList.remove('d-block')
        show = true
    }
})


//  persion number
$(document).ready(function () {
    ConvertNumberToPersion();
  });
  
  function ConvertNumberToPersion() {
    persian = {
      0: "۰",
      1: "۱",
      2: "۲",
      3: "۳",
      4: "۴",
      5: "۵",
      6: "۶",
      7: "۷",
      8: "۸",
      9: "۹",
    };
    function traverse(el) {
      if (el.nodeType == 3) {
        var list = el.data.match(/[0-9]/g);
        if (list != null && list.length != 0) {
          for (var i = 0; i < list.length; i++)
            el.data = el.data.replace(list[i], persian[list[i]]);
        }
      }
      for (var i = 0; i < el.childNodes.length; i++) {
        traverse(el.childNodes[i]);
      }
    }
    traverse(document.body);
  }