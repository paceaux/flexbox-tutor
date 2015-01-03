"use strict";
/* Prototype Mods
*/
HTMLElement.prototype.removeClassByPartialName = function (partialName) {
    var classArray = this.className.split(' '), el = this;
    classArray.forEach(function(elClassName, i) {
        if (elClassName.indexOf(partialName) !== -1) {
            el.className = el.className.replace(elClassName,'');
        }
        el.className = el.className.replace(/\s+/g," ");
    });
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
        removeClassByPartial: function (element, classPartial) {
            var classArray = element.className.split(' '),
                elToRemove;
            classArray.forEach(function(classItem, i) {
                if (classItem.indexOf(classPartial) !== -1) {
                    console.log(classItem);
                    element.className = element.className.replace(classItem,'');
                    element.className = element.className.replace(/\s+/g," ");
                }
            });
        }
    },
    uiEvents: {
        justifyChange: function (e) {
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

        }
    },
    bindUiEvents: function () {
        var _uiEvents = demoTools.uiEvents;
        $('.js-propertySwitcher').on('change', _uiEvents.justifyChange);
        $('#js-cloneItem').on('click', _uiEvents.cloneItem);
    },
    activatePlugins: function () {

    },
    functions: {}
};
demoTools.init();