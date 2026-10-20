(function(){
"use strict";
var P = window.VITRINA_PRODUITS || [], T = window.VITRINA_I18N;
var store = {
  get:function(k,d){try{var v=localStorage.getItem("vitrina_"+k);return v===null?d:JSON.parse(v)}catch(e){return d}},
  set:function(k,v){try{localStorage.setItem("vitrina_"+k,JSON.stringify(v))}catch(e){}}
};
var mem = {};
function sget(k,d){ return k in mem ? mem[k] : (mem[k]=store.get(k,d)); }
function sset(k,v){ mem[k]=v; store.set(k,v); }

var urlLang = new URLSearchParams(location.search).get("lang");
var S = {
  lang: (urlLang && T[urlLang]) ? urlLang : sget("lang", (navigator.language||"fr").slice(0,2)),
  pays: sget("pays", "dz"),
  cart: sget("cart", [])
};
if(!T[S.lang]) S.lang="fr";
S.cart = S.cart.filter(function(id){return byId(id)});

function t(k){ return (T[S.lang]&&T[S.lang][k]) || T.fr[k] || k; }
function byId(id){ for(var i=0;i<P.length;i++) if(P[i].id===id) return P[i]; return null; }
function name(p){ return p[S.lang] || p.fr; }
function nf(n){ return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " "); }
function price(p){ return money(S.pays==="gr"? p.gr : p.dz); }
function money(v){
  if(typeof v==="number" && v%1) v=v.toFixed(2).replace(".",",");
  if(S.pays==="gr") return (S.lang==="fr"||S.lang==="el") ? nf(v)+" €" : "€"+nf(v);
  return S.lang==="ar" ? nf(v)+" دج" : nf(v)+" DA";
}
function ship(){ return S.pays==="gr" ? 3.9 : 600; }
var B=document.body.getAttribute("data-base")||"";
function img(id){ return B+"img/p/"+id+".webp"; }
function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]}); }
function condTxt(e){ return t("cond_"+e); }
function fromTxt(p){ return p.lieu==="gr"? t("from_gr") : t("from_dz"); }
function inCart(id){ return S.cart.indexOf(id)>-1; }

