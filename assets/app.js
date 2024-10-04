// select element 
const $ = document
const toggleBtn = $.querySelector('#toggle-btn')
const menuItems = $.querySelectorAll('.menu a')
const click_sound = $.querySelectorAll('#click-sound')[0]
const hover_sound = $.querySelectorAll('#hover-sound')[0]
const close_sound = $.querySelectorAll('#close-sound')[0]
let isMenuActive = false
//define event for toggleBtn
toggleBtn.addEventListener('click', () => {
    if (!isMenuActive) {
        toggleBtn.classList.add('active')
        menuItems[0].style.transform = "translate(-6px,94px)"
        menuItems[1].style.transform = "translate(82px,49px)"
        menuItems[2].style.transform = "translate(-6px,-94px)"
        menuItems[3].style.transform = "translate(82px,-36px)"
        menuItems.forEach(items => items.addEventListener('mouseenter', () => {
            hover_sound.currentTime = 0
            hover_sound.play()
        }))
        click_sound.currentTime = 0
        click_sound.play()
        isMenuActive = true
    } else {
        toggleBtn.classList.remove('active')
        menuItems.forEach(items => items.style.transform = "translate(0,0)")
        close_sound.currentTime = 0
        close_sound.play()
        isMenuActive = false
    }
})