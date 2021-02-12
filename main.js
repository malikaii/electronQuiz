'use strict'

const electron = require('electron')
const path = require('path')
const { app, ipcMain } = electron

const Window = require('./window')

function main() {
    let mainWin = new Window({
        file: 'index.html'
    })

    


let addNewWin

ipcMain.on('add-new-window', () => {
    if(!addNewWin) {
        addNewWin = new Window({
            file: 'quiz.html',
            width: 400,
            height:400,

            parent: mainWin
        })

        addNewWin.on('closed', () => {
            addNewWin = null
        })
    }
})
}


app.on('ready', main)

app.on('window-all-closed', function() {
    app.quit()
})