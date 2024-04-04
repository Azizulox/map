
var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png");

var osmHOT = L.tileLayer(
  "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
);

const yandex = L.tileLayer(
  "http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
);

const karta =  L.tileLayer(
 "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
)

const yol = L.tileLayer(
  "http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
)

const kkk = L.tileLayer(
  "http://services.arcgisonline.com/arcgis/rest/services/Specialty/World_Navigation_Charts/MapServer/tile/{z}/{y}/{x}"
)

const lll = L.tileLayer(
  "http://services.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
)