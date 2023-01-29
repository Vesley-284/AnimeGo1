function readMore(){
    let dots= document.getElementById("dots");
    let more = document.getElementById("more");
    let btn = document.getElementById("more-contents");
    let arrow = document.getElementById("arrow-down");

    
if(dots.style.display === "none"){
    dots.style.display = "inline";
    btn.innerHTML = "Читати далі";
    more.style.display ="none";
    arrow.style.display="inline";
    }
    else{
        more.style.display="inline";
        btn.innerHTML="Згорнути";
        dots.style.display="none";
        arrow.style.display="none";
    }
}


