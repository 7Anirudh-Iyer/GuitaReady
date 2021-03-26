const canvas = document.getElementById('c1')
const c = canvas.getContext('2d')
let a

console.log(window.innerWidth)

function draw() {
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight-100

    c.strokeStyle = 'white'
    a = c.strokeRect(0,0,canvas.width,canvas.height)
}

let callfunction = setInterval(draw, 100)