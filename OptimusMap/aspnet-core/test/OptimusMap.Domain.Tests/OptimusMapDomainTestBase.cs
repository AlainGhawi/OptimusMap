using Volo.Abp.Modularity;

namespace OptimusMap;

/* Inherit from this class for your domain layer tests. */
public abstract class OptimusMapDomainTestBase<TStartupModule> : OptimusMapTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
