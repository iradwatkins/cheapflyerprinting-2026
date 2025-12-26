export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0369a1 0%, #082f49 50%, #0c1929 100%)',
      color: 'white'
    }}>
      {/* Header */}
      <header style={{
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 700 }}>
          <span style={{ color: '#38bdf8' }}>Cheap</span> Flyer Printing
        </h1>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#products" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Products</a>
          <a href="#pricing" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Pricing</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={{
        textAlign: 'center',
        padding: '5rem 2rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 700, lineHeight: 1.1 }}>
          Flyers Starting at<br />
          <span style={{ color: '#38bdf8' }}>Just $0.02 Each</span>
        </h2>
        <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Full color, high quality flyers at unbeatable prices.
          Perfect for marketing, events, and promotions.
        </p>
        <a href="#pricing" style={{
          background: '#38bdf8',
          color: '#0c1929',
          padding: '1rem 2.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1.1rem'
        }}>
          See Our Prices
        </a>
      </section>

      {/* Pricing Table */}
      <section id="pricing" style={{
        padding: '4rem 2rem',
        background: 'rgba(0,0,0,0.3)'
      }}>
        <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Flyer Pricing</h3>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '12px',
          overflow: 'hidden'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(56,189,248,0.2)' }}>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Quantity</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>4x6</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>5.5x8.5</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>8.5x11</th>
              </tr>
            </thead>
            <tbody>
              {[
                { qty: '1,000', p1: '$29', p2: '$49', p3: '$79' },
                { qty: '2,500', p1: '$49', p2: '$89', p3: '$129' },
                { qty: '5,000', p1: '$79', p2: '$149', p3: '$199' },
                { qty: '10,000', p1: '$129', p2: '$249', p3: '$349' },
                { qty: '25,000', p1: '$249', p2: '$499', p3: '$699' },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>{row.qty}</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#38bdf8' }}>{row.p1}</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#38bdf8' }}>{row.p2}</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#38bdf8' }}>{row.p3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ textAlign: 'center', marginTop: '1.5rem', opacity: 0.6, fontSize: '0.9rem' }}>
          14pt gloss or matte. Free shipping on orders over $100.
        </p>
      </section>

      {/* Features */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap'
        }}>
          {[
            { icon: '🎨', title: 'Full Color', desc: 'CMYK both sides' },
            { icon: '📄', title: 'Premium Stock', desc: '14pt or 16pt cardstock' },
            { icon: '✨', title: 'Coating Options', desc: 'Gloss, Matte, or UV' },
            { icon: '📦', title: 'Free Shipping', desc: 'Orders over $100' },
          ].map((feature, i) => (
            <div key={i} style={{ maxWidth: '180px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{feature.icon}</div>
              <h4 style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>{feature.title}</h4>
              <p style={{ opacity: 0.6, margin: 0, fontSize: '0.85rem' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{
        padding: '4rem 2rem',
        background: 'rgba(0,0,0,0.3)',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Order Today</h3>
        <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
          Questions? Contact our team for custom quotes.
        </p>
        <a href="mailto:orders@cheapflyerprinting.com" style={{
          color: '#38bdf8',
          textDecoration: 'none',
          fontSize: '1.25rem',
          fontWeight: 600
        }}>
          orders@cheapflyerprinting.com
        </a>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        opacity: 0.6
      }}>
        <p style={{ margin: 0 }}>&copy; 2025 Cheap Flyer Printing. All rights reserved.</p>
      </footer>
    </main>
  )
}
