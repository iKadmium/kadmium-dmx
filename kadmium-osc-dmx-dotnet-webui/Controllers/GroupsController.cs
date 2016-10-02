﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using kadmium_osc_dmx_dotnet_core;
using kadmium_osc_dmx_dotnet_webui.ViewHelpers;
using Newtonsoft.Json.Linq;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace kadmium_osc_dmx_dotnet_webui.Controllers
{
    public static class Extensions
    {
        public static IEnumerable<IEnumerable<T>> Batch<T>(this IEnumerable<T> list, int batchSize)
        {
            int numberOfBatches = list.Count() / batchSize;
            if(list.Count() % batchSize != 0 )
            {
                numberOfBatches++;
            }
            for(int i = 0; i < numberOfBatches; i++)
            {
                yield return list.Skip(i * batchSize).Take(batchSize);
            }
        }
    }

    public class GroupsController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(new ListData("group", MasterController.Instance.Groups.Keys));
        }

        public IActionResult Load(string id)
        {
            if(id == null)
            {
                JObject obj = new JObject(
                    new JProperty("name", "")
                );
                return Content(obj.ToString());
            }
            else if(MasterController.Instance.Groups.ContainsKey(id))
            {
                JObject obj = new JObject(
                    new JProperty("name", id)
                );
                return Content(obj.ToString());
            }
            else
            {
                Response.StatusCode = 404;
                return new EmptyResult();
            }
        }

        public IActionResult Save(string id, string jsonString)
        {
            JObject obj = JObject.Parse(jsonString);
            string newID = obj["name"].Value<string>();
            Group group;
            if (id == null)
            {
                group = new Group(newID);
            }
            else if (MasterController.Instance.Groups.ContainsKey(id))
            {
                group = MasterController.Instance.Groups[id];
                MasterController.Instance.Groups.Remove(id);
                group.Name = newID;
            }
            else
            {
                Response.StatusCode = 404;
                return new EmptyResult();
            }
            
            MasterController.Instance.Groups.Add(newID, group);
            FileAccess.SaveGroups();

            Response.StatusCode = 200;
            return new EmptyResult();
        }

        public IActionResult Delete(string id)
        {
            if (MasterController.Instance.Groups.ContainsKey(id))
            {
                MasterController.Instance.Groups.Remove(id);
                FileAccess.SaveGroups();
                Response.StatusCode = 200;
                return new EmptyResult();
            }
            else
            {
                Response.StatusCode = 404;
                return new EmptyResult();
            }
        }
    }
}
