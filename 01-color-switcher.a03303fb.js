const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body"),o=document.querySelector(".box");let d;function n(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}o.style.display="flex",o.style.justifyContent="center",t.addEventListener("click",(function(o){r.style.backgroundColor=n(),d=setInterval((()=>{r.style.backgroundColor=n()}),1e3),t.setAttribute("disabled",!1),e.removeAttribute("disabled")})),e.addEventListener("click",(function(r){clearInterval(d),t.removeAttribute("disabled"),e.setAttribute("disabled",!1)})),e.setAttribute("disabled",!1);
//# sourceMappingURL=01-color-switcher.a03303fb.js.map
