const newFormHandler=async a=>{a.preventDefault();const b=document.querySelector("#title").value.trim(),c=document.querySelector("#plannedAmount").value.trim(),d=document.querySelector("#sub-category").value.trim();if(b&&d&&c){const a=await fetch("/api/expense",{method:"POST",body:JSON.stringify({title:b,sub_category:d,budget_amount:c}),headers:{"Content-Type":"application/json"}});a.ok?document.location.replace("/dashboard"):location.reload()}};document.querySelector("#createBudget").addEventListener("submit",newFormHandler);