using OptimusMap.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace OptimusMap.Permissions;

public class OptimusMapPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(OptimusMapPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(OptimusMapPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<OptimusMapResource>(name);
    }
}
