import{a as f,S as d,i}from"./assets/vendor-B4VkUtbg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="57671668-b0fb5fa9413307bc5c891a87a";function m(s){return f("https://pixabay.com/api/",{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}}).then(o=>o.data.hits)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new d(".gallery-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function h(s){const o=s.map(t=>`
<li class="gallery-item">
<a class="gallery-link" href="${t.largeImageURL}">
<img class="gallery-image"
src="${t.webformatURL}"
alt="${t.tags}"/></a>
<div class="info-box">
<p class="info">Likes - ${t.likes}</p>
<p class="info">Views - ${t.views}</p>
<p class="info">Comments - ${t.comments}</p>
<p class="info">Downloads - ${t.downloads}</p>
</div>
</li>`).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){l.innerHTML=""}function L(){c.classList.remove("hidden")}function b(){c.classList.add("hidden")}const u=document.querySelector(".form"),v=document.querySelector('input[type="text"]');u.addEventListener("submit",w);function w(s){s.preventDefault();const o=v.value.trim().toLowerCase();o&&(L(),g(),m(o).then(t=>{t.length>0?h(t):i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>{console.error(t),i.error({title:"Error",message:"Please try again!"})}).finally(()=>{b(),u.reset()}))}
//# sourceMappingURL=index.js.map
