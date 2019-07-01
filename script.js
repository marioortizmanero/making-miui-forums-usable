// ==UserScript==
// @name         Making MIUI forums usable
// @description  Disable all the annoying crap from the MIUI forums
// @version      1.3.4
// @author       Mario O.M.
// @namespace    https://github.com/marioortizmanero/
// @match        http://*.miui.com/*
// @match        https://*.miui.com/*
// @grant        none
// ==/UserScript==

// This script was based on https://greasyfork.org/en/scripts/23378-miui-medal-block/code by the user Diathedia.
// Created on 30/12/18 so not everything could be up to date. Last update: 31/12/18.
(function() {
    'use strict';
    var experience_widget = document.getElementsByClassName("cm"); // Experience widget under upvoted posts
    var medals = document.getElementsByClassName("md_ctrl"); // Big medals in the user data
    var sign = document.getElementsByClassName("sign"); // Signature under the comments
    var userdata = document.getElementsByClassName("pil cl"); // Credits and such data under the profile image
    var icon = document.getElementsByClassName("b_rad_5"); // Profile icons
    var exp_bar = document.getElementsByClassName("pbg2"); // Small experience bar under the profile icon
    var small_medals = document.getElementsByClassName("start"); // Small medals under the profile icon
    var margins1 = document.getElementsByClassName('plc'); // Margins between comments 1
    var margins2 = document.getElementsByClassName('t_fsz'); // Margins between comments 2
    var stamp = document.getElementById('threadstamp'); // Stamp in some posts

    while (experience_widget.length > 0) {
        experience_widget[0].parentNode.removeChild(experience_widget[0]);
    }
    while (medals.length > 0) {
        medals[0].parentNode.removeChild(medals[0]);
    }
    while (sign.length > 0) {
        sign[0].parentNode.removeChild(sign[0]);
    }
    while (userdata.length > 0) {
        userdata[0].parentNode.removeChild(userdata[0]);
    }
    while (icon.length > 0) {
        icon[0].parentNode.removeChild(icon[0]);
    }
    while (exp_bar.length > 0) {
        exp_bar[0].parentNode.removeChild(exp_bar[0]);
    }
    while (small_medals.length > 0) {
        small_medals[0].parentNode.removeChild(small_medals[0]);
    }
    for (let i = 0; i < margins1.length; i++) {
        margins1[i].style.padding = "4px 10px";
    }
    for (let i = 0; j < margins2.length; j++) {
        margins2[j].style.minHeight = "40px";
    }
    stamp.style.display = "none";
})();
