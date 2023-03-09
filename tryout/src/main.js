import './sass/styles.scss'
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.css';
import '@splidejs/splide/css';

import Splide from '@splidejs/splide';


const menu = document.querySelector('.menu');
const menuNavTitle = document.querySelector('.menu__nav-title');
const backdrop = document.querySelector('.backdrop');
const menuNavListMain = document.querySelector('.menu__nav-list_main');
const navItems = menuNavListMain.querySelectorAll('.menu__nav-item_main');
let mySplide = null;


const navStrings =["Email","Chat","Auth","Form Element"];
const formElementStrings =["Text Field","Select","Checkbox","Radio","Custom Inputs","Textarea"];


function toggleMenu(){
  if(menu && menuNavTitle && menuNavListMain){    
    menuNavTitle.classList.toggle('menu__nav-title_toggle-on')
    menu.classList.toggle('menu_toggle-on')
    backdrop.classList.toggle("backdrop_triggered")

    if(menuNavTitle.classList.contains('menu__nav-title_toggle-on')){
      menuNavTitle.innerHTML= "APPS & PAGES";
      navItems.forEach((e,i)=>{
        e.style.width="100%";
        const span = document.createElement("span");
        span.textContent = navStrings[i];
        const button = e.querySelector("button");
        button.querySelector(".menu__nav-icon").appendChild(span)
        
        if(button.classList.contains('menu__nav-link-dropdown')){
          const sym = document.createElement("i")
          sym.classList.add("fas","fa-chevron-right","fa-rotate-0")
          button.appendChild(sym)

          switch(span.textContent){
            case "Form Element":
              const subItems = e.querySelectorAll(".menu__nav-item_l1");
              subItems.forEach((e,i) =>{
                button.addEventListener("click",openFormElement);
              })
          }
        }
      })
    }else{
      menuNavTitle.innerHTML= "";
      navItems.forEach((e,i)=>{
        e.style.width="15%";
        const button = e.querySelector("button");
        const div = button.querySelector(".menu__nav-icon");
        const span = div.querySelector("span")
        div.removeChild(span)
        
        if(button.classList.contains('menu__nav-link-dropdown')){
          button.removeChild(button.lastElementChild);      
        }
        
        switch (span.textContent){
          case "Form Element":
            button.removeEventListener("click",openFormElement);
            if(button.nextElementSibling.classList.contains('menu__nav-list_l1-on')){
              button.nextElementSibling.classList.remove('menu__nav-list_l1-on')
            }
        }

      })
    }

    menuNavListMain.classList.toggle('menu__nav-list_toggle-on')
  }
}

function openFormElement(e){

  e.target.nextElementSibling.classList.toggle('menu__nav-list_l1-on');
}


document.querySelector('.switch')?.addEventListener('input',toggleMenu);
document.querySelectorAll('.form__field-button').forEach((v,i)=>{
  v.addEventListener('click',(e)=>{
    e.preventDefault();
    const input = e.target.parentNode.parentNode.getElementsByTagName("input")[0];
    if(e.target.classList.contains("fa-eye-slash")){
      e.target.classList.remove("fa-eye-slash");e.target.classList.add("fa-eye");
      input.type="text";
    }else{
      e.target.classList.add("fa-eye-slash");e.target.classList.remove("fa-eye");
      input.type="password";
    }
  });
})

document.querySelector(".form__button-input")?.addEventListener("click", (e)=>{
  let name = document.getElementById("name-input");
  let email = document.getElementById("email-input");
  let password = document.getElementById("password-input");
  let birthdate = document.getElementById("birth-input");
  let repassword = document.getElementById("confirm-password-input");
  if(!validations({name:name.value, email:email.value, password:password.value, birthdate:birthdate.value, repassword:repassword.value})) return;
  name.value=""
  email.value=""
  password.value=""
  birthdate.value=""
  repassword.value=""
  alert("Getting Started...")
})


function validations(fields){
  if(fields.name === "" || fields.password === "" || fields.repassword === "" || fields.email === "" || fields.birthdate === ""){
    alert("Faltan completar datos"); return false;
  }
  if(!fields.email.toString().match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)){
    alert("Email inválido"); return false;
  }
  if(!fields.password.match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
    alert("Contraseña inválida");return false;
  }
  if(fields.password !== fields.repassword){
    alert("La confirmación de la contraseña no coincide con la contraseña"); return false;
  }
  return true;
}

window.addEventListener("load",()=>{
  mySplide = new Splide( '.splide' );
  mySplide.mount();

  document.querySelector(".backdrop").addEventListener("click",()=>toggleMenuResponsive(false))
  resizeHandler();
})
window.addEventListener("resize", resizeHandler);

function toggleMenuResponsive(ste){
  document.querySelector(".switch").querySelector("input").checked = ste;
  toggleMenu();
}
function toggleMenuResponsive_Closed(){
  toggleMenuResponsive(true)
}



const header = document.querySelector(".header");
const stickyOffset = header.offsetTop;

window.addEventListener("scroll", function() {
  const scrollPosition = window.pageYOffset;
 
  if (scrollPosition > stickyOffset) {
    header.classList.add("header_sticky");
    header.classList.add("block_box-shadow");
  } else {
    header.classList.remove("header_sticky");
    header.classList.remove("block_box-shadow");
  }
});


const content = document.querySelector('.accordion__item-content');
const accordion_items = document.querySelectorAll(".accordion__item-title");
accordion_items.forEach(a=>{
  a.addEventListener("click",(e)=>{
    
    e.target.parentNode.classList.toggle('accordion__item_displayed');
    const height = content.firstElementChild.scrollHeight;
    let maxHeight = e.target.nextElementSibling.style.maxHeight
    
    if(maxHeight === "0px" || !maxHeight){
      e.target.firstElementChild.firstElementChild.classList.remove("fa-rotate-90")
      e.target.firstElementChild.firstElementChild.classList.add("fa-rotate-270")
      e.target.nextElementSibling.style.maxHeight = height+'px';

    }else{
      console.log("close");
      e.target.firstElementChild.firstElementChild.classList.remove("fa-rotate-270")
      e.target.firstElementChild.firstElementChild.classList.add("fa-rotate-90")
      e.target.nextElementSibling.style.maxHeight = '0px';
    }

  })
})



const button = document.querySelector(".header__icon-bars"); 
const icon = button.firstElementChild;
const splideList = document.querySelector(".splide__list");
/*Execute this function for changes in repsponsive design*/
function resizeHandler(){
  let width = window.innerWidth;  
  if(width < 769 && !icon.classList.contains("fa-bars")){
    icon.classList.add("fa-bars");
    button.addEventListener("click",toggleMenuResponsive_Closed);
    splideList.querySelectorAll(".splide__slide").forEach(item=>{
      const slide = item.querySelector(".spacing__image:nth-child(2)")
      item.removeChild(slide);

      const li = document.createElement("li");
      li.classList.add("splide__slide");
      li.appendChild(slide);
      splideList.insertBefore(li,item.nextElementSibling);
    })
    mySplide.refresh();
    //console.log(document.querySelector(".splide__list"));

  }else if(width > 769 && icon.classList.contains("fa-bars")){
    icon.classList.remove("fa-bars");
    button.removeEventListener("click",toggleMenuResponsive_Closed);

    splideList.querySelectorAll(".splide__slide").forEach((item,i)=>{
      console.log(i);
      if(i%2!=0){
        const slide = item.firstElementChild;
        item.previousElementSibling.appendChild(slide);
        item.remove();
      }
    })
    //console.log(document.querySelector(".splide__list"));

    mySplide.refresh();
  }
}