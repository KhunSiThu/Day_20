import { 
    laptops_product,li1_btn,li2_btn,li3_btn,brand_btn,brand_icon,brands,pu_btn,mi_btn,
    b_price,a_price,go_btn
} from "./selector.js";

import { 
    laptops_show,li1_show,li2_show,li3_show,brands_show,pu_show,mi_show,laptop_brand_show,
    laptops_filter,go_show
} from "./function.js";

laptops_show();

li1_btn.forEach((e) => {
    e.addEventListener("click",() => {
        li1_show(laptops_product);
    })
} );

li2_btn.forEach((e) => {
    e.addEventListener("click",() => {
        li2_show(laptops_product);
    })
} );

li3_btn.forEach((e) => {
    e.addEventListener("click",() => {
        li3_show(laptops_product);
    })
} );

brand_btn.forEach((e) => {
    e.addEventListener("click",() => {
        laptop_brand_show();
    })
})

brand_icon.addEventListener("click",() => {
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
    if(parseInt(b_price.value) > 500)
        {
            mi_show(b_price);
        }
        go_btn.style.background = "";
});

mi_btn[1].addEventListener("click",() => {
    if(parseInt(a_price.value) > 600)
        {
            mi_show(a_price);
        }
        go_btn.style.background = "";
});

go_btn.addEventListener("click", () => {
    if(parseInt(b_price.value) < 500 || parseInt(a_price.value) < 600 || parseInt(b_price.value) >= parseInt(a_price.value))
        {
            b_price.value = 500;
            a_price.value = 600;
            go_show(b_price,a_price,laptops_filter,laptops_product);
        } else {
            go_show(b_price,a_price,laptops_filter,laptops_product)
        }
    go_btn.style.background = "#ff4603";
})
