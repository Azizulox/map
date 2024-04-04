
var map = L.map("map", {
  center: [41.3, 69.3],
  zoom: 10,
  layers: [osm, cities],
});

var baseMaps = {
  OpenStreetMap: osm,
  "OpenStreetMap.HOT": osmHOT,
  Yandex: yandex,
  Karta:karta,
  Yol:yol,
  KKK:kkk,
  LLL:lll,
};

var overlayMaps = {
  Cities: cities,
  Shops: shopsContainer,
  magazin:MagazinContainer,
  cars: carsContainer,
  maktab: makatbContainer,
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
var baseMaps = {
  OpenStreetMap: osm,
  "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT,
};

layerControl.addOverlay(parks, "Parks");
