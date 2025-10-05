function opentab(evt, newssection){
    var i, sidearticles, tabbutton;
    sidearticles = document.getElementsByClassName("sidearticle")
    for (i=0; i < sidearticles.length; i++){
        sidearticles[i].computedStyleMap.display="none";
    }
    tabbutton = document.getElementsByClassName("tabbutton");
    for (i=0; i < tabbutton.length; i++){
        tabbutton[i].className = tabbutton[i].className.replace(" active","");
    }
    document.getElementById(newssection).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultTab").click(); 