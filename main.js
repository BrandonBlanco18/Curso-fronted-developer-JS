const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuCarritoI = document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const MenuHambur = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu)
MenuHambur.addEventListener('click', toggleMobileMenu)
menuCarritoI.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    const  isAsideClosed = shoppingCartContainer .classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer .classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');

}
function toggleMobileMenu() {
    const  isAsideClosed = shoppingCartContainer .classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside () { 
    const  isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isdesktopMenuClosed = desktopMenu.classList.contains("inactive");
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    

    if (!isMobileMenuClosed) {
            mobileMenu.classList.add('inactive');
        }else if(!isdesktopMenuClosed) {
            desktopMenu.classList.add('inactive');
        }else if(!isProductDetailClosed) {
            productDetailContainer.classList.add('inactive');
        }

        
    shoppingCartContainer.classList.toggle('inactive')

}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive')
    
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}


const productList = [];
productList.push({
    name: 'Bike',
    price:120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Pantalla',
    price:1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Phone',
    price:500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

function renderPoducts (arr) {
  for (product of arr) {
    const productCard = document.createElement ('div');
    productCard.classList.add('product-card');

    //product = {name, price, image} -> producct.image
    const productImg = document.createElement ('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement ('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);



}  
}

renderPoducts(productList);