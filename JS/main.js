// Import necessary elements from selector.js and function.js
import { 
    hot_see_btn, feat_see_btn, hot_scroll, feat_scroll, hot_back_btn, hot_next_btn,
    feat_back_btn, feat_next_btn, search_tag, quantities,menu_btn,menu_bar,menu_con,
    h_love_btn, fav, item_num, check_form_container, hot_product, body,ads_img,ads_sm_img,
    circle_btn,dark_icon,dark_text
} from "./selector.js";

import {
    hot_show, feat_show, hot_see_show, feat_see_show, back_scroll,
    next_scroll, search_result_show, menu_show, pu_show,
} from "./function.js";

import { products } from "./products.js";

import { user_name,profile_img } from "./selector.js";

const user_img_Url = localStorage.getItem("user-img");
if(user_img_Url)
    {
        profile_img.forEach(e => e.src = user_img_Url)
    }

if(localStorage.getItem("circle") === "circle_move")
    {
        circle_btn.classList.add("circle_move");
        body.classList.add("dark_mode");
        dark_icon.classList.remove("fa-sun");
        dark_icon.classList.add("fa-moon");
        dark_text.innerHTML = "Dark";
    }





    


// Header event listeners
search_tag.addEventListener("keyup", () => search_result_show());

menu_btn.addEventListener("click", () => {
    menu_show();
});

const ads_show = () => {
    ads_sm_img[0].style.border = "3px solid #38B5FA";
    let i = 2;
    setInterval(() => {
        if(i<=5)
            {
                ads_sm_img[i-2].style.border = "none";
                ads_img.src = "/image/ads"+i+".jpg"
                ads_sm_img[i-1].style.border = "3px solid #38B5FA";
                i++;
            } else { 
                i=1;
                ads_sm_img[4].style.border = "none";
                ads_img.src = "/image/ads"+i+".jpg";
                ads_sm_img[0].style.border = "3px solid #38B5FA";
                i++; 
            }
    },2000)
}

if (body.classList.contains("ads"))
    {
        ads_show();
    }

// Home page specific functions

if (body.classList.contains("home")) {
    const user_info = JSON.parse(localStorage.getItem("user"));
    user_name.innerHTML = user_info.u_name;
    
    if(user_img_Url)
        {
            document.querySelector(".up_text").style.display = "none"
            // profile_img.forEach(e => e.src = user_img_Url)
        }

    hot_show();
    feat_show();
    hot_see_btn.addEventListener("click", hot_see_show);
    feat_see_btn.addEventListener("click", feat_see_show);

    hot_next_btn.addEventListener("click", () => {
        next_scroll(hot_scroll);
        hot_back_btn.classList.remove("dis_none");
        if (hot_scroll.scrollLeft > 1500) hot_next_btn.classList.add("dis_none");
    });

    hot_back_btn.addEventListener("click", () => {
        back_scroll(hot_scroll);
        hot_next_btn.classList.remove("dis_none");
        if (hot_scroll.scrollLeft < 1500) hot_back_btn.classList.add("dis_none");
    });

    feat_next_btn.addEventListener("click", () => {
        next_scroll(feat_scroll);
        feat_back_btn.classList.remove("dis_none");
        if (feat_scroll.scrollLeft > 1500) feat_next_btn.classList.add("dis_none");
    });

    feat_back_btn.addEventListener("click", () => {
        back_scroll(feat_scroll);
        feat_next_btn.classList.remove("dis_none");
        if (feat_scroll.scrollLeft < 1500) feat_back_btn.classList.add("dis_none");
    });
}


// Selectors for various elements
const product_box = document.querySelectorAll(".product_box");
const buy = document.querySelectorAll("#buy_now");
const cart_btn = document.querySelectorAll(".cart_btn");
const love_btn = document.querySelectorAll(".love_btn");
const cart_show_btn = document.querySelector(".cart_show_btn");
const cart_show_icon = document.querySelector(".cart_show_icon");
const cart_container = document.querySelector(".cart_container");
const cart_pro_con = document.querySelector(".cart_pro_con");
const total_price = document.querySelector(".total_price");
const cart_test = document.querySelector(".cart_test");
const fav_pro_con = document.querySelector(".fav_pro_con");
const fav_show_icon = document.querySelector(".fav_show_icon");
const fav_container = document.querySelector(".fav_container");
const fav_show_btn = document.querySelector(".fav_show_btn");

