# Foundry VTT - Anvil Menu

## Install

TODO

## Menu

![preview](https://gitlab.com/Ionshard/foundry-vtt-anvil-menu/raw/master/img/preview.png)

The basis of this repository is to add a context menu to the Foundry anvil logo. This menu is usable by module developers to add their own entries to this menu.

Additionally this is included in a module that uses the Anvil Menu and adds several features.

## Anvil Menu Module

### Fullscreen

This sub-module adds the ability to put Foundry VTT into Fullscreen mode. This is option is added to the Anvil Menu.

Additionally, to support the fullscreen mode, this sub-module will allow rebinding the Escape key to the Backquote (\`) key. This key is usually located right below the Escape key.

This is because the browser will use the Escape key to exit fullscreen mode.

### Display Mode

Inspired by [Sly3r86's Display Mode](https://github.com/syl3r86/displaymode) module. This sub-module adds the ability to toggle the visibility of the following on screen elements:

* Navigation
* Controls
* Sidebar
* Players

## Module Developers

If you want to use the Anvil Menu in your own application, you can include the `anvil-menu.js` script in your own module and should be safe to include in multiple modules.

The `anvil-menu.js` adds the `AnvilMenu` object to the window and provides the `registerMenuEntry` and `registerMenuEntries` functions to allow you to register menu entries into the Anvil Menu. These functions take a single `menuItem` or an array of menu items respectively.

### Example

```javascript

Hooks.on('ready', () => {

  //Do Module Stuff Here
  
  //Register Entry into Anvil Menu
  AnvilMenu.registerMenuEntry({
    icon: '<i class="fas fa-magic"></i>',
    name: 'Module Magic',
    condition: () => game.settings.get('my-module', 'enable'),
    callback: () => doMagicModule()
  });

})

```

## License
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Anvil Menu - a module for Foundry VTT -</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://gitlab.com/Ionshard/foundry-vtt-anvil-menu" property="cc:attributionName" rel="cc:attributionURL">Victor Ling</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

This work is licensed under Foundry Virtual Tabletop [EULA - Limited License Agreement for module development v 0.1.6](http://foundryvtt.com/pages/license.html).


