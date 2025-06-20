// JS para funciones comunes o interacción

document.addEventListener("DOMContentLoaded", () => {
  // Por ejemplo, destacar el menú activo según la página
  const menuLinks = document.querySelectorAll("#menu a");
  const currentPath = window.location.pathname.split("/").pop();

  menuLinks.forEach(link => {
    if(link.getAttribute("href") === currentPath){
      link.style.backgroundColor = "#d6336c"; // Color resaltado
      link.style.color = "white";
    }
  });
});
