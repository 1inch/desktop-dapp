(function () {
    const { ipcRenderer } = require('electron');

    ipcRenderer.send('app_version');

    ipcRenderer.on('app_version', (event, arg) => {
        ipcRenderer.removeAllListeners('app_version');
        console.log('App version: ', arg.version);
    });

    ipcRenderer.on('update_available', () => {
        ipcRenderer.removeAllListeners('update_available');

        alert('A new update is available. Downloading now...');
    });
    ipcRenderer.on('update_downloaded', () => {
        ipcRenderer.removeAllListeners('update_downloaded');

        alert('Update Downloaded. It will be installed now.');

        setTimeout(() => {
            ipcRenderer.send('restart_app');
        }, 500);
    });

    window.isElectronApp = true;
})();
