import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current

    const moveX = gsap.quickTo(cursor, 'x', {
      duration: 0.35,
      ease: 'power3',
    })

    const moveY = gsap.quickTo(cursor, 'y', {
      duration: 0.35,
      ease: 'power3',
    })

    const handleMouseMove = (event) => {
      moveX(event.clientX + 15)
      moveY(event.clientY + 15)
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Gentle floating motion
    const float = gsap.to(cursor, {
      y: '+=6',
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      float.kill()
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      aria-hidden="true"
    >
      🐝
    </div>
  )
}

export default CustomCursor