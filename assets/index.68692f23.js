(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const l=(()=>{const o=(()=>{const e=document.getElementById("hamburgerMenu"),t=document.getElementById("hamburgerDoc"),s=document.querySelectorAll(".close-menu--doc"),n=document.querySelector("body");return{getHamburgerMenuDoc:t,getAllBtnCloseMenuDoc:s,getHamburgerMenu:e,getBody:n}})(),c=()=>{const e=o.getHamburgerMenuDoc,t=o.getAllBtnCloseMenuDoc,s=o.getHamburgerMenu,n=o.getBody;s&&s.addEventListener("click",()=>{s.closest(".header").classList.toggle("activeMenu"),s.classList.toggle("animate"),s.classList.contains("animate")?n.style.overflow="hidden":n.style.overflow="inherit"}),e&&e.addEventListener("click",()=>{e.closest(".documentation__menu").classList.add("menuDoc-active")}),t&&t.forEach(i=>{i.addEventListener("click",()=>{e.closest(".documentation__menu").classList.remove("menuDoc-active")})})},a=()=>{const e=o.getHamburgerMenuDoc,t=()=>{window.scrollY>=60?e.closest(".hamburger__mobile").classList.add("fixed"):e.closest(".hamburger__mobile").classList.remove("fixed")};window.addEventListener("scroll",t),t()};return{getChildsNav:function(){c(),a()}}})(),d=()=>{l.getChildsNav()},u=(()=>{function r(){const o=document.querySelectorAll(".tab-general__btn a"),c=document.querySelectorAll(".tab-general__ctn"),a=(t,s)=>{t.forEach((n,i)=>{n.setAttribute(`data-${s}`,i)})};a(o,"tabbtn"),a(c,"tabctn");const e=localStorage.getItem("tabPosition");e?(o[e].classList.add("active"),c[e].classList.add("active")):(o[0].classList.add("active"),c[0].classList.add("active")),o.forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.tabbtn;localStorage.setItem("tabPosition",s),c.forEach(n=>{const i=n.dataset.tabctn;s==i?n.classList.add("active"):n.classList.remove("active")}),o.forEach(n=>{n.classList.remove("active")}),t.classList.add("active")})})}return{getChildsTab:function(){r()}}})(),g=()=>{u.getChildsTab()},m=(()=>{const r=()=>{document.querySelectorAll(".copy-code").forEach(c=>{c.addEventListener("click",()=>{const a=c.dataset.copy;c.dataset.tag?navigator.clipboard.writeText(`<${a}>`):navigator.clipboard.writeText(a),c.classList.add("active"),setTimeout(()=>{c.classList.remove("active")},1e3)})})};return{getChildsCopyCode:function(){r()}}})(),f=()=>{m.getChildsCopyCode()};window.addEventListener("load",()=>{d(),g(),f()});
