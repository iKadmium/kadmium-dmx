using Microsoft.AspNetCore.Mvc.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    public class NavbarItem
    {
        public string Controller { get; set; }
        public string Action { get; set; }
        public string Display { get; set; }
        public IEnumerable<NavbarItem> Children { get; set; }

        public NavbarItem(string controller, string action, string display)
        {
            Controller = controller;
            Action = action;
            Display = display;
            Children = Enumerable.Empty<NavbarItem>();
        }

        public NavbarItem(string controller, string display, params NavbarItem[] children)
        {
            Controller = controller;
            Display = display;
            Children = children;
        }

        public NavbarItem(string controller, params NavbarItem[] children) : this(controller, controller, children)
        {
            
        }
    }
}
