import { useEffect, useRef } from 'react'
import { globeCodes } from '../data.js'

// 3D certification globe: codes on a Fibonacci sphere, auto-rotating,
// drag to spin with inertia decaying back to the base speed.
export default function CertGlobe() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    let W = 440
    let H = 440
    let raf

    const fit = () => {
      const r = canvas.getBoundingClientRect()
      W = r.width
      H = r.height
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    fit()
    window.addEventListener('resize', fit)

    const pts = globeCodes.map((code, i) => {
      const y = 1 - (i / (globeCodes.length - 1)) * 2
      const rad = Math.sqrt(1 - y * y)
      const th = i * 2.399963
      return { code, x: Math.cos(th) * rad, y, z: Math.sin(th) * rad }
    })

    let rotY = 0
    let rotX = -0.28
    let velY = 0.0045
    let dragging = false
    let lastX = 0
    let lastY = 0

    const onDown = (e) => {
      dragging = true
      lastX = e.clientX
      lastY = e.clientY
      canvas.style.cursor = 'grabbing'
      canvas.setPointerCapture(e.pointerId)
    }
    const onMove = (e) => {
      if (!dragging) return
      velY = (e.clientX - lastX) * 0.0022
      rotY += (e.clientX - lastX) * 0.008
      rotX = Math.max(-1.2, Math.min(1.2, rotX + (e.clientY - lastY) * 0.006))
      lastX = e.clientX
      lastY = e.clientY
    }
    const endDrag = () => {
      dragging = false
      canvas.style.cursor = 'grab'
    }
    canvas.addEventListener('pointerdown', onDown)
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerup', endDrag)
    canvas.addEventListener('pointercancel', endDrag)

    const project = (p) => {
      const cy = Math.cos(rotY)
      const sy = Math.sin(rotY)
      const cx = Math.cos(rotX)
      const sx = Math.sin(rotX)
      const x = p.x * cy + p.z * sy
      let z = -p.x * sy + p.z * cy
      const y = p.y * cx - z * sx
      z = p.y * sx + z * cx
      return { x, y, z }
    }

    const drawRing = (fixedLat, isMeridian, alpha) => {
      ctx.beginPath()
      const R = Math.min(W, H) * 0.36
      const cxp = W / 2
      const cyp = H / 2
      for (let a = 0; a <= 360; a += 6) {
        const la = (isMeridian ? a : fixedLat) * (Math.PI / 180)
        const lo = (isMeridian ? fixedLat : a) * (Math.PI / 180)
        const q = project({ x: Math.cos(la) * Math.cos(lo), y: Math.sin(la), z: Math.cos(la) * Math.sin(lo) })
        const px = cxp + q.x * R
        const py = cyp - q.y * R
        if (a === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.strokeStyle = `rgba(63,224,127,${alpha})`
      ctx.stroke()
    }

    const loop = () => {
      raf = requestAnimationFrame(loop)
      if (!dragging) {
        rotY += velY
        velY += (0.0045 - velY) * 0.01
      }
      const R = Math.min(W, H) * 0.36
      const cxp = W / 2
      const cyp = H / 2
      ctx.clearRect(0, 0, W, H)
      ctx.lineWidth = 1
      for (let lat = -60; lat <= 60; lat += 30) drawRing(lat, false, 0.1)
      for (let mer = 0; mer < 180; mer += 30) drawRing(mer, true, 0.07)
      ctx.beginPath()
      ctx.arc(cxp, cyp, R, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(63,224,127,0.22)'
      ctx.stroke()

      const projected = pts.map((p) => ({ code: p.code, q: project(p) })).sort((a, b) => a.q.z - b.q.z)
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      for (const { code, q } of projected) {
        const depth = (q.z + 1) / 2 // 0 back, 1 front
        const px = cxp + q.x * R
        const py = cyp - q.y * R
        const fs = 9 + depth * 5.5
        ctx.font = `700 ${fs}px "JetBrains Mono", monospace`
        const tw = ctx.measureText(code).width
        const alpha = 0.18 + depth * 0.82
        ctx.fillStyle = `rgba(12,20,14,${0.55 + depth * 0.4})`
        ctx.strokeStyle = `rgba(63,224,127,${alpha * 0.55})`
        const bw = tw + 14
        const bh = fs + 10
        ctx.beginPath()
        ctx.roundRect(px - bw / 2, py - bh / 2, bw, bh, bh / 2)
        ctx.fill()
        ctx.stroke()
        if (depth > 0.75) {
          ctx.shadowColor = 'rgba(63,224,127,0.7)'
          ctx.shadowBlur = 12 * (depth - 0.75) * 4
        }
        ctx.fillStyle = `rgba(${depth > 0.6 ? '141,255,180' : '95,140,110'},${alpha})`
        ctx.fillText(code, px, py + 0.5)
        ctx.shadowBlur = 0
      }
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', fit)
      canvas.removeEventListener('pointerdown', onDown)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerup', endDrag)
      canvas.removeEventListener('pointercancel', endDrag)
    }
  }, [])

  return (
    <div className="globe">
      <div className="globe__halo" aria-hidden="true" />
      <canvas ref={ref} className="globe__canvas" />
      <div className="globe__caption">// cert_globe.render() — drag to spin</div>
    </div>
  )
}
