import { cart_products,fav_products } from "./main.js";
import { products } from "./products.js";

import 
{ 
    hot_product,feat_product,hot_see_btn,feat_see_btn,hot_back_btn,hot_next_btn,feat_back_btn,
    feat_next_btn,pc_product,laptops_product,monitors_product,motherboards_product,
    other_product,search_result,search_tag,menu_btn,menu_con,menu_bar,dark_btn,circle_btn,body,
    dark_icon,dark_text,brand_btn,all_btn,brand_icon,brands,b_price,a_price,go_btn,
    hot_scroll,
    feat_scroll,ads_img,
    ads_sm_img,
    cart_container,
    fav_container,quantities,fav
}
from "./selector.js";



//header 
const search_result_show = () => {
    const search_value = search_tag.value.toLowerCase();
    if(search_value != "")
        {
            const search_filter = products.filter(e => e.info.toLowerCase().includes(search_value));
            search_result.innerHTML = ""
            search_filter.forEach((e) => {
                search_result.innerHTML += `<div class = "sea_pro"  num = "${e.id}">
                                                    
                                                    <img src="${e.img}.png" alt="">
                                                    <p class="col_black">${e.info}</p>
                                            </div>`


            })
        } else {
            search_result.innerHTML = ""
        }

        const sea_pro = document.querySelectorAll(".sea_pro");
        sea_pro.forEach((e) => {
            e.addEventListener("click", () => { 

                const pro_in = products.filter((el) => {return e.attributes.num.value == el.id});
                localStorage.setItem("product_box",JSON.stringify(pro_in));
                
                const a_link = document.querySelector(".a_link");
                a_link.click();
            })
        })
      
}



const menu_show = () => {
    if(cart_container.classList.contains("dis_bl"))
        {
            const cart_show_icon = document.querySelector(".cart_show_icon");
            const cart_show_btn = document.querySelector(".cart_show_btn");

            cart_container.classList.add("dis_none");
            cart_container.classList.remove("dis_bl");
            cart_show_icon.classList.add("fa-cart-shopping");
            cart_show_icon.classList.remove("fa-xmark", "fa-fade");
            cart_show_btn.style.background = "";
            cart_show_btn.style.color = "black";
            quantities.style.display = cart_products.length === 0 ? "none" : "flex";
        }
    
    if(fav_container.classList.contains("dis_bl"))
        {
            const fav_show_icon = document.querySelector(".fav_show_icon");
            const fav_show_btn = document.querySelector(".fav_show_btn");

            fav_container.classList.add("dis_none");
            fav_container.classList.remove("dis_bl");
            fav_show_icon.classList.add("fa-heart");
            fav_show_icon.classList.remove("fa-xmark", "fa-fade");
            fav_show_btn.style.background = "";
            fav_show_btn.style.color = "black";
            fav.style.display = fav_products.length === 0 ? "none" : "flex";
        }

    if(menu_con.classList.contains("dis_none"))
        {
            menu_con.classList.remove("dis_none");
            menu_con.classList.add("dis_bl");
            menu_bar.classList.remove("fa-bars");
            menu_bar.classList.add("fa-xmark");
            menu_bar.classList.add("fa-fade");
            menu_btn.style.background = "#ff4603";
            menu_btn.style.color = "white";
        } else {
            menu_con.classList.add("dis_none");
            menu_con.classList.remove("dis_bl");
            menu_bar.classList.add("fa-bars");
            menu_bar.classList.remove("fa-xmark");
            menu_bar.classList.remove("fa-fade");
            menu_btn.style.background = "";
            menu_btn.style.color = "black";
        }
    
    dark_btn.addEventListener("click", () => {
        if(circle_btn.classList.contains("circle_move"))
            {
                localStorage.setItem("circle","no_move")
                circle_btn.classList.remove("circle_move");
                body.classList.remove("dark_mode");
                dark_icon.classList.add("fa-sun");
                dark_icon.classList.remove("fa-moon");
                dark_text.innerHTML = "Light";
            } else {
                localStorage.setItem("circle","circle_move")
                circle_btn.classList.add("circle_move");
                body.classList.add("dark_mode");
                dark_icon.classList.remove("fa-sun");
                dark_icon.classList.add("fa-moon");
                dark_text.innerHTML = "Dark";
            }
        })
}



const product_show = (e1,e2) => {
    e1.innerHTML +=  `
                        <div class="product_box b3 col_black" num = "${e2.id}">
                            <div class = "save">
                                <span>save <em>$${e2.save}</em></span>
                                <button class="love_btn"><i class="fa-solid fa-heart"></i></button>
                            </div>
                            <div class = "info_con">
                                <img src="${e2.img}.png" alt="">
                                <div class = "info_buy">
                                    <p class = "pro_info" >${e2.info}</p>
                                    <div class="buy">
                                        <span>Price : $<em class = "pro_price">${e2.price}</em></span>
                                        <button id="buy_now" class="b3 buy_btn">Buy Now</button>
                                        <button class="cart_btn b3"><i class="fa-solid fa-cart-shopping cart_chose"></i></button>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    `
}



