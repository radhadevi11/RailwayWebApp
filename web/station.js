class Station{
    constructor(latLng,code,name){
         this.latLng = latLng;
         this.code = code;
         this.name = name;
  }
   addMarker(map){
       var marker = new google.maps.Marker({position:this.latLng,map: map,title:this.name});
       var name = this.name;
        marker.addListener('click', function() {
                  if(document.getElementById('sourceStation').value==""){
                  document.getElementById('sourceStation').value=name;
                }
                  else{
                    document.getElementById('destinationStation').value=name;
                  }
              
            });
    }
}
class LatLng {
     constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }
}
function getAllStations(){
//return the list of all stations
var cities = [new Station((new LatLng(11.3410,77.7172)),"ED","Erode"),
              new Station((new LatLng(11.0168,76.9558)),"CBE","Coimbatore"),
             new Station((new LatLng(13.0827,80.2707)),"MAS","Chennai")];
   return cities;

}