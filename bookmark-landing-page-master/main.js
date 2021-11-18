document.addEventListener("click", e =>{
    if(e.target.matches(".fa-chevron-down")){
        e.target.classList.toggle("rotar");
        e.target.parentNode.parentNode.classList.toggle("auto");
    }
});

