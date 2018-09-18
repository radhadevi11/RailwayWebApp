package com.radha.railway.web;

import com.google.gson.Gson;
import com.radha.railway.controller.StationModel;
import com.radha.railway.controller.TrainController;
import com.radha.railway.service.NoSuchFromStationException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/tostations")
public class ToStationsServlet  extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
        resp.setContentType("application/json");
        String sourceStationCode = req.getParameter("sourceStationCode");
        TrainController trainController = new TrainController();
        try {
            List<StationModel> toStations = trainController.getToStations(sourceStationCode);
            Gson gson = new Gson();
            String jsonString = gson.toJson(toStations);
            resp.getWriter().println(jsonString);
        }
        catch (NoSuchFromStationException e){
            String error = "{\"error\": \"The from station was not found\"}";
            resp.getWriter().println(error);

        }
    }

}
