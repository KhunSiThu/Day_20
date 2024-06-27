const product_detail = JSON.parse(localStorage.getItem("product_box"));
const back_link = document.querySelector(".back_link");
const back_link_btn = document.querySelector(".back_link_btn");

back_link_btn.addEventListener("click", () => {
    back_link.href = localStorage.getItem("currentPage");
    back_link.click();
})


document.querySelector(".s1").innerHTML = `
            <div class="d_left">
                <img src="${product_detail[0].img}.png" alt="">
                <div>
                    <img src="/image/b7.jpg.png" alt="">
                    <img src="/image/b3.jpg.png" alt="">
                    <img src="/image/b4.jpg.png" alt="">
                </div>
            </div>
            <div class="d_right">
               <p class="pro_info">${product_detail[0].info}</p>
               <span>Rating : <em>${product_detail[0].rating}</em></span>
               <span>Price : $ <em class="pro_price">${product_detail[0].price}</em></span>
               <div class="buy">
                    
                    <button id="buy_now" class="b3 buy_btn">Buy Now</button>
                    <button class="cart_btn b3"><i class="fa-solid fa-cart-shopping cart_chose"></i></button>
                
                </div>
                <div class="comment_con">
                    <label class="com_label" for="com">Comment</label>
                    <textarea class="comment" name="review" id="com"></textarea>
                </div>
            </div>

`


const comment_con = document.querySelector(".comment_con");
const comment = document.querySelector(".comment");
const com_label = document.querySelector(".com_label");
comment.addEventListener("click", () => {
    com_label.style.transform = "translateY(-30px)";
    comment.style.border = "1px solid #38B5FA"
});

