const products = [
    { id: 1, title: 'توپ آموزشی فوتبال مینی لیزری DST', category: 'توپ ها', color: 'فسفری', picture: 'pic/products/ball1.webp', price: 300000, isDiscount: true, discount: 25, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 2, title: 'توپ بسکتبال طرح ملتن GL7X DST', category: 'توپ ها', color: 'نارنجی', picture: 'pic/products/ball2.webp', price: 1500000, isDiscount: true, discount: 25, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 3, title: 'توپ فوتسال مولتن Vantaggio 3200 CPT', category: 'توپ ها', color: 'زرد', picture: 'pic/products/ball3.webp', price: 2000000, isDiscount: false, isMain: true, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 4, title: 'توپ بسکتبال dunrun شیکاگو بولز DZH', category: 'توپ ها', color: 'مشکی/طوسی', picture: 'pic/products/ball4.webp', price: 1200000, isDiscount: false, dateModified: new Date(2024, 7, 5) },
    // ------------Pants--------------
    { id: 5, title: 'شلوار ورزشی زنانه طرح نایک هیرو PGH', gender: false, category: 'شلوار ها', color: 'ابی', picture: 'pic/products/pants1.webp', price: 300000, isDiscount: true, discount: 15, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 6, title: 'شلوار ورزشی مردانه دی مارک اسلش مچ دار DMK ', gender: true, category: 'شلوار ها', color: 'سرمه ای', picture: 'pic/products/pants2.webp', price: 350000, isDiscount: true, discount: 15, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 7, title: 'شلوار ورزشی مردانه طرح ریبوک اسلش CHG', gender: true, category: 'شلوار ها', color: 'سرمه ای/سفید', picture: 'pic/products/pants3.webp', price: 400000, isDiscount: false, isMain: true, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 8, title: 'شلوار ورزشی مردانه طرح ایرجردن اسلش شلوارک شو CHG', gender: true, category: 'شلوار ها', color: 'طوسی', picture: 'pic/products/pants4.webp', price: 280000, isDiscount: false, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 9, title: 'شلوار ورزشی زنانه طرح نایک برمودا کوتاه NZD', gender: false, category: 'شلوار ها', color: 'خاکستری', picture: 'pic/products/pants5.webp', price: 510000, isDiscount: false, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 10, title: 'شلوارک ورزشی زنانه بدنسازی طرح نایک Just Do it 1241', gender: false, category: 'شلوار ها', color: 'زرد', picture: 'pic/products/pants6.webp', price: 435000, isDiscount: false, dateModified: new Date(2024, 7, 5) },
    // ------------shoes--------------
    { id: 11, title: 'کفش ورزشی مردانه I-RUNNER ترکینگ ضدآب آی رانر S2115', gender: true, category: 'کفش ها', color: 'طوسی/سرمه ای', picture: 'pic/products/shoe1.webp', price: 3850000, isDiscount: true, discount: 30, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 12, title: 'کفش ورزشی زنانه آدیداس MTH A125 - 1313', gender: false, category: 'کفش ها', color: 'مشکی/بنفش', picture: 'pic/products/shoe6.webp', price: 2500000, isDiscount: true, discount: 30, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 13, title: 'کفش ورزشی مردانه I-RUNNER ترکینگ ضدآب آی رانر S2099', gender: true, category: 'کفش ها', color: 'کرم', picture: 'pic/products/shoe2.webp', price: 3900000, isDiscount: false, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 14, title: 'کفش بسکتبال مردانه طرح نایک ایرجردن MZZ', gender: true, category: 'کفش ها', color: 'ابی/سرمه ای', picture: 'pic/products/shoe3.webp', price: 1500000, isDiscount: false, isMain: true, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 15, title: 'کفش اسپرت زنانه نایک Blazer Mid ’77 Vintag MSR', gender: false, category: 'کفش ها', color: 'طوسی', picture: 'pic/products/shoe4.webp', price: 1800000, isDiscount: false, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 16, title: 'کفش ورزشی زنانه I-RUNNER ترکینگ ضدآب آی رانینگ MTH S2093', gender: false, category: 'کفش ها', color: 'طوسی/سفید', picture: 'pic/products/shoe5.webp', price: 2200000, isDiscount: false, dateModified: new Date(2024, 7, 5) },
    // ------------clothes--------------
    { id: 17, title: 'تیشرت ورزشی مردانه والیبال فشن لاین VLYBL 25', gender: true, category: 'لباس ورزشی', color: 'مشکی/سفید', picture: 'pic/products/t-shirt1.webp', price: 500000, isDiscount: true, discount: 10, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 18, title: 'نیم تنه ورزشی زنانه کاپ دار Ladie`s Professional - 8326 ', gender: false, category: 'لباس ورزشی', color: 'ابی', picture: 'pic/products/crap-women1.webp', price: 275000, isDiscount: true, discount: 10, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 19, title: 'تیشرت ورزشی پینگ پنگ مردانه فشن لاین PngPng 46', gender: true, category: 'لباس ورزشی', color: 'مشکی/سفید', picture: 'pic/products/t-shirt2.webp', price: 300000, isDiscount: false, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 20, title: 'تیشرت ورزشی بسکتبال مردانه فشن لاین BASKTBL 103', gender: true, category: 'لباس ورزشی', color: 'مشکی/سفید', picture: 'pic/products/t-shirt3.webp', price: 580000, isDiscount: false, isMain: true, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 21, title: 'اورال ورزشی زنانه بدنسازی استرچ طرح نایک Just Do it 1086', gender: false, category: 'لباس ورزشی', color: 'مشکی', picture: 'pic/products/oral-women1.webp', price: 580000, isDiscount: false, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 22, title: 'کاور ورزشی زنانه طرح نایک یونیک اسپرت NZD', gender: false, category: 'لباس ورزشی', color: 'صورتی', picture: 'pic/products/cover-women1.webp', price: 405000, isDiscount: false, dateModified: new Date(2024, 7, 5) },
    // ------------bags--------------
    { id: 23, title: 'کیف کمری اسنوهاوک دوشی شو مدل 6075 ABS', category: 'کیف ها', color: 'سبز', picture: 'pic/products/bag1.webp', price: 1200000, isDiscount: true, discount: 50, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 24, title: 'کیف کمری کوهنوردی اسنوهاک B-6110', category: 'کیف ها', color: 'زرشکی', picture: 'pic/products/bag2.webp', price: 900000, isDiscount: true, discount: 50, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 25, title: 'کیف کفش کوهنوردی موتال مدل VARNA MTL', category: 'کیف ها', color: 'طلایی', picture: 'pic/products/bag3.webp', price: 800000, isMain: true, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 26, title: 'کیف لوازم یوگا TFR', category: 'کیف ها', color: 'زرد', picture: 'pic/products/bag4.webp', price: 200000, dateModified: new Date(2024, 7, 5) },
    // ------------sucks--------------
    { id: 27, title: 'جوراب وزشی مچی طرح آدیداس 636479 ', category: 'جوراب ها', color: 'طوسی روشن', picture: 'pic/products/suck1.webp', price: 60000, isDiscount: true, discount: 35, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 28, title: 'جوراب ورزشی مچی طرح نایک SX4580-02', category: 'جوراب ها', color: 'طوسی', picture: 'pic/products/suck2.webp', price: 70000, isDiscount: true, discount: 35, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 29, title: 'جوراب ورزشی آدیداس H.P ATH', category: 'جوراب ها', color: 'فسفری', picture: 'pic/products/suck3.webp', price: 28000, isMain: true, dateModified: new Date(2023, 8, 23).toLocaleDateString('fa-IR') },
    { id: 30, title: 'جوراب ورزشی نیم ساق طرح نایک SX4580-02', category: 'جوراب ها', color: 'طوسی روشن', picture: 'pic/products/suck4.webp', price: 29000, dateModified: new Date(2024, 7, 5) }
];


