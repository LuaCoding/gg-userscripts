// ==UserScript==
// @name         community button fixer
// @description  reverts the community button's destination back to parties
// @version      1.0
// @author       Lua
// @match        *://*.geoguessr.com/*
// @grant        none
// @copyright    2026, Lua (https://github.com/LuaCoding)
// @license      MIT
// @downloadURL  https://raw.githubusercontent.com/LuaCoding/gg-userscripts/refs/heads/main/partybutton.js
// @updateURL    https://raw.githubusercontent.com/LuaCoding/gg-userscripts/refs/heads/main/partybutton.js
// ==/UserScript==

document.addEventListener("click", (e) => {
    const n = e.target.closest("a,button,div,span");
    if (!n) return;

    if ((n.textContent || "").trim() === "Community") {
        e.preventDefault();
        e.stopPropagation();
        location.assign("/community/parties");
    }
}, true);