(function(){
"use strict";
var P=(window.VITRINA_PRODUITS||[]).filter(function(p){return !p.vendu});
var B=document.body.getAttribute("data-base")||"";
var bar=document.createElement("div");bar.className="prog";document.body.appendChild(bar);
function onScroll(){
  var h=document.documentElement.scrollHeight-innerHeight; bar.style.width=(h>0?scrollY/h*100:0)+"%";
  var y=scrollY;
  document.querySelectorAll(".fl").forEach(function(f,i){ var k=[.18,-.12,.22,-.16,.1][i%5]; f.style.transform="translate3d("+(mx*[14,-10,-16,12,8][i%5])+"px,"+(y*k+my*[10,-12,8,-8,6][i%5])+"px,0)"; });
}
var mx=0,my=0;
addEventListener("mousemove",function(e){ mx=e.clientX/innerWidth-.5; my=e.clientY/innerHeight-.5; onScroll(); },{passive:true});
addEventListener("scroll",onScroll,{passive:true}); onScroll();

var rx=document.getElementById("reelx");
if(rx){ var h=P.slice().sort(function(a,b){return a.id<b.id?-1:1}).slice(0,16).map(function(p){return '<a href="produit.html?id='+p.id+'"><img loading="lazy" src="'+B+'img/p/'+p.id+'.webp" alt=""></a>'}).join(""); rx.innerHTML=h+h; }

var r=document.getElementById("newin");
if(r){
  r.classList.add("reel");
  var down=false,sx=0,sl=0,moved=false;
  r.addEventListener("mousedown",function(e){down=true;moved=false;sx=e.pageX;sl=r.scrollLeft;});
  addEventListener("mouseup",function(){down=false;r.classList.remove("drag");});
  r.addEventListener("mousemove",function(e){ if(!down)return; var d=e.pageX-sx; if(Math.abs(d)>5){moved=true;r.classList.add("drag");} r.scrollLeft=sl-d; });
  r.addEventListener("click",function(e){ if(moved){e.preventDefault();e.stopPropagation();} },true);
  document.querySelectorAll("[data-reel]").forEach(function(b){ b.onclick=function(){ var dir=document.documentElement.dir==="rtl"?-1:1; r.scrollBy({left:dir*+b.getAttribute("data-reel")*r.clientWidth*.8,behavior:"smooth"}); }; });
}
// animated counter
var c=document.getElementById("statn");
if(c&&"IntersectionObserver" in window){ var io=new IntersectionObserver(function(en){ if(!en[0].isIntersecting)return; io.disconnect(); var n=+c.textContent||P.length,i=0; var tm=setInterval(function(){ i++; c.textContent=Math.round(n*i/30); if(i>=30)clearInterval(tm); },30); }); io.observe(c); }
})();
