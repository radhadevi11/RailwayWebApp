function getDummyStations(){
	var request = new XMLHttpRequest();
     request.open('GET','http://localhost:8080/railway/stations',false); 
     request.send(null);
     var stationsJsonArray=JSON.parse(request.responseText);//loop through this json array,
     //and convert each json objects to a station object add a station object to a station array

}