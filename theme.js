var btn = document.getElementById("theme_button");
var link = document.getElementById("theme-link");

function ChangeTheme()
{
    if(link.getAttribute("href") == "stylelight.css")
    {
        link.setAttribute("href", "styledark.css");
    }
    else if(link.getAttribute("href") == "styledark.css")
    {    
        link.setAttribute("href", "stylelight.css");
    }
}

btn.addEventListener("click", function () { ChangeTheme(); });
