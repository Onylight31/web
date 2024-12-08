var btn = document.getElementById("theme_button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "stylelight.css";
    let darkTheme = "styledark.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}
