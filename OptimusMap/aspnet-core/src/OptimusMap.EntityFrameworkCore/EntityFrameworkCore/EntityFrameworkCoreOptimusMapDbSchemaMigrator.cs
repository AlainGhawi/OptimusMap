using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using OptimusMap.Data;
using Volo.Abp.DependencyInjection;

namespace OptimusMap.EntityFrameworkCore;

public class EntityFrameworkCoreOptimusMapDbSchemaMigrator
    : IOptimusMapDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreOptimusMapDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolve the OptimusMapDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<OptimusMapDbContext>()
            .Database
            .MigrateAsync();
    }
}
