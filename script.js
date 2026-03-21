const sections = document.querySelectorAll("section")
const navItems = document.querySelectorAll(".nav-item")

window.onscroll = () => {
let current = ""

sections.forEach(section => {
const sectionTop = section.offsetTop
if(scrollY >= sectionTop - 200){
current = section.getAttribute("id")
}
})

navItems.forEach(a => {
a.classList.remove("active")
if(a.getAttribute("href") === "#" + current){
a.classList.add("active")
}
})
}
