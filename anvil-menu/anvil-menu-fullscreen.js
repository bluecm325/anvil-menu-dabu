(() => {
  function rebindEscape(keycode) {
    keyboard.codes.add(keycode);
    KEYS.ESC = keycode;
  }

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  function registerSettings() {
    game.settings.register('anvil-menu', 'fullscreen.enable', {
      name: 'Enable Fullscreen Menu',
      hint: 'Enables the Togggle Fullscreen Option in the Anvil Menu',
      scope: 'client',
      config: true,
      type: Boolean,
      default: false,
    });

    game.settings.register('anvil-menu', 'fullscreen.escapeKey', {
      name: 'Rebind Escape Key',
      hint: 'Rebinds the Escape Key to another key to prevent exiting fullscreen mode.',
      scope: 'client',
      config: true,
      type: String,
      default: 'no',
      choices: {
        no: 'Don\'t Rebind Escape',
        backquote: 'Rebind to Backquote (`) - QWERTY Keyboards',
        lessthansign: 'Rebind to Less Than Sign (<) - AZERTY & QWERTZ Keyboards',
        custom: 'Rebind to a custom Key Code'
      },
      onChange: selection => {
        if (selection === 'backquote') {
          game.settings.set('anvil-menu', 'fullscreen.escapeKeyCode', 192);
        }
        else if (selection === 'lessthansign') {
          game.settings.set('anvil-menu', 'fullscreen.escapeKeyCode', 188);
        }
        else if (selection === 'custom') {
          new Dialog({
            title: 'Enter Custom Key Code to Rebind Escape',
            content: '<form> <div class="form-group"> <label>New Key Code</label> <input type="text" name="keycode" value="" placeholder="27"/> </div> </form>',
            buttons: {
              save: {
                icon: '<i class="fas fa-check"></i>',
                label: "Save",
                callback: html => {
                  const keycode = html.find('[name="keycode"]').val();
                  game.settings.set('anvil-menu', 'fullscreen.escapeKeyCode', parseInt(keycode));
                }
              },
              cancel: {
                icon: '<i class="fas fa-times"></i>',
                label: "Cancel",
                callback: () => {
                  game.settings.set('anvil-menu', 'fullscreen.escapeKey', 'no');
                  game.settings.set('anvil-menu', 'fullscreen.escapeKeyCode', 27);
                }
              }
            },
            default: "save"
          }).render(true);
        }
        else {
          game.settings.set('anvil-menu', 'fullscreen.escapeKeyCode', 27);
        }
      }
    });

    game.settings.register('anvil-menu', 'fullscreen.escapeKeyCode', {
      name: "Rebind Escape Key Code",
      scope: "client",
      config: false,
      type: Number,
      default: 27, //Escape
      onChange: keycode => rebindEscape(keycode)
    });
  }

  Hooks.on('ready', () => {
    registerSettings();

    if (game.settings.get('anvil-menu', 'fullscreen.escapeKey') !== 'no'){
      const keycode = game.settings.get('anvil-menu', 'fullscreen.escapeKeyCode');
      rebindEscape(keycode);
    }

    AnvilMenu.registerMenuEntry({
      icon: '<i class="fas fa-expand"></i>',
      name: 'Toggle Fullscreen',
      condition: () => game.settings.get('anvil-menu', 'fullscreen.enable'),
      callback: () => toggleFullScreen()
    });
  });
})();
