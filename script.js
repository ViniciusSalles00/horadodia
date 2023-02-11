function carregar() {
        const msg = window.document.getElementById ('msg')
        let img = window.document.getElementById ('imagem')
        const data = new Date()
        let hora = data.getHours()
        let minuto = data.getMinutes()
        msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
        setInterval(carregar, 1)
        

        if (hora >= 0 && hora < 12) {
                img.src = 'img/manha.png'
                document.body.style.background = '#e2cd9f'
        } else if (hora >= 12 && hora <= 18) {
                img.src = 'img/tarde.png'
                document.body.style.background = '#b9846f'
        } else {
                img.src = 'img/noite.png'
                document.body.style.background = '#515154'
        }
}

