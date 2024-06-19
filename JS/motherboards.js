import { 
    motherboards_product,li1_btn,li2_btn,li3_btn,brand_btn,brand_icon,b_price,a_price,go_btn,
    pu_btn,mi_btn,
} from "./selector.js";

import { 
    li1_show,li2_show,li3_show,brands_show,go_show,pu_show,mi_show,
    motherboards_show,motherboard_brand_show,motherboards_filter
} from "./function.js";

motherboards_show();

li1_btn.forEach((e) => {
    e.addEventListener("click",() => {
        li1_show(motherboards_product);
    })
} );

li2_btn.forEach((e) => {
    e.addEventListener("click",() => {
        li2_show(motherboards_product);
    })
} );

li3_btn.forEach((e) => {
    e.addEventListener("click",() => {
        li3_show(motherboards_product);
    })
} );

brand_btn.forEach((e) => {
    e.addEventListener("click",() => {
        motherboard_brand_show();
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
    if(parseInt(b_price.value) > 100)
        {
            mi_show(b_price);
        }
        go_btn.style.background = "";
});

mi_btn[1].addEventListener("click",() => {
    if(parseInt(a_price.value) > 200)
        {
            mi_show(a_price);
        }
        go_btn.style.background = "";
});

go_btn.addEventListener("click", () => {
    if(parseInt(b_price.value) < 100 || parseInt(a_price.value) < 200 || parseInt(b_price.value) >= parseInt(a_price.value))
        {
            b_price.value = 100;
            a_price.value = 200;
            go_show(b_price,a_price,motherboards_filter,motherboards_product);
        } else {
            go_show(b_price,a_price,motherboards_filter,motherboards_product)
        }
    go_btn.style.background = "#ff4603";
})
