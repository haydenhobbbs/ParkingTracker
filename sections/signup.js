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

    /* Create account / Sign in tabs (radio buttons, no script needed) */
    #signup .tab-radio { position: absolute; opacity: 0; pointer-events: none; }
    #signup .tabs { display: inline-flex; gap: 4px; margin: 0 0 20px; padding: 4px; background: #0b1220; border: 1px solid #22314d; border-radius: 12px; }
    #signup .tabs label { padding: 9px 18px; font-weight: 600; color: #98a6bc; border-radius: 9px; cursor: pointer; transition: background .15s, color .15s; }
    #signup .tabs label:hover { color: #eef3fa; }
    #signup #signup-create:checked ~ .tabs label[for="signup-create"],
    #signup #signup-signin:checked ~ .tabs label[for="signup-signin"] { color: #0b1220; background: ${SITE.color}; }
    #signup #signup-create:focus-visible ~ .tabs label[for="signup-create"],
    #signup #signup-signin:focus-visible ~ .tabs label[for="signup-signin"] { outline: 2px solid #eef3fa; outline-offset: 2px; }
    #signup #signup-create:checked ~ .signin-form,
    #signup #signup-signin:checked ~ .create-form { display: none; }

    #signup form { display: flex; flex-direction: column; gap: 12px; max-width: 400px; margin: 0 auto; text-align: left; }
    #signup .field { display: flex; flex-direction: column; gap: 6px; }
    #signup .field span { font-size: .85rem; font-weight: 600; color: #c9d3e2; }
    #signup .row { display: flex; align-items: center; justify-content: space-between; gap: 10px; font-size: .85rem; color: #98a6bc; }
    #signup .row label { display: inline-flex; align-items: center; gap: 6px; cursor: pointer; }
    #signup input[type="text"], #signup input[type="email"], #signup input[type="password"], #signup select { width: 100%; padding: 12px 14px; font: inherit; color: #eef3fa; background: #0b1220; border: 1px solid #2c3d5e; border-radius: 10px; }
    #signup input[type="checkbox"] { accent-color: ${SITE.color}; }
    #signup input::placeholder { color: #6b7a92; }
    #signup input:focus, #signup select:focus { outline: none; border-color: ${SITE.color}; box-shadow: 0 0 0 3px ${SITE.color}40; }
    #signup button { margin-top: 4px; padding: 13px 22px; font: inherit; font-weight: 700; color: #0b1220; background: ${SITE.color}; border: 0; border-radius: 10px; cursor: pointer; transition: transform .15s, filter .15s; }
    #signup button:hover { filter: brightness(1.08); transform: translateY(-1px); }
    #signup button:focus-visible { outline: 2px solid #eef3fa; outline-offset: 2px; }
    #signup a, #signup .switch label { color: ${SITE.color}; text-decoration: none; font-weight: 600; cursor: pointer; }
    #signup a:hover, #signup .switch label:hover { text-decoration: underline; }
    #signup .switch { margin: 4px 0 0; text-align: center; font-size: .9rem; color: #98a6bc; }
    #signup .fine { margin: 18px 0 0; font-size: .8rem; color: #6b7a92; }

    /* After submitting, swap the forms for a message */
    #signup .thanks { display: none; margin: 0 auto; max-width: 460px; padding: 18px; border: 1px solid ${SITE.color}66; border-radius: 12px; background: ${SITE.color}14; }
    #signup .thanks b { display: block; font-size: 1.1rem; color: ${SITE.color}; }
    #signup .thanks p { margin: 4px 0 0; color: #c9d3e2; }
    #signup .card[data-done] .tabs, #signup .card[data-done] form, #signup .card[data-done] .fine { display: none; }
    #signup .card[data-done="create"] .thanks-create, #signup .card[data-done="signin"] .thanks-signin { display: block; }

    @media (max-width: 560px) {
      #signup .card { padding: 32px 18px; }
      #signup .tabs { display: flex; }
      #signup .tabs label { flex: 1; padding: 9px 10px; }
    }
  </style>

  <div class="card">
    <p class="eyebrow"><span class="dot"></span>Early access</p>
    <h2>Stop circling the parking structure.</h2>
    <p class="lead">
      Join ${SITE.name} and see how many spots are open in every Cal Poly lot
      before you leave for class. ${SITE.tagline}
    </p>

    <input type="radio" name="signup-mode" id="signup-create" class="tab-radio" checked>
    <input type="radio" name="signup-mode" id="signup-signin" class="tab-radio">
    <div class="tabs">
      <label for="signup-create">Create account</label>
      <label for="signup-signin">Sign in</label>
    </div>

    <form class="create-form" onsubmit="event.preventDefault(); this.closest('.card').dataset.done = 'create';">
      <label class="field"><span>Name</span>
        <input type="text" required placeholder="Musty Mustang" autocomplete="off">
      </label>
      <label class="field"><span>Cal Poly email</span>
        <input type="email" required placeholder="you@calpoly.edu" autocomplete="off">
      </label>
      <label class="field"><span>Password</span>
        <input type="password" required minlength="8" placeholder="At least 8 characters" autocomplete="off">
      </label>
      <label class="field"><span>Permit type</span>
        <select>
          <option>Commuter permit</option>
          <option>Resident permit</option>
          <option>Faculty / staff</option>
          <option>Visitor</option>
        </select>
      </label>
      <button type="submit">Create account</button>
      <p class="switch">Already have an account? <label for="signup-signin">Sign in</label></p>
    </form>

    <form class="signin-form" onsubmit="event.preventDefault(); this.closest('.card').dataset.done = 'signin';">
      <label class="field"><span>Cal Poly email</span>
        <input type="email" required placeholder="you@calpoly.edu" autocomplete="off">
      </label>
      <label class="field"><span>Password</span>
        <input type="password" required placeholder="Your password" autocomplete="off">
      </label>
      <div class="row">
        <label><input type="checkbox"> Remember me</label>
        <a href="#signup" onclick="event.preventDefault();">Forgot password?</a>
      </div>
      <button type="submit">Sign in</button>
      <p class="switch">New to ${SITE.name}? <label for="signup-create">Create an account</label></p>
    </form>

    <p class="fine">Demo only. Nothing you type is saved or sent anywhere.</p>

    <div class="thanks thanks-create" role="status">
      <b>Welcome to ${SITE.name}!</b>
      <p>Your account is ready. We'll let you know when live spot counts go up on campus.</p>
    </div>
    <div class="thanks thanks-signin" role="status">
      <b>Welcome back!</b>
      <p>You're signed in. Open spot counts will show up here once ${SITE.name} is live.</p>
    </div>
  </div>
`);
