using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ReactwithMVC.CORS;
using ReactwithMVC.Models;

namespace ReactwithMVC.Controllers
{
    [AllowCrossSite]
    public class NotesController : Controller
    {
        public ActionResult Index()
        {

            return View ();
        }

        public List<Note> NotesDeclare()
        {
            return new List<Note>()
            {
                new Note {Id = 1, Name = "Server Side Note 1", DateTime_Added = DateTime.Today },
                new Note {Id = 2, Name = "Server Side Note 2", DateTime_Added = DateTime.Today },
                new Note {Id = 3, Name = "Server Side Note 3", DateTime_Added = DateTime.Today },
            };
        }

        public JsonResult GetNotes()
        {
            return new JsonResult
            {
                Data = NotesDeclare(),
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };
        }
    }
}