const offerProductsDiv = document.querySelector('#offer-products');
const popularProductsDiv = document.querySelector('#popular-products');
const newProductsDiv = document.querySelector('#new-products');
const menProductsDiv = document.querySelector('#men-products');
const womenProductsDiv = document.querySelector('#women-products');
const brandsDiv = document.querySelector('.brands');
const vlogDiv = $.querySelector('.vlogs');
const cartOffcanvas = $.querySelector('.cart-offcanvas');
const cartOffcanvasBody = $.querySelector('.cart-offcanvas-body');
// ------
let cartItems = [];
// ------

let isPressed = false;
let startX = 0;

// -----------functions-------------

// -------cart functions--------

if (window.localStorage.getItem('cartProducts')) {
    cartItems = JSON.parse(window.localStorage.getItem('cartProducts', JSON.stringify(cartItems)));
}

const offUnder3 = $.querySelector('.off-under3');
const basketBtn = $.querySelector('.basket');
const offClose2 = $.querySelector('#off-close2');

const cartItemsFunc = () => {
    cartOffcanvasBody.innerHTML = '';
    cartItems.forEach((product, index) => {
        let price = product.price;
        if (product.isDiscount == true) {
            price = price - (price * product.discount);
        }

        cartOffcanvasBody.innerHTML +=
            `

        <div class="cart-product">
            <div class="img-div"><img src="${product.picture}" alt="cart-pic${index + 1}"></div>
            <div class="title-div">${product.title}</div>
            <div class="btn-div">
                <div class="count-div">
                    <button class="decreament-btn" onclick="decreamentFunc(${product.id})">-</button>
                    <span class="count-span">${product.count}</span>
                    <button class="increament-btn" onclick="increamentFunc(${product.id})">+</button>
                </div>
                <div class="price-div">تومان<span class="price-number">&nbsp;${convertor(price)}</span></div>
            </div>
        </div>

 `;

    });
}

