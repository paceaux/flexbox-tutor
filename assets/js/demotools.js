"use strict";
/* Prototype Mods
*/
HTMLElement.prototype.removeClassByPartialName = function (partialName) {
    var classArray = this.className.split(' '), el = this;
    classArray.forEach(function(elClassName, i) {
        if (elClassName.indexOf(partialName) !== -1) {
            el.className = el.className.replace(elClassName,'');
        }
    });
    el.className = el.className.replace(/\s+/g," ");
};

/*
Demo JS
*/
var demoTools;

demoTools = {
    init: function () {
        var _this = demoTools;
        _this.bindUiEvents();
        _this.activatePlugins();
    },
    data: {},
    helpers: {
    },
    uiEvents: {
        inputChange: function (e) {
            var _this = demoTools,
                value = this.value,
                classPrefix = this.dataset.classprefix,
                targetEls = document.querySelectorAll('.' + this.dataset.updatetoclass);
            [].forEach.call(targetEls, function (el, i) {
                el.removeClassByPartialName(classPrefix);
                $(el).addClass( (classPrefix + value ));
            });

        },
        numberChange: function (e) {
            var _this = demoTools,
                value = this.value,
                classPrefix = this.dataset.classprefix,
                targetEls = document.querySelectorAll('.' + this.dataset.updatetoclass);
            [].forEach.call(targetEls, function (el, i) {
                el.removeClassByPartialName(classPrefix);
                $(el).addClass( (classPrefix + value ));
            });
        },
        cloneItem: function (e) {
            e.preventDefault();
            var _this = demoTools,
                targetEl = document.querySelector(this.dataset.cloneofselector),
                clone =    targetEl.cloneNode(true);
            targetEl.parentNode.appendChild(clone);
            _this.activatePlugins();

        },
        figureContextMenu: function (e) {
            e.preventDefault();
            console.log(e);
            var coords = {x: e.clientX, y: e.clientY},
                menu = document.getElementById('contextmenu');
            $('.promo').find('.hasMenu').removeClass('hasMenu');
            $(this).addClass('hasMenu');
            menu.style.display = "block";
            menu.style.position = "fixed";
            menu.style.left = coords.x + 'px';
            menu.style.top = coords.y + 'px';
        },
        figureContextMenuMouseout: function (e) {
            var menu = document.getElementById('contextmenu');
            menu.style.display = 'none';
        }
    },
    bindUiEvents: function () {
        var _uiEvents = demoTools.uiEvents;
        $('.js-propertySwitcher').on('change', _uiEvents.inputChange);
        $('#js-cloneItem').on('click', _uiEvents.cloneItem);
        $('.promo__figure').on('contextmenu', _uiEvents.figureContextMenu);
        $('.tutor__field--contextmenu').on('mouseleave', _uiEvents.figureContextMenuMouseout);

    },
    activatePlugins: function () {
        $('.promo__figure').editable({stylable: true})
    },
    functions: {}
};
demoTools.init();