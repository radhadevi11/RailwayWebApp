<%@ page import="com.radha.railway.controller.TrainModel,com.radha.railway.controller.TrainController,java.util.List" %>
<!DOCTYPE html>
<html>
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
 		for (int i=0;i<trainModels.size();i++){
	 		out.println("<tr onmouseover=\"drawLines("+i+")\"onmouseout=\"removeLine()\"onclick=\"showStops("+i+")\">");
	 		out.println("<td>"+trainModels.get(i).getName()+"</td>");
	 		out.println("<td>"+trainModels.get(i).getNumber()+"</td>");
	 		out.println("<td>"+trainModels.get(i).getSourceStation().getName()+"</td>");
	 		out.println("<td>"+trainModels.get(i).getDestinationStation().getName()+"</td>");
	 		out.println("</tr>");
		}
		%>
		</table>
	</body>
</html>