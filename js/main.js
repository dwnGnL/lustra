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
var acc1 = document.getElementsByClassName("accordion-menu-1")
var acc2 = document.getElementsByClassName("accordion-menu-2")
var acc3 = document.getElementsByClassName("accordion-menu-3")


for (let i = 0; i < acc.length; i++) {
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


for (let j = 0; j < acc1.length; j++) {
  acc1[j].addEventListener("click", function() {
    this.classList.add("active1");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
} 


for (let k = 0; k < acc2.length; k++) {
  acc2[k].addEventListener("click", function() {
    this.classList.toggle("active2");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
} 

for (let n = 0; n < acc3.length; n++) {
  acc3[n].addEventListener("click", function() {
    this.classList.toggle("active3");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
} 


var span = document.getElementById('span-open');
var span1 = document.getElementById('span-close');

span.addEventListener("click", openNav)
span1.addEventListener("click", closeNav)

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("header").style.marginLeft = "250px";
  span.style.display = "none";
  span1.style.display = 'block';
  acc1[0].classList.add("active1")
  acc3[0].classList.add("active3")
  }




function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("header").style.marginLeft = "0";
  span.style.display = "block";
  span1.style.display = 'none';
}


var wilBeHide = document.getElementById("wilBeHide")

var btn = document.getElementsByClassName("btn");

for(var i = 0; i < btn.length; i++) {

    btn[i].addEventListener("click", s)

}

function s() {
   wilBeHide.style.display = "none" 
   console.log(1);
}

var arr = []

function charAtPos(r, s) {
	if(s == "even") {	 
		if(typeof(r) === "object") {
			return r.filter((el, ind) => ind%2 == 1);			
		} else if(typeof(r) == "string") {
			var s = r.split("")
			return s.filter((el, ind) => ind%2 == 1)
		}
 } else if(s == "odd") {
	if(typeof(r) === "object") {
		return r.filter((el, ind) => ind%2 == 1);			
		} else if(typeof(r) == "string") {
			var s = r.split("")
			return s.filter((el, ind) => ind%2 == 1)
		}
 } 
}

