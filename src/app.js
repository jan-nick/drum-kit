window.addEventListener('load', () => {
    const keys = document.querySelectorAll('.key')
    const sounds = document.querySelectorAll('audio')

    keys.forEach(key => {
        const dataKey = key.attributes[0].nodeValue
        const audio = [...sounds].find(
            x => x.attributes[0].nodeValue === dataKey
        )
        key.addEventListener('click', () => {
            audio.currentTime = 0
            audio.play()
            animation(key)
        })
    })

    document.addEventListener('keydown', e => {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

        if(!audio) return
        audio.currentTime = 0
        audio.play()
        animation(key)
    })

    const animation = key => {
        key.style.animation = 'keyAnimation 150ms ease'
        key.addEventListener('animationend', () => {
            key.style.animation = null
        })
    }
})
