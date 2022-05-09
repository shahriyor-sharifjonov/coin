import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

Swiper.use([Autoplay])

const swiper = new Swiper();

const dropdownTop = document.querySelector('.top__dropdown-top');
const dropdownArrow = document.querySelector('.top__dropdown-arrow');
const dropdownContent = document.querySelector('.top__dropdown-content');
const dropdownItem = document.querySelectorAll('.top__dropdown-item');
const dropdownImg = document.querySelectorAll('.top__dropdown-img img');

dropdownTop.addEventListener('click', (e)=>{
  dropdownContent.classList.toggle('active')
  dropdownArrow.classList.toggle('active')
})

new Swiper(".menu__swiper", {
  slidesPerView: "auto",
  modules: [Navigation],
  spaceBetween: 25,
  navigation: {
    nextEl: ".menu__button-next",
  },
});

new Swiper(".cards__swiper", {
  slidesPerView: 1,
  spaceBetween: 14,
  modules: [Pagination],
  pagination: {
    el: '.cards__pagination',
    clickable: true 
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    576:{
      slidesPerView: 2,
      spaceBetween: 10,
    }
  },
});

const coinsItem = document.querySelectorAll('.coins__item');

coinsItem.forEach(el => {
  el.addEventListener('click', (e)=>{
    coinsItem.forEach(el => {
      el.classList.remove('active')
    });
    el.classList.add('active')
  })
});

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

if(document.querySelector('.prices__chk input')){
  document.addEventListener("click", closeAllSelect);
  const chk = document.querySelector('.prices__chk input');
  const content = document.querySelector('.prices__content');
  chk.addEventListener('input', e => {
    content.classList.toggle('hidden');
  })
}

const changeBtn = document.querySelectorAll('.change-content');
const changeContent = document.querySelectorAll('.change-target');
changeBtn.forEach(el => {
  el.addEventListener('click', e => {
    document.querySelectorAll('.coins__drop-content.active').forEach(content => {
      content.classList.remove('active');
      document.querySelector('.coins__items').classList.remove('toggled');
    })
    if(el.classList.contains('coins__drop-item')){
      const parent = el.parentElement;
      const btn = el.parentElement.parentElement.querySelector('.coins__drop-btn');
      btn.classList.add('active');
      el.parentElement.classList.remove('active');
      const defaults = parent.querySelectorAll('.coins__item.default');
      defaults.forEach(el => {
        el.classList.remove('default');
      });
      el.classList.add('default');
    }
    const target = el.getAttribute('data-target'); 
    changeContent.forEach(content => {
      content.classList.remove('active')
    })
    document.getElementById(target).classList.add('active');
  })
})

const cDrop = document.querySelectorAll('.coins__drop-btn');
cDrop.forEach(drop => {
  drop.addEventListener('click', el => {
    document.querySelectorAll('.coins__drop-content.active').forEach(content => {
      content.classList.remove('active');
      document.querySelector('.coins__items').classList.remove('toggled');
    })
    document.querySelector('.coins__items').classList.toggle('toggled');
    const content = drop.parentElement.querySelector('.coins__drop-content');
    const defolt = content.querySelector('.default');
    content.classList.toggle('active');
    defolt.classList.add('active');
    const target = defolt.getAttribute('data-target');
    changeContent.forEach(content => {
      content.classList.remove('active')
    })
    document.getElementById(target).classList.add('active');
  })
})

window.addEventListener('click', e => {
  cDrop.forEach(drop => {
    if(drop.classList.contains('active')){
      if(!e.target.classList.contains('coins__drop-btn')){
        document.querySelector('.coins__items').classList.remove('toggled');
        const content = drop.parentElement.querySelector('.coins__drop-content');
        content.classList.remove('active');
      }
    }
  })
})

new ClipboardJS('.clip');

const qbtn = document.querySelectorAll('.quotes__btn');
qbtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  })
})

const popupClose = document.querySelectorAll('.popup-close');
const popup = document.querySelectorAll('.popup');
popupClose.forEach(el => {
  el.addEventListener('click', e => {
    popup.forEach(popup => {
      popup.classList.remove('active');
    })
  })
})

window.addEventListener('click', e => {
  if(e.target.classList.contains('vote-btn')){
    e.target.querySelector('span').innerHTML = 'Voted!'
    e.target.classList.add('active');
  }
})