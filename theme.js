var btn = document.getElementById("theme_button");
var link = document.getElementById("theme-link");

function ChangeTheme()
{
    var currTheme = link.getAttribute("href");

    if(currTheme == "stylelight.css")
    {
        link.setAttribute("href", "styledark.css");
    }
    else if(currTheme == "styledark.css")
    {    
        link.setAttribute("href", "stylelight.css");
    }
}

btn.addEventListener("click", function () { ChangeTheme(); });
