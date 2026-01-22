import{a as m,S as p,i as n}from"./assets/vendor-MgecxatS.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h=o=>m.get("https://pixabay.com/api/",{params:{key:"54255152-2d8d878a583dc14505a7d5e94",q:o,image_type:"photo",safesearch:!0,orientation:"horizontal"}}).then(r=>r.data),l=document.querySelector(".gallery"),y=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),g=o=>{const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:d,downloads:f})=>`<li class="gallery-item">
            <a class="gallery-link" href="${i}">
                <img
                    class="gallery-image"
                    src="${s}"
                    data-source="${i}"
                    alt="${e}"
                    width = "360"
                    height = "152"
                />
                <ul class="features">
                    <li class="feature">Likes <br /> <span class="text">${t}</span></li>
                    <li class="feature">Views <span class="text">${a}</span></li>
                    <li class="feature">Comments <span class="text">${d}</span></li>
                    <li class="feature">Downloads <span class="text">${f}</span></li>
                </ul>
            </a>
        </li>`).join("");l.innerHTML+=r,y.refresh()};function L(){l.innerHTML=""}const c=document.querySelector(".loader");function b(){c.classList.remove("is-hidden")}function x(){c.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",w);function w(o){o.preventDefault();const r=u.elements["search-text"].value.trim();r!==""&&(L(),b(),h(r).then(s=>{if(s.hits.length===0){n.show({message:"Sorry, there are no images matching your search query.",position:"topRight",color:"red",icon:"material-icons",iconText:"block"});return}console.log(s.hits),g(s.hits)}).catch(s=>{console.error(s),n.show({message:"Помилка запиту",position:"topRight",color:"red",icon:"material-icons",iconText:"block"})}).finally(()=>{x()}))}
//# sourceMappingURL=index.js.map
