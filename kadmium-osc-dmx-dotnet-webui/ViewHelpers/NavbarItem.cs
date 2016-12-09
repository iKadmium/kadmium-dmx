using System;
using System.Collections.Generic;

namespace kadmium_osc_dmx_dotnet_webui.ViewHelpers
{
    public class EnablementOptions
    {
        public Func<bool> EnablementFunction { get; set; }
        public string DisabledTitle { get; set; }
    }

    public class NavbarItem
    {
        public string Controller { get; set; }
        public string Action { get; set; }
        public string Display { get; set; }
        public string ID { get; set; }
        public bool Active { get; set; }
        public IEnumerable<NavbarItem> Children { get; set; }
        public EnablementOptions EnablementOptions { get; set; }

        public NavbarItem(string controller, string action = null, string display = null, string id = null, EnablementOptions enablementOptions = null, params NavbarItem[] children)
        {
            Controller = controller;
            Action = action ?? "Index";
            Display = display ?? ((action == null) ? Controller : action);
            EnablementOptions = enablementOptions;
            Children = children;
            ID = id ?? "";
        }

        public NavbarItem(string controller, params NavbarItem[] children) : this(controller, null, null, null, null, children)
        {

        }
    }
}
