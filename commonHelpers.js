import{f as m,i as y}from"./assets/vendor-77e16229.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const d=document.querySelector("#datetime-picker"),r=document.querySelector("#start-button");let s=null,c=null;m(d,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){s=o[0],s<new Date?(y.error({title:"Error",message:"Please choose a date in the future"}),r.disabled=!0):r.disabled=!1}}),r.addEventListener("click",()=>{console.log("Timer started"),r.disabled=!0,d.disabled=!0,c=setInterval(()=>{const u=s-new Date;if(console.log("Time left:",u),u<=0){clearInterval(c),document.querySelector("[data-days]").textContent="00",document.querySelector("[data-hours]").textContent="00",document.querySelector("[data-minutes]").textContent="00",document.querySelector("[data-seconds]").textContent="00";return}const{days:a,hours:i,minutes:l,seconds:f}=t(u);console.log({days:a,hours:i,minutes:l,seconds:f}),document.querySelector("[data-days]").textContent=n(a),document.querySelector("[data-hours]").textContent=n(i),document.querySelector("[data-minutes]").textContent=n(l),document.querySelector("[data-seconds]").textContent=n(f)},1e3)});function t(o){return{days:Math.floor(o/864e5),hours:Math.floor(o%864e5/36e5),minutes:Math.floor(o%864e5%36e5/6e4),seconds:Math.floor(o%864e5%36e5%6e4/1e3)}}function n(o){return String(o).padStart(2,"0")}});
//# sourceMappingURL=commonHelpers.js.map
