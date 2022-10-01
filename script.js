const bar=document.getElementById('ham');
const nav=document.getElementById('navbar');
const cls=document.getElementById('close');


if(bar)
{
    bar.addEventListener('click',()=>{
        nav.style.right="0px";
    });
}
if(cls)
{
    cls.addEventListener('click',()=>{
        nav.style.right="-500px";
    });
}