/* ---------- header / footer ---------- */
var VS={fr:["Version classique","Version moderne"],en:["Classic version","Modern version"],el:["Κλασική έκδοση","Μοντέρνα έκδοση"],ar:["النسخة الكلاسيكية","النسخة العصرية"]};
var LANGS=[["ar","ع"],["el","ΕΛ"],["fr","FR"],["en","EN"]];
function langSeg(cls){
  return '<div class="seg '+cls+'" role="group" aria-label="'+t("lang")+'">'+LANGS.map(function(l){
    return '<button data-lang="'+l[0]+'" class="'+(S.lang===l[0]?"on":"")+'">'+l[1]+'</button>';}).join("")+'</div>';
}
function header(){
  var pg=document.body.getAttribute("data-page");
  var h='<div class="ribbon">'+(S.pays==="gr"? "<b>🇬🇷 "+t("gr")+"</b> · "+t("gr_line") : "<b>🇩🇿 "+t("dz")+"</b> · "+t("dz_line"))+'</div>'+
  '<header class="top"><div class="wrap">'+
  '<button class="burger" aria-label="menu"><span></span><span></span><span></span></button>'+
  '<a href="index.html" class="logo" aria-label="Vitrina"><span class="w">Vitr<i>i</i>na</span><span class="s">vintage · seconde main</span></a>'+
  '<nav class="main">'+
    '<a href="index.html" class="'+(pg==="home"?"on":"")+'">'+t("nav_home")+'</a>'+
    '<a href="boutique.html" class="'+(pg==="shop"||pg==="product"?"on":"")+'">'+t("nav_shop")+'</a>'+
    '<a href="vendre.html" class="'+(pg==="sell"?"on":"")+'">'+t("nav_sell")+'</a>'+
    '<a href="app.html">'+t("nav_app")+'</a>'+
  '</nav>'+
  '<div class="tools">'+langSeg("lang")+
    '<div class="seg" role="group" aria-label="'+t("country")+'"><button data-pays="dz" class="'+(S.pays==="dz"?"on":"")+'">🇩🇿 DZ</button><button data-pays="gr" class="'+(S.pays==="gr"?"on":"")+'">🇬🇷 GR</button></div>'+
    '<a href="panier.html" class="cartbtn"><span class="lbl">'+t("cart")+'</span><span>👜</span><span class="n" id="cartn">'+S.cart.length+'</span></a>'+
  '</div></div></header>'+
  '<div class="langbar">'+langSeg("")+'</div>';
  document.getElementById("hdr").innerHTML=h;
  document.querySelector(".burger").onclick=function(){document.querySelector("nav.main").classList.toggle("open")};
}
function footer(){
  var f='<section class="appbar"><div class="in"><div class="ico">V</div><div><b>'+t("appbar_t")+'</b><p>'+t("appbar_s")+'</p><div class="os"><span>📱 iPhone</span><span>🤖 Android</span></div></div><div class="bt"><a class="btn" href="app.html">'+t("appbar_b")+' <span class="arrow">→</span></a><a class="btn ghost" href="app.html#installer">'+t("appbar_i")+'</a></div></div></section>'+
  '<footer><div class="wrap"><div class="cols">'+
  '<div><a href="index.html" class="logo"><span class="w">Vitr<i>i</i>na</span><span class="s">vintage · seconde main</span></a><p class="tag">'+t("footer_tag")+'</p></div>'+
  '<div><h4>'+t("footer_shop")+'</h4><ul>'+["robes","hauts","bas","vestes","sacs"].map(function(c){return '<li><a href="boutique.html?cat='+c+'">'+t("cat_"+c)+'</a></li>'}).join("")+'</ul></div>'+
  '<div><h4>'+t("footer_help")+'</h4><ul><li><a href="index.html#how">'+t("faq_deliv")+'</a></li><li><a href="index.html#how">'+t("faq_pay")+'</a></li><li><a href="index.html#how">'+t("faq_ret")+'</a></li><li><a href="vendre.html">'+t("nav_sell")+'</a></li></ul></div>'+
  '<div><h4>TikTok</h4><ul><li><a href="https://www.tiktok.com/@vitrine_alg" target="_blank" rel="noopener">@vitrine_alg</a></li><li><a href="app.html">'+t("nav_app")+'</a></li></ul></div>'+
  '</div><div class="bot"><span>© 2026 Vitrina. '+t("rights")+'</span><span>Algérie · Ελλάδα</span></div></div></footer>';
  var v2=!!B, here=location.pathname.split("/").pop()||"index.html";
  f+='<a class="vswitch" href="'+(v2?"../":"moderne/")+here+location.search+'">'+(v2?VS[S.lang][0]:VS[S.lang][1])+' <span class="arrow">→</span></a>';
  document.getElementById("ftr").innerHTML=f;
}
function applyI18n(){
  document.documentElement.lang=S.lang;
  document.documentElement.dir = S.lang==="ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i]").forEach(function(el){ el.textContent=t(el.getAttribute("data-i")); });
  document.querySelectorAll("[data-ph]").forEach(function(el){ el.placeholder=t(el.getAttribute("data-ph")); });
}
function rerender(){ header(); footer(); applyI18n(); if(PAGES[page]) PAGES[page](); bind(); reveal(); }

function bind(){
  document.querySelectorAll("[data-lang]").forEach(function(b){ b.onclick=function(){ S.lang=b.getAttribute("data-lang"); sset("lang",S.lang); rerender(); }; });
  document.querySelectorAll("[data-pays]").forEach(function(b){ b.onclick=function(){ S.pays=b.getAttribute("data-pays"); sset("pays",S.pays); rerender(); }; });
  document.querySelectorAll(".quick").forEach(function(b){ b.onclick=function(e){ e.preventDefault(); add(b.getAttribute("data-id")); b.classList.add("ok"); b.textContent="✓"; }; });
}
function add(id){
  if(!inCart(id)){ S.cart.push(id); sset("cart",S.cart); }
  var n=document.getElementById("cartn"); if(n) n.textContent=S.cart.length;
  toast(t("added")+' <a href="panier.html">'+t("cart")+' →</a>');
}
var tt;
function toast(html){
  var el=document.querySelector(".toast"); if(!el){ el=document.createElement("div"); el.className="toast"; document.body.appendChild(el); }
  el.innerHTML=html; el.classList.add("on"); clearTimeout(tt); tt=setTimeout(function(){el.classList.remove("on")},2600);
}
function card(p,i){
  var tag = p.etat==="neuf" ? '<span class="tag n">'+t("cond_neuf")+'</span>' : (i<4 ? '<span class="tag">'+t("new_in")+'</span>' : '');
  return '<a class="pc rv'+(p.vendu?' sold':'')+'" data-sold="Vendue" href="produit.html?id='+p.id+'">'+
    '<div class="im"><img loading="lazy" src="'+img(p.id)+'" alt="'+esc(name(p))+'">'+tag+
    (p.vendu?'':'<button class="quick'+(inCart(p.id)?' ok':'')+'" data-id="'+p.id+'" aria-label="'+t("add")+'">'+(inCart(p.id)?'✓':'+')+'</button>')+'</div>'+
    '<div class="meta"><div><h3>'+esc(name(p))+'</h3><div class="sz">'+t("size")+' '+p.taille+' · '+(p.lieu==="gr"?"🇬🇷":"🇩🇿")+'</div></div><div class="pr">'+price(p)+'</div></div></a>';
}
function reveal(){
  var els=document.querySelectorAll(".rv:not(.in)");
  if(!("IntersectionObserver" in window)){ els.forEach(function(e){e.classList.add("in")}); return; }
  var io=new IntersectionObserver(function(en){ en.forEach(function(x){ if(x.isIntersecting){ x.target.classList.add("in"); io.unobserve(x.target);} }); },{rootMargin:"0px 0px -6% 0px"});
  els.forEach(function(e){io.observe(e)});
}
function q(k){ return new URLSearchParams(location.search).get(k); }
function live(){ return P.filter(function(p){return !p.vendu}); }