// localStorage.setItem("cart_product",JSON.stringify([]));


// State variables

let fav_products = [];
let sum_price = 0;
let total = 0;
let pro_info = [];


const cart_products_show = (cart_products) => {
    //let sum_price = 0;
    cart_pro_con.innerHTML = "";
    cart_products.forEach((e) => {
        sum_price += e.price * e.quantity;
        total_price.textContent = "$ " + parseInt(sum_price);
        cart_pro_con.innerHTML += `
        <div class="cart_pro">
            <div class="cart_img"><img src="${e.img}.png" alt=""></div>
            <div class="cart_info">
                <p class="cart_pro_info">${e.info}</p>
                <article>
                    <div class="pro_quantity bg_change">
                        <button class="q_pu">+</button>
                        <input class="bg_change q_value" value="${e.quantity}" type="text">
                        <button class="q_min">-</button>
                    </div>
                    <em>$ ${parseInt(e.price * e.quantity)}</em>
                </article> 
                <button class="remove_btn"><i class="fa-solid fa-xmark fa-fade remove"></i></button>              
            </div>
        </div>
        `;
    });

    quantities.style.display = cart_products.length > 0 ? "flex" : "none";
    quantities.textContent = cart_products.length;
    item_num[0].textContent = cart_products.length > 0 ? cart_products.length : "No";
    cart_test.style.display = cart_products.length > 0 ? "block" : "none";

    if (cart_products.length === 0) {
        cart_pro_con.innerHTML = `
            <h4>
                <i class="fa-solid fa-cart-arrow-down fa-bounce"></i>
            </h4>
        `;
    }

    if (cart_show_icon.classList.contains("fa-fade")) {
        quantities.style.display = "none";
    } else {
        quantities.style.display = "flex";
    }
}

let cart_products;
if(JSON.parse(localStorage.getItem("cart_product")))
    {   
        cart_products = JSON.parse(localStorage.getItem("cart_product"));  
        cart_products_show(cart_products);
        
        
    } else {
        cart_products = [];
    }
// Cart show/hide functionality
cart_show_btn.addEventListener("click", () => {

    if(menu_con.classList.contains("dis_bl"))
        {
            menu_con.classList.add("dis_none");
            menu_con.classList.remove("dis_block");
            menu_bar.classList.add("fa-bars");
            menu_bar.classList.remove("fa-xmark");
            menu_bar.classList.remove("fa-fade");
            menu_btn.style.background = "";
            menu_btn.style.color = "black";
        }

    if(fav_container.classList.contains("dis_bl"))
        {
            fav_container.classList.add("dis_none");
            fav_container.classList.remove("dis_bl");
            fav_show_icon.classList.add("fa-heart");
            fav_show_icon.classList.remove("fa-xmark", "fa-fade");
            fav_show_btn.style.background = "";
            fav_show_btn.style.color = "black";
            fav.style.display = fav_products.length === 0 ? "none" : "flex";
        }
    
    if (cart_container.classList.contains("dis_none")) {
        cart_container.classList.remove("dis_none");
        cart_container.classList.add("dis_bl");
        cart_show_icon.classList.remove("fa-cart-shopping");
        cart_show_icon.classList.add("fa-xmark", "fa-fade");
        cart_show_btn.style.background = "#ff4603";
        cart_show_btn.style.color = "white";
        quantities.style.display = "none";
    } else {
        cart_container.classList.add("dis_none");
        cart_container.classList.remove("dis_bl");
        cart_show_icon.classList.add("fa-cart-shopping");
        cart_show_icon.classList.remove("fa-xmark", "fa-fade");
        cart_show_btn.style.background = "";
        cart_show_btn.style.color = "black";
        quantities.style.display = cart_products.length === 0 ? "none" : "flex";
    }
});

