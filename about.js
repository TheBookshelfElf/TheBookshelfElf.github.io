const htu = document.querySelector(".h_t_u");

htu.addEventListener("submit", goToHowToUse)


function goToHowToUse(e)
{   
    e.preventDefault();
    console.log("reached");
    window.location='how_to_use.html';
}