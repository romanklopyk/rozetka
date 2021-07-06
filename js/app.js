$(document).on('click', '.header__search-form-but', function () {
    var x = $('.header__search-input input').val();
    alert(x);
});

$(document).on('click', '.header__menu-toggle', function () {
    $(this).toggleClass('opened');
    $('.slide-menu').toggleClass('opened');

});

$(document).ready(function () {
    var sliderOptions = {
        autoplay: true,
        prevArrow: '<div class="prev-button"><svg><use href="#chevron-right"></use></svg></div>',
        nextArrow: '<div class="next-button"><svg><use href="#chevron-right"></use></svg></div>'
    };
    $('.home__banner-slider').slick(sliderOptions)
});
/*-06.07.2021--------------------------------------------------------*/

var favProd = [];
if (window.localStorage.getItem('product')) {
    favProd = window.localStorage.getItem('product');
    console.log(favProd);
    favProd = favProd.split(',');
    console.log(favProd);

}

updateFavCo();

$('button.add-to-fav').each(function () {
    var pr_id = $(this).attr('data-id');
    if (favProd.includes(pr_id) == true) {
        $(this).addClass('in-fav');
    }
});


$(document).on('click', 'button.add-to-fav', function () {
    var pr_id = $(this).attr('data-id');
    console.log(favProd);
    if (favProd.includes(pr_id) == true) {
        var index = favProd.indexOf(pr_id);
        $(this).removeClass('in-fav');
        favProd.splice(index, 1);
    } else {
        favProd.push(pr_id);
        $(this).addClass('in-fav');
    }
    window.localStorage.setItem('product', favProd);

    updateFavCo();


});

function updateFavCo() {
    $('#love span').html(favProd.length);
    if (favProd.length == 0) {
        $('#love span').addClass('empty');
    } else {

        $('#love span').removeClass('empty');
    }
}
/*------------------------------------------*/
function createProductHtml(product) {
    var html = `<li class="product-card home__product-list-card">
                                <div class="thumb">
                                    <button data-id="${product.id}" class="add-to-fav">
                                    <svg>
                                        <use href="#love"> </use>
                                    </svg>
                                    <svg class="filled">
                                        <use href="#lovefilled"> </use>
                                    </svg>
                                    </button>
                                    <a href="#"> <img src="${product.image}"> </a> </div>
                                <a href="#" class="title">${product.title}</a>
                                <div class="old-price"> ${product.price * 1.2} ₴ </div>
                                <div class="price"> ${product.price} ₴ </div>
                                <div class="avial"> немає в наявності </div>
                            </li>`;
    return html;

}

function getProducts() {
    fetch('https://fakestoreapi.com/products')
        .then((response) => {
            return response.json();
        })
        .then((products) => {
            var allHtml = '';
            var count = 0;
            products.forEach((product) => {
                if (count < 4) {
                    var html = createProductHtml(product);
                    allHtml = allHtml + html;
                    $('.home__product-list ul').html(allHtml);
                    count = count + 1;
                }

            })
        })
        .catch((error) => {
            console.log(error);

        })

}
getProducts();


/*-----------------------------------------------*/
