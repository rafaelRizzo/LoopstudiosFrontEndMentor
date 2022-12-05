let hamburguer = document.querySelector(".menuMobile")
let nav = document.querySelector("#sobre #navMobile")
let navLinks = document.querySelectorAll("#sobre #navMobile ul li a")
let menuMobileLines = document.querySelectorAll(".menuMobile .line")
let menuMobileClose = document.querySelector(".close")


hamburguer.addEventListener("click", () => {
    nav.style.display = "flex";
    navLinks.forEach((e) => {
        e.style.display = "flex";
    })
    nav.style.height = "100%"

    menuMobileLines.forEach((e) => {
        e.style.display = "none"
    })

    menuMobileClose.style.display = "flex"
})

menuMobileClose.addEventListener("click", () => {
    
    nav.style.height = "0%"
    setTimeout(() => {
        menuMobileClose.style.display = "none"
        nav.style.display = "none";
        navLinks.forEach((e) => {
            e.style.display = "none";
        })

        menuMobileLines.forEach((e) => {
            e.style.display = "flex"
        })
    }, 100)
})

if (window.innerWidth <= 780) {
    navLinks.forEach((e) => {
        e.addEventListener("click", () => {
            menuMobileClose.click()
        })
    })

}

