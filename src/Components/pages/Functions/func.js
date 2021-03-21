//Functions for adding classes to navRightbar
export const sectionHome = ()=> {
    const home = document.querySelector("#nav-home");
    const about = document.querySelector(".nav-about");
    const product = document.querySelector(".nav-product");
    const contact = document.querySelector(".nav-contact");
    const register = document.querySelector(".nav-register");
    home && home.classList.add("active");
    about && about.classList.remove("active");
    product && product.classList.remove("active");
    contact && contact.classList.remove("active");
    register && register.classList.remove("active");

}

export const sectionAbout = ()=> {
    const home = document.querySelector("#nav-home");
    const about = document.querySelector(".nav-about");
    const product = document.querySelector(".nav-product");
    const contact = document.querySelector(".nav-contact");
    const register = document.querySelector(".nav-register");
    home && home.classList.remove("active");
    about && about.classList.add("active");
    product && product.classList.remove("active");
    contact && contact.classList.remove("active");
    register && register.classList.remove("active");
}

export const sectionRegister = ()=> {
    const home = document.querySelector("#nav-home");
    const about = document.querySelector(".nav-about");
    const product = document.querySelector(".nav-product");
    const contact = document.querySelector(".nav-contact");
    const register = document.querySelector(".nav-register");
    home && home.classList.remove("active");
    about && about.classList.remove("active");
    register && register.classList.add("active");
    product && product.classList.remove("active");
    contact && contact.classList.remove("active");
}

export const sectionContact = ()=> {
    const home = document.querySelector("#nav-home");
    const about = document.querySelector(".nav-about");
    const product = document.querySelector(".nav-product");
    const contact = document.querySelector(".nav-contact");
    const register = document.querySelector(".nav-register");
    home && home.classList.remove("active");
    about && about.classList.remove("active");
    register && register.classList.add("active");
    product && product.classList.remove("active");
    contact && contact.classList.add("active");
}

export const sectionProduct = ()=> {
    const home = document.querySelector("#nav-home");
    const about = document.querySelector(".nav-about");
    const product = document.querySelector(".nav-product");
    const contact = document.querySelector(".nav-contact");
    const register = document.querySelector(".nav-register");
    home && home.classList.remove("active");
    about && about.classList.remove("active");
    register && register.classList.remove("active");
    product && product.classList.add("active");
    contact && contact.classList.remove("active");
}
