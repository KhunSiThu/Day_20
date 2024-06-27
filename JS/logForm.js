const body = document.getElementsByTagName("body")[0];

const login_form = document.querySelector("#login_form");
const singup_form = document.querySelector("#singup_form");
const singup_btn = document.querySelector(".singup_btn");
const login_btn = document.querySelector(".login_btn");
const singup = document.querySelector(".singup");
const login = document.querySelector(".login");
const form = document.querySelector("form");
const td = document.querySelectorAll("td");
const lable =document.querySelectorAll(".lable");

const name_email = document.querySelector(".name_email");
const pass = document.querySelector(".pass");

const name = document.querySelector(".name");
const email = document.querySelector(".email");
const pass2 = document.querySelector(".pass2");
const pass1 =document.querySelector(".pass1");

const have_acc_alert = document.querySelector(".have_acc_alert");
const have_yes = document.querySelector(".have_yes");
const have_remove = document.querySelector(".have_remove");
const error_show = document.querySelector(".error_show");

const user_info_save = () => {
    const user_info = {
        u_name : `${name.value}`,
        u_email : `${email.value}`,
        u_pass : `${pass2.value}`
        }

        localStorage.setItem("user",JSON.stringify(user_info));
}

td.forEach(e => {
    e.addEventListener("click", (el) => {
        if(el.target.classList.contains("lable") || el.target.classList.contains("input"))
            {
                error_show.style.display = "none";
                const td = el.target.closest("td");
                const lab = td.querySelector(".lable");
                const input = td.querySelector(".input");
                const icon = td.querySelector(".fa-solid");

                lab.style.transform = "translateY(-25px)";
                input.focus();

                input.addEventListener("keyup", (e) => {

                    if(e.target.classList.contains("name"))
                        {
                            if(input.value.length !== 0)
                                {
                                    icon.style.color = "#ff0000";
                                    icon.style.opacity = 1;
                                } else {
                                    icon.style.color = "";
                                    icon.style.opacity = .5;
                                }
                        }

                    if(e.target.classList.contains("pass1") )
                        {

                            if(input.value.length >= 8)
                                {
                                    icon.style.color = "#ff0000";
                                    icon.style.opacity = 1;
                                } else {
                                    icon.style.color = "";
                                    icon.style.opacity = .5;
                                } 
                                
                           
                        }

                    if(e.target.classList.contains("pass2"))
                        {

                            if(input.value.length >= 8 && pass1.value === input.value)
                                {
                                    icon.style.color = "#ff0000";
                                    icon.style.opacity = 1;
                                } else {
                                    icon.style.color = "";
                                    icon.style.opacity = .5;
                                } 
                                
                            
                        }
                         
                    if(e.target.classList.contains("email"))
                        {
                            const em = "@gmail.com"
                            if(input.value.includes(em))
                                {
                                    icon.style.color = "#ff0000";
                                    icon.style.opacity = 1;
                                } else {
                                    icon.style.color = "";
                                    icon.style.opacity = .5;
                                } 
                        } 
                        
                })
            }

        if(el.target.classList.contains("fa-solid"))
            {
                const td = el.target.closest("td");
                const lab = td.querySelector(".lable");
                const input = td.querySelector(".input");
                const icon = td.querySelector(".fa-solid");

                

                if(icon.classList.contains("fa-eye-slash"))
                    {
                        icon.classList.add("fa-eye")
                        icon.classList.remove("fa-eye-slash");
                        input.type = "text";
                    } else {
                        icon.classList.add("fa-eye-slash")
                        icon.classList.remove("fa-eye");
                        input.type = "password";
                    }
                
            }
    })
})


singup_btn.addEventListener("click", () => {
   
    if(localStorage.getItem("user"))
        {
            const user_info = JSON.parse(localStorage.getItem("user"));
            if(user_info.u_email === email.value)
                {    
                    if(name.value.length > 3 && email.value.length > 3 && pass1.value.length > 3 && pass2.value.length > 3)
                        {
                            singup_btn.type = "button";
                            have_acc_alert.style.display = "flex";

                            have_yes.addEventListener('click', () => {
                                login_form.style.display = "flex";
                                singup_form.style.display = "none";
                                have_acc_alert.style.display = "none";
                            })

                            have_remove.addEventListener('click', () => {
                                have_acc_alert.style.display = "none";
                            })
                        }

                } else if(name.value.length > 3 && email.value.length > 3 && pass1.value.length > 3 && pass2.value.length > 3){
                    singup_btn.type = "submit";
                    user_info_save();
                }
        } else if(name.value.length > 3 && email.value.length > 3 && pass1.value.length > 3 && pass2.value.length > 3){
            singup_btn.type = "submit";
            user_info_save();

        } 
})

login_btn.addEventListener("click", () => {
   
    const user_info = JSON.parse(localStorage.getItem("user"));
    if((user_info.u_email === name_email.value || user_info.u_name === name_email.value) && user_info.u_pass === pass.value)
        {
            login_btn.type = "submit";
        } else {
            login_btn.type = "button";

            error_show.style.display = "flex";
        }
})



login.addEventListener("click", () => {
    login_form.style.display = "flex";
    singup_form.style.display = "none";
});

singup.addEventListener("click", () => {
    login_form.style.display = "none";
    singup_form.style.display = "flex";
});