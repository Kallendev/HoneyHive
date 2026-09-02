import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function CustomCursor() {
  const beeRef = useRef(null)

  useEffect(() => {
    const bee = beeRef.current

    const xTo = gsap.quickTo(bee, 'x', {
      duration: 0.35,
      ease: 'power3',
    })

    const yTo = gsap.quickTo(bee, 'y', {
      duration: 0.35,
      ease: 'power3',
    })

    const move = (event) => {
      xTo(event.clientX + 15)
      yTo(event.clientY + 15)
    }

    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <div className="custom-cursor" ref={beeRef}>
      🐝
    </div>
  )
}

export default CustomCursor