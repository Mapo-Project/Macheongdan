(()=>{var e={529:()=>{!function(){function e(e){e.preventDefault();var t=e.target,n=function(e){var t,n=e.elements,o=Object.keys(n).filter((function(e){return"honeypot"!==n[e].name||(t=n[e].value,!1)})).map((function(e){return void 0!==n[e].name?n[e].name:n[e].length>0?n[e].item(0).name:void 0})).filter((function(e,t,n){return n.indexOf(e)==t&&e})),a={};return o.forEach((function(e){var t=n[e];if(a[e]=t.value,t.length){for(var o=[],r=0;r<t.length;r++){var l=t.item(r);(l.checked||l.selected)&&o.push(l.value)}a[e]=o.join(", ")}})),a.formDataNameOrder=JSON.stringify(o),a.formGoogleSheetName=e.dataset.sheet||"responses",a.formGoogleSendEmail=e.dataset.email||"",{data:a,honeypot:t}}(t),o=n.data;if(n.honeypot)return!1;!function(e){for(var t=e.querySelectorAll("button"),n=0;n<t.length;n++)t[n].disabled=!0}(t);var a=t.action,r=new XMLHttpRequest;r.open("POST",a),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){t.reset();var e=t.querySelector(".form-elements"),n=document.querySelector(".email__wrapper"),o=document.querySelector(".email__submited-text");n.style.display="none",o.style.display="block",e&&(e.style.display="none"),alert("메일이 제출되었습니다!");var a=t.querySelector(".thankyou_message");a&&(a.style.display="block")}};var l=Object.keys(o).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(o[e])})).join("&");r.send(l)}document.addEventListener("DOMContentLoaded",(function(){for(var t=document.querySelectorAll("form.gform"),n=0;n<t.length;n++)t[n].addEventListener("submit",e,!1)}),!1)}()}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(529);var e="새로운 마포 더 좋은 마포 청년 일자리 사업단",t=0,o=document.querySelector(".type_effect_text");setInterval((function(){["새","좋"].includes(e[t])&&(o.innerHTML+="<span>"),["새","로","운"].includes(e[t])?document.querySelector(".type_effect_text span:nth-child(1)").textContent+=e[t++]:["좋","은"].includes(e[t])?document.querySelector(".type_effect_text span:nth-child(2)").textContent+=e[t++]:o.innerHTML+=e[t++],t>e.length&&(t=0,o.innerHTML="")}),250);var a=document.createElement("script");a.src="https://www.youtube.com/iframe_api";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(a,r);var l,c=163,i=183;function s(e){l.seekTo(c),l.playVideo()}function u(e){e.data==YT.PlayerState.PLAYING&&setTimeout(d,1e3*(i-c))}function d(){l.seekTo(c)}window.onYouTubeIframeAPIReady=function(){l=new YT.Player("player",{playerVars:{autoplay:1,controls:0,mute:1},videoId:"ZKYHP3HyTGM",events:{onReady:s,onStateChange:u}})},document.querySelector(".home-background__scroll-down-wrapper").addEventListener("click",(function(){document.querySelector("#mapo-slogan").scrollIntoView({behavior:"smooth"})})),document.querySelector(".nav__logo-wrapper").addEventListener("click",(function(){document.querySelector("#home").scrollIntoView({behavior:"smooth"})}));var m=document.querySelectorAll(".nav__dropdown-content.introduce > h2");m[0].addEventListener("click",(function(){document.querySelector("#mapo-slogan").scrollIntoView({behavior:"smooth"})})),m[1].addEventListener("click",(function(){document.querySelector("#first-half-status").scrollIntoView({behavior:"smooth"})}));var v=document.querySelectorAll(".nav__dropdown-content.team > h2");v[0].addEventListener("click",(function(){document.querySelector("#develop-uiux").scrollIntoView({behavior:"smooth"})})),v[1].addEventListener("click",(function(){document.querySelector("#character").scrollIntoView({behavior:"smooth"})})),v[2].addEventListener("click",(function(){document.querySelector("#broadcast").scrollIntoView({behavior:"smooth"})}));var p=document.querySelectorAll(".nav__dropdown-content.ceremony > h2");p[0].addEventListener("click",(function(){document.querySelector("#chungnyun-think").scrollIntoView({behavior:"smooth"})})),p[1].addEventListener("click",(function(){document.querySelector("#Gyeongui-walk").scrollIntoView({behavior:"smooth"})})),p[2].addEventListener("click",(function(){document.querySelector("#Mapocity-tour").scrollIntoView({behavior:"smooth"})}));var y=document.querySelectorAll(".nav__dropdown-content.QnA > h2");y[0].addEventListener("click",(function(){document.querySelector("#way-to-come").scrollIntoView({behavior:"smooth"})})),y[1].addEventListener("click",(function(){document.querySelector("#contact-us").scrollIntoView({behavior:"smooth"})}));tns({container:".Gyeongui-walk__slider",slideBy:1,speed:400,nav:!1,controlsContainer:"#Gyeongui-walk__controls",prevButton:".Gyeongui-walk__previous",nextButton:".Gyeongui-walk__next",gutter:30,responsive:{1920:{items:4}}}),tns({container:".Mapocity-tour__slider",slideBy:1,speed:400,nav:!1,controlsContainer:"#Mapocity-tour__controls",prevButton:".Mapocity-tour__previous",nextButton:".Mapocity-tour__next",gutter:30,responsive:{1920:{items:4}}});var h=document.getElementById("kakaomap"),f=37.563875,k=126.909335,_={center:new kakao.maps.LatLng(f,k),level:5},w=new kakao.maps.LatLng(f,k),g=new kakao.maps.CustomOverlay({position:w,content:'<a href="https://map.kakao.com/link/map/마포청년일자리사업단,37.563875,126.909335" target="_blank"><div class="overlay-block">\n<div class="overlay-container">\n  <div class="overlay-wrapper">\n    <div class="icon-area">\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 26 26"\n        class="icon-place"\n      >\n        <path\n          fill-rule="evenodd"\n          d="M18.46 15.15a6.62 6.62 0 0 0 1.04-3.56A6.55 6.55 0 0 0 13 5a6.55 6.55 0 0 0-6.5 6.59c0 1.24.35 2.46 1.02 3.52l5.14 6.72c.17.23.5.23.68 0l5.12-6.68zM13 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"\n        ></path>\n      </svg>\n    </div>\n    <div class="text-area">\n      <div class="maintext-place">\n        <div class="maintext">마포청년일자리사업단</div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="overlay-pointer"></div>\n</div></a>',xAnchor:.11,yAnchor:1.3}),S=document.createElement("a");S.classList="show-kakaomap",S.href="https://map.kakao.com/link/map/마포청년일자리사업단,37.563875,126.909335",S.target="_blank",S.innerHTML='지도보기\n<svg\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 13 13"\n  class="show-kakaomap-marker"\n  aria-hidden="true"\n>\n  <path\n    fill-rule="evenodd"\n    d="M1 11.3L4.68 7.6a.5.5 0 0 1 .7.7L1.72 12H5.5a.5.5 0 1 1 0 1h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v3.8zm11-9.6L8.32 5.4a.5.5 0 0 1-.7-.7L11.28 1H7.5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 1 1-1 0V1.7z"\n  ></path>\n</svg>',h.appendChild(S);var L=new kakao.maps.Map(h,_),b=new kakao.maps.LatLng(f,k);L.setZoomable(!1),g.setMap(L),L.panTo(b);var q=document.querySelector(".email__input-name-placeholder"),E=document.querySelector(".email__input-name"),x=document.querySelector(".email__input-email-placeholder"),I=document.querySelector(".email__input-email"),M=document.querySelector(".email__input-message-placeholder"),T=document.querySelector(".email__input-message");function V(){q.style.display="none"}function A(){x.style.display="none"}function B(){M.style.display="none"}E.addEventListener("focus",V),E.addEventListener("blur",(function(){E.value?V():q.style.display="inline-block"})),I.addEventListener("focus",A),I.addEventListener("blur",(function(){I.value?A():x.style.display="inline-block"})),T.addEventListener("focus",B),T.addEventListener("blur",(function(){T.value?B():M.style.display="inline-block"}))})()})();