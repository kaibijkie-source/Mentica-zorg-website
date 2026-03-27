import React from 'react'

function Logo() {
  return (
    <div className="logo-wrap">
      <div className="logo-box">
        <svg viewBox="0 0 64 64" className="logo-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 33C16 23.6 23.6 16 33 16C42.4 16 50 23.6 50 33V43C50 45.8 47.8 48 45 48H21C18.2 48 16 45.8 16 43V33Z" fill="#0f172a" stroke="#93c5fd" strokeWidth="2"/>
          <circle cx="24" cy="30" r="4" fill="#bfdbfe"/>
          <circle cx="33" cy="27.5" r="4.5" fill="#60a5fa"/>
          <circle cx="42.5" cy="31" r="3.5" fill="#dbeafe"/>
          <path d="M20 42C22.5 37.5 28 35 33 35C38 35 43.5 37.5 46 42" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>
      <div>
        <div className="brand-title">Mentica Zorg</div>
        <div className="brand-subtitle">Mentale hulp voor kinderen, tieners en volwassenen</div>
      </div>
    </div>
  )
}

const services = [
  ['Individuele begeleiding', 'Persoonlijke gesprekken voor volwassenen en jongeren die behoefte hebben aan mentale ondersteuning, rust en richting.'],
  ['Kinderen en tieners', 'Laagdrempelige hulp bij emoties, zelfvertrouwen, stress, schooldruk, gedrag en ontwikkeling.'],
  ['Gezinsgerichte hulp', 'Begeleiding waarbij ook ouders en het gezin betrokken kunnen worden voor meer balans en begrip thuis.'],
  ['Online consulten', 'Beveiligde online gesprekken voor cliënten die liever vanuit huis begeleiding ontvangen.'],
  ['Afspraken op locatie', 'Rustige gesprekken in een professionele praktijkomgeving met aandacht voor vertrouwen en veiligheid.'],
  ['Huisbezoeken', 'Wanneer passend kan begeleiding ook dichter bij huis plaatsvinden om zorg toegankelijker te maken.'],
]

const doelgroep = [
  ['Voor kinderen', 'Ondersteuning met aandacht voor emoties, gedrag, ontwikkeling en een veilige basis.'],
  ['Voor tieners', 'Begeleiding bij stress, identiteit, schooldruk, sociale situaties en mentale balans.'],
  ['Voor volwassenen', 'Gesprekken gericht op veerkracht, inzicht, herstel en meer rust in het dagelijks leven.'],
]

