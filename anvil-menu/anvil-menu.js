let anvilMenu;

class AnvilMenu extends Application {

  static get defaultOptions() {
    const options = super.defaultOptions;
    options.template = "public/modules/anvil-menu/templates/anvil-menu.html";
    options.popOut = false;
    return options;
  }

  activateListeners(html) {
    this._contextMenu(html);
  }

  _getEntryContextOptions() {
    return [];
  }

  _contextMenu(html) {
    const entryOptions = this._getEntryContextOptions();
    Hooks.call(`getAnvilMenuEntryContext`, html, entryOptions);
    if (entryOptions) new ContextMenu(html, '.anvil-menu-inner', entryOptions);
  }
}

Hooks.on('init', () => {
  console.log('Anvil Menu | Initializing Menu');
  $('#logo').remove();
  anvilMenu = new AnvilMenu();
  anvilMenu.render(true);
});

