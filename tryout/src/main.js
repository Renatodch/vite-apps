import './sass/styles.scss'
//import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.css';

document.querySelector('.btn-main')?.addEventListener('click',()=>{
  const menu = document.querySelector('.sidebar-menu');
  if(menu){
    menu.style.left='0%';
  }
});


