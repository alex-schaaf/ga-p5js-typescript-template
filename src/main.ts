import p5 from "p5"
import "./styles.scss"

const width = 800
const height = width * Math.sqrt(2)

const sketch = (p: p5) => {
  p.setup = () => {
    const canvas = p.createCanvas(width, height)
    canvas.parent("p5-canvas")
    p.colorMode(p.HSL)
    p.stroke(360, 100, 100, 1)
  }

  p.draw = () => {}
}


new p5(sketch)