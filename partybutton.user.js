// ==UserScript==
// @name         community button fixer
// @description  reverts the community button's destination back to parties
// @version      1.1
// @author       Lua
// @match        *://*.geoguessr.com/*
// @grant        none
// @copyright    2026, Lua (https://github.com/LuaCoding)
// @license      MIT
// @downloadURL  https://raw.githubusercontent.com/LuaCoding/gg-userscripts/refs/heads/main/partybutton.user.js
// @updateURL    https://raw.githubusercontent.com/LuaCoding/gg-userscripts/refs/heads/main/partybutton.user.js
// ==/UserScript==
document.addEventListener("click", (e) => {
    const n = e.target.closest('a[href="/community/clubs"]');
    if (!n) return;
    e.preventDefault();
    e.stopPropagation();
    location.assign("/community/parties");
}, true);