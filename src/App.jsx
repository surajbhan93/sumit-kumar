import {
  profile,
  highlights,
  about,
  experience,
  skills,
  education,
  languages,
} from "./data.js";

function Section({ id, num, title, children }) {
  return (
    <section id={id} className="section">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">{num}</span>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <a className="brand" href="#top">{profile.name}</a>
          <nav className="nav" aria-label="Sections">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <div className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">{profile.eyebrow}</p>
              <h1>{profile.name}</h1>
              <p className="lead">{profile.intro}</p>
              <div className="cta">
                <a className="btn solid" href="#experience">See my work</a>
                <a className="btn" href="#skills">Skills</a>
                {profile.email && (
                  <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
                )}
                {profile.linkedin && (
                  <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                )}
              </div>
            </div>
            <div className="stats" aria-label="Highlights">
              {highlights.map((h) => (
                <div className="stat" key={h.num}>
                  <span className="num">{h.num}</span>
                  <span className="label">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Section id="about" num="01" title="About">
          <div className="about-grid">
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="experience" num="02" title="Experience">
          <ol className="timeline">
            {experience.map((job) => (
              <li className="job" key={job.org}>
                <div className="job-meta">
                  <span className="role">{job.role}</span>
                  <span className="org">{job.org}</span>
                </div>
                <ul>
                  {job.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" num="03" title="Skills">
          <div className="skill-grid">
            {skills.map((group) => (
              <div className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="chips">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" num="04" title="Education & languages">
          <ul className="edu">
            {education.map((e) => (
              <li key={e.deg}>
                <span className="when">{e.when}</span>
                <div>
                  <span className="deg">{e.deg}</span>
                  <span className="school">{e.school}</span>
                  <p>{e.note}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="langs">
            {languages.map((l) => (
              <span key={l.name}>
                <b>{l.name}</b>
                {l.level ? `: ${l.level}` : ""}
              </span>
            ))}
          </div>
        </Section>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Python · Data · AI evaluation</span>
        </div>
      </footer>
    </>
  );
}
