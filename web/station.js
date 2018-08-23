    class Station{
        constructor(latLng,code,name){
             this.latLng = latLng;
             this.code = code;
             this.name = name;
      }
       addMarker(map){
           var marker = new google.maps.Marker({position:this.latLng,map: map,title:this.name});
           var name = this.name;
           var code = this.code;
            marker.addListener('click', function() {
                      if(document.getElementById('sourceStation').value==""){
                         document.getElementById('sourceStation').value=name;
                         document.getElementById('sourceStationCode').value=code;
                    }
                      else{
                        document.getElementById('destinationStation').value=name;
                          document.getElementById('destinationStationCode').value=code;
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
