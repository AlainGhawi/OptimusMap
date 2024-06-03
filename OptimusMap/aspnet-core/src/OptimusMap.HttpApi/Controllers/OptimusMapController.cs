using OptimusMap.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace OptimusMap.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class OptimusMapController : AbpControllerBase
{
    protected OptimusMapController()
    {
        LocalizationResource = typeof(OptimusMapResource);
    }
}
