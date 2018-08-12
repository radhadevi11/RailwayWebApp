function getAllStations(){
	var request = new XMLHttpRequest();
     request.open('GET','http://localhost:8080/railway/stations',false); 
     request.send(null);
     var stationsJsonArray=JSON.parse(request.responseText);//loop through this json array,
     //and convert each json objects to a station object add a station object to a station array
     var stations=[] ;
     for(var i=0;i<stationsJsonArray.length;i++){
     	stations.push(new Station(
     		new LatLng(stationsJsonArray[i].latLng.latitude,stationsJsonArray[i].latLng.longitude),
     		stationsJsonArray[i].code,
     		stationsJsonArray[i].name));
     }
     return stations;

}
function getDummyStations() {
//return the list of all stations
var cities = [new Station((new LatLng(11.3410,77.7172)),"ED","Erode"),
              new Station((new LatLng(11.0168,76.9558)),"CBE","Coimbatore"),
             new Station((new LatLng(13.0827,80.2707)),"MAS","Chennai")];
   return cities;

}