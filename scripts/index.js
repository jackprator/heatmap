var map = L.map('map').setView([27.929441, -82.497891], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/jackprator/cljmy3znx00ih01pa96ppctqy/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamFja3ByYXRvciIsImEiOiJja3czcGNmbHM4bjYyMm5zMWdsaDg4OHRsIn0.SmtHCgBGdozIbWaRPgEPww', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

    var heatIcon = L.icon({
    iconUrl: 'images/heat_icon.png',
    iconSize:     [30, 30], // size of the icon
});

var shadeIcon = L.icon({
    iconUrl: 'images/shade_icon.png',
    iconSize:     [30, 30], // size of the icon
});

//heat
L.marker([27.944647, -82.501494], {icon: heatIcon}).addTo(map)
    .bindPopup("<h1>Benjamin Brown, 75</h1><p><b>'It's very oppressive. It's not comfortable. But if you got to do it, you just have to do it.'</b> <p>Brown walks to get where he is going every day, whether that's to work an evening shift at Sally O' Neal's Pizza, a doctor's appointment or a visit with a friend. He wished South Tampa bus stops had more shade for elderly people like him. Quote testing SoundCite here.</p><img src='images/brown_1.jpeg'/>")
    .openPopup();  

L.marker([27.940999, -82.493459], {icon: heatIcon}).addTo(map)
    .bindPopup("<h1>Heath Buckley, 19</h1><p>Buckley works for TCD Traffic Control Devices. On July 6, he worked to prepare the area before pouring a concrete foundation at the corner.</p><img src='images/buckley_1.jpeg'/>")
    .openPopup();  

L.marker([27.948516, -82.497396], {icon: heatIcon}).addTo(map)
    .bindPopup("<h1>Angela Morris, 33</h1><p>Morris works to hose off the sand off of her kids stuff after spending a few days at the beach. Her new construction home lacks large trees and has no shade on the street. This, in addition to a lack of sidewalks, mens she doesn't let her kids play in the front yard.</p><img src='images/morris_1.jpeg'/>")
    .openPopup();  

//shade
L.marker([27.929345, -82.490853], {icon: shadeIcon}).addTo(map)
    .bindPopup("<h1>Emily Hinsdale, 47</h1><p><b>'I pick a route that is based on where the trees are.'</b></p> <p> Hinsdale walks or runs more than four miles every day in her South Tampa neighborhood. She has lived in Florida for 18 years and is used to the heat, but still looks forward to visiting her parents in Colorado during the summer. Quote testing SoundCite here.</p><img src='images/hinsdale_1.png'/>")
    .openPopup();  

L.marker([27.930561, -82.487989], {icon: shadeIcon}).addTo(map)
    .bindPopup("<h1>Kiki</h1><p>Short profile of person who lives in either shaded or sunny neighborhood. Quote testing SoundCite here.</p><img src='images/image_test_1.jpeg'/>")
    .openPopup();  