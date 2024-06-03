using Volo.Abp.Settings;

namespace OptimusMap.Settings;

public class OptimusMapSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(OptimusMapSettings.MySetting1));
    }
}
