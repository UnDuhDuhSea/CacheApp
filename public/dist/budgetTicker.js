const counters=document.querySelectorAll(".counter"),total=document.querySelector("#total-amount");total.className+=" text-red-600",window.addEventListener("load",()=>{counters.forEach(a=>{a.innerText="0";const b=()=>{const d=+a.getAttribute("data-target"),e=+a.innerText;e<d?(a.innerText=`${Math.ceil(e+d/150)}`,setTimeout(b,1)):(a.innerText=d,a.innerText="$"+a.innerText),total.className+=0>d?" text-red-600":" text-green-600"};b()})});