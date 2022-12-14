var count=0;
var button=document.getElementById('mybutton');

button.addEventListener('click',() => {
    count++;
    document.getElementById('clicked').innerHTML=count;
    // console.log(count);
});
// console.log(count);
