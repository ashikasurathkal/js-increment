let countElement=document.getElementById('count');   //accesing the count element
let count = 0;

//increment button function
function inc() {
     count+=1;              //count=count+1
     countElement.innerHTML=count
}
function dec() {
    if(count>=1){
        count+=-1;  
           //count=count-1
    countElement.innerHTML=count
    }
}
let saveElement=document.getElementById('save');
function save(){
  saveElement.innerHTML += count + ' - '
   
}