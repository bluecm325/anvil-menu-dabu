Hooks.on('ready', () => {
  game.settings.register('anvil-menu', 'foundrymenu.enabled', {
    name: 'Enable Foundry Menu',
    hint: 'Adds a menu option to open the Foundry application menu',
    scope: 'client',
    config: true,
    type: Boolean,
    default: true,
  });

  const active = () => game.settings.get('anvil-menu', 'foundrymenu.enabled');
  AnvilMenu.registerMenuEntry({
    name: 'Foundry Menu',
    icon: '<i class="fas fa-bars"></i>',
    condition: active,
    callback: () => ui.menu.toggle()
  });
});
