var map = L.map('map').setView([27.943495, -82.495599], 14);

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
    .bindPopup("<h1>Benjamin Brown, 75</h1><p><b>'It's very oppressive. It's not comfortable. But if you got to do it, you just have to do it.'</b><p>Brown walks to get where he is going every day, whether that's to work an evening shift at Sally O' Neal's Pizza, a doctor's appointment or a visit with a friend. He wished South Tampa bus stops had more shade for elderly people like him.</p><img src='images/brown_1.jpeg'/>")
    ;  

L.marker([27.940999, -82.493459], {icon: heatIcon}).addTo(map)
    .bindPopup("<h1>Heath Buckley, 19</h1> <p><b>'You're less productive if you're out here having a heatstroke. You ain't gonna get nothing done.'</b></p> <p>Buckley started working construction for TCD Traffic Control Devices in January. He had been working the night shift during cooler months, but now works on summer afternoons. To avoid overheating, Buckley protects his skin from the sun, drinks plenty of water and tries to control his breathing.</p><img src='images/buckley_1.jpeg'/>");  

L.marker([27.948516, -82.497396], {icon: heatIcon}).addTo(map)
    .bindPopup("<h1>Angela Morris, 33</h1><p><b>'It's more humid and there's not as much of a breeze, but that's really it. It's still hot year round for us.'</b></p><p>Morris works to hose off the sand off of her kids stuff after spending a few days at the beach. Her new construction home lacks large trees and has no shade on the street. This, in addition to a lack of sidewalks, mens she doesn't let her kids play in the front yard.</p><img src='images/morris_1.jpeg'/>");  

//shade
L.marker([27.929345, -82.490853], {icon: shadeIcon}).addTo(map)
    .bindPopup("<h1>Emily Hinsdale, 47</h1><p><b>'I pick a route that is based on where the trees are.'</b></p> <p> Hinsdale walks or runs more than four miles every day in her South Tampa neighborhood. She has lived in Florida for 18 years and is used to the heat, but still looks forward to visiting her parents in Colorado during the summer. </p><img src='images/hinsdale_1.png'/>");  

L.marker([27.930561, -82.487989], {icon: shadeIcon}).addTo(map)
    .bindPopup("<h1>Kiki Mercier</h1><p><b>'Every single little spot of shade that I can find I'm going to.'</p></b><p> Mercier walks dogs in South Tampa for a living. Some of her clients' neighborhoods are shady and some are sunny. On this tree-covered sidewalk, she said she feels a huge difference in the air temperature. In neighborhoods with no trees, she can only walk for a short time — the heat is too much for her and the dogs.</p><img src='images/mercier_3.jpeg'/>");  

//<audio controls><source src="BrownBite.ogg" type="audio/ogg"><source src="BrownBite.wav" type="audio/mpeg"></audio>