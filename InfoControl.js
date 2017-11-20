/*global L, window*/
/*jslint browser: true, this: true*/

if (typeof window !== "object") {
    throw "Leaflet does not work outside a browser.";
}

L.Control.InfoControl = L.Control.extend({
    initialize: function (options) {
        "use strict";
        L.Util.setOptions(this, options);
    },
    onAdd: function () {
        "use strict";
        var container = L.DomUtil.create("div", "info-control leaflet-control-attribution");
        container.innerHTML = this.options.content;
        return container;
    },
    getContent: function () {
        "use strict";
        return this.getContainer().innerHTML;
    },
    setContent: function (html) {
        "use strict";
        this.getContainer().innerHTML = html;
    }
});
