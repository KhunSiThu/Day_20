import { profile_img,user_name } from "./selector.js";



export const up_profile = document.querySelector(".up_profile");
const input_file = document.querySelector("#input_file");

const up_remove = document.querySelector(".up_remove");
const up_confirm = document.querySelector(".up_confirm");

const user_img_Url = localStorage.getItem("user-img");
const click = localStorage.getItem("click");

if(user_img_Url && click)
    {
        up_profile.style.display = "none";
    }

if(up_profile)
    {
        input_file.addEventListener("change", () => {

            const reader = new FileReader();
            reader.readAsDataURL(input_file.files[0]);
        
            reader.addEventListener("load", () => {
                localStorage.setItem("user-img",reader.result)
            })
        
            window.location.reload();
        });

        up_remove.addEventListener("click", () => {
            up_profile.style.display = "none";
            profile_img.forEach((e) =>  e.src = "/image/p.jpg")
        });
        
        up_confirm.addEventListener("click", () => {
            up_profile.style.display = "none";
            localStorage.setItem("click","true");
        });
    }

