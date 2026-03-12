import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow1} />
        <div className={styles.heroGlow2} />
        <span className={`${styles.badge} animate-fade-up delay-1`}>
          Blessed To Bless Foundation &middot; Design Preview
        </span>
        <h1 className={`${styles.heroTitle} animate-fade-up delay-3`}>
          Blessed To<br />
          <span className={styles.highlight}>Bless</span>
        </h1>
        <p className={`${styles.heroSub} animate-fade-up delay-5`}>
          Empowering Lives &middot; Inspiring Hope &middot; Creating Change
        </p>
        <p className={`${styles.heroNote} animate-fade-up delay-7`}>
          This is a design system preview for the upcoming Blessed To Bless website.
          <br />Review the colours, typography, and component styles below.
        </p>
      </section>

      <div className={styles.gradientBar} />

      {/* Colour Palette */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>01 — Colour Palette</h2>
        <div className={styles.colorGrid}>
          {[
            { name: 'Primary Yellow', hex: '#F4E167', bg: '#F4E167' },
            { name: 'Accent Orange', hex: '#E25C29', bg: '#E25C29' },
            { name: 'Accent Peach', hex: '#EDAB8A', bg: '#EDAB8A' },
            { name: 'Dark Background', hex: '#111111', bg: '#111111' },
            { name: 'White', hex: '#FFFFFF', bg: '#FFFFFF', border: true },
          ].map((c) => (
            <div className={styles.colorCard} key={c.hex}>
              <div
                className={styles.colorSwatch}
                style={{
                  background: c.bg,
                  border: c.border ? '1px solid rgba(0,0,0,0.1)' : 'none',
                }}
              />
              <div className={styles.colorInfo}>
                <div className={styles.colorName}>
                  {c.name}
                </div>
                <div className={styles.colorHex}>{c.hex}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.gradientLabel}>Gradient Applications</div>
        <div className={styles.gradientRow}>
          <div className={styles.gradientSwatch} style={{ background: 'linear-gradient(135deg, #F4E167, #E25C29)' }} />
          <div className={styles.gradientSwatch} style={{ background: 'linear-gradient(135deg, #E25C29, #EDAB8A)' }} />
          <div className={styles.gradientSwatch} style={{ background: 'linear-gradient(135deg, #F4E167, #EDAB8A)' }} />
        </div>
      </section>

      <div className={styles.gradientBar} />

      {/* Typography */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>02 — Typography</h2>
        <div className={styles.typeStack}>
          {/* Heading font */}
          <div className={styles.typeBlock}>
            <span className={styles.typeBlockLabel}>Nunito · ExtraBold 800</span>
            <div className={styles.fontTag}>Heading Font — Nunito</div>
            <h3 className={styles.typeDisplay}>Be the Change.</h3>
            <p className={styles.typeCaption}>Display / Hero — Nunito 800–900, responsive clamp</p>
          </div>

          <div className={styles.typeBlock}>
            <span className={styles.typeBlockLabel}>Nunito · Bold 700</span>
            <div className={styles.fontTag}>Heading Font — Nunito</div>
            <h4 className={styles.typeSub}>Empowering Lives, Inspiring Hope</h4>
            <h5 className={styles.typeSmall}>Child Welfare &amp; Community Support</h5>
            <p className={styles.typeCaption}>Section Heading / Card Title — Nunito 700–800</p>
          </div>

          <div className={styles.typeBlock}>
            <span className={styles.typeBlockLabel}>DM Sans · Regular 400</span>
            <div className={styles.fontTag}>Body Font — DM Sans</div>
            <p className={styles.typeBodyLg}>
              Bless2Bless Foundation is a nonprofit organization driven by a simple yet powerful
              vision: to empower lives, inspire hope, and create lasting change.
            </p>
            <p className={styles.typeBody}>
              Our mission is rooted in the principle of being blessed to be a blessing — the belief
              that everything entrusted to us is meant to impact others. Whether it is skills,
              knowledge, resources, or influence, every blessing carries a responsibility to serve.
            </p>
            <p className={styles.typeCaption}>Body Large 18px / Body Regular 15px — DM Sans 400</p>
          </div>
        </div>
      </section>

      <div className={styles.gradientBar} />

      {/* Buttons */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>03 — Buttons &amp; Actions</h2>
        <div className={styles.buttonRow}>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>Get Involved</button>
          <button className={`${styles.btn} ${styles.btnOrange}`}>Donate Now</button>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>Learn More</button>
          <button className={`${styles.btn} ${styles.btnGhost}`}>Contact Us</button>
        </div>
      </section>

      <div className={styles.gradientBar} />

      {/* Navigation Preview */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>04 — Navigation</h2>
        <nav className={styles.navPreview}>
          <div className={styles.navLogo}>
            Blessed To <span className={styles.yellow}>Bless</span>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">What We Do</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <a href="#" className={styles.navCta}>Get Involved</a>
        </nav>
      </section>

      <div className={styles.gradientBar} />

      {/* Focus Area Cards */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>05 — Focus Area Cards</h2>
        <div className={styles.cardGrid}>
          {[
            {
              tag: 'Child Welfare',
              tagColor: 'var(--yellow)',
              title: 'Building Safe Spaces',
              text: 'Supporting vulnerable children through donations, outreach programs, mentorship, emotional support, and essential care initiatives.',
              gradient: 'linear-gradient(135deg, rgba(244,225,103,0.12) 0%, rgba(226,92,41,0.06) 100%)',
            },
            {
              tag: 'Education Support',
              tagColor: 'var(--orange)',
              title: 'Access to Learning',
              text: 'Promoting quality education through school supply drives, tutoring support, reading initiatives, and motivational engagements.',
              gradient: 'linear-gradient(135deg, rgba(226,92,41,0.12) 0%, rgba(237,171,138,0.06) 100%)',
            },
            {
              tag: 'Youth Development',
              tagColor: 'var(--peach)',
              title: 'Raising Leaders',
              text: 'Purpose-driven young leaders through mentorship programs, life-skills workshops, and character-building initiatives.',
              gradient: 'linear-gradient(135deg, rgba(237,171,138,0.12) 0%, rgba(244,225,103,0.06) 100%)',
            },
          ].map((card) => (
            <div className={styles.card} key={card.title}>
              <div className={styles.cardImage} style={{ background: card.gradient }}>
                <span className={styles.cardImagePlaceholder}>Photo</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTag} style={{ color: card.tagColor }}>
                  {card.tag}
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.gradientBar} />

      {/* Founders Preview */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>06 — Founders Section</h2>
        <div className={styles.founderGrid}>
          {[
            { name: 'Neo Kobe', initials: 'NK', gradient: 'linear-gradient(135deg, var(--yellow), var(--orange))' },
            { name: 'Mahlatse Mokoena', initials: 'MM', gradient: 'linear-gradient(135deg, var(--orange), var(--peach))' },
            { name: 'Khutso Mtsweni', initials: 'KM', gradient: 'linear-gradient(135deg, var(--peach), var(--yellow))' },
          ].map((founder) => (
            <div className={styles.founderCard} key={founder.name}>
              <div className={styles.founderAvatar} style={{ background: founder.gradient }}>
                {founder.initials}
              </div>
              <div className={styles.founderName}>{founder.name}</div>
              <div className={styles.founderRole}>Co-Founder</div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.gradientBar} />

      {/* Quote Block */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>07 — Mission Quote</h2>
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            &ldquo;We believe that real change happens when ordinary people use what they have
            to make an <em>extraordinary difference</em>.&rdquo;
          </p>
          <span className={styles.quoteAttr}>— Blessed To Bless Foundation</span>
        </div>
      </section>

      <div className={styles.gradientBar} />

      {/* Get Involved Preview */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>08 — Get Involved Section</h2>
        <div className={styles.involvedGrid}>
          {[
            { icon: '💛', title: 'Make a Donation', text: 'Contribute financially or through goods such as clothing, food, school supplies, and toiletries.' },
            { icon: '🤝', title: 'Partner With Us', text: 'Businesses, churches, schools, and organizations can collaborate through sponsorships and joint initiatives.' },
            { icon: '🎓', title: 'Mentor or Speak', text: 'Inspire the next generation by sharing your story, knowledge, and life experiences with children and youth.' },
            { icon: '🛠', title: 'Offer Your Skills', text: 'Whether you are a teacher, healthcare worker, creative, or professional — your expertise can empower others.' },
          ].map((item) => (
            <div className={styles.involvedCard} key={item.title}>
              <div className={styles.involvedIcon}>{item.icon}</div>
              <h4 className={styles.involvedTitle}>{item.title}</h4>
              <p className={styles.involvedText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.gradientBar} />

      {/* Footer Preview */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>09 — Footer</h2>
        <footer className={styles.footerPreview}>
          <div className={styles.footerLeft}>
            <div className={styles.footerLogo}>
              Blessed To <span className={styles.yellow}>Bless</span>
            </div>
            <p className={styles.footerTagline}>Empowering Lives &middot; Inspiring Hope &middot; Creating Change</p>
          </div>
          <div className={styles.footerRight}>
            <a className={styles.footerEmail} href="mailto:blessedtoblessf@gmail.com">
              blessedtoblessf@gmail.com
            </a>
            <p className={styles.footerCopy}>&copy; 2025 Blessed To Bless Foundation. All rights reserved.</p>
          </div>
        </footer>
      </section>

      <div style={{ height: '60px' }} />
    </main>
  )
}
