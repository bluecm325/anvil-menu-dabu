(() => {
  window.AnvilMenu = window.AnvilMenu || {loaded: false, entries: []};

  if(window.AnvilMenu.loaded) {
    return;
  }
  window.AnvilMenu.loaded = true;

  console.log('Anvil Menu | Initializing');

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
})();

