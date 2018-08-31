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
    function getAllTrains(){
         var sourceStationCodeValue = document.getElementById('sourceStationCode').value;
         var destinationStationCodeValue= document.getElementById('destinationStationCode').value;
         var request = new XMLHttpRequest();
         request.open('GET','http://localhost:8080/railway/trains?sourceStationCode='+sourceStationCodeValue+
                     '&destinationStationCode='+destinationStationCodeValue,false); 
         request.send(null);
         var trainsJsonArray=JSON.parse(request.responseText);//loop through this json array,
         //and convert each json objects to a station object add a station object to a station array
         var trains=[] ;
         for(var i=0;i<trainsJsonArray.length;i++){
         	var trainStops=[];//For each trainStop in the ith train create a TrainStop object and push it in trainStops array,
            trains.push(new Train(trainsJsonArray[i].number,
            	trainsJsonArray[i].name,
            	trainsJsonArray[i].sourceStation,
            	trainsJsonArray[i].destinationStation,trainStops)

                );
         }
         return trains;

    }
     function getDummyTrains(){
    //return the list of all trains
    var trains = [new Train("1234","Erode exp",new Station((new LatLng(11.3410,77.7172)),"ED","Erode"),
                  new Station((new LatLng(11.0168,76.9558)),"CBE","Coimbatore")),
                new Train("4567","Chennai Exp",new Station((new LatLng(13.0827,80.2707)),"MAS","Chennai"),
                 new Station((new LatLng(14.4426,79.98646)),"NLR","Nellore"))];
       return trains;

    }
    function getDummyStations() {
    //return the list of all stations
    var cities = [new Station((new LatLng(11.3410,77.7172)),"ED","Erode"),
                  new Station((new LatLng(11.0168,76.9558)),"CBE","Coimbatore"),
                 new Station((new LatLng(13.0827,80.2707)),"MAS","Chennai")];
       return cities;

    }