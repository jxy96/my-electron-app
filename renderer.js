const information = document.getElementById('info');

const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // 打印 'pong'
  }
  
  func()

information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;