// Favorite show/hide functionality
fav_show_btn.addEventListener("click", () => {

    if(menu_con.classList.contains("dis_bl"))
        {
            menu_con.classList.add("dis_none");
            menu_con.classList.remove("dis_block");
            menu_bar.classList.add("fa-bars");
            menu_bar.classList.remove("fa-xmark");
            menu_bar.classList.remove("fa-fade");
            menu_btn.style.background = "";
            menu_btn.style.color = "black";
        }

    if(cart_container.classList.contains("dis_bl"))
        {
            cart_container.classList.add("dis_none");
            cart_container.classList.remove("dis_bl");
            cart_show_icon.classList.add("fa-cart-shopping");
            cart_show_icon.classList.remove("fa-xmark", "fa-fade");
            cart_show_btn.style.background = "";
            cart_show_btn.style.color = "black";
            quantities.style.display = cart_products.length === 0 ? "none" : "flex";
        }

    if (fav_container.classList.contains("dis_none")) {
        fav_container.classList.remove("dis_none");
        fav_container.classList.add("dis_bl");
        fav_show_icon.classList.remove("fa-heart");
        fav_show_icon.classList.add("fa-xmark", "fa-fade");
        fav_show_btn.style.background = "#ff4603";
        fav_show_btn.style.color = "white";
        fav.style.display = "none";
    } else {
        fav_container.classList.add("dis_none");
        fav_container.classList.remove("dis_bl");
        fav_show_icon.classList.add("fa-heart");
        fav_show_icon.classList.remove("fa-xmark", "fa-fade");
        fav_show_btn.style.background = "";
        fav_show_btn.style.color = "black";
        fav.style.display = fav_products.length === 0 ? "none" : "flex";
    }
});

// Cart show function to update the cart
const cart_show = (pro_info, w_do) => {
    const cart_filter = products.filter(e => e.info === pro_info)[0];

 //  cart_products = JSON.parse(localStorage.getItem("cart_product"));
    console.log(cart_products)
    if (cart_products.every(e => e !== cart_filter)) {
        cart_products.push(cart_filter);
        cart_products[cart_products.indexOf(cart_filter)].quantity = 1;
    } else { 
        if (w_do === "mi") {
            if (cart_products[cart_products.indexOf(cart_filter)].quantity > 1) {
                cart_products[cart_products.indexOf(cart_filter)].quantity -= 1;
            } else {
                cart_products.splice(cart_products.indexOf(cart_filter), 1);
            }
        } 

        if (w_do === "pu" || w_do === "cart") {
            cart_products[cart_products.indexOf(cart_filter)].quantity += 1;
        } 
        
        if (w_do === "remove") {
            cart_products.splice(cart_products.indexOf(cart_filter), 1);
        }
    }

 //   localStorage.setItem("cart_product",JSON.stringify(cart_products));
    
    cart_products_show(cart_products);
};

const check_form_show = (check_form_container,price) =>
{
        check_form_container.style.display = "flex";
        check_form_container.innerHTML = `
            <form action="">
                <span class="check_close b3"><i class="fa-solid fa-xmark fa-beat"></i></span>
                <table class="left">
                    <tr>
                        <th>Your Address</th>
                    </tr>
                    <tr>
                        <td>
                            <label for="name"><i class="fa-solid fa-user-large"></i></label>
                            <input type="text" name="name" id="name" placeholder=" Enter Your Name">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="email"><i class="fa-solid fa-envelope"></i></label>
                            <input type="email" name="email" id="email" placeholder=" Your Email">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="phone"><i class="fa-solid fa-phone"></i></label>
                            <input type="tel" name="phone" id="phone" placeholder=" Your Phone Number">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="address"><i class="fa-solid fa-map-location-dot"></i></label>
                            <input type="text" name="address" id="address" placeholder=" Your Address">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="city"><i class="fa-solid fa-city"></i></label>
                            <input type="text" name="city" id="city" placeholder="City">
                        </td>
                        <td>
                            <label for="zip"><i class="fa-solid fa-location-crosshairs"></i></label>
                            <input type="text" name="zip" id="zip" placeholder="ZIP code">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <textarea name="" id=""></textarea>
                        </td>
                    </tr>
                </table>
                <table class="right">
                    <tr>
                        <th>Payment</th>
                    </tr>
                    <tr>
                        <td>
                            <p>Total Price</p>
                            <span>$ <em class="check_price">${parseInt(price)}</em></span>
                        </td>
                        <td><hr></td>
                        <td>
                            <p>Accept Cards</p>
                            <img src="/image/Credit-Card-Icons.png" alt="">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="card name"><i class="fa-solid fa-credit-card"></i></label>
                            <input type="tel" name="card name" id="card name" placeholder=" Name On Card">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="number"><i class="fa-solid fa-credit-card"></i></label>
                            <input type="password" name="number" id="number" placeholder=" Card Number">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="date"><i class="fa-solid fa-calendar-check"></i></label>
                            <input type="date" name="date" id="date" placeholder="Months / Years">
                        </td>
                        <td>
                            <label for="cvv">C V V</i></label>
                            <input type="text" name="cvv" id="cvv" placeholder=" CVV">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button class="b3">Continue To Checkout</button>
                        </td>
                    </tr>
                </table>
            </form>
        `;

        const check_close = document.querySelector(".check_close");
        check_close.addEventListener("click", () => {
            check_form_container.style.display = "none";
        });
}


