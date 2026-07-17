import { useEffect, useRef } from 'react'

const CHARS = '01アイウエオカキクケコサシスセソ{}[]<>=;/+*#$&'

export default function MatrixRain({ enabled = true, speed = 1 }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas || !enabled) return undefined
    const ctx = canvas.getContext('2d')
    let cols = []
    let w = 0
    let h = 0
    let raf

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      w = canvas.width = r.width
      h = canvas.height = r.height
      const n = Math.floor(w / 18)
      cols = Array.from({ length: n }, () => (Math.random() * -h) / 18)
    }
    resize()
    window.addEventListener('resize', resize)

    let last = 0
    const loop = (t) => {
      raf = requestAnimationFrame(loop)
      if (t - last < 50 / speed) return
      last = t
      ctx.fillStyle = 'rgba(8,12,9,0.12)'
      ctx.fillRect(0, 0, w, h)
      ctx.font = '14px "JetBrains Mono", monospace'
      for (let i = 0; i < cols.length; i++) {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)]
        const y = cols[i] * 18
        ctx.fillStyle = Math.random() > 0.975 ? '#a8ffc9' : 'rgba(63,224,127,0.32)'
        ctx.fillText(ch, i * 18, y)
        cols[i] = y > h && Math.random() > 0.985 ? 0 : cols[i] + 1
      }
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [enabled, speed])

  return <canvas ref={ref} className="hero__rain" aria-hidden="true" />
}