/* ---------- pages ---------- */
var PAGES={};
PAGES.home=function(){
  document.getElementById("statn").textContent=live().length;
  var md=byId("manteau-daim"); if(md){ document.getElementById("mini2n").textContent=name(md); document.getElementById("mini2s").textContent=t("size")+" "+md.taille+" · "+condTxt(md.etat); document.getElementById("mini2p").textContent=price(md); }
  document.getElementById("newin").innerHTML=live().slice(0,8).map(card).join("");
  var catImg={robes:"robe-satin-ivoire",hauts:"corset-dentelle-rouge",bas:"jupe-asymetrique-fleurie",vestes:"blouson-cuir-marron",sacs:"sac-denim-damier"};
  document.getElementById("cats").innerHTML=Object.keys(catImg).map(function(c){
    var n=live().filter(function(p){return p.cat===c}).length;
    return '<a class="cat rv" href="boutique.html?cat='+c+'"><img loading="lazy" src="'+img(catImg[c])+'" alt=""><span>'+t("cat_"+c)+'<small>'+n+' '+t("pieces")+'</small></span></a>';
  }).join("");
  document.querySelectorAll(".shore").forEach(function(s){
    s.classList.toggle("on", s.getAttribute("data-pays")===S.pays);
  });
  var mq=[t("hero_t1").replace(/[,،]$/,""),"Vintage","Seconde main","Μεταχειρισμένα","فينتاج","Preloved","Algérie","Ελλάδα"];
  var h=mq.concat(mq).map(function(x){return "<span>"+x+"</span><span>✦</span>"}).join("");
  document.getElementById("mq").innerHTML=h+h;
};
PAGES.shop=function(){
  var st={cat:q("cat")||"all",size:"all",from:"all",sort:"new"};
  var sizes=["S","M","L","Unique"];
  function chips(id,list,key,lab){
    document.getElementById(id).innerHTML=list.map(function(v){
      return '<button class="chip'+(st[key]===v?' on':'')+'" data-k="'+key+'" data-v="'+v+'">'+lab(v)+'</button>';}).join("");
  }
  function draw(){
    chips("fcat",["all","robes","hauts","bas","vestes","sacs"],"cat",function(v){return v==="all"?t("cat_all"):t("cat_"+v)});
    chips("fsize",["all"].concat(sizes),"size",function(v){return v==="all"?t("all"):v});
    chips("ffrom",["all","dz","gr"],"from",function(v){return v==="all"?t("all"):(v==="gr"?"🇬🇷 "+t("gr"):"🇩🇿 "+t("dz"))});
    var list=live().filter(function(p){
      return (st.cat==="all"||p.cat===st.cat)&&(st.size==="all"||p.taille===st.size)&&(st.from==="all"||p.lieu===st.from);
    });
    var key=S.pays==="gr"?"gr":"dz";
    if(st.sort==="up") list.sort(function(a,b){return a[key]-b[key]});
    if(st.sort==="down") list.sort(function(a,b){return b[key]-a[key]});
    document.getElementById("cnt").textContent=list.length+" "+t("pieces");
    document.getElementById("grid").innerHTML=list.length? list.map(card).join("") : '<p class="empty" style="grid-column:1/-1">'+t("none")+'</p>';
    document.querySelectorAll(".chip").forEach(function(c){ c.onclick=function(){ st[c.getAttribute("data-k")]=c.getAttribute("data-v"); draw(); }; });
    bind(); reveal();
  }
  var sel=document.getElementById("sort");
  sel.innerHTML=["new","up","down"].map(function(v){return '<option value="'+v+'">'+t("sort_"+v)+'</option>'}).join("");
  sel.onchange=function(){st.sort=sel.value;draw();};
  draw();
};
PAGES.product=function(){
  var p=byId(q("id"))||P[0];
  document.title=name(p)+" — Vitrina";
  var imgs=[p.id].concat(p.img2?[p.img2]:[]);
  var specs=[[t("size"),p.taille],[t("cond"),condTxt(p.etat)],[t("f_from"),fromTxt(p)],[t("f_cat"),t("cat_"+p.cat)]];
  var el=document.getElementById("pp");
  el.innerHTML='<div class="gal"><div class="main" id="mainimg"><img src="'+img(imgs[0])+'" alt="'+esc(name(p))+'"></div>'+
    (imgs.length>1?'<div class="th">'+imgs.map(function(x,i){return '<button class="'+(i?'':'on')+'" data-img="'+x+'"><img src="'+img(x)+'" alt=""></button>'}).join("")+'</div>':'')+'</div>'+
    '<div class="info"><div class="crumbs"><a href="boutique.html">'+t("nav_shop")+'</a> / <a href="boutique.html?cat='+p.cat+'">'+t("cat_"+p.cat)+'</a></div>'+
    '<h1>'+esc(name(p))+'</h1><div class="price">'+price(p)+'</div>'+
    '<div class="uniq">'+t("unique")+'</div>'+
    '<div class="specs">'+specs.map(function(s){return '<div><span>'+s[0]+'</span><b>'+s[1]+'</b></div>'}).join("")+'</div>'+
    '<button class="btn" id="addb">'+(inCart(p.id)?t("in_cart"):t("add"))+' <span class="arrow">→</span></button>'+
    '<ul class="assure"><li><i>🔒</i>'+t("secure")+'</li><li><i>🚚</i>'+(S.pays==="gr"?t("deliv_gr"):t("deliv_dz"))+'</li><li><i>✦</i>'+t("checked")+'</li><li><i>↺</i>'+t("returns")+'</li></ul></div>';
  document.getElementById("addb").onclick=function(){ add(p.id); this.innerHTML=t("in_cart")+' <span class="arrow">✓</span>'; };
  var m=document.getElementById("mainimg");
  m.onclick=function(){ m.classList.toggle("z"); };
  m.onmousemove=function(e){ if(!m.classList.contains("z"))return; var r=m.getBoundingClientRect(); m.firstChild.style.transformOrigin=((e.clientX-r.left)/r.width*100)+"% "+((e.clientY-r.top)/r.height*100)+"%"; };
  document.querySelectorAll("[data-img]").forEach(function(b){ b.onclick=function(){ m.firstChild.src=img(b.getAttribute("data-img")); document.querySelectorAll("[data-img]").forEach(function(x){x.classList.remove("on")}); b.classList.add("on"); }; });
  var sim=live().filter(function(x){return x.id!==p.id&&x.cat===p.cat}).concat(live().filter(function(x){return x.id!==p.id&&x.cat!==p.cat})).slice(0,4);
  document.getElementById("sim").innerHTML=sim.map(card).join("");
};
PAGES.cart=function(){
  var el=document.getElementById("cartbox");
  if(sget("done",false)){ sset("done",false); el.innerHTML='<div class="ok"><div class="big">'+t("order_ok_t")+'</div><p class="lead" style="margin:18px auto 28px">'+t("order_ok")+'</p><a class="btn" href="boutique.html">'+t("continue")+' <span class="arrow">→</span></a></div>'; return; }
  var items=S.cart.map(byId).filter(Boolean);
  if(!items.length){ el.innerHTML='<div class="ok"><div class="big">∅</div><p class="lead" style="margin:18px auto 28px">'+t("cart_empty")+'</p><a class="btn" href="boutique.html">'+t("continue")+' <span class="arrow">→</span></a></div>'; return; }
  var key=S.pays==="gr"?"gr":"dz", sub=items.reduce(function(a,p){return a+p[key]},0), sh=ship();
  var cityField = S.pays==="gr"
    ? '<label>'+t("f_city_gr")+'<input required placeholder="Αθήνα"></label>'
    : '<label>'+t("f_city_dz")+'<select required>'+WIL.map(function(w,i){return '<option>'+String(i+1).padStart(2,"0")+' — '+w+'</option>'}).join("")+'</select></label>';
  el.innerHTML='<div class="cart"><div>'+items.map(function(p){
      return '<div class="line"><a href="produit.html?id='+p.id+'"><img src="'+img(p.id)+'" alt=""></a><div><h3>'+esc(name(p))+'</h3><div class="sm">'+t("size")+' '+p.taille+' · '+condTxt(p.etat)+'</div><button class="rm" data-rm="'+p.id+'">'+t("remove")+'</button></div><div class="pr">'+price(p)+'</div></div>';
    }).join("")+'<p style="margin-top:22px"><a class="link" href="boutique.html">← '+t("continue")+'</a></p></div>'+
    '<form class="sum" id="order"><h2>'+t("cart_title")+'</h2>'+
    '<div class="row"><span>'+t("subtotal")+'</span><span>'+money(sub)+'</span></div>'+
    '<div class="row"><span>'+t("shipping")+'</span><span>'+money(sh)+'</span></div>'+
    '<div class="row t"><span>'+t("total")+'</span><span>'+money(Math.round((sub+sh)*100)/100)+'</span></div>'+
    '<div class="form"><b style="font-size:15px;margin-top:6px">'+t("your_info")+'</b>'+
    '<label>'+t("f_name")+'<input required autocomplete="name"></label>'+
    '<label>'+t("f_phone")+'<input required type="tel" placeholder="'+(S.pays==="gr"?"+30 69…":"+213 5… / 6… / 7…")+'"></label>'+cityField+
    '<label>'+t("f_addr")+'<input required></label>'+
    '<label>'+t("f_note")+'<textarea rows="2"></textarea></label>'+
    '<b style="font-size:15px;margin-top:6px">'+t("pay")+'</b><div class="pays"><label><input type="radio" name="pay" checked> '+t("pay_cod")+'</label>'+
    (S.pays==="gr"?'<label><input type="radio" name="pay"> '+t("pay_card")+'</label>':'')+'</div>'+
    '<button class="btn" style="justify-content:center;margin-top:8px">'+t("place_order")+' <span class="arrow">→</span></button></div></form></div>';
  document.querySelectorAll("[data-rm]").forEach(function(b){ b.onclick=function(){ S.cart=S.cart.filter(function(x){return x!==b.getAttribute("data-rm")}); sset("cart",S.cart); rerender(); }; });
  document.getElementById("order").onsubmit=function(e){ e.preventDefault(); S.cart=[]; sset("cart",[]); sset("done",true); rerender(); scrollTo(0,0); };
};
PAGES.sell=function(){
  var f=document.getElementById("sellf"), pv=document.getElementById("prev"), fi=document.getElementById("files");
  document.getElementById("drop").onclick=function(){fi.click()};
  fi.onchange=function(){ pv.innerHTML=""; Array.prototype.slice.call(fi.files,0,6).forEach(function(x){ var i=new Image(); i.src=URL.createObjectURL(x); pv.appendChild(i); }); };
  var ty=document.getElementById("ftype");
  ty.innerHTML=["robes","hauts","bas","vestes","sacs"].map(function(c){return '<option>'+t("cat_"+c)+'</option>'}).join("");
  f.onsubmit=function(e){ e.preventDefault(); f.innerHTML='<div class="ok" style="padding:40px 0"><div class="big">✓</div><p class="lead" style="margin:16px auto 0">'+t("sell_ok")+'</p></div>'; };
};
var WIL=["Adrar","Chlef","Laghouat","Oum El Bouaghi","Batna","Béjaïa","Biskra","Béchar","Blida","Bouira","Tamanrasset","Tébessa","Tlemcen","Tiaret","Tizi Ouzou","Alger","Djelfa","Jijel","Sétif","Saïda","Skikda","Sidi Bel Abbès","Annaba","Guelma","Constantine","Médéa","Mostaganem","M'Sila","Mascara","Ouargla","Oran","El Bayadh","Illizi","Bordj Bou Arréridj","Boumerdès","El Tarf","Tindouf","Tissemsilt","El Oued","Khenchela","Souk Ahras","Tipaza","Mila","Aïn Defla","Naâma","Aïn Témouchent","Ghardaïa","Relizane","Timimoun","Bordj Badji Mokhtar","Ouled Djellal","Béni Abbès","In Salah","In Guezzam","Touggourt","Djanet","El M'Ghair","El Meniaa"];

var page=document.body.getAttribute("data-page");
document.addEventListener("contextmenu",function(e){ if(e.target.tagName==="IMG") e.preventDefault(); });
document.addEventListener("dragstart",function(e){ if(e.target.tagName==="IMG") e.preventDefault(); });
rerender();
})();
