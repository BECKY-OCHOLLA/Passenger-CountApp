let count1=document.getElementById("countel")
let count2=document.getElementById("para1")

let count=0
function increment(){
    count+=1
    count1.textContent=count

}
 
function save(){
    let countstr=count + " - "
    count2.textContent+=countstr
    count1.textContent=0
    count=0


 }