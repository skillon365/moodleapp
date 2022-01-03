module.exports = {
    appId: 'com.moodle.moodlemobile',
    productName: 'Moodle',
    asar: false,
    icon: 'src/assets/icon/icon.png',
    files: [
        'package.json',
        'node_modules/**/*',
        'src/**/*',
        'www'
    ],
    win: {
        target: ['nsis'],
        publish: []
    },
    nsis: {
        oneClick: false,
        perMachine: true,
        allowElevation: true,
        allowToChangeInstallationDirectory: true,
        runAfterFinish: false
    },
};
