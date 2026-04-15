import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* ===== STICKY NAV ===== */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a href="#hero" className={styles.navLogo}>
            Blessed To <span className={styles.accent}>Bless</span>
          </a>
          <ul className={styles.navLinks}>
            <li><a href="#about">About</a></li>
            <li><a href="#focus">What We Do</a></li>
            <li><a href="#founders">Founders</a></li>
            <li><a href="#involved">Get Involved</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#involved" className={styles.navCta}>Get Involved</a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroGlow1} />
        <div className={styles.heroGlow2} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Empowering Lives &middot; Inspiring Hope &middot; Creating Change</span>
          <h1 className={styles.heroTitle}>
            Blessed To<br />
            <span className={styles.highlight}>Bless</span> Foundation
          </h1>
          <p className={styles.heroSub}>
            Everything God has entrusted to us is meant to impact others. We exist to transform
            communities through intentional acts of generosity, compassion, and service.
          </p>
          <div className={styles.heroBtns}>
            <a href="#involved" className={styles.btnPrimary}>Get Involved</a>
            <a href="#documentary" className={styles.btnSecondary}>Watch Our Story &#9654;</a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src="/images/hero.jpg"
            alt="Blessed To Bless volunteer holding a child at an outreach event"
            className={styles.heroImg}
          />
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className={styles.about}>
        <div className={styles.sectionContainer}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLeft}>
              <span className={styles.sectionLabel}>About Us</span>
              <h2 className={styles.sectionHeading}>
                Blessed to be a <span className={styles.accent}>blessing</span>
              </h2>
              <p className={styles.bodyText}>
                Bless2Bless Foundation is a nonprofit organisation founded by Neo, Khutso and
                Mahlatse in 2023, driven by a simple yet powerful vision: to empower lives,
                inspire hope, and create lasting change.
              </p>
              <p className={styles.bodyText}>
                Our mission is rooted in the belief that every blessing carries a responsibility
                to serve. Whether it&apos;s skills, knowledge, resources, finances, or influence — we
                believe these are meant to flow through us, not stop with us.
              </p>
              <p className={styles.bodyText}>
                While we support various community upliftment initiatives, children have been at
                the heart of our work from the very beginning. We&apos;ve adopted a children&apos;s home,
                identifying what&apos;s needed and creating safe spaces where young lives can thrive.
              </p>
            </div>
            <div className={styles.aboutRight}>
              <img
                src="/images/branded-shirt.webp"
                alt="Blessed To Bless volunteer wearing branded shirt - Empowering Lives, Inspiring Hope, Creating Change"
                className={styles.aboutImage}
              />
              <div className={styles.quoteCard}>
                <p className={styles.quoteText}>
                  &ldquo;And I will make of you a great nation, and I will bless you and make your
                  name great, so that you will be a blessing.&rdquo;
                </p>
                <span className={styles.quoteAttr}>Genesis 12:2-3 ESV</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOCUS AREAS ===== */}
      <section id="focus" className={styles.focus}>
        <div className={styles.sectionContainer}>
          <span className={styles.sectionLabel}>What We Do</span>
          <h2 className={styles.sectionHeading}>
            Key areas of <span className={styles.accent}>focus</span>
          </h2>
          <p className={styles.sectionSub}>
            Through collective action and faith-driven purpose, we serve communities across
            six core areas.
          </p>
          <div className={styles.focusGrid}>
            {[
              {
                emoji: '🧒',
                title: 'Child Welfare',
                text: 'Supporting and uplifting vulnerable children through donations, outreach programs, mentorship, emotional support, and essential care initiatives.',
                color: 'var(--orange)',
                image: '/images/outreach-gathering.jpg',
              },
              {
                emoji: '🤝',
                title: 'Social Welfare & Community Support',
                text: 'Assisting disadvantaged individuals and families through food drives, clothing donations, hygiene campaigns, and community relief efforts.',
                color: 'var(--peach)',
                image: '/images/food-drive.jpg',
              },
              {
                emoji: '🎓',
                title: 'Youth Mentorship & Leadership',
                text: 'Raising purpose-driven young leaders through mentorship programs, life-skills workshops, and character-building initiatives.',
                color: 'var(--orange)',
                image: '/images/mentoring.webp',
              },
              {
                emoji: '📚',
                title: 'Education Support',
                text: 'Promoting access to quality education through school supply drives, tutoring support, reading initiatives, and motivational engagements.',
                color: 'var(--yellow)',
                image: '/images/education.webp',
              },
              {
                emoji: '💛',
                title: 'Faith-Driven Community Impact',
                text: 'Encouraging values of compassion, stewardship, and service through initiatives inspired by the principle of being blessed to be a blessing.',
                color: 'var(--peach)',
                image: '/images/community-event.webp',
              },
              {
                emoji: '🛠',
                title: 'Skills Development & Empowerment',
                text: 'Equipping youth and community members with practical skills, career guidance, entrepreneurship exposure, and personal development tools.',
                color: 'var(--orange)',
                image: '/images/handprints.jpg',
              },
            ].map((item) => (
              <div className={styles.focusCard} key={item.title}>
                <div className={styles.focusImageWrap}>
                  <img src={item.image} alt={item.title} className={styles.focusImage} />
                </div>
                <div className={styles.focusEmoji}>{item.emoji}</div>
                <h3 className={styles.focusTitle}>{item.title}</h3>
                <p className={styles.focusText}>{item.text}</p>
                <div className={styles.focusBar} style={{ background: item.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDERS ===== */}
      <section id="founders" className={styles.founders}>
        <div className={styles.sectionContainer}>
          <span className={styles.sectionLabel}>Our Team</span>
          <h2 className={styles.sectionHeading}>
            Meet the <span className={styles.accent}>founders</span>
          </h2>
          <p className={styles.sectionSub}>
            Three young leaders united by faith and a shared vision to make a lasting impact.
          </p>
          <div className={styles.founderGrid}>
            {[
              { name: 'Neo Kobe', initials: 'NK', role: 'Co-Founder' },
              { name: 'Mahlatse Mokoena', initials: 'MM', role: 'Co-Founder' },
              { name: 'Khutso Mtsweni', initials: 'KM', role: 'Co-Founder' },
            ].map((f, i) => (
              <div className={styles.founderCard} key={f.name}>
                <div className={styles.founderImageWrap}>
                  <div className={styles.founderImagePlaceholder}>
                    {f.initials}
                  </div>
                </div>
                <h3 className={styles.founderName}>{f.name}</h3>
                <span className={styles.founderRole}>{f.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CURRENT DRIVE ===== */}
      <section id="drive" className={styles.drive}>
        <div className={styles.sectionContainer}>
          <div className={styles.driveGrid}>
            <div className={styles.driveContent}>
              <span className={styles.driveLabel}>Current Campaign</span>
              <h2 className={styles.driveTitle}>
                Planting Seeds of <span className={styles.accent}>Hope</span>
              </h2>
              <h3 className={styles.driveSubtitle}>School Donation Drive</h3>
              <p className={styles.bodyText}>
                Winter is around the corner and you can be the reason someone out there believes
                in a brighter future. Help us equip young learners with the tools they deserve.
              </p>
              <p className={styles.bodyTextStrong}>
                A book can open a mind. A pencil can start a dream.
              </p>
              <div className={styles.driveItems}>
                <h4 className={styles.driveItemsTitle}>What you can donate:</h4>
                <div className={styles.driveTagGrid}>
                  {['School shoes', 'Books', 'Uniforms', 'Stationery', 'Sanitary pads', 'School bags', 'Non-perishable food', 'Monetary donations'].map((item) => (
                    <span className={styles.driveTag} key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <div className={styles.driveContact}>
                <a href="tel:+27685458507" className={styles.drivePhone}>+27 68 545 8507</a>
                <span className={styles.driveDivider}>/</span>
                <a href="tel:+27798755272" className={styles.drivePhone}>+27 79 875 5272</a>
              </div>
            </div>
            <div className={styles.drivePoster}>
              <div className={styles.drivePosterPlaceholder}>
                <span>Campaign Poster</span>
                <span className={styles.heroImageNote}>Planting Seeds of Hope poster goes here</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOCUMENTARY ===== */}
      <section id="documentary" className={styles.documentary}>
        <div className={styles.sectionContainer}>
          <span className={styles.sectionLabelLight}>Our Journey</span>
          <h2 className={styles.sectionHeadingLight}>
            Genesis: Building a Sanctuary
          </h2>
          <p className={styles.sectionSubLight}>
            A deeper look into our journey — the projects we&apos;ve worked on, the communities
            we&apos;ve served, and the impact we strive to make.
          </p>
          <div className={styles.videoWrap}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/XvcvD4Cmn4U"
              title="Blessed To Bless Documentary - Genesis: Building a Sanctuary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ===== GET INVOLVED ===== */}
      <section id="involved" className={styles.involved}>
        <div className={styles.sectionContainer}>
          <span className={styles.sectionLabel}>Make a Difference</span>
          <h2 className={styles.sectionHeading}>
            How to get <span className={styles.accent}>involved</span>
          </h2>
          <p className={styles.sectionSub}>
            Real change happens when ordinary people use what they have to make an extraordinary
            difference. Here&apos;s how you can join the mission.
          </p>
          <div className={styles.involvedGrid}>
            {[
              {
                emoji: '💰',
                title: 'Make a Donation',
                text: 'Contribute financially or through goods such as clothing, food, school supplies, toiletries, and other essential items. Every contribution helps us reach more communities.',
              },
              {
                emoji: '✨',
                title: 'Offer Your Services or Skills',
                text: 'Whether you\'re a teacher, healthcare worker, creative, business owner, counsellor, or skilled professional — your expertise can uplift and empower others.',
              },
              {
                emoji: '🏢',
                title: 'Partner With Us',
                text: 'Businesses, churches, schools, and organisations can collaborate with us through sponsorships, joint initiatives, or resource support to expand our reach.',
              },
              {
                emoji: '🫶',
                title: 'Community Service',
                text: 'Students and individuals needing community service hours can serve alongside us while making a meaningful difference in real lives.',
              },
              {
                emoji: '🎤',
                title: 'Mentor or Speak',
                text: 'Inspire the next generation by sharing your story, knowledge, and life experiences with children and youth in our initiatives.',
              },
              {
                emoji: '🎯',
                title: 'Sponsor a Project',
                text: 'Help fund a specific campaign, child welfare visit, education drive, or community upliftment project that resonates with you.',
              },
            ].map((item) => (
              <div className={styles.involvedCard} key={item.title}>
                <div className={styles.involvedEmoji}>{item.emoji}</div>
                <h3 className={styles.involvedTitle}>{item.title}</h3>
                <p className={styles.involvedText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMPACT QUOTE ===== */}
      <section className={styles.impactSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.impactQuote}>
            <h2 className={styles.impactText}>
              &ldquo;We believe that real change happens when ordinary people use what they have
              to make an <em>extraordinary difference</em>.&rdquo;
            </h2>
            <p className={styles.impactSub}>
              Through collective action and faith-driven purpose, we are building a culture where
              blessings don&apos;t stop with us — they flow through us.
            </p>
            <a href="#involved" className={styles.btnPrimaryDark}>Be the Change</a>
          </div>
        </div>
      </section>

      {/* ===== CONTACT / FOOTER ===== */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.sectionContainer}>
          <div className={styles.footerGrid}>
            <div className={styles.footerMain}>
              <h2 className={styles.footerLogo}>
                Blessed To <span className={styles.accentLight}>Bless</span>
              </h2>
              <p className={styles.footerTagline}>
                Empowering Lives &middot; Inspiring Hope &middot; Creating Change
              </p>
              <p className={styles.footerMission}>
                Your kindness can rewrite someone&apos;s story.
              </p>
            </div>
            <div className={styles.footerContact}>
              <h3 className={styles.footerHeading}>Get In Touch</h3>
              <a href="mailto:blessedtoblessf@gmail.com" className={styles.footerLink}>
                blessedtoblessf@gmail.com
              </a>
              <a href="tel:+27646875387" className={styles.footerLink}>064 687 5387</a>
              <a href="tel:+27685458507" className={styles.footerLink}>068 545 8507</a>
              <a href="tel:+27606609289" className={styles.footerLink}>060 660 9289</a>
            </div>
            <div className={styles.footerSocial}>
              <h3 className={styles.footerHeading}>Follow Us</h3>
              <a
                href="https://instagram.com/bless.edtobless"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                @bless.edtobless
              </a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 Blessed To Bless Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