function addToCart(newId) {
    const newItem = products.find(product => product.id == newId);
    if (cartItems.length > 0) {
        const findItem = cartItems.find(product => product.id == newItem.id)
        if (findItem) {
            findItem.count += 1;
        } else {
            cartItems.push({ ...newItem, count: 1 })
        }
    } else {
        cartItems.push({ ...newItem, count: 1 })
    }

    window.localStorage.setItem('cartProducts', JSON.stringify(cartItems))
}

const increamentFunc = (incId) => {
    const findItem = cartItems.find(product => product.id == incId);

    findItem.count += 1;
    cartItemsFunc()
    window.localStorage.setItem('cartProducts', JSON.stringify(cartItems))
}

const decreamentFunc = (decId) => {
    const findItem = cartItems.find(product => product.id == decId);

    if (findItem.count == 1) {
        delItem(decId);
    } else {
        findItem.count -= 1;
    }
    cartItemsFunc()
    window.localStorage.setItem('cartProducts', JSON.stringify(cartItems))
}

const delItem = (delId) => {
    const deleteItem = cartItems.filter(product => product.id != delId);

    cartItems = deleteItem;
    cartItemsFunc()
    window.localStorage.setItem('cartProducts', JSON.stringify(cartItems))
}

basketBtn.addEventListener('click', () => {
    cartOffcanvas.style.transform = 'translateX(+100%)';
    offUnder3.style.display = 'block';
    cartItemsFunc()
})

offUnder3.addEventListener('click', () => {
    cartOffcanvas.style.transform = 'translateX(-100%)';
    offUnder3.style.display = 'none';
    console.log('sss');
})

offClose2.addEventListener('click', () => {
    cartOffcanvas.style.transform = 'translateX(-100%)';
    offUnder3.style.display = 'none';
})

// ---------------

// -----priceF-------

function lowestP(p) {
    let cats = products.filter((product) => {
        return p.category == product.category
    })

    let prices = [];
    cats.forEach(cat => {
        prices.push(cat.price)
    });

    return Math.min(...prices)
}

function highestP(p) {
    let cats = products.filter((product) => {
        return p.category == product.category
    })

    let prices = [];
    cats.forEach(cat => {
        prices.push(cat.price)
    });

    return Math.max(...prices)
}

// -------------------

function convertor(number) {
    if (!number) {
        return 'قیمت ندارد'
    }

    let returnModel = ''

    const objectNum = {
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹',
        '0': '۰'
    };

    number = number.toString();

    for (var i = 0; i < number.length; i++) {
        if (objectNum[number[i]]) {
            returnModel += objectNum[number[i]];
        }
    }
    return returnModel;
}

// ------function1--------

function onMouseDown1(e) {
    isPressed = true;
    startX = e.clientX;
    offerProductsDiv.style.cursor = 'grabbing'
    offerProductsDiv.addEventListener('mousemove', onMouseMove1)
    console.log(e.target);
}

function onMouseUp1(e) {
    isPressed = false;
    offerProductsDiv.style.cursor = 'grab'
}

