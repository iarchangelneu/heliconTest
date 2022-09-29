(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const data = [ {
        id: 1,
        name: "Коптильня 10л",
        price: 1200
    }, {
        id: 2,
        name: "Коптильня 20л",
        price: 1400
    }, {
        id: 3,
        name: "Коптильня 30л",
        price: 1600
    } ];
    window.onload = function() {
        let name = document.querySelectorAll(".product__name");
        let price = document.querySelectorAll(".product__price");
        let button = document.querySelectorAll(".product__btn");
        let totalPrice = document.querySelector(".total__count");
        for (let i = 0; i < data.length; i++) {
            name[i].innerHTML = data[i].name;
            price[i].innerHTML = data[i].price.toLocaleString();
        }
        button.forEach(((el, idx) => {
            el.onclick = function(event) {
                let target = event.target;
                target.classList.add("product__btn-active");
                target.innerHTML = "Добавлено";
                target.disabled = true;
                totalPrice.innerHTML = (parseInt(totalPrice.innerHTML.replace(/[^0-9,\s]/g, "")) + parseInt(data[idx].price)).toLocaleString();
            };
        }));
    };
    window["FLS"] = true;
    isWebp();
})();