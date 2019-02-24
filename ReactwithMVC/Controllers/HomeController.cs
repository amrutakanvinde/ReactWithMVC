﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;

namespace ReactwithMVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var mvcName = typeof(Controller).Assembly.GetName();
            var isMono = Type.GetType("Mono.Runtime") != null;

            ViewData["Version"] = mvcName.Version.Major + "." + mvcName.Version.Minor;
            ViewData["Runtime"] = isMono ? "Mono" : ".NET";

            return View();
        }

        //adding another action to return JSON data in react component

        public JsonResult GetMessage()
        {
            return new JsonResult
            {
                Data = "Hello World.I am from the server side",
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };
        }
    }
}