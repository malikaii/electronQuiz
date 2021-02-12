'use strict'
const electron = require('electron')

const { ipcRenderer } = electron

document.getElementById("createNewQuiz").addEventListener("click", () => {
    ipcRenderer.send('add-new-window')
})