// hot & feat
const hot_filter = products.filter(e => e.hot);
const hot_show = () => {
    hot_filter.forEach((e) => {
        product_show(hot_product,e);
    })
}

const feat_filter = products.filter(e => e.feat);
const feat_show = () => {
    feat_filter.forEach((e) => {
        product_show(feat_product,e);
    })
}

const hot_see_show = () => {
    if(hot_product.classList.contains("less"))
        {
            hot_see_btn.textContent = "See Less";
            hot_product.classList.remove("less");
            hot_product.classList.remove("hot_flex");
            hot_product.classList.add("all"); 
            hot_product.classList.add("hot_grid");
            hot_back_btn.style.display = "none";
            hot_next_btn.style.display = "none";
            hot_scroll.style.height = "auto";   
        } else {
            hot_see_btn.textContent = "See All";
            hot_product.classList.remove("all");
            hot_product.classList.remove("hot_grid");
            hot_product.classList.add("less"); 
            hot_product.classList.add("hot_flex");   
            hot_back_btn.style.display = "";
            hot_next_btn.style.display = ""; 
            // hot_scroll.style.height = "300px"; 
        }
}

const feat_see_show = () => {
    if(feat_product.classList.contains("less"))
        {
            feat_see_btn.textContent = "See Less";
            feat_product.classList.remove("less");
            feat_product.classList.remove("feat_flex");
            feat_product.classList.add("all"); 
            feat_product.classList.add("feat_grid");
            feat_back_btn.style.display = "none";
            feat_next_btn.style.display = "none";  
            
            feat_scroll.style.height = "auto";
        } else {
            feat_see_btn.textContent = "See All";
            feat_product.classList.remove("all");
            feat_product.classList.remove("feat_grid");
            feat_product.classList.add("less"); 
            feat_product.classList.add("feat_flex");   
            feat_back_btn.style.display = "";
            feat_next_btn.style.display = "";  
           
            // feat_scroll.style.height = "300px"
        }
}

const next_scroll = (e) => {
    e.scrollLeft += 1250;
}

const back_scroll = (e) => {
    e.scrollLeft -= 1250;
}

//list 
const li1_show = (e) => {
    e.classList.add("col_1");
    e.classList.remove("col_2");
    e.classList.remove("col_3");
}

const li2_show = (e) => {
    e.classList.add("col_2");
    e.classList.remove("col_1");
    e.classList.remove("col_3");
}

const li3_show = (e) => {
    e.classList.add("col_3");
    e.classList.remove("col_1");
    e.classList.remove("col_2");
}

const brands_show = () => {
    if(brand_icon.classList.contains("fa-chevron-down"))
        {
            brand_icon.classList.remove("fa-chevron-down");
            brand_icon.classList.add("fa-chevron-up");
            brands.style.display = "block";
        } else {
            brand_icon.classList.add("fa-chevron-down");
            brand_icon.classList.remove("fa-chevron-up");
            brands.style.display = "none";
        }
}

const pu_show = (e) => {
    e.value = parseInt(e.value) + 1;  
}

const mi_show = (e) => {
    e.value = parseInt(e.value) - 1;  
}

const all_show = (pro,fil) => {
    all_btn.addEventListener("click",() => {
        go_btn.style.background = "";
        if(all_btn.checked === true)
            {
                brand_btn.forEach(e => e.checked = false);
                pro.innerHTML = "";
                fil.forEach((e) => {
                    product_show(pro,e)
                })
            } else {
                pro.innerHTML = ""
            }
    })
}

//pc
const pc_filter = products.filter(e => {return e.product === "pc"});
const pc_show = () => {
    pc_filter.forEach((e) => {
        product_show(pc_product,e)
    })

    all_show(pc_product,pc_filter);
}

const pc_brand_show = () => {
    go_btn.style.background = "";
    pc_product.innerHTML = ""
    brand_btn.forEach((el) => {
        if(el.checked === true)
            {
                const brand_filter = pc_filter.filter(e => {return e.brand === el.value});
                brand_filter.forEach((e) => {
                    product_show(pc_product,e);
                });
                all_btn.checked = false;
            }
    })

    if(brand_btn[0].checked == false && brand_btn[1].checked == false)
        {
            all_btn.checked = true;
            pc_show();
        }
}

