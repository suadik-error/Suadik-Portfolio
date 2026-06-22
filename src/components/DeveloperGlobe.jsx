import Globe from "react-globe.gl";

export default function DeveloperGlobe(){

const markers = [

{
lat:5.6037,
lng:-0.1870,
size:0.3,
color:"red",
label:"My Development Base (Ghana)"
},

{
lat:40.7128,
lng:-74.0060,
size:0.2,
color:"blue",
label:"Project Users USA"
},

{
lat:51.5072,
lng:-0.1276,
size:0.2,
color:"green",
label:"Project Users UK"
}

]

return(

<div className="h-screen">

<Globe
globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
pointsData={markers}
pointLat="lat"
pointLng="lng"
pointColor="color"
pointAltitude={0.02}
/>

</div>

)

};