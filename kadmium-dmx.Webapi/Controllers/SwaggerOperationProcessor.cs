using Microsoft.AspNetCore.Mvc.Controllers;
using NSwag;
using NSwag.SwaggerGeneration.AspNetCore;
using NSwag.SwaggerGeneration.Processors;
using NSwag.SwaggerGeneration.Processors.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.Controllers
{
    public class SwaggerOperationProcessor : IOperationProcessor
    {
        public Task<bool> ProcessAsync(OperationProcessorContext context)
        {
            if (context.OperationDescription.Method == SwaggerOperationMethod.Undefined)
            {
                return Task.FromResult(false);
            }

            var newContext = context as AspNetCoreOperationProcessorContext;
            
            string method = context.OperationDescription.Method.ToString();
            SetMethodId(newContext, context.OperationDescription.Method);

            return Task.FromResult(true);
        }

        private void SetMethodId(AspNetCoreOperationProcessorContext context, SwaggerOperationMethod method)
        {
            var descriptor = context.ApiDescription.ActionDescriptor as ControllerActionDescriptor;
            string controllerName = descriptor.ControllerName;

            var responseType = context.ApiDescription.SupportedResponseTypes.Select(x => x.Type).First();
            bool isEnumerable = responseType
                .GetInterfaces()
                .Any(t => t.Name == "IEnumerable");

            string methodName = context.MethodInfo.Name;

            string verb = methodName.ToCamelCase();

            context.OperationDescription.Operation.OperationId = verb + controllerName;
            if (isEnumerable)
            {
                context.OperationDescription.Operation.OperationId += "s";
            }
        }

        
    }
}
