import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    // Center the emoji directly on the pointer tip
    gsap.set(cursor, { xPercent: -50, yPercent: -50 })

    // Smooth physics tracking
    const moveX = gsap.quickTo(cursor, 'x', {
      duration: 0.25,
      ease: 'power3.out',
    })

    const moveY = gsap.quickTo(cursor, 'y', {
      duration: 0.25,
      ease: 'power3.out',
    })

    const handleMouseMove = (event) => {
      moveX(event.clientX)
      moveY(event.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span className="bee-emoji">🐝</span>
    </div>
  )
}

export default CustomCursor