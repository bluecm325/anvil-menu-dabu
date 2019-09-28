/* Rebinds the Escape Key to Backquote (`) */
function rebindEsc() {
  keyboard.codes.push(192);
  KEYS.ESC = 192;
}

Hooks.on('ready', () => {
  console.log('Anvil Menu | Initializing Fullscreen Module');
  rebindEsc();
});

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

Hooks.on("getAnvilMenuEntryContext", (html, options) => {
  options.push({
    icon: '<i class="fas fa-expand"></i>',
    name: 'Toggle Fullscreen',
    callback: li => toggleFullScreen()
  });
});
