<%@ page import="com.radha.railway.controller.TrainModel,com.radha.railway.controller.TrainController,java.util.List" %>
<!DOCTYPE html>
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
		<table id="train">
			<tr>
				<th>TrainName</th>
				<th>TrainNumber</th>
				<th>SourceStation</th>
				<th>DestinationStation</th>
			</tr>
		<%! TrainController trainController = new TrainController(); %>
		<%
 		String sourceStationCode=request.getParameter("sourceStationCode");
 		String destinationStationCode=request.getParameter("destinationStationCode");
 		List<TrainModel> trainModels=trainController.getTrains(sourceStationCode,destinationStationCode);
 		for (TrainModel trainModel:trainModels ) {
	 		out.println("<tr>");
	 		out.println("<td>"+trainModel.getName()+"</td>");
	 		out.println("<td>"+trainModel.getNumber()+"</td>");
	 		out.println("<td>"+trainModel.getSourceStation().getName()+"</td>");
	 		out.println("<td>"+trainModel.getDestinationStation().getName()+"</td>");
	 		out.println("</tr>");
		}
		%>
		</table>
	</body>
</html>