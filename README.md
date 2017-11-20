# leaflet-info-control

A simple Leaflet control that displays information about the map

## Example

```js
/*global map, L*/
/*jslint browser: true*/
map.addControl(new L.Control.InfoControl({
    position: "bottomright",
    content: "This map is awesome!"
}));
```
