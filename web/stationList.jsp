<%@ page import="com.radha.railway.controller.StationModel,com.radha.railway.controller.TrainController,java.util.List" %>
<html>
  <head>
    <style>
         #train {
                border: 2px solid black;
                padding: 3px;
                border-collapse: collapse;
                width: 100%;
            }

            #train td, #train th {
                border: 1px solid #ddd;
                padding: 8px;
            }

            #train tr:nth-child(even){background-color: #f2f2f2;}

            #train tr:hover {background-color: #ddd;}

            #train th {
                padding-top: 12px;
                padding-bottom: 12px;
                text-align: left;
                background-color: #4CAF50;
                color: white;
            }
    </style>
  </head>
  <body>
    <%! TrainController trainController = new TrainController(); %>
    <table id="train">
      <tr>
        <th>Station Code</th>
        <th>Station Name</th>
      </tr>
      <%
        List<StationModel> stationModels = trainController.getFromStations();
        for(StationModel stationModel : stationModels){
           out.println("<tr>");
           out.println("<td>"+stationModel.getCode()+"</td>");
           out.println("<td>"+stationModel.getName()+"</td>");
           out.println("</tr>");
        }
      %>
      </table>
  </body>
</html>

