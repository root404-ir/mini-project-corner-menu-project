// select element 
const $ = document
const toggleBtn = $.querySelector('#toggle-btn')
const menuItems = $.querySelectorAll('.menu a')
let isMenuActive = false
console.log(menuItems);
//define event for toggleBtn
toggleBtn.addEventListener('click', () => {
    if (!isMenuActive) {
        toggleBtn.classList.add('active')
        menuItems[0].style.transform = "translate(-6px,94px)"
        menuItems[1].style.transform = "translate(82px,49px)"
        menuItems[2].style.transform = "translate(-6px,-94px)"
        menuItems[3].style.transform = "translate(82px,-36px)"
        isMenuActive = true
    } else {
        toggleBtn.classList.remove('active')
        menuItems.forEach(items => items.style.transform = "translate(0,0)")
        isMenuActive = false
    }
})