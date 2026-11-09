var e={},t=new Set,n=new WeakSet,r=!0,i=void 0,a=!1;function o(e){a||(a=!0,r??=e?.prefetchAll??!1,i??=e?.defaultStrategy??`hover`,s(),c(),l(),d())}function s(){for(let e of[`touchstart`,`mousedown`])document.addEventListener(e,e=>{let t=e.target.closest(`a`);m(t,`tap`)&&f(t.href,{ignoreSlowConnection:!0})},{passive:!0})}function c(){let e;document.body.addEventListener(`focusin`,e=>{let n=e.target.closest(`a`);m(n,`hover`)&&t(n.href)},{passive:!0}),document.body.addEventListener(`focusout`,r,{passive:!0}),g(()=>{for(let e of document.getElementsByTagName(`a`))n.has(e)||m(e,`hover`)&&(n.add(e),e.addEventListener(`mouseenter`,e=>t(e.currentTarget.href),{passive:!0}),e.addEventListener(`mouseleave`,r,{passive:!0}))});function t(t){e&&clearTimeout(e),e=setTimeout(()=>{f(t)},80)}function r(){e&&=(clearTimeout(e),0)}}function l(){let e;g(()=>{for(let t of document.getElementsByTagName(`a`))n.has(t)||m(t,`viewport`)&&(n.add(t),e??=u(),e.observe(t))})}function u(){let e=new WeakMap;return new IntersectionObserver((t,n)=>{for(let r of t){let t=r.target,i=e.get(t);r.isIntersecting?(i&&clearTimeout(i),e.set(t,setTimeout(()=>{n.unobserve(t),e.delete(t),f(t.href)},300))):i&&(clearTimeout(i),e.delete(t))}})}function d(){g(()=>{for(let e of document.getElementsByTagName(`a`))m(e,`load`)&&f(e.href)})}function f(n,r){n=n.replace(/#.*/,``);let i=r?.ignoreSlowConnection??!1;if(p(n,i)){if(t.add(n),document.createElement(`link`).relList?.supports?.(`prefetch`)){let e=document.createElement(`link`);e.rel=`prefetch`,e.setAttribute(`href`,n),document.head.append(e)}else{let t=new Headers;for(let[n,r]of Object.entries(e))t.set(n,r);fetch(n,{priority:`low`,headers:t}).catch(()=>{})}}}function p(e,n){if(!navigator.onLine||!n&&h())return!1;try{let n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!t.has(e)}catch{}return!1}function m(e,t){if(e?.tagName!==`A`)return!1;let n=e.dataset.astroPrefetch;return n===`false`?!1:t===`tap`&&(n!=null||r)&&h()?!0:n==null&&r||n===``?t===i:n===t}function h(){if(`connection`in navigator){let e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function g(e){e();let t=!1;document.addEventListener(`astro:page-load`,()=>{t?e():t=!0}),new MutationObserver(t=>{for(let n of t)for(let t of n.addedNodes)if(t instanceof Element&&(t.tagName===`A`||t.querySelector?.(`a`))){e();return}}).observe(document.body,{childList:!0,subtree:!0})}function _(e={}){let{position:t=`right`,smoothScroll:n=!0,threshold:r=300,svgPath:i=`M18 15l-6-6-6 6`,svgStrokeWidth:a=`2`,borderRadius:o=`15`,showTooltip:s=!1,showProgressRing:c=!1,progressRingColor:l=`yellow`,showOnHomepage:u=!1}=e,d=((e,t)=>{if(typeof e==`string`)return e;if(typeof e!=`object`||!e)return`Scroll to top`;let n=t&&typeof t==`string`?t.toLowerCase().trim():``;if(!n){let t=e.en;return typeof t==`string`?t:`Scroll to top`}let r=e[n];return typeof r==`string`||n.includes(`-`)&&(r=e[n.split(`-`)[0]],typeof r==`string`)||(r=e.en,typeof r==`string`)?r:`Scroll to top`})(e.tooltipText,document.documentElement.lang),f=null,p=()=>document.querySelector(`.hero`)||document.querySelector(`.sl-hero`)||document.querySelector(`[data-page="index"]`)||document.querySelector(`.landing-page`)||document.querySelector(`.homepage`)||document.querySelector(`[data-starlight-homepage]`)||document.querySelector(`.site-hero`)||document.body.classList.contains(`homepage`)||document.body.classList.contains(`homepage`)||document.body.classList.contains(`landing`)||document.querySelector(`main.sl-main`)&&document.querySelector(`main.sl-main .hero, main.sl-main .sl-hero`),m=()=>{if(f&&f(),p()&&!u)return;let e=document.createElement(`button`);e.id=`scroll-to-top-button`,e.ariaLabel=d,e.setAttribute(`aria-describedby`,s?`scroll-to-top-tooltip`:``),e.setAttribute(`role`,`button`),e.setAttribute(`tabindex`,`0`);let m=!1;e.innerHTML=`
      ${c?`
      <svg class="scroll-progress-ring" 
           width="47"   
           height="47" 
           viewBox="0 0 47 47"
           style="position: absolute; top: 0; left: 0;">
        <!-- Background circle -->
        <circle cx="23.5" cy="23.5" r="22" 
                fill="none" 
                stroke="${l}" 
                stroke-width="3" 
                opacity="0.2" />
        <!-- Progress circle -->
        <circle cx="23.5" cy="23.5" r="22" 
                fill="none" 
                stroke="${l}" 
                stroke-width="3" 
                stroke-linecap="round"
                class="scroll-progress-circle"
                style="transform: rotate(-90deg); transform-origin: center;" />
      </svg>
      `:``}
      <svg xmlns="http://www.w3.org/2000/svg" 
           width="35" 
           height="35" 
           viewBox="0 0 24 24"            
           fill="none" 
           stroke="currentColor" 
           stroke-width="${a}" 
           stroke-linecap="round" 
           stroke-linejoin="round"
           style="position: relative; z-index: 1;">
        <path d="${i}"/>
      </svg>
    `;let h=document.createElement(`div`);h.id=`scroll-to-top-tooltip`,h.textContent=d;let g=document.createElement(`div`);g.style.cssText=`
    position: absolute;
    top: 100%; /* Position below the tooltip */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--sl-color-gray-7);
  `;let _=document.createElement(`style`);_.id=`scroll-to-top-styles`,_.textContent=`
    .scroll-to-top-button {
      position: fixed;
      bottom: 40px;
      width: 47px;
      height: 47px;
      ${t===`left`?`left: 40px;`:t===`right`?`right: 35px;`:`left: 50%;`}
      border-radius: ${o}%;     
      background-color: var(--sl-color-accent);       
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;      
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transform: ${t===`center`?`translateX(-50%) scale(0)`:`scale(0)`};
      transition: opacity 0.3s ease, visibility 0.3s ease, background-color 0.3s ease, transform 0.3s ease;      
      z-index: 100;            
      border: 1px solid var(--sl-color-accent);
      transform-origin: center;
      -webkit-tap-highlight-color: transparent; /* Disable mobile tap highlight */
      touch-action: manipulation; /* Prevent double-tap zoom */
      box-shadow: 0 0 0 1px rgba(0,0,0,0.04),0 4px 8px 0 rgba(0,0,0,0.2);
    }
      .scroll-to-top-button:active {
        background-color: var(--sl-color-accent-dark); 
        color: var(--sl-text-white);        
        transition: background-color 0.1s ease, transform 0.1s ease; 
     }
      .scroll-to-top-button.visible {
        opacity: 1;
        visibility: visible;
        transform: ${t===`center`?`translateX(-50%) scale(1)`:`scale(1)`};        
      }

      .scroll-to-top-button:hover {
        background-color: var(--sl-color-accent-low); 
        box-shadow: 0 0 0 1px rgba(0,0,0,0.04),0 4px 8px 0 rgba(0,0,0,0.2);
        color: var(--sl-color-accent);
        border-color: var(--sl-color-accent);     
      }
      
      .scroll-to-top-button.keyboard-focus {
        outline: 2px solid var(--sl-color-text);
        outline-offset: 2px;
      }

      .scroll-to-top-btn-tooltip {
        position: absolute;
        ${t===`left`?`left: -25px;`:`right: -22px;`}
        top: -47px;
        background-color: var(--sl-color-gray-7);
        color: var(--sl-color-text);
        padding: 5px 10px;
        border-radius: 4px;
        font-weight: 400;
        font-size: 14px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s, visibility 0.3s;
        pointer-events: none;
     }
      .scroll-to-top-btn-tooltip.visible {
        opacity: 1;
        visibility: visible;        
      }

      /* Progress ring styles */
      .scroll-progress-ring {
        pointer-events: none;
      }
      
      .scroll-progress-circle {
        stroke-dasharray: 138.23; /* 2 * π * r = 2 * π * 22 ≈ 138.23 */
        stroke-dashoffset: 138.23;
        transition: stroke-dashoffset 0.1s ease;
      }
    `,document.head.appendChild(_),e.classList.add(`scroll-to-top-button`),document.body.appendChild(e),s&&(h.classList.add(`scroll-to-top-btn-tooltip`),h.appendChild(g),e.appendChild(h));let v=()=>{h.classList.remove(`visible`)},y=()=>{s&&h.classList.add(`visible`)};e.addEventListener(`mouseenter`,()=>{y()}),e.addEventListener(`mouseleave`,()=>{v()});let b=()=>{v(),window.scrollTo({top:0,behavior:n?`smooth`:`auto`}),e.classList.remove(`active`)};document.addEventListener(`keydown`,e=>{e.key===`Tab`&&(m=!0)}),e.addEventListener(`mousedown`,()=>{m=!1}),e.addEventListener(`keydown`,t=>{t.key===`Enter`&&(b(),e.classList.remove(`keyboard-focus`))}),e.addEventListener(`focus`,()=>{m&&(y(),e.classList.add(`keyboard-focus`))}),e.addEventListener(`blur`,()=>{v(),e.classList.remove(`keyboard-focus`)}),e.addEventListener(`touchstart`,t=>{t.preventDefault(),e.classList.add(`active`)}),e.addEventListener(`touchend`,t=>{t.preventDefault(),b(),e.classList.remove(`active`)}),e.addEventListener(`click`,e=>{e.preventDefault(),b()});function x(e,t){let n;return function(){let r=arguments,i=this;n||(e.apply(i,r),n=!0,setTimeout(()=>n=!1,t))}}let S=()=>{let t=window.scrollY,n=window.innerHeight,i=t/(document.documentElement.scrollHeight-n);if(c){let t=e.querySelector(`.scroll-progress-circle`);if(t){let e=i*100;e>=99.5&&(e=100),e<0&&(e=0);let n=138.23,r=n-e/100*n;t.style.strokeDashoffset=r.toString()}}t>(r>0?r:300)?e.classList.add(`visible`):e.classList.remove(`visible`)},C=x(S,16);window.addEventListener(`scroll`,C),S();let w=()=>{document.documentElement.classList.contains(`theme-dark`)?(h.style.backgroundColor=`var(--sl-color-gray-7)`,h.style.color=`var(--sl-color-text)`,g.style.borderTopColor=`var(--sl-color-gray-7)`):(h.style.backgroundColor=`black`,h.style.color=`white`,g.style.borderTopColor=`black`)};w();let T=new MutationObserver(w);T.observe(document.documentElement,{attributes:!0,attributeFilter:[`class`]});function E(){Math.round(window.outerWidth/window.innerWidth*100)/100>3?e.style.display=`none`:e.style.display=`flex`}return window.addEventListener(`resize`,E),E(),f=()=>{window.removeEventListener(`scroll`,C),window.removeEventListener(`resize`,E),T.disconnect(),e&&e.parentNode&&e.parentNode.removeChild(e);let t=document.getElementById(`scroll-to-top-styles`);t&&t.remove()},f},h=()=>{setTimeout(m,10)};document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,h):h(),document.addEventListener(`astro:page-load`,h),document.addEventListener(`astro:before-preparation`,()=>{f&&f()})}_({position:`right`,tooltipText:{en:`Scroll to top`,fr:`Retour en haut`},smoothScroll:!0,threshold:300,svgPath:`M18 15l-6-6-6 6`,svgStrokeWidth:`2`,borderRadius:`15`,showTooltip:!1,showProgressRing:!1,progressRingColor:`yellow`,showOnHomepage:!1}),o();export{_ as default};