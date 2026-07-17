import { useEffect, useState } from 'react'

// Types each word char-by-char, pauses, deletes, and loops through the list.
export function useTypewriter(words, { typeMs = 72, deleteMs = 32, pauseMs = 2200, enabled = true } = {}) {
  const [typed, setTyped] = useState(enabled ? '' : words[0])

  useEffect(() => {
    if (!enabled) return undefined
    let ri = 0
    let ci = 0
    let deleting = false
    let t
    const tick = () => {
      const word = words[ri]
      if (!deleting) {
        ci++
        if (ci === word.length) {
          deleting = true
          setTyped(word)
          t = setTimeout(tick, pauseMs)
          return
        }
      } else {
        ci--
        if (ci === 0) {
          deleting = false
          ri = (ri + 1) % words.length
        }
      }
      setTyped(word.slice(0, ci))
      t = setTimeout(tick, deleting ? deleteMs : typeMs)
    }
    tick()
    return () => clearTimeout(t)
  }, [words, typeMs, deleteMs, pauseMs, enabled])

  return typed
}
