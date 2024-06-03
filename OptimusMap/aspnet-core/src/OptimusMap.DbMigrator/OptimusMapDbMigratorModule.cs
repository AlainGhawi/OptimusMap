using OptimusMap.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace OptimusMap.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(OptimusMapEntityFrameworkCoreModule),
    typeof(OptimusMapApplicationContractsModule)
    )]
public class OptimusMapDbMigratorModule : AbpModule
{
}
