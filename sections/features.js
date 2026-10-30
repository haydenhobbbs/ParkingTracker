// Person B: build the Features section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #features so your CSS only affects your section.
section("features", () => `
  <style>
    #features { padding: 32px 0; }
    #features .intro { max-width: 620px; margin: 0 auto 28px; text-align: center; }
    #features .eyebrow { margin: 0 0 6px; color: ${SITE.color}; font-size: .8rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
    #features h2 { margin: 0 0 8px; font-size: clamp(1.6rem, 4vw, 2.2rem); line-height: 1.2; }
    #features .tagline { margin: 0; color: #98a6bc; }
    #features .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
    #features .card { padding: 24px; background: #12203a; border: 1px solid #24344f; border-radius: 14px; transition: transform .15s ease, border-color .15s ease; }
    #features .card:hover { transform: translateY(-3px); border-color: ${SITE.color}; }
    #features .icon { display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; margin-bottom: 14px; color: ${SITE.color}; background: color-mix(in srgb, ${SITE.color} 15%, transparent); border-radius: 10px; }
    #features .icon svg { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    #features h3 { margin: 0 0 6px; font-size: 1.1rem; }
    #features .card p { margin: 0; color: #98a6bc; font-size: .95rem; }
    @media (prefers-reduced-motion: reduce) {
      #features .card { transition: none; }
      #features .card:hover { transform: none; }
    }
  </style>

  <div class="intro">
    <p class="eyebrow">Features</p>
    <h2>Why park with ${SITE.name}?</h2>
    <p class="tagline">${SITE.tagline}</p>
  </div>

  <div class="grid">
    <article class="card">
      <div class="icon">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
      </div>
      <h3>See open spots</h3>
      <p>Check which lots have space before you leave, so you can skip the circling.</p>
    </article>
    <article class="card">
      <div class="icon">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3v18"/><path d="M6 4h12l-3 4 3 4H6"/></svg>
      </div>
      <h3>Save your spot</h3>
      <p>Mark where you parked and find your way back to your car in seconds.</p>
    </article>
    <article class="card">
      <div class="icon">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
      </div>
      <h3>Beat the meter</h3>
      <p>Get a reminder before your time runs out, so you can move before a ticket.</p>
    </article>
  </div>
`);
