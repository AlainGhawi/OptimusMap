using System.Threading.Tasks;

namespace OptimusMap.Data;

public interface IOptimusMapDbSchemaMigrator
{
    Task MigrateAsync();
}
