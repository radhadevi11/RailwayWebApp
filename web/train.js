class Train{
constructor(number,name,sourceStation,destinationStation){
this.number = number;
this.name = name;
this.sourceStation = sourceStation;
this.destinationStation = destinationStation;
  }
}
function getAllTrains(){
//return the list of all trains
var trains = [new Train("1234","Erode exp",new Station((new LatLng(11.3410,77.7172)),"ED","Erode"),
              new Station((new LatLng(11.0168,76.9558)),"CBE","Coimbatore")),
             "4567","Chennai Exp",new Station((new LatLng(13.0827,80.2707)),"MAS","Chennai"),
             new Station((new LatLng(14.4426,79.98646)),"NLR","Nellore")];
   return trains;

}
