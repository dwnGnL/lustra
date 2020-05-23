var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1200: {
            slidesPerView: 2,
        },
    }
});
var mySwiper1 = new Swiper('.swiper-container_1', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 1
        }
    }
});
var mySwiper2 = new Swiper('.swiper-container_2', {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var mySwiper3 = new Swiper('.swiper-container_3', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


var accordion = document.getElementById('accordion-1');
accordion.addEventListener('click', change);
var accordion1 = document.getElementById('accordion-2');
accordion1.addEventListener('click', change);

function change(event) {
    var targ = event.target;
    if (targ.tagName !== "H3") return;
    if (targ.classList.contains('select')) {
        console.log(1)
        hideAll();
    } else {
        console.log(2)
        hideAll();
        targ.classList.add('select');
        showText(targ.nextElementSibling);
    }
}

function hideAll() {
    var h3El = document.querySelectorAll('.h3');
    var divEl = document.getElementsByClassName('aside-nav');
    for (var i = 0; i < h3El.length; i++) {
        h3El[i].classList.remove('select');
    }
    for (var i = 0; i < divEl.length; i++) {
        divEl[i].style.height = '0';
    }
}

function showText(textEl) {
    textEl.style.height = textEl.scrollHeight + 'px';
}


var acc = document.getElementsByClassName("footer-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


