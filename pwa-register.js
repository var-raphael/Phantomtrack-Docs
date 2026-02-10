// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered successfully:', registration.scope);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          console.log('New service worker found, installing...');
          
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New service worker available, show update notification
              showUpdateNotification();
            }
          });
        });
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

// Show update notification
function showUpdateNotification() {
  const updateBanner = document.createElement('div');
  updateBanner.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, var(--accent1), var(--accent2));
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 14px;
    animation: slideUp 0.3s ease;
  `;
  
  updateBanner.innerHTML = `
    <span>📱 New version available!</span>
    <button onclick="window.location.reload()" style="
      background: white;
      color: var(--accent1);
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
    ">Update</button>
    <button onclick="this.parentElement.remove()" style="
      background: transparent;
      color: white;
      border: 1px solid white;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
    ">Later</button>
  `;
  
  document.body.appendChild(updateBanner);
}

// Add to home screen prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Store the event so it can be triggered later
  deferredPrompt = e;
  // Show install button
  showInstallPromotion();
});

function showInstallPromotion() {
  const installBanner = document.createElement('div');
  installBanner.id = 'install-banner';
  installBanner.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--card);
    border: 2px solid var(--accent1);
    color: var(--text);
    padding: 16px 24px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 14px;
    max-width: 400px;
    animation: slideUp 0.3s ease;
  `;
  
  installBanner.innerHTML = `
    <i class="fa fa-download" style="font-size: 24px; color: var(--accent1);"></i>
    <div style="flex: 1;">
      <div style="font-weight: 600; margin-bottom: 4px;">Install PhantomTrack</div>
      <div style="opacity: 0.7; font-size: 12px;">Get quick access from your home screen</div>
    </div>
    <button onclick="installApp()" style="
      background: linear-gradient(135deg, var(--accent1), var(--accent2));
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
    ">Install</button>
    <button onclick="document.getElementById('install-banner').remove()" style="
      background: transparent;
      color: var(--text);
      border: none;
      padding: 10px;
      cursor: pointer;
      opacity: 0.7;
    ">&times;</button>
  `;
  
  document.body.appendChild(installBanner);
}

async function installApp() {
  if (!deferredPrompt) {
    return;
  }
  
  // Show the install prompt
  deferredPrompt.prompt();
  
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  
  console.log(`User response to the install prompt: ${outcome}`);
  
  // Clear the deferredPrompt
  deferredPrompt = null;
  
  // Remove the install banner
  const banner = document.getElementById('install-banner');
  if (banner) {
    banner.remove();
  }
}

// Track installation
window.addEventListener('appinstalled', () => {
  console.log('PWA was installed');
  if (typeof phantom !== 'undefined' && phantom.track) {
    phantom.track('PWA_Installed');
  }
});

// Add slide up animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideUp {
    from {
      transform: translateX(-50%) translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);
