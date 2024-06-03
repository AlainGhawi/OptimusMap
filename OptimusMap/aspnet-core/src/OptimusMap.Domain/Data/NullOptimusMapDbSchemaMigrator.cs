using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace OptimusMap.Data;

/* This is used if database provider does't define
 * IOptimusMapDbSchemaMigrator implementation.
 */
public class NullOptimusMapDbSchemaMigrator : IOptimusMapDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
