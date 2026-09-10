import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function CTA() {
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content > *', {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      })
    }, ctaRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="cta-section" ref={ctaRef}>
      <div className="cta-content">
        <span className="cta-eyebrow">Stay Connected</span>
        <h2 className="cta-title">JOIN THE HARVEST CLUB</h2>
        <p className="cta-desc">
          Subscribe to receive early notice on small-batch seasonal releases and 10% off your first order.
        </p>
        <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email address..." required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default CTA