function onMouseEnter1(e) {
    offerProductsDiv.style.cursor = 'grab'
}

function onMouseLeave1(e) {
    isPressed = false;
    offerProductsDiv.style.cursor = 'none'
}

function onMouseMove1(e) {
    if (isPressed) {
        offerProductsDiv.scrollLeft += startX - e.clientX;
    }
}

// ------functions2----

function onMouseDown2(e) {
    isPressed = true;
    startX = e.clientX;
    popularProductsDiv.style.cursor = 'grabbing'
    popularProductsDiv.addEventListener('mousemove', onMouseMove2)
}

function onMouseUp2(e) {
    isPressed = false;
    popularProductsDiv.style.cursor = 'grab'
}

function onMouseEnter2(e) {
    popularProductsDiv.style.cursor = 'grab'
}

function onMouseLeave2(e) {
    isPressed = false;
    popularProductsDiv.style.cursor = 'none'
}

function onMouseMove2(e) {
    if (isPressed) {
        popularProductsDiv.scrollLeft += startX - e.clientX;
    }
}

// ------functions3----

function onMouseDown3(e) {
    isPressed = true;
    startX = e.clientX;
    newProductsDiv.style.cursor = 'grabbing'
    newProductsDiv.addEventListener('mousemove', onMouseMove3)
}

function onMouseUp3(e) {
    isPressed = false;
    newProductsDiv.style.cursor = 'grab'
}

function onMouseEnter3(e) {
    newProductsDiv.style.cursor = 'grab'
}
function onMouseLeave3(e) {
    isPressed = false;
    newProductsDiv.style.cursor = 'none'
}

function onMouseMove3(e) {
    if (isPressed) {
        newProductsDiv.scrollLeft += startX - e.clientX;
    }
}

// ------functions4----

function onMouseDown4(e) {
    isPressed = true;
    startX = e.clientX;
    menProductsDiv.style.cursor = 'grabbing'
    menProductsDiv.addEventListener('mousemove', onMouseMove4)
}

function onMouseUp4(e) {
    isPressed = false;
    menProductsDiv.style.cursor = 'grab'
}

function onMouseEnter4(e) {
    menProductsDiv.style.cursor = 'grab'
}

function onMouseLeave4(e) {
    isPressed = false;
    menProductsDiv.style.cursor = 'none'
}

function onMouseMove4(e) {
    if (isPressed) {
        menProductsDiv.scrollLeft += startX - e.clientX;
    }
}

// ------functions5----

function onMouseDown5(e) {
    isPressed = true;
    startX = e.clientX;
    womenProductsDiv.style.cursor = 'grabbing'
    womenProductsDiv.addEventListener('mousemove', onMouseMove5)
}

function onMouseUp5(e) {
    isPressed = false;
    womenProductsDiv.style.cursor = 'grab'
}

function onMouseEnter5(e) {
    womenProductsDiv.style.cursor = 'grab'
}

function onMouseLeave5(e) {
    isPressed = false;
    womenProductsDiv.style.cursor = 'none'
}

function onMouseMove5(e) {
    if (isPressed) {
        womenProductsDiv.scrollLeft += startX - e.clientX;
    }
}

// -------brand functions-------

function onMouseDown6B(e) {
    isPressed = true;
    startX = e.clientX;
    brandsDiv.style.cursor = 'grabbing'
    brandsDiv.addEventListener('mousemove', onMouseMove6B)
}

function onMouseUp6B(e) {
    isPressed = false;
    brandsDiv.style.cursor = 'grab'
}

function onMouseEnter6B(e) {
    brandsDiv.style.cursor = 'grab'
}

function onMouseLeave6B(e) {
    isPressed = false;
    brandsDiv.style.cursor = 'none'
}

function onMouseMove6B(e) {
    if (isPressed) {
        brandsDiv.scrollLeft += startX - e.clientX;
    }
}
// ------functions7----

function onMouseDown7E(e) {
    isPressed = true;
    startX = e.clientX;
    vlogDiv.style.cursor = 'grabbing'
    vlogDiv.addEventListener('mousemove', onMouseMove7E)
}

function onMouseUp7E(e) {
    isPressed = false;
    vlogDiv.style.cursor = 'grab'
}

function onMouseEnter7E(e) {
    vlogDiv.style.cursor = 'grab'
}

