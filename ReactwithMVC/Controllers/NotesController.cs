using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ReactwithMVC.Controllers
{
    public class NotesController : Controller
    {
        public ActionResult Index()
        {
            return View ();
        }
    }
}
