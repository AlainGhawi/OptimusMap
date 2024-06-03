using Volo.Abp.Modularity;

namespace OptimusMap;

[DependsOn(
    typeof(OptimusMapDomainModule),
    typeof(OptimusMapTestBaseModule)
)]
public class OptimusMapDomainTestModule : AbpModule
{

}
