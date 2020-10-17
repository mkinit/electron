const { app, BrowserWindow, Menu, screen } = require('electron')

//拖动
const drag = require('electron-drag')
var clear = drag('.text-clock')
clear()

Menu.setApplicationMenu(null) //取消菜单栏

function createWindow() {
  const screen_size = screen.getPrimaryDisplay().workAreaSize
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    transparent: true,
    frame: false,
    resizable: false,
    x: screen_size.width - 600,
    y: 0,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  //win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})