function onMouseLeave7E(e) {
    isPressed = false;
    vlogDiv.style.cursor = 'none'
}

function onMouseMove7E(e) {
    if (isPressed) {
        vlogDiv.scrollLeft += startX - e.clientX;
    }
}


// --------------

let offerProducts = products.filter((product) => {
    return product.isDiscount == true;
})

offerProducts.forEach((product) => {
    let withDis = product.price;
    let withoutDis = product.price - (product.price * product.discount / 100);

    offerProductsDiv.innerHTML +=
        `
    <div class="product" id="product">
        <img src="${product.picture}" alt="" class ="product-img dragPic">
        <p class="card-title">${product.title}</p>
        <div class="card-info">
            <div class="spans">
                <span class="old-price">${convertor(withDis)} تومان</span>
                <br>
                <span class="new-price">${convertor(withoutDis)} تومان</span>
            </div>
            <div class="btn-pack">
                <button class="basket-btn" id="basket-btn" onclick="addToCart(${product.id})"><i class="bi bi-cart"></i></button>
                <button class="visit-btn" id="visit-btn">مشاهده</button>
            </div>
        </div>
    </div>
`
})

offerProductsDiv.addEventListener('mousedown', onMouseDown1)
offerProductsDiv.addEventListener('mouseup', onMouseUp1)
offerProductsDiv.addEventListener('mouseenter', onMouseEnter1)
offerProductsDiv.addEventListener('mouseleave', onMouseLeave1)

// ----------------

let mainProducts = products.filter((product) => product.isMain == true)

mainProducts.forEach((product, index) => {
    popularProductsDiv.innerHTML +=
        `
    <div class="product">
        <img src="${product.picture}" class="product-img dragPic" alt="pic-${index}">
        <a href="#" class="card-title">${product.category}</a>
        <div class="card-info">
            <div class="lowestToHighest"> از ${lowestP(product)} هزار تومان<br>تا ${highestP(product)} هزار تومان</div>
            <button class="visit-btn" id="visit-btn">مشاهده</button>
            </div>
    </div>
        `
})

popularProductsDiv.addEventListener('mousedown', onMouseDown2)
popularProductsDiv.addEventListener('touchstart', onMouseDown2)
popularProductsDiv.addEventListener('mouseup', onMouseUp2)
popularProductsDiv.addEventListener('touchend', onMouseUp2)
popularProductsDiv.addEventListener('mouseenter', onMouseEnter2)
popularProductsDiv.addEventListener('mouseleave', onMouseLeave2)

// ----------------

const newProducts = products.filter((product) => {
    return product.dateModified > new Date(2023, 8, 23);
})

newProducts.forEach(product => {
    let withDis = product.price;

    newProductsDiv.innerHTML +=
        `
    <div class="product" id="product">
        <img src="${product.picture}" alt="" class ="product-img dragPic">
        <p class="card-title">${product.title}</p>
        <div class="card-info">
            <span class="price">${convertor(withDis)} تومان</span>
            <div class="btn-pack">
                <button class="basket-btn" id="basket-btn" onclick="addToCart(${product.id})"><i class="bi bi-cart"></i></button>
                <button class="visit-btn" id="visit-btn">مشاهده</button>
            </div>
        </div>
    </div> 

    `
})

newProductsDiv.addEventListener('mousedown', onMouseDown3);
newProductsDiv.addEventListener('mouseup', onMouseUp3);
newProductsDiv.addEventListener('mouseenter', onMouseEnter3);
newProductsDiv.addEventListener('mouseleave', onMouseLeave3);


// ----------------

const menProducts = products.filter((product) => {
    return product.gender == true;
})

menProducts.forEach(product => {
    let withDis = product.price;

    menProductsDiv.innerHTML +=
        `
    <div class="product" id="product">
        <img src="${product.picture}" alt="" class ="product-img dragPic">
        <p class="card-title">${product.title}</p>
        <div class="card-info">
            <span class="price">${convertor(withDis)} تومان</span>
            <div class="btn-pack">
                <button class="basket-btn" id="basket-btn" onclick="addToCart(${product.id})"><i class="bi bi-cart"></i></button>
                <button class="visit-btn" id="visit-btn">مشاهده</button>
            </div>
        </div>
    </div> 

    `
})

