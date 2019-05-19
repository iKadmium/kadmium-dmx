using GraphQL;
using GraphQL.Types;
using kadmium_dmx_webapi.GraphQL.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kadmium_dmx_webapi.GraphQL.Schemas
{
    public class KadmiumDMXSchema: Schema
    {
        public KadmiumDMXSchema(IDependencyResolver resolver) : base(resolver)
        {
            Query = resolver.Resolve<KadmiumDMXQuery>();
            Mutation = resolver.Resolve<KadmiumDMXMutation>();
        }
    }
}
