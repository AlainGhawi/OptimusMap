using OptimusMap.Samples;
using Xunit;

namespace OptimusMap.EntityFrameworkCore.Applications;

[Collection(OptimusMapTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<OptimusMapEntityFrameworkCoreTestModule>
{

}
