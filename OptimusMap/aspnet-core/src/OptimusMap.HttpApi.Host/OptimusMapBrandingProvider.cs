using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace OptimusMap;

[Dependency(ReplaceServices = true)]
public class OptimusMapBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "OptimusMap";
}
