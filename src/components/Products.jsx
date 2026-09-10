import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Update filename extensions (.png, .webp, .jpg) to match your assets in src/assets/product/
import wildBloomImg from '../assets/products/wild-bloom.png'
import forestGoldImg from '../assets/products/forest-gold.png'
import morningNectarImg from '../assets/products/morning-nectar.png'

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    number: '01',
    name: 'WILD BLOOM',
    type: 'RAW WILDFLOWER HONEY',
    volume: '350g / 12.3 oz',
    price: '$28',
    description:
      'A bright, floral nectar gathered from organic wildflower meadows. Light, fragrant, and naturally golden with subtle notes of clover and lavender.',
    image: wildBloomImg,
  },
  {
    number: '02',
    name: 'FOREST GOLD',
    type: 'ANCIENT WOODLAND HONEY',
    volume: '350g / 12.3 oz',
    price: '$32',
    description:
      'Deep, dark, and complex with a warm caramel finish. Harvested from deep woodland hives surrounded by old-growth oak and pine.',
    image: forestGoldImg,
  },
  {
    number: '03',
    name: 'MORNING NECTAR',
    type: 'CREAMED RAW HONEY',
    volume: '350g / 12.3 oz',
    price: '$30',
    description:
      'Soft, velvety, and delicately smooth. Gently cold-churned for a lush spreading texture made for slow mornings and quiet tea rituals.',
    image: morningNectarImg,
  },
]

function Products() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const [activeProduct, setActiveProduct] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current
      if (!section) return

      // Header entrance animation
      gsap.from('.products-eyebrow, .products-title-line', {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
      })

      // Track active copy block while scrolling
      const cards = gsap.utils.toArray('.product-copy')
      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => setActiveProduct(index),
          onEnterBack: () => setActiveProduct(index),
        })
      })

      // Gentle floating animation on scroll
      gsap.to(imageRef.current, {
        y: -30,
        rotation: 3,
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Fade transition on active product image swap
  useEffect(() => {
    if (!imageRef.current) return

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.92, y: 15 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    )
  }, [activeProduct])

  const product = products[activeProduct]

  return (
    <section className="products" ref={sectionRef} id="honey">
      <div className="products-heading">
        <p className="products-eyebrow">The Harvest Collection</p>

        <h2 className="products-title">
          <span className="products-title-line">A LITTLE</span>
          <span className="products-title-line products-accent">LIQUID GOLD.</span>
        </h2>
      </div>

      <div className="products-stage">
        {/* STICKY IMAGE DISPLAY */}
        <div className="product-sticky">
          <div className="product-image-wrapper">
            <img
              ref={imageRef}
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-floor-shadow" />
          </div>

          <div className="product-note">
            <span className="note-dot" />
            <span>{product.number} · Small Batch · 100% Unfiltered</span>
          </div>
        </div>

        {/* SCROLLABLE PRODUCT DETAILS */}
        <div className="product-information">
          {products.map((item, index) => (
            <article
              className={`product-copy ${activeProduct === index ? 'is-active' : ''}`}
              key={item.number}
            >
              <div className="copy-header">
                <span className="copy-num">{item.number}</span>
                <span className="copy-price">{item.price}</span>
              </div>

              <h3 className="copy-title">{item.name}</h3>
              <p className="copy-desc">{item.description}</p>

              <div className="copy-meta">
                <span>{item.type}</span>
                <span>{item.volume}</span>
              </div>

              <button className="copy-btn" type="button">
                <span>Order Jar ↗</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products