const go_show = (e1,e2,fi,pro) => {
    pro.innerHTML = ""
    const price_filter = fi.filter((e) => {return parseInt(e1.value) <= e.price && parseInt(e2.value) >= e.price});
    price_filter.forEach((e) => {
        product_show(pro,e);
    })
    all_btn.checked = false;
    brand_btn.forEach(e => e.checked = false)
}

//laptops
const laptops_filter = products.filter(e => e.product === "laptop");
const laptops_show = () => {
    all_btn.checked = true;
    laptops_filter.forEach((e) => {
        product_show(laptops_product,e);
    });

    all_show(laptops_product,laptops_filter);
}

const laptop_brand_show = () => {
    go_btn.style.background = "";
    laptops_product.innerHTML = ""
    brand_btn.forEach((el) => {
        if(el.checked === true)
            {
                const brand_filter = laptops_filter.filter(e => {return e.brand === el.value});
                brand_filter.forEach((e) => {
                    product_show(laptops_product,e);
                });
                all_btn.checked = false;
            }
    })

    if(brand_btn[0].checked == false && brand_btn[1].checked == false && brand_btn[2].checked == false && brand_btn[3].checked == false
        && brand_btn[4].checked == false && brand_btn[5].checked == false && brand_btn[6].checked == false
    )
        {
            all_btn.checked = true;
            laptops_show();
        }
}

//motherboards 
const motherboards_filter = products.filter(e => e.product === "motherboard");
const motherboards_show = () => {
    all_btn.checked = true;
    motherboards_filter.forEach((e) => {
        product_show(motherboards_product,e);
    });
    all_show(motherboards_product,motherboards_filter);
};

const motherboard_brand_show = () => {
    go_btn.style.background = "";
    motherboards_product.innerHTML = ""
    brand_btn.forEach((el) => {
        if(el.checked === true)
            {
                const brand_filter = motherboards_filter.filter(e => {return e.brand === el.value});
                brand_filter.forEach((e) => {
                    product_show(motherboards_product,e);
                });
                all_btn.checked = false;
            }
    })

    if(brand_btn[0].checked == false && brand_btn[1].checked == false && brand_btn[2].checked == false && brand_btn[3].checked == false && brand_btn[4].checked == false)
        {
            all_btn.checked = true;
            motherboards_show();
        }
}

// monitors 
const monitors_filter = products.filter(e => e.product === "monitor");
const monitors_show = () => {
    all_btn.checked = true;
    monitors_filter.forEach((e) => {
        product_show(monitors_product,e);
    });
    all_show(monitors_product,monitors_filter);
};

const monitor_brand_show = () => {
    go_btn.style.background = "";
    monitors_product.innerHTML = ""
    brand_btn.forEach((el) => {
        if(el.checked === true)
            {
                const brand_filter = monitors_filter.filter(e => {return e.brand === el.value});
                brand_filter.forEach((e) => {
                    product_show(monitors_product,e);
                });
                all_btn.checked = false;
            }
    })

    if(brand_btn[0].checked == false && brand_btn[1].checked == false && brand_btn[2].checked == false && brand_btn[3].checked == false && brand_btn[4].checked == false
        && brand_btn[5].checked == false && brand_btn[6].checked == false && brand_btn[7].checked == false && brand_btn[8].checked == false
    )
        {
            all_btn.checked = true;
            monitors_show();
        }
}

//other 
const other_filter = products.filter(e => e.id > 94);
const other_show = () => {
    all_btn.checked = true;
    other_filter.forEach((e) => {
        product_show(other_product,e);
    });
    all_show(other_product,other_filter);
};

const other_brand_show = () => {
    go_btn.style.background = "";
    other_product.innerHTML = ""
    brand_btn.forEach((el) => {
        if(el.checked === true)
            {
                const brand_filter = other_filter.filter(e => {return e.product === el.value});
                brand_filter.forEach((e) => {
                    product_show(other_product,e);
                });
                all_btn.checked = false;
            }
    })

    if(brand_btn[0].checked == false && brand_btn[1].checked == false && brand_btn[2].checked == false && brand_btn[3].checked == false && brand_btn[4].checked == false
        && brand_btn[5].checked == false && brand_btn[6].checked == false 
    )
        {
            all_btn.checked = true;
            other_show();
        }
}

export 
{
    product_show,hot_show,feat_show,hot_see_show,feat_see_show,next_scroll,back_scroll,
    pc_show,li1_show,li2_show,li3_show,laptops_show,motherboards_show,monitors_show,
    other_show,search_result_show,menu_show,pc_brand_show,brands_show,pu_show,mi_show,
    go_show,pc_filter,laptop_brand_show,laptops_filter,motherboards_filter,monitors_filter,
    other_filter,motherboard_brand_show,monitor_brand_show,other_brand_show

}