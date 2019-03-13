using System;
using System.Web.Mvc;
//using System.Web.Http.Filters;

namespace ReactwithMVC.CORS
{
    public class AllowCrossSiteAttribute : ActionFilterAttribute
    {
        public AllowCrossSiteAttribute()
        {
        }
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            filterContext.RequestContext.HttpContext.Response.AddHeader("Access-Control-Allow-Origin", "http://localhost:3000");
            filterContext.RequestContext.HttpContext.Response.AddHeader("Access-Control-Allow-Headers", "*");
            filterContext.RequestContext.HttpContext.Response.AddHeader("Access-Control-Allow-Credentials", "true");
            filterContext.RequestContext.HttpContext.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
            filterContext.RequestContext.HttpContext.Response.AddHeader("Vary", "Origin");

            base.OnActionExecuting(filterContext);
        }
    }
}
