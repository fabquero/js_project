document.addEventListener("DOMContentLoaded", principale);

function principale(){
    document.getElementById("petiteImg").addEventListener("click", agrandir);
    document.querySelector(".retour").addEventListener("click",agrandir);
    function agrandir(){
        document.querySelector(".cacher").classList.toggle("agrandie");
        document.querySelector(".retour").classList.toggle("cacherBtn");
    }

  
}