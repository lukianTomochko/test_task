// Working of toggle buttons (on/off)

var clickedBtn = document.querySelectorAll(".options_btn");
var dataState = "";

clickedBtn.forEach(function (elem) {
    elem.addEventListener("click", function () {

        dataState = elem.getAttribute("data-state");

        if (dataState == "off") {
            elem.style.background = "#3861fb";
            elem.children[0].style.left = "19px";

            elem.setAttribute("data-state", "on");

        } else {
            elem.style.background = "#e4e4e4";
            elem.children[0].style.left = "2px";

            elem.setAttribute("data-state", "off");
        }

    });

});


// Working of section menu (on/off)

var sectionMenu = document.querySelectorAll(".block-options_menu");
var sectionMenuState = "";

sectionMenu.forEach(function (elem) {
    elem.addEventListener("click", function () {

        sectionMenuState = elem.getAttribute("data-state");

        if (sectionMenuState == "off") {
            elem.nextElementSibling.style.display = "flex";

            elem.setAttribute("data-state", "on");
        } else {
            elem.nextElementSibling.style.display = "none";

            elem.setAttribute("data-state", "off");
        }

    });

});

// Choosing a category & hiding section menu (when choosing a category)

var sectionsOfMenu = document.querySelectorAll(".options_menu div");
var sectionMenuTitle = "";

sectionsOfMenu.forEach(function (elem) {
    elem.addEventListener("click", function () {
        sectionMenuTitle = elem.getAttribute("data-option");

        elem.parentNode.style.display = "none";
        elem.parentNode.previousElementSibling.setAttribute("data-state", "off");

        elem.parentNode.previousElementSibling.innerHTML = sectionMenuTitle;
    });

});

// Delete category by click

var includedOptions = document.querySelectorAll(".included_option img");
includedOptions.forEach(function (elem) {
    elem.addEventListener("click", function () {
        elem.parentNode.style.display = "none";
    });
});

// Open and close modal window by click on details-btn

var detailsBtns = document.querySelectorAll(".btn-details");

detailsBtns.forEach(function (elem) {
    elem.addEventListener("click", function () {
        elem.nextElementSibling.classList.toggle("modal_window-active");
    });
});

// Close modal window by click on cross

var modalWindow_cross = document.querySelectorAll(".modal_window img");

modalWindow_cross.forEach(function (elem) {
    elem.addEventListener("click", function () {
        elem.parentNode.classList.toggle("modal_window-active");
    });

});

// Setting default settings

var default_btn = document.querySelector("#btn-default");

default_btn.addEventListener("click", function () {
    clickedBtn.forEach(function (elem) {
        elem.style.background = "#3861fb";
        elem.children[0].style.left = "19px";

        elem.setAttribute("data-state", "on");
    });

    sectionsOfMenu.forEach(function (elem) {
        elem.parentNode.previousElementSibling.innerHTML = "Мгновенно";
    });

});

// Opening and hiding Saving/Succes modal windows 

var save_btn = document.querySelector("#btn-save");

save_btn.addEventListener("click", function () {
    save_btn.parentNode.nextElementSibling.classList.toggle("modal_window-saving-active");
});

var btn_no = document.querySelector("#save_btn-no");
var btn_yes = document.querySelector("#save_btn-yes");

var btn_ok = document.querySelector("#save_btn-ok");

btn_no.addEventListener("click", function () {
    btn_no.parentNode.parentNode.classList.toggle("modal_window-saving-active");
});

btn_yes.addEventListener("click", function () {
    btn_yes.parentNode.parentNode.classList.toggle("modal_window-saving-active");
    btn_yes.parentNode.parentNode.nextElementSibling.classList.toggle("modal_window-saving-succes-active");
});

btn_ok.addEventListener("click", function () {
    btn_ok.parentNode.parentNode.classList.toggle("modal_window-saving-succes-active");
});
