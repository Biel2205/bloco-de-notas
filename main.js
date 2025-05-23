// Importa módulos app e BrowserWindow do electron
const { app, BrowserWindow } = require('electron');

// Função para criar a janela principal
function createwindow(){

// Criar uma nova instancia do BrowserWindow
    const window = new BrowserWindow({

        width: 800, // Largura da janela
        height: 600, // Altura da janela

    })

    // Carregar o arquivo HTML na janela 
    window.loadFile('src/pages/index.html');
}

// Evento que é acionado quando o Electron está pronto
app.whenReady().then( () => {
    createwindow(); // Chama função de criar a janela
} )
