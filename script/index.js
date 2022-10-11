
const ham=document.getElementById('hamburger');
const nav=document.getElementById('nav-bar');
const close=document.getElementById('close');
if(ham)
{
    ham.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close)
{
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
        
    })
}
 let herobtn=document.getElementById("herobutton");
 herobtn.addEventListener('click',()=>{
    window.location.href="shop.html";
 })
// WaveShaperNode.html 
