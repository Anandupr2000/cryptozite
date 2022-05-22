const { platform } = require('os');
const { exec } = require('child_process');

const WINDOWS_PLATFORM = 'win32';
const MAC_PLATFORM = 'darwin';

const osPlatform = platform();
const args = process.argv.slice(2);
const [url] = args;
const callServer = () => {
    // if (url === undefined) {
    //     console.error('Please enter a URL, e.g. "http://www.opencanvas.co.uk"');
    //     process.exit(0);
    // }

    console.log(`\n Running Script to send request\nExecuting command: ${command}\n`);
    
    let command = `ftp cryptozite.herokuapp.com`

    // if (osPlatform === WINDOWS_PLATFORM) {
    //     command = `start microsoft-edge:${url}`;
    // } else if (osPlatform === MAC_PLATFORM) {
    //     command = `open -a "Google Chrome" ${url}`;
    // } else {
    //     command = `google-chrome --no-sandbox ${url}`;
    // }


    exec(command);
}
setTimeout(callServer, 6 * 60 * 60 * 1000)