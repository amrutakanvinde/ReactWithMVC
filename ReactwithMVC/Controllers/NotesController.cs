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

        //Method for Adding an Employee
        public void Add(Note newnote)
        {
            Note n = new Note
            {
                Id = newnote.Id,
                Name = newnote.Name,
                DateTime_Added = newnote.DateTime_Added
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

        [HttpDelete]
        [AllowCrossSite]
        public ActionResult Delete(int id)
        {

            return RedirectToAction("Index");
        }
    }
}
