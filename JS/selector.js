const body = document.getElementsByTagName("body")[0];

//header 
const search_tag = document.querySelector(".search_tag");
const search_result = document.querySelector(".search_result");
const menu_btn = document.querySelector(".menu_btn");
const menu_con = document.querySelector(".menu_con");
const menu_bar = document.querySelector(".menu_bar");
const dark_btn = document.querySelector(".dark_btn");
const circle_btn = document.querySelector(".circle_btn");
const dark_icon = document.querySelector(".dark_icon");
const dark_text = document.querySelector(".dark_text");

const cart_container =document.querySelector(".cart_container");
const fav_container = document.querySelector(".fav_container");
const quantities = document.querySelector(".quantities");
const h_love_btn = document.querySelector(".h_love_btn");
const fav = document.querySelector(".fav");
const item_num = document.querySelectorAll(".item_num");
const check_form_container = document.querySelector(".check_form_container");

// ads 
const ads_img = document.querySelector(".ads_img");
const ads_sm_img = document.querySelectorAll(".ads_sm_img");


//hot & feat
const hot_product = document.querySelector(".hot_product");
const feat_product = document.querySelector(".feat_product");
const hot_see_btn = document.querySelector(".hot_see_btn");
const feat_see_btn = document.querySelector(".feat_see_btn");
const hot_next_btn = document.querySelector(".next_btn");
const hot_back_btn = document.querySelector(".back_btn");
const feat_next_btn = document.querySelector(".feat_next");
const feat_back_btn = document.querySelector(".feat_back");
const feat_scroll = document.querySelector(".feat_scroll");
const hot_scroll = document.querySelector(".hot_scroll");

// Products
const brand_btn = document.querySelectorAll(".brand_btn");
const all_btn = document.querySelector('.all_btn');
const brand_icon = document.querySelector(".brand_icon");
const brands = document.querySelector(".brands");
const pu_btn = document.querySelectorAll(".pu_btn");
const mi_btn = document.querySelectorAll(".mi_btn");
const b_price = document.querySelector(".b_price");
const a_price = document.querySelector(".a_price");
const go_btn = document.querySelector(".go_btn");

//PC 
const pc_product = document.querySelector(".pc_product");

//laptops
const laptops_product = document.querySelector(".laptops_product");

//motherboards
const motherboards_product = document.querySelector(".motherboards_product");

//monitors 
const monitors_product = document.querySelector(".monitors_product");

//other
const other_product = document.querySelector(".other_product");

const li1_btn = document.querySelectorAll("#li_1");
const li2_btn = document.querySelectorAll("#li_2");
const li3_btn = document.querySelectorAll("#li_3");

const buy_now_btn = document.querySelectorAll("#buy_now");

export 
{
    hot_product,feat_product,hot_see_btn,feat_see_btn,hot_back_btn,hot_next_btn,feat_back_btn,feat_next_btn,
    hot_scroll,feat_scroll,pc_product,li1_btn,li2_btn,li3_btn,laptops_product,motherboards_product,monitors_product,
    other_product,search_tag,search_result,menu_btn,menu_con,menu_bar,dark_btn,circle_btn,body,dark_icon,dark_text,
    brand_btn,all_btn,brand_icon,brands,pu_btn,mi_btn,b_price,a_price,go_btn,quantities,h_love_btn,fav,item_num,
    check_form_container,ads_img,ads_sm_img,cart_container,fav_container
}