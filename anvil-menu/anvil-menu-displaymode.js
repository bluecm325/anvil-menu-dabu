Hooks.on('ready', () => {
  game.settings.register('anvil-menu', 'displaymode.enabled', {
    name: 'Enable Display Mode Menu',
    hint: 'Allows Toggling the Visibility of several UI elements.',
    scope: 'client',
    config: true,
    type: Boolean,
    default: false,
  });

  const active = () => game.settings.get('anvil-menu', 'displaymode.enabled');
  AnvilMenu.registerMenuEntries([
    {
      name: 'Toggle Navigation',
      icon: '<i class="fas fa-arrow-up"></i>',
      condition: active,
      callback: () => $('#navigation').toggle()
    },
    {
      name: 'Toggle Controls',
      icon: '<i class="fas fa-arrow-left"></i>',
      condition: active,
      callback: () => $('#controls').toggle()
    },
    {
      name: 'Toggle Sidebar',
      icon: '<i class="fas fa-arrow-right"></i>',
      condition: active,
      callback: () => $('#sidebar').toggle()
    },
    {
      name: 'Toggle Players',
      icon: '<i class="fas fa-users"></i>',
      condition: active,
      callback: () => $('#players').toggle()
    }
  ]);
});
