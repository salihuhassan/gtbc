

const dropdown = document.querySelector('.drop-down');

const list = document.querySelector(".list");

const selected = document.querySelector('.selected');

const selectedimg = document.querySelector('.selectedimg');

dropdown.addEventListener('click', ()=>{
    list.classList.toggle('show');
});









 list.addEventListener('click', (e)=>{
    const img = e.target.querySelector('img');
    const text = e.target.querySelector('.text')

    selectedimg.src = img.src;
    selected.innerHTML = text.innerHTML;
 });



let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}


let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');

}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');

}

let dflex = document.querySelector('.dflex')
document.querySelector('#show-links1').onclick = () =>{
    dflex.classList.toggle('sflex');
}

let gflex = document.querySelector('.gflex')
document.querySelector('#show-links2').onclick = () =>{
    gflex.classList.toggle('pflex');
}

let hflex = document.querySelector('.hflex')
document.querySelector('#show-links3').onclick = () =>{
  hflex.classList.toggle('lflex');
}

let kflex = document.querySelector('.kflex')
document.querySelector('#show-links4').onclick = () =>{
  kflex.classList.toggle('flex7');
}

let qflex = document.querySelector('.qflex')
document.querySelector('#show-links5').onclick = () =>{
  qflex.classList.toggle('flex8');
}

let aflex = document.querySelector('.aflex')
document.querySelector('#show-links6').onclick = () =>{
  aflex.classList.toggle('flex9');
}
let zflex = document.querySelector('.zflex')
document.querySelector('#show-links7').onclick = () =>{
  zflex.classList.toggle('flex99');
}

let xflex = document.querySelector('.xflex')
document.querySelector('#show-links8').onclick = () =>{
  xflex.classList.toggle('flex90');
}


window.onscroll = () =>{
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = document.querySelector(".product-slider", {
    loop:true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: { 
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  // var swiper = new Swiper(".review-slider", {
  //   loop:true,
  //   spaceBetween:20,
  //   breakpoints: {
  //       0: {
  //   slidesPerView: 1,
  //   },
  //     768: {
  //       slidesPerView: 2,
  //     },
  //     1020: {
  //       slidesPerView: 3,
  //     },
  //   },
  // });




  /* Styles for accordion */
//   .accordion {
//     border: 1px solid #ccc;
//     margin: 20px;
//   }
  
//   .accordion-item {
//     border-bottom: 1px solid #ccc;
//   }
  
//   .accordion-header {
//     background-color: #f1f1f1;
//     padding: 10px;
//     cursor: pointer;
//     font-weight: bold;
//   }
  
//   .accordion-content {
//     padding: 10px;
//     display: none; /* Hide content by default */
//   }
//   .active{
// display: block;
// padding: 20px;
//   }
  


  
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




document.getElementById('file').addEventListener('change', function() {
const fileName = this.files[0].file;
alert('selected file:' + fileName);


});




    
