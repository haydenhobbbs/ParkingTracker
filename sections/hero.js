// Person A: build the Hero section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #hero so your CSS only affects your section.
section("hero", () => `
  <style>
    #hero .hero { position: relative; overflow: hidden; text-align: center; padding: 72px 20px 64px; border-radius: 20px;
      background: radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--brand) 28%, transparent), transparent 65%), #0f1a2e;
      border: 1px solid color-mix(in srgb, var(--brand) 25%, #1c2a44); }
    #hero .pill { display: inline-flex; align-items: center; gap: 8px; font-size: .85rem; color: #cfe; padding: 4px 12px;
      border-radius: 999px; background: color-mix(in srgb, var(--brand) 14%, transparent); border: 1px solid color-mix(in srgb, var(--brand) 40%, transparent); }
    #hero .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--brand); animation: hero-pulse 1.6s infinite; }
    @keyframes hero-pulse { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }
    #hero h1 { margin: 18px 0 8px; font-size: clamp(2.6rem, 9vw, 4.8rem); line-height: 1.05; letter-spacing: -.02em; }
    #hero h1 span { color: var(--brand); }
    #hero .lead { margin: 0 auto; max-width: 34ch; font-size: clamp(1.1rem, 3.4vw, 1.4rem); }
    #hero .tagline { margin: 10px auto 0; max-width: 46ch; color: #98a6bc; }
    #hero .cta { display: inline-block; margin-top: 32px; padding: 14px 32px; border-radius: 12px; font-weight: 700; font-size: 1.05rem;
      text-decoration: none; color: #0b1220; background: var(--brand); box-shadow: 0 8px 30px color-mix(in srgb, var(--brand) 40%, transparent);
      transition: transform .15s, box-shadow .15s; }
    #hero .cta:hover { transform: translateY(-2px); box-shadow: 0 12px 40px color-mix(in srgb, var(--brand) 55%, transparent); }
  </style>
  <div class="hero">
    <div class="pill"><span class="dot"></span> Live on campus</div>
    <h1>${SITE.name}<span>.</span></h1>
    <p class="lead">Stop circling. See open parking spots before you get there.</p>
    <p class="tagline">${SITE.tagline}</p>
    <a class="cta" href="#features">See how it works ↓</a>
  </div>
`);
