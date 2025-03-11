'use strict'

import { app, BrowserWindow } from 'electron'
import path from 'path'

let win

function createWindow() {
  // Crée une fenêtre de 800x600 px
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,  // Permet à Electron d'accéder aux modules Node.js
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js') // Si tu utilises un fichier preload.js
    }
  })

  // Charge l'application Vue sur le port 8080
  win.loadURL('http://localhost:8080')

  // Ouvre les outils de développement en mode debug
  win.webContents.openDevTools()

  // Ferme la fenêtre quand l'utilisateur la ferme
  win.on('closed', () => {
    win = null
  })
}

// Lorsqu'Electron est prêt, crée la fenêtre
app.on('ready', createWindow)

// Quitte l'application lorsque toutes les fenêtres sont fermées
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Recrée la fenêtre sur MacOS lorsque l'icône de l'application est cliquée
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