// cart_products = localStorage.getItem("cart_product");



// Favorite show function to update the favorite list
const fav_show = (fav_pro_con, fav_products) => {
    fav_pro_con.innerHTML = "";
    fav_products.forEach((e) => {
        fav_pro_con.innerHTML += `
        <div class="fav_pro" no="${e.id}">
            <div class="fav_img"><img src="${e.img}.png" alt=""></div>
            <div class="fav_info">
                <p class="fav_pro_info">${e.info}</p>
                <article>
                    <span>Price: <em>$${e.price}</em></span>
                    <button id="buy_now" class="b3 buy_btn">Buy Now</button>
                    <button class="cart_btn b3"><i class="fa-solid fa-cart-shopping cart_chose"></i></button>
                </article> 
                <button class="remove_btn"><i class="fa-solid fa-xmark fa-fade fav_remove"></i></button>              
            </div>
        </div>
        `;
    });

    fav.style.display = fav_products.length > 0 ? "flex" : "none";
    fav.textContent = fav_products.length;
    item_num[1].textContent = fav_products.length > 0 ? fav_products.length : "No";

    if (fav_products.length === 0) {
        fav_pro_con.innerHTML = `
            <h4>
                <i class="fa-solid fa-cart-arrow-down fa-bounce"></i>
            </h4>
        `;
    }

    if (fav_show_icon.classList.contains("fa-fade") || fav_products.length === 0) {
        fav.style.display = "none";
    } else {
        fav.style.display = "flex";
    }
};

const main = document.getElementsByTagName("main")[0];
// Add event listeners to all elements with the class 'product_box'

