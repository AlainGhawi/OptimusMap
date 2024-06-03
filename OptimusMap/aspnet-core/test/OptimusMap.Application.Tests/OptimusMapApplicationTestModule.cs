using Volo.Abp.Modularity;

namespace OptimusMap;

[DependsOn(
    typeof(OptimusMapApplicationModule),
    typeof(OptimusMapDomainTestModule)
)]
public class OptimusMapApplicationTestModule : AbpModule
{

}
