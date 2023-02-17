import './sass/styles.scss'
import 'font-awesome/css/font-awesome.css'

document.getElementById('menu_button').addEventListener("click",toggleMenu);
document.getElementById('menu_close_button').addEventListener("click",toggleMenu);

function toggleMenu(){
  const menu = document.getElementById("menu_container");
  menu.classList.toggle("hidden")
}


document.getElementById('submit_button').addEventListener("click",function(e){
  e.preventDefault();
  let rubro = document.getElementById("rubro_input").value
  let nombre = document.getElementById("nombre_input").value
  let email = document.getElementById("email_input").value
  let descripcion = document.getElementById("descripcion_input").value
  let terms = document.getElementById("terms_input").checked

  if(rubro == "" || nombre == "" || email == "" || descripcion == ""){
    alert("Por favor llene todos los campos");return;
  }
  if(!terms){
    alert("Por favor acepte los términos y condiciones");return;
  }

  let data = `Enviando datos:
              rubro: ${rubro}
              nombre: ${nombre}
              email: ${email}
              descripcion: ${descripcion}
              `
  alert(data)
});


const navLinks = document.querySelectorAll('.nav_link');
navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function(event) {
    navLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    navLink.classList.add('active');
  });
});



