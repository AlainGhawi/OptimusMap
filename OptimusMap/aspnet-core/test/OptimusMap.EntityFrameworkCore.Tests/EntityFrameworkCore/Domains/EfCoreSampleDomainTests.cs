using OptimusMap.Samples;
using Xunit;

namespace OptimusMap.EntityFrameworkCore.Domains;

[Collection(OptimusMapTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<OptimusMapEntityFrameworkCoreTestModule>
{

}
