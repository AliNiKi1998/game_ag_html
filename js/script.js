//persion number
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


// menu_toggle
const btnToggle = document.getElementById('toggle_menu')
const nav = document.getElementById('nav_menu');




let toggle = false;

btnToggle.addEventListener('click', (e) => {

  togglHandle = () => (toggle = !toggle)
  let show = togglHandle()
  if (show) {
    nav.classList.add('menu_toogle')
  } else {
    nav.classList.remove('menu_toogle')
  }


})


// owl carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    nav: true,
    dots: true,
    items: 1,
    autoplay: true,
    navText: [
      '<span><i class="fas fa-angle-right"></i></span>',
      '<span><i class="fas fa-angle-left"></i></span>',
    ],
    center: true,
    margin: 10
  });
});

// circlize





let circleElement = $('.progress_bar_main');
let circleElement2 = $('.progress_bar_main_2');
let el = document.querySelectorAll('.progress_bar_main');
console.log(el);
// let counter = document.getElementsByClassName('progress');
// let c =counter.dataset.count

// el.forEach((val)=>{
//   console.log(val);
// })


// $(document).ready(function () {
//   circleElement.circlize(
//     {
//       background: "rgba(0,0,0,.5)",
//       foreground: "#CA5152",
//       stroke: 5,
//       perc: 10,
//       usePercentage: false,
//       percentage: 10,
//       radius: 30,
//       duration: 1000,
//       min: 20,
//       max: 100,
//       useGradient: false,
//     }
//   );
// });

$(document).ready(function () {
  circleElement2.circlize(
    {
      background: "rgba(0,0,0,.5)",
      foreground: "#CA5152",
      stroke: 5,
      perc: 10,
      usePercentage: false,
      percentage: 10,
      radius: 30,
      duration: 1000,
      min: 30,
      max: 100,
      useGradient: false,
    }
  );
});



