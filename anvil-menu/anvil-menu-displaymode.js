Hooks.on("getAnvilMenuEntryContext", (html, options) => {
  options.push({
    name: 'Toggle Navigation',
    icon: '<i class="fas fa-arrow-up"></i>',
    callback: li => $('#navigation').toggle()
  });

  options.push({
    name: 'Toggle Controls',
    icon: '<i class="fas fa-arrow-left"></i>',
    callback: li => $('#controls').toggle()
  });

  options.push({
    name: 'Toggle Sidebar',
    icon: '<i class="fas fa-arrow-right"></i>',
    callback: li => $('#sidebar').toggle()
  });

  options.push({
    name: 'Toggle Players',
    icon: '<i class="fas fa-users"></i>',
    callback: li => $('#players').toggle()
  });
});
