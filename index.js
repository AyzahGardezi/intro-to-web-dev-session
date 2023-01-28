const darkButton = document.getElementById("dark-mode-btn");
let isDark = false;

darkButton.addEventListener("click", ()=>{
    let elementsForDark = document.getElementsByClassName("dark-mode-element");

    for (let i = 0; i < elementsForDark.length; i++)
    {
        elementsForDark[i].classList.toggle("dark-mode");
    }
if(isDark===true)
{
    darkButton.innerHTML = "<iconify-icon icon=\"material-symbols:dark-mode\" width=\"40\"></iconify-icon>";
    isDark = false;
}
else
{
    darkButton.innerHTML = "<iconify-icon icon=\"material-symbols:light-mode\" style=\"color: white;\" width=\"40\"></iconify-icon>";
    isDark = true;
}


});

