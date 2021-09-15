import string from './css.js'

const player = {
    n: 0,
    timeout: 100,
    id: undefined,
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    init: () => {
        player.play()
        player.bindEvents()
    },
    bindEvents: () => {
        console.log('dianjile1')
        for (let key in player.events) {
            const value = player.events[key]
            console.log(player[value])
            document.querySelector(key).onclick=player[value]
        }
    },
    run: () => {
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }  
        demo.innerHTML=string.substr(0,player.n)
        hljs.highlightAll()
        demo2.innerHTML=string.substr(0,player.n)
        demo.scrollTop=demo.scrollHeight
        player.n+=1
    },
    play: () => {
        window.clearInterval(player.id) 
        player.id=setInterval(player.run,player.timeout)
    },
    pause: () => {    
        window.clearInterval(player.id) 
    },
    slow: () => {
        player.pause()
        player.timeout = 1000
        player.play()
    },
    normal: () => {
        player.pause()
        player.timeout = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.timeout = 10
        player.play()
    }
}

player.init()
