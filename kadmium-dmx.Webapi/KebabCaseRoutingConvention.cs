using Microsoft.AspNetCore.Mvc.ApplicationModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi
{
    public class KebabCaseRoutingConvention : IControllerModelConvention
    {

        public void Apply(ControllerModel controller)
        {
            var hasRouteAttributes = controller.Selectors.Any(selector =>
                                               selector.AttributeRouteModel != null);
            if (hasRouteAttributes)
            {
                // This controller manually defined some routes, so treat this 
                // as an override and not apply the convention here.
                return;
            }

            foreach (var controllerAction in controller.Actions)
            {
                foreach (var selector in controllerAction.Selectors.Where(x => x.AttributeRouteModel == null))
                {
                    var template = new StringBuilder();

                    if (controllerAction.Controller.ControllerName != "Home")
                    {
                        template.Append(controller.ControllerName.PascalToKebabCase());
                    }


                    if (controllerAction.ActionName != "Index")
                    {
                        template.Append("/" + controllerAction.ActionName.PascalToKebabCase());
                    }

                    selector.AttributeRouteModel = new AttributeRouteModel()
                    {
                        Template = template.ToString()
                    };
                }
            }

        }

        
    }

}
