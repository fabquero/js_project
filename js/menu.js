document.addEventListener('DOMContentLoaded',principaleMenu);

function principaleMenu(){
    document.querySelector(".btnM").addEventListener("click", fermerOuvrirMenu);

    function fermerOuvrirMenu(){
        
             
            liensMenu = document.querySelectorAll(".elemtMenu");
        
        for(i = 0; i < liensMenu.length; i++){
            liensMenu.item(i).classList.toggle("lienMenuCache");
        }
        document.querySelector(".menu").classList.toggle("menuCache");
        document.querySelector(".btnM").classList.toggle("btnTourner");
    }

}