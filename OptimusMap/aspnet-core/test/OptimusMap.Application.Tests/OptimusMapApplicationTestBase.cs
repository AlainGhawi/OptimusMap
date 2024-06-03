using Volo.Abp.Modularity;

namespace OptimusMap;

public abstract class OptimusMapApplicationTestBase<TStartupModule> : OptimusMapTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