menProductsDiv.addEventListener('mousedown', onMouseDown4);
menProductsDiv.addEventListener('mouseup', onMouseUp4);
menProductsDiv.addEventListener('mouseenter', onMouseEnter4);
menProductsDiv.addEventListener('mouseleave', onMouseLeave4);


// ----------------

const womenProducts = products.filter((product, index) => {
    return product.gender == false;
})

womenProducts.forEach(product => {
    let withDis = product.price;

    womenProductsDiv.innerHTML +=
        `
    <div class="product" id="product">
        <img src="${product.picture}" alt="" class ="product-img dragPic">
        <p class="card-title">${product.title}</p>
        <div class="card-info">
            <span class="price">${convertor(withDis)} تومان</span>
            <div class="btn-pack">
                <button class="basket-btn" id="basket-btn" onclick="addToCart(${product.id})"><i class="bi bi-cart"></i></button>
                <button class="visit-btn" id="visit-btn">مشاهده</button>
            </div>
        </div>
    </div> 

    `
})

womenProductsDiv.addEventListener('mousedown', onMouseDown5);
womenProductsDiv.addEventListener('mouseup', onMouseUp5);
womenProductsDiv.addEventListener('mouseenter', onMouseEnter5);
womenProductsDiv.addEventListener('mouseleave', onMouseLeave5);


// --------brnads--------

brandsDiv.addEventListener('mousedown', onMouseDown6B);
brandsDiv.addEventListener('mouseup', onMouseUp6B);
brandsDiv.addEventListener('mouseenter', onMouseEnter6B);
brandsDiv.addEventListener('mouseleave', onMouseLeave6B);

// --------esseys--------


vlogDiv.addEventListener('mousedown', onMouseDown7E);
vlogDiv.addEventListener('mouseup', onMouseUp7E);
vlogDiv.addEventListener('mouseenter', onMouseEnter7E);
vlogDiv.addEventListener('mouseleave', onMouseLeave7E);

// ------

const vlogs = $.querySelectorAll('.vlog');

if (window.innerWidth <= 768) {

    vlogs.forEach(vlog => {
        vlog.classList.add('resposive-vlog');
        vlog.classList.remove('vlog');
    });


} else if (window.innerWidth >= 768) {

    vlogs.forEach(vlog => {
        vlog.classList.remove('resposive-vlog');
        vlog.classList.add('vlog');
    });

}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {

        vlogs.forEach(vlog => {
            vlog.classList.add('resposive-vlog');
            vlog.classList.remove('vlog');
        });


    } else if (window.innerWidth >= 768) {

        vlogs.forEach(vlog => {
            vlog.classList.remove('resposive-vlog');
            vlog.classList.add('vlog');
        });


    }
})

// ----------------

const linkDrags = document.querySelectorAll('.link-drag');
const dragPics = document.querySelectorAll('.dragPic');

dragPics.forEach((dragPic) => {
    dragPic.addEventListener('dragstart', (e) => {
        e.preventDefault();
    })
})

linkDrags.forEach((linkDrag) => {
    linkDrag.addEventListener('dragstart', (e) => {
        e.preventDefault();
    })
})

// ----vlog Date function-----
const vlogDates = $.querySelectorAll('.vlog-date');

vlogDates.forEach(date => {

    let Date1 = new Date();
    let weekDay = new Date().getDay();
    let iranTime = Date1.toLocaleDateString('fa-IR');
    let splited = iranTime.split('/');

    const objectMonth = {
        '۰': 'فروردین',
        '۱': 'اردیبهشت',
        '۲': 'خرداد',
        '۳': 'تیر',
        '۴': 'مرداد',
        '۵': 'شهریور',
        '۶': 'مهر',
        '۷': 'ابان',
        '۸': 'اذر',
        '۹': 'دی',
        '۱۰': 'بهمن',
        '۱۱': 'اسفند'
    };

    const objectWeek = {
        '0': 'یکشنبه',
        '1': 'دوشنبه',
        '2': 'سه شنبه',
        '3': 'چهار شنبه',
        '4': 'پنجشنبه',
        '5': 'جمعه',
        '6': 'شنبه',
    };

    let fullDate = `${objectWeek[weekDay]} ${splited[2]} ${objectMonth[splited[1]]} ${splited[0]}`;

    date.innerHTML = fullDate;
});

