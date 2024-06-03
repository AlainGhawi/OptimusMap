using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp.AspNetCore.Mvc;

namespace OptimusMap.Controllers
{
    [Route("api/maps")]
    public class MapController : AbpController
    {


        [HttpGet]
        [Route("crimes")]
        public async Task<string> GetHelloWorldAsync()
        {
            return null;
        }
    }
}
