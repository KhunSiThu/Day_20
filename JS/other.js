import { 
    li1_btn,li2_btn,li3_btn,other_product,pu_btn,mi_btn,go_btn,brand_btn,brand_icon,
    b_price,a_price,
} from "./selector.js";

import { 
    li1_show,li2_show,li3_show,other_filter,go_show,brands_show,
    pu_show,mi_show,other_show,other_brand_show
} from "./function.js";

other_show();

li1_btn.forEach((e) => {
    e.addEventListener("click",() => {
        li1_show(other_product);
    })
} );

li2_btn.forEach((e) => {
    e.addEventListener("click",() => {
        li2_show(other_product);
    })
} );

li3_btn.forEach((e) => {
    e.addEventListener("click",() => {
        li3_show(other_product);
    })
} );

brand_btn.forEach((e) => {
    e.addEventListener("click",() => {
        other_brand_show();
    })
})

brand_icon.addEventListener("click",() => {
    console.log("k")
    brands_show();
});

pu_btn[0].addEventListener("click",() => {
    pu_show(b_price);
    go_btn.style.background = "";
});

pu_btn[1].addEventListener("click",() => {
    pu_show(a_price);
    go_btn.style.background = "";
});

mi_btn[0].addEventListener("click",() => {
    if(parseInt(b_price.value) > 100)
        {
            mi_show(b_price);
        }
        go_btn.style.background = "";
});

mi_btn[1].addEventListener("click",() => {
    if(parseInt(a_price.value) > 30)
        {
            mi_show(a_price);
        }
        go_btn.style.background = "";
});

go_btn.addEventListener("click", () => {
    if(parseInt(b_price.value) < 30 || parseInt(a_price.value) < 50 || parseInt(b_price.value) >= parseInt(a_price.value))
        {
            b_price.value = 30;
            a_price.value = 50;
            go_show(b_price,a_price,other_filter,other_product);
        } else {
            go_show(b_price,a_price,other_filter,other_product)
        }
    go_btn.style.background = "#ff4603";
})
