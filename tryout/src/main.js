import './sass/styles.scss'
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.css';

const menu = document.querySelector('.menu');
const menuNavTitle = document.querySelector('.menu__nav-title');
const items = document.querySelectorAll('.menu__nav-item');
const menuNavList = document.querySelector('.menu__nav-list');
const backdrop = document.querySelector('.backdrop');

function toggleMenu(){
  if(menu && menuNavTitle && menuNavList){    
    menuNavTitle.classList.toggle('menu__nav-title_toggle-on')
    menu.classList.toggle('menu_toggle-on')
    backdrop.classList.toggle("backdrop_triggered")
    menuNavTitle.innerHTML= menuNavTitle.classList.contains('menu__nav-title_toggle-on') ? "APPS & PAGES":"";

    items.forEach(e=>{
      e.classList.toggle('toggle-on')
    })

    menuNavList.classList.toggle('menu__nav-list_toggle-on')
  }
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


const button = document.querySelector(".header__icon-bars"); 
const icon = button.firstElementChild;
function resizeHandler(){
  let width = window.innerWidth;  
  if(width < 769 && !icon.classList.contains("fa-bars")){
    icon.classList.add("fa-bars");
    button.addEventListener("click",toggleMenuResponsive_Closed);
  }else if(width > 769 && icon.classList.contains("fa-bars")){
    icon.classList.remove("fa-bars");
    button.removeEventListener("click",toggleMenuResponsive_Closed);
  }
}



const header = document.querySelector(".header");
const stickyOffset = header.offsetTop;

window.addEventListener("scroll", function() {
  const scrollPosition = window.pageYOffset;
  console.log("scroll position:",scrollPosition);
  console.log("stickyOffset:",stickyOffset);
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
  //a.firstElementChild.firstElementChild.classList.remove("fa-rotate-90")
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
