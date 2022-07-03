const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Store the triggered events
  window.deferredPrompt = event;

  // Remove the hidden class from the button.
  butInstall.classList.add('show');
  butInstall.classList.remove('hidden');
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  // Show prompt
  promptEvent.prompt();

  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;

});

window.addEventListener('appinstalled', (event) => {
  butInstall.classList.add('hidden');
  butInstall.classList.remove('show');


  // Clear prompt
  window.deferredPrompt = null;
});