main.addEventListener("click", (e) => {

    const product_box = e.target.closest(".product_box");

    // Get the product information from the closest '.product_box' element

    if(e.target.classList.contains("buy_btn"))
        {
            const pro_price = product_box.querySelector(".pro_price").textContent;
            check_form_show(check_form_container,pro_price);
        }

    // If the clicked element has the class 'cart_btn' or 'cart_chose'
    if (e.target.classList.contains("cart_btn") || e.target.classList.contains("cart_chose")) {
        const pro_info = e.target.closest(".product_box").querySelector(".pro_info").textContent;
        const w_do = "cart";
        cart_show(pro_info, w_do);
    }

    // If the clicked element has the class 'fa-heart'
    if (e.target.classList.contains("fa-heart")) {
        const pro_box = e.target.closest(".product_box");
        const heart = pro_box.querySelector(".fa-heart");
        const love_btn = pro_box.querySelector(".love_btn");
        const save = pro_box.querySelector(".save");
        const fav = document.querySelector(".fav");
        const pro_info = e.target.closest(".product_box").querySelector(".pro_info").textContent;

        const fav_filter = products.filter(e => e.info === pro_info)[0];

        // Toggle the heart's 'click' class and its styles
        if (heart.classList.contains("click")) {
            heart.classList.remove("click");
            heart.style.color = "";
            love_btn.style.opacity = .5;
            save.style.background = "";

            fav_products.splice(fav_products.indexOf(fav_filter), 1);
        } else {
            heart.classList.add("click");
            heart.style.color = "red";
            love_btn.style.opacity = 1;
            save.style.background = "#38B5FA";
            fav_products.push(fav_filter);
        }

        // Update the favorite products display
        fav_show(fav_pro_con, fav_products);

    }
    
    const pro_left = document.querySelector(".pro_left");

    if(pro_left)
        {
            

            pro_left.addEventListener("click", () => {
                const fav_pro = document.querySelectorAll(".fav_pro");
                fav_pro.forEach((e) => {
                    const fav_no = e.attributes.no.value;
                    const product_con = document.querySelector(`[num = "${fav_no}"]`);
                            
                    if(product_con)
                        {
                            const heart = product_con.querySelector(".fa-heart");

                            heart.classList.add("click");
                            heart.style.color = "red";
                            product_con.querySelector(".love_btn").style.opacity = 1;
                            product_con.querySelector(".save").style.background = "#38B5FA";

                        }
                })
            })
        }

    if(product_box.attributes.num)
        {
            product_box.addEventListener("click", () => {
        
                const pro_in = products.filter((e) => {return product_box.attributes.num.value == e.id});
                localStorage.setItem("product_box",JSON.stringify(pro_in));
            
                const a_link = document.querySelector(".a_link");
                a_link.click();
        
                const currentPageLink = window.location.href;
                localStorage.setItem("currentPage",currentPageLink);
            });
        }

});


// Add event listeners to the cart container
cart_container.addEventListener("click", (e) => {
    const cart_pro = document.querySelectorAll(".cart_pro");
    const cart_pro_info = document.querySelectorAll(".cart_pro_info");

    // Increase product quantity
    if (e.target.classList.contains("q_pu")) {
        const pro_info = e.target.closest(".cart_info").querySelector(".cart_pro_info").textContent;
        const w_do = "pu";
        cart_show(pro_info, w_do);
    }

    // Decrease product quantity
    if (e.target.classList.contains("q_min")) {
        const pro_info = e.target.closest(".cart_info").querySelector(".cart_pro_info").textContent;
        const w_do = "mi";
        cart_show(pro_info, w_do);
    }

    // Remove product from cart
    if (e.target.classList.contains("remove")) {
        const pro_info = e.target.closest(".cart_info").querySelector(".cart_pro_info").textContent;
        const w_do = "remove";
        cart_show(pro_info, w_do);
    }

    // Display checkout form
    if (e.target.classList.contains("check_btn")) {
       check_form_show(check_form_container,sum_price);
    }
});

// Add event listeners to the favorite products container
fav_pro_con.addEventListener("click", (e) => {
    // Get the product information from the closest '.fav_info' element
    //const pro_info = e.target.closest(".fav_info").querySelector(".fav_pro_info").textContent;

    // Remove product from favorites
    if (e.target.classList.contains("fav_remove")) {
        const pro_info = e.target.closest(".fav_info").querySelector(".fav_pro_info").textContent;
        const fav_filter = products.filter(e => e.info === pro_info)[0];
        const fav_no = e.target.closest(".fav_pro").attributes.no.value;
        
        const product_con = document.querySelector(`[num = "${fav_no}"]`);
        product_con.querySelector(".save").style.background = "";

        const heart = product_con.querySelector(".fa-heart");
        heart.style.color = "";
        heart.classList.remove("click");
        product_con.querySelector(".love_btn").style.opacity = .5;

        fav_products.splice(fav_products.indexOf(fav_filter), 1);
        fav_show(fav_pro_con, fav_products);


    }

    // Add product to cart from favorites
    if (e.target.classList.contains("cart_btn") || e.target.classList.contains("cart_chose")) {
        const pro_info = e.target.closest(".fav_info").querySelector(".fav_pro_info").textContent;
        const w_do = "cart";
        cart_show(pro_info, w_do);
    }
});

export {cart_products,fav_products};

