/*global L*/
var InfoControl = L.Control.extend({
    initialize: function (options) {
        'use strict';
        L.Util.setOptions(this, options);
    },
    onAdd: function () {
        'use strict';
        var container = L.DomUtil.create('div', 'info-control leaflet-control-attribution');
        container.innerHTML = this.options.content;
        return container;
    },
    getContent: function () {
        return this.getContainer().innerHTML;
    },
    setContent: function (html) {
        this.getContainer().innerHTML = html;
    }
});
