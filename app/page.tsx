'use client'
import { useState, useEffect } from 'react'
import styles from './page.module.css'

const WhatsAppIcon = () => (
  <svg className={styles.waIcon} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
)
const EmailIcon = () => (
  <svg className={styles.waIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
)
const InstagramIcon = () => (
  <svg className={styles.waIcon} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
)
const LinkedInIcon = () => (
  <svg className={styles.linkedinIcon} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
)

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const closeMenu = () => setMenuOpen(false)

  return (
    <main className={styles.main}>
      {/* NAV */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a href="#hero" className={styles.navLogo} onClick={closeMenu}>
            <img src="/images/logo.jpg" alt="Blessed To Bless" className={styles.navLogoImg} />
            <span>Blessed To <span className={styles.accent}>Bless</span></span>
          </a>
          <ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#focus" onClick={closeMenu}>What We Do</a></li>
            <li><a href="#founders" onClick={closeMenu}>Founders</a></li>
            <li><a href="#involved" onClick={closeMenu}>Get Involved</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            <li className={styles.navLinksCta}><a href="#involved" onClick={closeMenu} className={styles.navCtaMobile}>Get Involved</a></li>
          </ul>
          <a href="#involved" className={styles.navCta}>Get Involved</a>
          <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerOpen1 : ''}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerOpen2 : ''}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerOpen3 : ''}`} />
          </button>
        </div>
      </nav>

      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}

      {/* HERO */}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroGlow1} />
        <div className={styles.heroGlow2} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Empowering Lives &middot; Inspiring Hope &middot; Creating Change</span>
          <h1 className={styles.heroTitle}>Blessed To<br /><span className={styles.highlight}>Bless</span> Foundation</h1>
          <p className={styles.heroSub}>Everything God has entrusted to us is meant to impact others. We exist to transform communities through intentional acts of generosity, compassion, and service.</p>
          <div className={styles.heroBtns}>
            <a href="#involved" className={styles.btnPrimary}>Get Involved</a>
            <a href="#documentary" className={styles.btnYellow}>Watch Our Story &#9654;</a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/images/hero.jpg" alt="Blessed To Bless volunteer holding a child at an outreach event" className={styles.heroImg} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className={styles.about}>
        <div className={styles.sectionContainer}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLeft}>
              <span className={styles.sectionLabel}>About Us</span>
              <h2 className={styles.sectionHeading}>Blessed to be a <span className={styles.accent}>blessing</span></h2>
              <p className={styles.bodyText}>Bless2Bless Foundation is a nonprofit organisation founded by Neo, Khutso and Mahlatse in 2023, driven by a simple yet powerful vision: to empower lives, inspire hope, and create lasting change.</p>
              <p className={styles.bodyText}>Our mission is rooted in the belief that every blessing carries a responsibility to serve. Whether it&apos;s skills, knowledge, resources, finances, or influence — we believe these are meant to flow through us, not stop with us.</p>
              <p className={styles.bodyText}>While we support various community upliftment initiatives, children have been at the heart of our work from the very beginning. We&apos;ve adopted a children&apos;s home, identifying what&apos;s needed and creating safe spaces where young lives can thrive.</p>
            </div>
            <div className={styles.aboutRight}>
              <img src="/images/about.jpg" alt="Blessed To Bless community outreach" className={styles.aboutImage} />
              <div className={styles.quoteCard}>
                <p className={styles.quoteText}>&ldquo;And I will make of you a great nation, and I will bless you and make your name great, so that you will be a blessing.&rdquo;</p>
                <span className={styles.quoteAttr}>Genesis 12:2-3 ESV</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section id="focus" className={styles.focus}>
        <div className={styles.sectionContainer}>
          <span className={styles.sectionLabel}>What We Do</span>
          <h2 className={styles.sectionHeading}>Key areas of <span className={styles.accent}>focus</span></h2>
          <p className={styles.sectionSub}>Through collective action and faith-driven purpose, we serve communities across six core areas.</p>
          <div className={styles.focusGrid}>
            {[
              { emoji: '🧒', title: 'Child Welfare', text: 'Supporting and uplifting vulnerable children through donations, outreach programs, mentorship, emotional support, and essential care initiatives.', color: 'var(--orange)', image: '/images/outreach-gathering.jpg' },
              { emoji: '🤝', title: 'Social Welfare & Community Support', text: 'Assisting disadvantaged individuals and families through food drives, clothing donations, hygiene campaigns, and community relief efforts.', color: 'var(--peach)', image: '/images/food-drive.jpg' },
              { emoji: '🎓', title: 'Youth Mentorship & Leadership', text: 'Raising purpose-driven young leaders through mentorship programs, life-skills workshops, and character-building initiatives.', color: 'var(--orange)', image: '/images/mentoring.webp' },
              { emoji: '📚', title: 'Education Support', text: 'Promoting access to quality education through school supply drives, tutoring support, reading initiatives, and motivational engagements.', color: 'var(--yellow)', image: '/images/education.webp' },
              { emoji: '💛', title: 'Faith-Driven Community Impact', text: 'Encouraging values of compassion, stewardship, and service through initiatives inspired by the principle of being blessed to be a blessing.', color: 'var(--peach)', image: '/images/community-event.webp' },
              { emoji: '🛠', title: 'Skills Development & Empowerment', text: 'Equipping youth and community members with practical skills, career guidance, entrepreneurship exposure, and personal development tools.', color: 'var(--orange)', image: '/images/handprints.jpg' },
            ].map((item) => (
              <div className={styles.focusCard} key={item.title}>
                <div className={styles.focusImageWrap}><img src={item.image} alt={item.title} className={styles.focusImage} /></div>
                <div className={styles.focusEmoji}>{item.emoji}</div>
                <h3 className={styles.focusTitle}>{item.title}</h3>
                <p className={styles.focusText}>{item.text}</p>
                <div className={styles.focusBar} style={{ background: item.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section id="founders" className={styles.founders}>
        <div className={styles.sectionContainer}>
          <span className={styles.sectionLabel}>Our Team</span>
          <h2 className={styles.sectionHeading}>Meet the <span className={styles.accent}>founders</span></h2>
          <p className={styles.sectionSub}>Three young leaders united by faith and a shared vision to make a lasting impact.</p>
          <div className={styles.founderGrid}>
            {[
              { name: 'Neo Kobe', initials: 'NK', role: 'Co-Founder', image: '/images/founder-neo.jpg', linkedin: 'https://www.linkedin.com/in/neo-kobe-818010246/' },
              { name: 'Mahlatse Mokoena', initials: 'MM', role: 'Co-Founder', image: '/images/founder-mahlatse.jpg', linkedin: 'https://www.linkedin.com/in/mahlatse-mokoena-27565b295/' },
              { name: 'Khutso Mtsweni', initials: 'KM', role: 'Co-Founder', image: '/images/founder-khutso.jpg', linkedin: '' },
            ].map((f) => (
              <div className={styles.founderCard} key={f.name}>
                <div className={styles.founderImageWrap}>
                  <img src={f.image} alt={f.name} className={styles.founderImg} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                  <div className={styles.founderInitials}>{f.initials}</div>
                </div>
                <h3 className={styles.founderName}>{f.name}</h3>
                <span className={styles.founderRole}>{f.role}</span>
                {f.linkedin && (
                  <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className={styles.founderLinkedin}>
                    <LinkedInIcon /> LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT DRIVE */}
      <section id="drive" className={styles.drive}>
        <div className={styles.sectionContainer}>
          <div className={styles.driveGrid}>
            <div className={styles.driveContent}>
              <span className={styles.driveLabel}>Current Campaign</span>
              <h2 className={styles.driveTitle}>Planting Seeds of <span className={styles.accent}>Hope</span></h2>
              <h3 className={styles.driveSubtitle}>School Donation Drive</h3>
              <p className={styles.bodyText}>Winter is around the corner and you can be the reason someone out there believes in a brighter future. Help us equip young learners with the tools they deserve.</p>
              <p className={styles.bodyTextStrong}>A book can open a mind. A pencil can start a dream.</p>
              <div className={styles.driveItems}>
                <h4 className={styles.driveItemsTitle}>What you can donate:</h4>
                <div className={styles.driveTagGrid}>
                  {['School shoes', 'Books', 'Uniforms', 'Stationery', 'Sanitary pads', 'School bags', 'Non-perishable food', 'Monetary donations'].map((item) => (
                    <span className={styles.driveTag} key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <div className={styles.driveContact}>
                <a href="https://wa.me/27685458507" target="_blank" rel="noopener noreferrer" className={styles.drivePhone}><WhatsAppIcon /> +27 68 545 8507</a>
                <a href="https://wa.me/27798755272" target="_blank" rel="noopener noreferrer" className={styles.drivePhone}><WhatsAppIcon /> +27 79 875 5272</a>
              </div>
            </div>
            <div className={styles.drivePoster}>
              <div className={styles.drivePosterPlaceholder}>
                <span>Campaign Poster</span>
                <span className={styles.posterNote}>Awaiting poster from Neo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTARY */}
      <section id="documentary" className={styles.documentary}>
        <div className={styles.sectionContainer}>
          <span className={styles.sectionLabelLight}>Our Journey</span>
          <h2 className={styles.sectionHeadingLight}>Genesis: Building a Sanctuary</h2>
          <p className={styles.sectionSubLight}>A deeper look into our journey — the projects we&apos;ve worked on, the communities we&apos;ve served, and the impact we strive to make.</p>
          <div className={styles.videoWrap}>
            <iframe className={styles.video} src="https://www.youtube.com/embed/XvcvD4Cmn4U" title="Blessed To Bless Documentary" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section id="involved" className={styles.involved}>
        <div className={styles.sectionContainer}>
          <span className={styles.sectionLabel}>Make a Difference</span>
          <h2 className={styles.sectionHeading}>How to get <span className={styles.accent}>involved</span></h2>
          <p className={styles.sectionSub}>Real change happens when ordinary people use what they have to make an extraordinary difference. Here&apos;s how you can join the mission.</p>
          <div className={styles.involvedGrid}>
            {[
              { emoji: '💰', title: 'Make a Donation', text: 'Contribute financially or through goods such as clothing, food, school supplies, toiletries, and other essential items.' },
              { emoji: '✨', title: 'Offer Your Skills', text: 'Whether you\'re a teacher, healthcare worker, creative, or skilled professional — your expertise can uplift others.' },
              { emoji: '🏢', title: 'Partner With Us', text: 'Businesses, churches, schools, and organisations can collaborate through sponsorships, joint initiatives, or resource support.' },
              { emoji: '🫶', title: 'Community Service', text: 'Students and individuals needing community service hours can serve alongside us while making a meaningful difference.' },
              { emoji: '🎤', title: 'Mentor or Speak', text: 'Inspire the next generation by sharing your story, knowledge, and life experiences with children and youth.' },
              { emoji: '🎯', title: 'Sponsor a Project', text: 'Help fund a specific campaign, child welfare visit, education drive, or community upliftment project.' },
            ].map((item) => (
              <div className={styles.involvedCard} key={item.title}>
                <div className={styles.involvedEmoji}>{item.emoji}</div>
                <h3 className={styles.involvedTitle}>{item.title}</h3>
                <p className={styles.involvedText}>{item.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.outreachBar}>
            <h3 className={styles.outreachTitle}>Ready to make a difference? Reach out to us:</h3>
            <div className={styles.outreachLinks}>
              <a href="https://wa.me/27646875387" target="_blank" rel="noopener noreferrer" className={styles.outreachLink}><WhatsAppIcon /> 064 687 5387</a>
              <a href="https://wa.me/27685458507" target="_blank" rel="noopener noreferrer" className={styles.outreachLink}><WhatsAppIcon /> 068 545 8507</a>
              <a href="mailto:blessedtoblessf@gmail.com" className={styles.outreachLink}><EmailIcon /> blessedtoblessf@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT QUOTE */}
      <section className={styles.impactSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.impactQuote}>
            <h2 className={styles.impactText}>&ldquo;We believe that real change happens when ordinary people use what they have to make an <em>extraordinary difference</em>.&rdquo;</h2>
            <p className={styles.impactSub}>Through collective action and faith-driven purpose, we are building a culture where blessings don&apos;t stop with us — they flow through us.</p>
            <a href="#involved" className={styles.btnPrimaryDark}>Be the Change</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.sectionContainer}>
          <div className={styles.footerGrid}>
            <div className={styles.footerMain}>
              <h2 className={styles.footerLogo}>Blessed To <span className={styles.accentLight}>Bless</span></h2>
              <p className={styles.footerTagline}>Empowering Lives &middot; Inspiring Hope &middot; Creating Change</p>
              <p className={styles.footerMission}>Your kindness can rewrite someone&apos;s story.</p>
            </div>
            <div className={styles.footerContact}>
              <h3 className={styles.footerHeading}>Get In Touch</h3>
              <a href="mailto:blessedtoblessf@gmail.com" className={styles.footerLink}><EmailIcon /> blessedtoblessf@gmail.com</a>
              <a href="https://wa.me/27646875387" target="_blank" rel="noopener noreferrer" className={styles.footerLink}><WhatsAppIcon /> 064 687 5387</a>
              <a href="https://wa.me/27685458507" target="_blank" rel="noopener noreferrer" className={styles.footerLink}><WhatsAppIcon /> 068 545 8507</a>
              <a href="https://wa.me/27606609289" target="_blank" rel="noopener noreferrer" className={styles.footerLink}><WhatsAppIcon /> 060 660 9289</a>
            </div>
            <div className={styles.footerSocial}>
              <h3 className={styles.footerHeading}>Follow Us</h3>
              <a href="https://instagram.com/bless.edtobless" target="_blank" rel="noopener noreferrer" className={styles.footerLink}><InstagramIcon /> @bless.edtobless</a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 Blessed To Bless Foundation. All rights reserved.</p>
            <a href="https://www.linkedin.com/in/taboratk/" target="_blank" rel="noopener noreferrer" className={styles.footerCredit}>Website developed by Tlangelani Khosa</a>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP */}
      <button className={`${styles.backToTop} ${showTop ? styles.backToTopVisible : ''}`} onClick={scrollToTop} aria-label="Back to top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
      </button>
    </main>
  )
}
