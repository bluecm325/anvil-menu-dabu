(() => {
  const version = 1;  //Current Anvil Menu Version

  //Anvil Menu Bootstrap
  if (!window.AnvilMenu) {
    window.AnvilMenu = {loaded: 0};
    window.AnvilMenu.setup = () => console.error('Anvil Menu | Failed to setup Anvil Menu');
    $(() => window.AnvilMenu.setup());
  }

  if (window.AnvilMenu.loaded >= version) {
    return;
  }
  window.AnvilMenu.loaded = version;

  window.AnvilMenu.setup = () => {
    console.log(`Anvil Menu | Initializing v${version}`);

    window.AnvilMenu.entries = [];

    window.AnvilMenu.registerMenuEntry = entry => {
      window.AnvilMenu.entries.push(entry);
    };

    window.AnvilMenu.registerMenuEntries = entries => entries.forEach(window.AnvilMenu.registerMenuEntry);

    Hooks.on('init', () => {
      $('<div id="anvil-menu">')
        .css('position', 'absolute')
        .css('top', 12).css('left', 10)
        .css('width', 100).css('height', 50)
        .css('z-index', 61)
        .appendTo($('body'));
      window.AnvilMenu.contextMenu = new ContextMenu($('body'), '#anvil-menu', window.AnvilMenu.entries);
    });
  };
})();
