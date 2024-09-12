let theme = 1
if (window.matchMedia("(prefers-color-scheme: dark)").matches)
  theme = 0

switch (localStorage.getItem("theme")) {
  case "dark":
    theme = 0
    break
  case "light":
    theme = 1
    break
}

const themes = ["dark", "light"]

function setTheme() {
  document.body.setAttribute("data-theme", themes[+theme])
}

const button = document.createElement("button")
function toggle() {
  button.innerHTML = ["dark", "light"][+theme]
  theme = !theme
  localStorage.setItem("theme", themes[+theme])
  setTheme()
}
button.onclick = toggle
button.innerHTML = themes[+!theme]
button.id = "theme-toggle"

document.body.appendChild(button)
setTheme()
