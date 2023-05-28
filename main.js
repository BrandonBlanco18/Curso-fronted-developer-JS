const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuCarritoI = document.querySelector('.navbar-shopping-cart')
const MenuHambur = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu)
MenuHambur.addEventListener('click', toggleMobileMenu)
menuCarritoI.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
    const  isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');

}
function toggleMobileMenu() {
    const  isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside () {
    const  isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isdesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
            mobileMenu.classList.add('inactive')
        }else if (!isdesktopMenuClosed) {
            desktopMenu.classList.add('inactive')
        }

    aside.classList.toggle('inactive')

}