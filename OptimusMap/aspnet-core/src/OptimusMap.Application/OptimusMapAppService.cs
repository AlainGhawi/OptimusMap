using System;
using System.Collections.Generic;
using System.Text;
using OptimusMap.Localization;
using Volo.Abp.Application.Services;

namespace OptimusMap;

/* Inherit your application services from this class.
 */
public abstract class OptimusMapAppService : ApplicationService
{
    protected OptimusMapAppService()
    {
        LocalizationResource = typeof(OptimusMapResource);
    }
}
