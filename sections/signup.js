// Person D: build the Sign up section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #signup so your CSS only affects your section.
section("signup", () => `
  <style>
    #signup .card { position: relative; overflow: hidden; border: 1px solid #22314d; border-radius: 18px; padding: 40px 28px; background: linear-gradient(160deg, #12203a 0%, #0e1830 100%); text-align: center; }
    #signup .card::before { content: ""; position: absolute; inset: 0 0 auto 0; height: 4px; background: ${SITE.color}; }
    #signup .eyebrow { display: inline-flex; align-items: center; gap: 8px; margin: 0 0 12px; font-size: .8rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: ${SITE.color}; }
    #signup .dot { width: 8px; height: 8px; border-radius: 50%; background: ${SITE.color}; box-shadow: 0 0 0 4px ${SITE.color}33; }
    #signup h2 { margin: 0 0 8px; font-size: clamp(1.5rem, 4vw, 2.1rem); line-height: 1.2; }
    #signup .lead { margin: 0 auto 28px; max-width: 520px; color: #98a6bc; }
    #signup form { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; max-width: 620px; margin: 0 auto; }
    #signup input, #signup select { flex: 1 1 200px; min-width: 0; padding: 13px 14px; font: inherit; color: #eef3fa; background: #0b1220; border: 1px solid #2c3d5e; border-radius: 10px; }
    #signup select { flex: 0 1 190px; }
    #signup input::placeholder { color: #6b7a92; }
    #signup input:focus, #signup select:focus { outline: none; border-color: ${SITE.color}; box-shadow: 0 0 0 3px ${SITE.color}40; }
    #signup button { flex: 0 0 auto; padding: 13px 22px; font: inherit; font-weight: 700; color: #0b1220; background: ${SITE.color}; border: 0; border-radius: 10px; cursor: pointer; transition: transform .15s, filter .15s; }
    #signup button:hover { filter: brightness(1.08); transform: translateY(-1px); }
    #signup button:focus-visible { outline: 2px solid #eef3fa; outline-offset: 2px; }
    #signup .fine { margin: 14px 0 0; font-size: .8rem; color: #6b7a92; }
    #signup .thanks { display: none; margin: 0 auto; max-width: 460px; padding: 18px; border: 1px solid ${SITE.color}66; border-radius: 12px; background: ${SITE.color}14; }
    #signup .thanks b { display: block; font-size: 1.1rem; color: ${SITE.color}; }
    #signup .thanks p { margin: 4px 0 0; color: #c9d3e2; }
    #signup .card.done form, #signup .card.done .fine { display: none; }
    #signup .card.done .thanks { display: block; }
    @media (max-width: 560px) {
      #signup .card { padding: 32px 18px; }
      #signup input, #signup select, #signup button { flex-basis: 100%; }
    }
  </style>

  <div class="card">
    <p class="eyebrow"><span class="dot"></span>Early access</p>
    <h2>Stop circling the parking structure.</h2>
    <p class="lead">
      Join the ${SITE.name} beta and see how many spots are open in every Cal Poly lot
      before you leave for class. ${SITE.tagline}
    </p>

    <form onsubmit="event.preventDefault(); this.closest('.card').classList.add('done');">
      <input type="email" required placeholder="you@calpoly.edu" aria-label="Email address">
      <select aria-label="Permit type">
        <option>Commuter permit</option>
        <option>Resident permit</option>
        <option>Faculty / staff</option>
        <option>Visitor</option>
      </select>
      <button type="submit">Notify me</button>
    </form>
    <p class="fine">Demo only. Your email isn't saved or sent anywhere.</p>

    <div class="thanks" role="status">
      <b>You're on the list!</b>
      <p>We'll let you know when ${SITE.name} is live on campus.</p>
    </div>
  </div>
`);
