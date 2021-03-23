document.addEventListener('DOMContentLoaded', principale);

function principale() {
    console.log("Execution de la fonction principale");
    setInterval(slideShow, 2000);

    function slideShow() {
        console.log("Execution de la fonction slideShow");
        let cercles = document.querySelectorAll(".cercle")
        let slide = document.getElementById("content");
        for(i = 0; i<cercles.length; i++){

            if(cercles[i].classList.contains("icon-dot-circled")){

                cercles[i].classList.remove("icon-dot-circled");
                cercles[i].classList.add("icon-circle-empty");

                if(i < (cercles.length - 1)){ /*Index < a la longueur max*/
                    cercles[i+1].classList.remove("icon-circle-empty");
                    cercles[i+1].classList.add("icon-dot-circled");
                    slide.style.left = -70*(i+1)+"vw"; /*On commence index à 0, mais il faut commencer */
                    slide.style.opacity = 0.2;
                    animOpacite();
                    break;
                }else{
                    cercles[0].classList.remove("icon-circle-empty");
                    cercles[0].classList.add("icon-dot-circled");
                    slide.style.left= 0+"vw";
                    slide.style.opacity = 0.2;
                    animOpacite();
                }
            }
        }
    }


    function animOpacite() {/*Adoucit l'arrivée de l'image dans le slide show*/

        let styleImg = document.querySelector("#content").style;
        opaciteImg = styleImg.opacity = parseFloat(styleImg.opacity) + 0.1;

        if (opaciteImg < 1) {
            setTimeout(animOpacite, 40); /*Fonction récursive tant que l'image n'est pas complétement visible*/
        }

    }
}/*Fin de la function principal*/

