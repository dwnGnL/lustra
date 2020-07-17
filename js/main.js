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


