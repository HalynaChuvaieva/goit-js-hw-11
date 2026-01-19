import{a as f,S as m,i as p}from"./assets/vendor-MgecxatS.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h=o=>f.get("https://pixabay.com/api/",{params:{key:"54255152-2d8d878a583dc14505a7d5e94",q:o,image_type:"photo",safesearch:!0}}).then(r=>r.data),n=document.querySelector(".gallery"),y=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),g=o=>{const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:u,downloads:d})=>`<li class="gallery-item">
            <a class="gallery-link" href="${a}">
                <img
                    class="gallery-image"
                    src="${s}"
                    data-source="${a}"
                    alt="${e}"
                    width = "360"
                    height = "152"
                />
                <ul class="features">
                    <li class="feature">Likes <br /> <span class="text">${t}</span></li>
                    <li class="feature">Views <span class="text">${i}</span></li>
                    <li class="feature">Comments <span class="text">${u}</span></li>
                    <li class="feature">Downloads <span class="text">${d}</span></li>
                </ul>
            </a>
        </li>`).join("");n.innerHTML+=r,y.refresh()};function L(){n.innerHTML=""}const l=document.querySelector(".loader");function b(){l.classList.remove("is-hidden")}function x(){l.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",S);function S(o){o.preventDefault(),L(),b();const r=c.elements["search-text"].value.trim();r!==""&&h(r).then(s=>{if(x(),s.hits.length===0){p.show({message:"Sorry, there are no images matching your search query.",position:"topRight",color:"red",icon:"material-icons",iconText:"block"});return}console.log(s.hits),g(s.hits)}).catch(s=>{console.error(s)})}
//# sourceMappingURL=index.js.map
