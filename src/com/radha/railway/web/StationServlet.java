package com.radha.railway.web;

import com.google.gson.Gson;
import com.radha.railway.controller.StationModel;
import com.radha.railway.controller.TrainController;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/stations")
public class StationServlet extends HttpServlet{
   public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
     /*Call the getFromStations method from the TrainController class and convert the returnValue into the json format String.
       Send the String value to the client
      */
       TrainController trainController = new TrainController();
       List<StationModel> stationModels = trainController.getFromStations();
       Gson gson = new Gson();
       String jsonString = gson.toJson(stationModels);
       resp.setContentType("application/json");
       resp.getWriter().println(jsonString);
   }
   //C:\Users\radha\.m2\repository\com\google\code\gson\gson\2.8.5 =>jar file location



}
