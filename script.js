
document.addEventListener("DOMContentLoaded", () => {
    
    
    const menuIcon = document.getElementById("menu-icon");
    const navigasyonMenusu = document.querySelector("header nav");

   
    menuIcon.addEventListener("click", () => {
        
       
        navigasyonMenusu.classList.toggle("active");
        
        
        if (navigasyonMenusu.classList.contains("active")) {
            menuIcon.innerHTML = "&#10006;";
        } else {
            menuIcon.innerHTML = "&#9776;"; 
        }
    });

    
    const menüLinkleri = document.querySelectorAll("header nav ul li a");
    menüLinkleri.forEach(link => {
        link.addEventListener("click", () => {
            navigasyonMenusu.classList.remove("active");
            menuIcon.innerHTML = "&#9776;";
        });
    });

});