const redenen = [
  'Persoonlijke aandacht in plaats van afstandelijke zorg',
  'Gericht op kinderen, tieners én volwassenen',
  'Combinatie van praktijk, online consulten en huisbezoeken',
  'Rustige, warme en professionele uitstraling',
  'Aandacht voor het hele gezinssysteem',
  'Laagdrempelige communicatie en duidelijke werkwijze',
]

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="container header-row">
          <a href="#home" className="brand-link"><Logo /></a>
          <nav className="nav">
            <a href="#over">Over ons</a>
            <a href="#aanbod">Aanbod</a>
            <a href="#doelgroep">Doelgroep</a>
            <a href="#contact">Contact</a>
            <a href="#aanmelden" className="button small primary">Aanmelden</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="pill">Praktijkwebsite Mentica Zorg</div>
              <h1>Een veilige plek voor <span>mentale hulp</span>, rust en persoonlijke aandacht.</h1>
              <p className="lead">
                Mentica Zorg biedt laagdrempelige mentale ondersteuning voor kinderen, tieners en volwassenen.
                Persoonlijk, betrokken en met aandacht voor zowel het individu als het gezin.
              </p>
              <div className="button-row">
                <a href="#aanmelden" className="button primary">Plan een kennismaking</a>
                <a href="#aanbod" className="button secondary">Bekijk het aanbod</a>
              </div>
              <div className="tag-row">
                <span>Kinderen</span>
                <span>Tieners</span>
                <span>Volwassenen</span>
                <span>Gezinsgerichte hulp</span>
              </div>
            </div>
            <div className="panel">
              <Logo />
              <div className="info-grid">
                <div className="info-card"><small>Doelgroep</small><strong>Kinderen, tieners en volwassenen</strong></div>
                <div className="info-card"><small>Regio</small><strong>Rotterdam en omgeving</strong></div>
                <div className="info-card"><small>Vormen van zorg</small><strong>Praktijk, online en huisbezoek</strong></div>
                <div className="info-card"><small>Kernwaarden</small><strong>Rust, vertrouwen en aandacht</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section id="over" className="section">
          <div className="container two-col">
            <div>
              <p className="eyebrow">Over Mentica Zorg</p>
              <h2>Persoonlijke zorg die verder kijkt dan alleen een gesprek.</h2>
              <p>
                Mentica Zorg wil een veilige, professionele en toegankelijke omgeving bieden waar cliënten zich gehoord,
                begrepen en serieus genomen voelen. De praktijk richt zich op mentale ondersteuning die past bij het dagelijks leven.
              </p>
              <p>
                De kracht van Mentica Zorg zit in de combinatie van rust in communicatie, persoonlijke aandacht en oog voor de omgeving
                van de cliënt. Daardoor is er ruimte voor ondersteuning van volwassenen, tieners, kinderen én ouders.
              </p>
            </div>
            <div className="stack">
              <div className="card">
                <h3>Missie</h3>
                <p>Mensen ondersteunen bij psychische, emotionele en opvoedkundige uitdagingen met betrouwbare, deskundige en laagdrempelige zorg.</p>
              </div>
              <div className="card">
                <h3>Praktijkhouder</h3>
                <p><strong>Keith Bijkerk</strong></p>
                <p>Oprichter van Mentica Zorg met de motivatie om toegankelijke en betrokken mentale hulp op te bouwen.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <p className="eyebrow">Waarom Mentica Zorg?</p>
            <h2>Wat Mentica Zorg anders maakt.</h2>
            <div className="cards-grid three">
              {redenen.map((item) => (
                <div className="card compact" key={item}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="aanbod" className="section">
          <div className="container">
            <p className="eyebrow">Aanbod</p>
            <h2>Zorg op een manier die past bij de cliënt.</h2>
            <div className="cards-grid three">
              {services.map(([title, text]) => (
                <div className="card" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="doelgroep" className="section alt">
          <div className="container">
            <p className="eyebrow">Doelgroep</p>
            <h2>Voor kinderen, tieners en volwassenen.</h2>
            <div className="cards-grid three">
              {doelgroep.map(([title, text]) => (
                <div className="card" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container two-col">
            <div className="card large">
              <p className="eyebrow">Contact</p>
              <h2>Neem contact op</h2>
              <div className="contact-list">
                <div><strong>Naam</strong><span>Keith Bijkerk</span></div>
                <div><strong>E-mail</strong><span>kaibijkie@gmail.com</span></div>
                <div><strong>Telefoon</strong><span>0681329834</span></div>
                <div><strong>Adres</strong><span>Sweelinckstraat 125, 3131 SM Vlaardingen</span></div>
              </div>
            </div>

            <div id="aanmelden" className="card large">
              <p className="eyebrow">Aanmeldformulier</p>
              <h2>Vraag een kennismaking aan</h2>
              <p className="muted">Dit formulier is een voorbeeld voor de website en kan later gekoppeld worden aan e-mail of een echte database.</p>
              <form className="form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-grid">
                  <label>Voornaam<input type="text" placeholder="Je voornaam" /></label>
                  <label>Achternaam<input type="text" placeholder="Je achternaam" /></label>
                </div>
                <div className="form-grid">
                  <label>E-mail<input type="email" placeholder="naam@email.nl" /></label>
                  <label>Telefoonnummer<input type="text" placeholder="06..." /></label>
                </div>
                <label>Voor wie is de aanvraag?<input type="text" placeholder="Bijvoorbeeld: voor mezelf, mijn kind of mijn tiener" /></label>
                <label>Korte omschrijving van de hulpvraag<textarea placeholder="Beschrijf kort waarmee je hulp zoekt"></textarea></label>
                <label>Voorkeur voor afspraak<input type="text" placeholder="Op locatie, online of huisbezoek" /></label>
                <button className="button primary full" type="submit">Verstuur aanmelding</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-row">
          <div>
            <div className="brand-title">Mentica Zorg</div>
            <div className="brand-subtitle">Praktijkhouder: Keith Bijkerk</div>
          </div>
          <div className="footer-contact">
            <div>kaibijkie@gmail.com</div>
            <div>0681329834</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
