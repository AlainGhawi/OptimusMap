using Xunit;

namespace OptimusMap.EntityFrameworkCore;

[CollectionDefinition(OptimusMapTestConsts.CollectionDefinitionName)]
public class OptimusMapEntityFrameworkCoreCollection : ICollectionFixture<OptimusMapEntityFrameworkCoreFixture>
{

}
