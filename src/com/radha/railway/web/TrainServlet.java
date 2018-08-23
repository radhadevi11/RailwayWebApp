package com.radha.railway.web;

import com.google.gson.Gson;
import com.radha.railway.controller.StationModel;
import com.radha.railway.controller.TrainController;
import com.radha.railway.controller.TrainModel;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/trains")
public class TrainServlet extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
         /*Write a train servlet class.
     It should call the getTrains method.
     For the parameters we should call the getParameter method of req
     convert the returnValue into the json format String.
     Send the String value to the client
     */
         TrainController trainController = new TrainController();
        String sourceStationCode = req.getParameter("sourceStationCode");
        String destinationStationCode = req.getParameter("destinationStationCode");
        List<TrainModel> trainModels = trainController.getTrains(sourceStationCode,destinationStationCode);
        Gson gson = new Gson();
        String jsonString = gson.toJson(trainModels);
        resp.setContentType("application/json");
        resp.getWriter().println(jsonString);

        //https://code.visualstudio.com/nodejs

    }
}
