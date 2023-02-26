import './sass/styles.scss'
//import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.css';

document.querySelector('.switch')?.addEventListener('input',(e)=>{
  const menu = document.querySelector('.menu');
  const menuNavTitle = document.querySelector('.menu__nav-title');
  const items = document.querySelectorAll('.menu__nav-item');
  const menuNavList = document.querySelector('.menu__nav-list');

  if(menu && menuNavTitle && menuNavList){    
    menu.classList.toggle('menu_toggle-on')
    menuNavTitle.classList.toggle('menu__nav-title_toggle-on')
    menuNavTitle.innerHTML= menuNavTitle.classList.contains('menu__nav-title_toggle-on')?"APPS & PAGES":""

    items.forEach(e=>{
      e.classList.toggle('toggle-on')
    })

    menuNavList.classList.toggle('menu__nav-list_toggle-on')

   /*  .menu__nav-item:nth-child(#{$key}) {
      .menu__nav-link:after{
          content: "#{$value}";
          font-weight: bold;
      }
      &._toggle-on {
          .menu__nav-link:after{
              content: "";
              font-weight: bold;
          }
      }
  } */

  }
});


