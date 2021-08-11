const btn = document.getElementById('btn')
const body = document.querySelector('body')
const audio = document.getElementById('audio')
const playBtn = document.getElementById('playbtn')
const container = document.querySelector('.container')

btn.addEventListener('click', setColors)


setColors()


function setColors() {
  const colors = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ]

  function randomColor() {
    let color = '#'

    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * colors.length)
      color += colors[random]
    }
    return color
  }

  const color1 = randomColor()
  const color2 = randomColor()

  const randomDeg = Math.floor(Math.random() * 360)

  body.style.background = `linear-gradient(${randomDeg}deg, ${color1}, ${color2})`
}

// playSong 
function playSong() {
  container.classList.add('play')
  playBtn.innerHTML = ` <i class="fas fa-pause"></i>`
  audio.play()
}

// pauseSong 
function pauseSong() {
  container.classList.remove('play')
  playBtn.innerHTML = ` <i class="fas fa-play"></i>`
  audio.pause()
}


playBtn.addEventListener('click', function () {
  const isPlaying = container.classList.contains('play')

  if (isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})