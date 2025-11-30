import{a as l,S as u,i}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();function d(o){const s="https://pixabay.com",n="/api/",e=new URLSearchParams({key:"53366828-bd78e2a0684a00ed0fbe9f50e",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${s}${n}?${e}`;return l.get(t).then(r=>r.data)}const p=new u(".gallery a",{captionsData:"alt",captionPosition:"bottom"});function f(o){const s=document.querySelector(".gallery"),n=o.map(e=>`
      <li>
        <a href="${e.largeImageURL}" title="${e.tags}">
          <img src="${e.webformatURL}" alt="${e.tags}">
        </a>
        <div class="info">
          <p>Likes: <span class="value">${e.likes}</span></p>
          <p>Views: <span class="value">${e.views}</span></p>
          <p>Comments: <span class="value">${e.comments}</span></p>
          <p>Downloads: <span class="value">${e.downloads}</span></p>
        </div>
      </li>
    `).join("");s.insertAdjacentHTML("beforeend",n),p.refresh()}function m(){const o=document.querySelector(".gallery");o.innerHTML=""}function y(){document.querySelector(".loader").classList.remove("is-hidden")}function h(){document.querySelector(".loader").classList.add("is-hidden")}const g=document.querySelector(".form"),c=document.querySelector('input[name="search-text"]');g.addEventListener("submit",o=>{o.preventDefault();const s=c.value.trim();if(c.value="",c.focus(),s===""){i.error({message:"Please enter text!",position:"topCenter"});return}y(),m(),d(s).then(n=>{const e=n.hits;if(e.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",backgroundColor:"red",timeout:3e3,pauseOnHover:!0,messageColor:"white"});return}console.log(e),f(e)}).catch(n=>{console.error(n),i.error({message:"Not connecting, Please try again! ",position:"center",backgroundColor:"yellow"})}).finally(()=>{h()})});
//# sourceMappingURL=index.js.map
