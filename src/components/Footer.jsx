function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">HIVE & HARVEST</h2>
          <p>Pure, artisanal raw honey gathered with patience and care.</p>
        </div>

        <div className="footer-nav">
          <div className="footer-col">
            <h4>Navigation</h4>
            <a href="#story">Our Story</a>
            <a href="#honey">Collection</a>
            <a href="#about">Philosophy</a>
          </div>

          <div className="footer-col">
            <h4>Social</h4>
            <a href="#instagram" target="_blank" rel="noreferrer">Instagram</a>
            <a href="#pinterest" target="_blank" rel="noreferrer">Pinterest</a>
            <a href="#tiktok" target="_blank" rel="noreferrer">TikTok</a>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <span>hello@hiveandharvest.com</span>
            <span>Wildwood Estate, UK</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hive & Harvest. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer