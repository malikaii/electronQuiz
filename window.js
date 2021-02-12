'use strict' 

const {BrowserWindow} = require('electron')

const defaultWin = {
    width: 600,
    height: 600,
    show: false,

    webPreferences: {
        nodeIntegration: true
    }
}

class Window extends BrowserWindow{
    constructor ({ file, ...windowSettings}) {
        super({ ...defaultWin, ...windowSettings})

        this.loadFile(file)

        this.once('ready-to-show', () => {
            this.show()
        })

    }
}

module.exports = Window