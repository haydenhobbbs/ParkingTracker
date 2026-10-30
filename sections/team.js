// Person C: build the Team section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #team so your CSS only affects your section.
section("team", () => `
  <style>
    #team .head { text-align: center; margin: 0 0 28px; }
    #team .eyebrow { display: inline-flex; align-items: center; gap: 8px; margin: 0 0 12px; font-size: .8rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: ${SITE.color}; }
    #team .dot { width: 8px; height: 8px; border-radius: 50%; background: ${SITE.color}; box-shadow: 0 0 0 4px ${SITE.color}33; }
    #team h2 { margin: 0 0 8px; font-size: clamp(1.5rem, 4vw, 2.1rem); line-height: 1.2; }
    #team .lead { margin: 0 auto; max-width: 520px; color: #98a6bc; }
    #team .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 16px; }
    #team .member { position: relative; overflow: hidden; border: 1px solid #22314d; border-radius: 16px; padding: 28px 20px 24px; background: linear-gradient(160deg, #12203a 0%, #0e1830 100%); text-align: center; transition: transform .15s, border-color .15s; }
    #team .member::before { content: ""; position: absolute; inset: 0 0 auto 0; height: 3px; background: ${SITE.color}; }
    #team .member:hover { transform: translateY(-3px); border-color: ${SITE.color}66; }
    #team .avatar { display: flex; align-items: center; justify-content: center; width: 64px; height: 64px; margin: 0 auto 14px; border-radius: 50%; font-size: 1.4rem; font-weight: 700; color: #0b1220; background: ${SITE.color}; box-shadow: 0 0 0 5px ${SITE.color}26; }
    #team .name { margin: 0; font-size: 1.1rem; font-weight: 700; color: #eef3fa; }
    #team .role { margin: 4px 0 10px; font-size: .78rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: ${SITE.color}; }
    #team .bio { margin: 0; font-size: .92rem; line-height: 1.5; color: #98a6bc; }
    #team .captain { border-color: ${SITE.color}66; }
    #team .badge { display: inline-block; margin-top: 12px; padding: 3px 10px; font-size: .72rem; font-weight: 700; color: #0b1220; background: ${SITE.color}; border-radius: 999px; }
  </style>

  <div class="head">
    <p class="eyebrow"><span class="dot"></span>The team</p>
    <h2>Built by students who hate circling for parking.</h2>
    <p class="lead">Four Cal Poly students made ${SITE.name} so you can see open spots before you leave for class.</p>
  </div>

  <div class="grid">
    <div class="member captain">
      <div class="avatar" aria-hidden="true">A</div>
      <p class="name">Aarsh</p>
      <p class="role">Team Captain</p>
      <p class="bio">Reviews every pull request and merges the team's work into the live site.</p>
      <span class="badge">Captain</span>
    </div>
    <div class="member">
      <div class="avatar" aria-hidden="true">B</div>
      <p class="name">Bodie Wagner</p>
      <p class="role">Hero</p>
      <p class="bio">Built the first thing you see: the name, tagline, and the big button.</p>
    </div>
    <div class="member">
      <div class="avatar" aria-hidden="true">A</div>
      <p class="name">Anthony Don</p>
      <p class="role">Features</p>
      <p class="bio">Showed what ${SITE.name} does, from live lot counts to the rest of the lineup.</p>
    </div>
    <div class="member">
      <div class="avatar" aria-hidden="true">H</div>
      <p class="name">Hayden Hobbs</p>
      <p class="role">Sign up</p>
      <p class="bio">Set up the repo and built the early access form.</p>
    </div>
  </div>
`);
