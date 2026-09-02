import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Header() {
  const headerRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current

    gsap.fromTo(
      header,
      {
        y: -30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      }
    )
  }, [])

  return (
    <header className="site-header" ref={headerRef}>
      <a href="#" className="logo">
        HIVE<span>&</span>HARVEST
      </a>

      <nav>
        <a href="#story">Story</a>
        <a href="#products">Honey</a>
        <a href="#about">About</a>
      </nav>

      <a href="#contact" className="header-cta">
        Let's talk <span>↗</span>
      </a>
    </header>
  )
}

export default Header