package com.radha.railway.web;

import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/stations")
public class StationServlet extends HttpServlet{
   public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
       DummyStation station = new DummyStation("ED","Erode");
       Gson gson = new Gson();
       String json = gson.toJson(station);
       resp.setContentType("application/json");
       resp.getWriter().println(json);
   }
   //C:\Users\radha\.m2\repository\com\google\code\gson\gson\2.8.5 =>jar file location

}
