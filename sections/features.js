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
    #features .card a { display: inline-block; margin-top: 12px; color: ${SITE.color}; font-weight: 600; }
    #features .finder { display: grid; grid-template-columns: 240px 1fr; gap: 20px; margin-top: 16px; padding: 24px; background: #12203a; border: 1px solid #24344f; border-radius: 14px; scroll-margin-top: 16px; }
    #features .finder p { margin: 0; color: #98a6bc; font-size: .95rem; }
    #features .finder label { display: block; margin: 16px 0 6px; font-size: .9rem; font-weight: 600; }
    #features .finder select { width: 100%; padding: 10px; color: #eef3fa; background: #0b1220; border: 1px solid #3a4a66; border-radius: 8px; font: inherit; }
    #features .finder .status { margin-top: 16px; color: #eef3fa; font-weight: 600; }
    #features .finder .clear { margin-top: 12px; padding: 8px 14px; color: #eef3fa; background: transparent; border: 1px solid #3a4a66; border-radius: 8px; font: inherit; cursor: pointer; }
    #features .finder .clear:hover { border-color: ${SITE.color}; }
    #features .map svg { display: block; width: 100%; height: auto; background: #0b1220; border-radius: 10px; }
    #features .map .campus { fill: #101b30; stroke: #24344f; stroke-width: 2; }
    #features .map .roads { fill: none; stroke: #2c3d5a; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
    #features .map .lot { fill: color-mix(in srgb, ${SITE.color} 22%, transparent); stroke: color-mix(in srgb, ${SITE.color} 45%, transparent); stroke-width: 2; cursor: pointer; }
    #features .map .lot.named { fill: color-mix(in srgb, ${SITE.color} 45%, transparent); stroke: ${SITE.color}; }
    #features .map .lot:hover, #features .map .lot.selected { fill: ${SITE.color}; }
    #features .map text { fill: #eef3fa; font-size: 15px; font-weight: 600; text-anchor: middle; pointer-events: none; paint-order: stroke; stroke: #0b1220; stroke-width: 4px; }
    #features .map .pin { display: none; pointer-events: none; }
    #features .map .pin path { fill: #ef7f8f; stroke: #0b1220; stroke-width: 2; }
    #features .map .credit { margin: 8px 0 0; font-size: .8rem; }
    #features .map .credit a { color: inherit; }
    @media (max-width: 720px) {
      #features .finder { grid-template-columns: 1fr; padding: 16px; }
    }
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
      <h3>Find my spot</h3>
      <p>Mark where you parked on the Cal Poly map and find your way back to your car in seconds.</p>
      <a href="#spot-finder">Open the map</a>
    </article>
    <article class="card">
      <div class="icon">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
      </div>
      <h3>Beat the meter</h3>
      <p>Get a reminder before your time runs out, so you can move before a ticket.</p>
    </article>
  </div>

  <div class="finder" id="spot-finder">
    <div>
      <h3>Find my spot</h3>
      <p>Click the lot where you parked, or choose it from the list.</p>
      <label for="spot-lot">Your lot</label>
      <select id="spot-lot">
            <option value="">Choose a lot</option>
            <option value="l31">Canyon Circle Structure</option>
            <option value="l29">Grand Ave Structure</option>
            <option value="l34">H1</option>
            <option value="l32">H2</option>
            <option value="l28">H4</option>
            <option value="l26">H10</option>
            <option value="l27">H12</option>
            <option value="l35">H14 North</option>
            <option value="l33">H14 South</option>
            <option value="l36">H15</option>
            <option value="l25">H16</option>
            <option value="l38">Rodeo Office</option>
            <option value="l37">Structure 131</option>
            <option value="l30">Village Dr Structure</option>
      </select>
      <p class="status" aria-live="polite">No spot saved yet.</p>
      <button class="clear" type="button" hidden>Clear my spot</button>
    </div>
    <div class="map">
      <svg viewBox="0 0 800 722" role="group" aria-label="Map of Cal Poly parking areas">
        <path class="campus" d="M-107.1 -93.5L-99.3 -93.8L-82.1 -94.4L-73.9 -93.8L-31.3 -93.7L33.4 -93.5L46.8 -93.5L111.7 -93.8L157 -94.1L204.8 -94L234.6 -93.9L237.1 -104.7L237.4 -334.7L270.1 -330.1L319 -391.1L378.5 -445.1L402.9 -458.3L450.1 -468.3L507.5 -470.4L517.4 -461.1L548.1 -433.8L565 -424.6L592.6 -432.6L599.5 -383.8L616.3 -351.1L617.3 -349.2L633.8 -316.1L641.8 -298.5L651.4 -279.4L671.2 -236.2L739.7 -150.9L760.9 -130.2L774.4 -119L850 -149.9L863.3 -141.4L890.2 -170.5L944.3 -131.6L943.8 701.8L799.4 700.1L799.3 696.9L785.5 696.7L596.3 693.9L590.3 689.8L587.5 683.9L584.8 633.4L526.6 652.6L527.5 656.1L513.5 641.5L509.5 644.7L507.3 642.9L494.9 615.2L431.5 643.7L319.7 693.8L313.9 682.6L307.2 665L306 657L305.1 649.2L304.3 646L299.2 637.8L281.1 558.1L240.8 566.1L241.1 615.8L169 614.7L169.2 635.9L160.8 633.6L156.3 639.3L154.3 641.9L147.8 650.2L138.6 651.1L137.2 692.9L21.4 617.8L-15.9 584.9L-28.7 560L-71.6 520.2L-88 492L-101.7 465.4L-122.2 413.6L-147.5 346.8L-161.8 307L-169.8 291.9L-181.7 264.4L-201 228L-224.6 196.1L-250 169.7L-305.1 114.6L-302.7 108.8L-293.8 85.3L-293 80.7L-293.4 49.7L-290.9 -92.6L-289.8 -93.1L-276.7 -93L-262.2 -93L-146.4 -93.7L-125.9 -93.8L-122.3 -94.1L-107.1 -93.5Z"/>
        <path class="roads" d="M491.3 369.1L490.7 365.6L490.5 364.8L485.5 344M576.3 405.6L580.3 411.9L584.7 418.7L586.2 421.3L587.5 423.4L589.6 427.9L592.8 437.5L593.5 439.5L594.9 445.6L596 452.4L596.3 454.3L596.5 463L596.1 471.8L595.5 480.2L595.3 481.3L595.2 482.8L595.3 484.1L595.8 485.1M321.1 680.7L327.5 678L347.5 667.3M547.7 947L547.7 938.4L547.7 921.6L547.9 895.2L548.2 869L548.7 846.7L548.8 843.1L548.8 839.7L548.9 827.5L549.4 812.8L549.3 794.8L549.9 746.5L549.1 741.7L547.8 736.6L544.6 731.3L519 697.4L516.4 694.8M471.3 374.1L470.5 370.6L469.5 364.6L468.2 345.4M460.7 864.8L461.3 842.6L462 794L461.6 741L486.7 719.7L498.4 709.7M656.6 540.3L659.9 537.1L661.3 535.8L674.3 523.3L676.2 521.5L678.5 520.3L681.8 519.5L685.4 519.3L689.2 519.7L700.5 522.3L705.4 522.8M594.6 810.2L594.3 794.6L594.2 765.7L593.3 729.1L592.2 697.7M592.2 697.7L589.6 695.5L589.4 695.2L584.6 688.7L583.2 685.6L581.9 667.2L581.2 639.5M506.5 794.7L506.7 757.1L506.7 751.4L506.6 748.9L506.1 746.5L505.3 744.2L504.3 741.9L503 739.9L486.7 719.7M82.7 795.1L77 788.9L65.9 772.7L63.2 768.2L58.5 760.5L57.8 759.4L36.6 725.5L27.3 710.6L22.7 703.3L16.7 693.6L10.4 683L2.6 671.1L-11.9 646.4L-29.5 618L-32 615.2L-35.1 613.7L-41 612.1L-41.9 611.8L-46.1 610.2M378.9 313L381.5 312.5L400.3 308.4M342.6 569.3L342.5 571.5L348.9 597.5L349.6 603.5L352 614.4L357.6 639.1L359.3 644L359.2 651.2L358 656.4L354.3 661.6L347.5 667.3M788.9 700.4L784.8 700.3L733.2 700.2L724.6 700.2L711.8 699.9L700.6 699.8L690.3 699.6L653.4 699L630.1 698.5L619.1 698.4L592.2 697.7M143.6 708.6L139.1 713.9L136.6 717L127.5 728.5L123.4 733.7L122.2 735.2L120.2 737.2L117.9 738.9L115.4 740L112.7 740.6L109.9 740.7L107.1 740.3L104.5 739.3L102.1 737.9L100 736.1L98.3 733.9L97.9 733.2L92.2 724.1L78.2 701.7L76.6 699.6L74.6 697.9L32.3 674.4L30.9 673.8L29.5 673.5L28.1 673.4L26.7 673.9L25.4 674.5L22.1 676.1L14.5 680.6L10.4 683M-295.2 -25.1L-283.4 -23.9L-273.1 -20.2L-261.6 -13.3L-250.4 -1.9L-220.2 45L-218.4 49.2L-217.2 56.8L-219.7 75.5L-220 84.9L-218.4 95.3L-213.2 107.4L-192.3 129.3L-173 149.9L-144.1 184.9L-130 193L-122.4 196.3L-116.5 197.5L-110.4 198.8L-86.4 202L14.5 212.2L43.7 215.2L47.7 215.6L50.3 216.2L94.8 226.3L105.7 234.9L117.3 244L119.4 247.3L129 262.4L144.8 286.7L182.1 346.6L200.9 378.6M676.2 521.5L674.5 519L669.2 496L668.8 494.4L666.3 483.7L665.7 479.6L666 471.3L665.9 453.6L664.7 449.1L656.1 432.2L645.7 408.1L635.3 384.1L626.8 362.6L626.3 361.3L620.7 351.1L616.3 344.1L613.6 341L610.9 338M410.2 304.6L410.7 303.1L410.7 301.1L407.2 284.1M666 471.3L675.7 469.2M461.6 741L454 744.7L449.5 745.9L445.3 745.6L439.8 743.5L435.4 740L432.3 735.8L423.8 724L421.4 720.8L418.9 717.3M344.7 721.8L376.4 702.3L383.2 697.3L400.1 686.4M396.3 391.5L399.1 390.9L400.5 390.6L421.7 385.6L422.7 385.4L425.9 384.6L428.3 384.1L429.3 383.9L444.3 380.4L450.3 378.8L471.3 374.1L485.5 370.5L487.6 370L491.3 369.1L494.3 368.5L495.4 368.3L507.2 365.8L513.2 365.1L519.5 365.1L526.6 365.7L534.1 367.5L540.6 369.8L546.8 372.8L547.8 373.4L550.2 375.1L554 377.9L559.3 382.7L564.2 388.3L575.6 404.6L576.3 405.6M576.3 405.6L579.2 403.5L580.6 402.7L587.4 401L591.6 400.3L596.8 399.7L601.8 399.8L607.3 399.9L610.3 399.6L613 398.9L615.6 398.1L618.3 396.7L620.5 394.9L623.1 392.4L625.6 389.5L627.5 387.7L629 386.6L635.3 384.1M571.8 794.8L571.5 735.3L570.7 731.1L569.3 726.9L567.5 723.1L551.5 698.2L550.6 695.6L549.4 689.9L549.3 686.9L549.7 684.6L553 677.4L554.3 675.6L556.8 674L559.3 673L581.9 667.2M444.7 423.6L443.4 421L432.8 401.2L428.4 393L427.2 389.8L426.8 388.5L425.9 384.6M491 89.9L492.6 85.4L494.2 81.9L496 78L499.9 73.3L508.1 68.2L519.6 61L527.8 57L533.7 55.8L538.2 55.9L541 56.2L558.9 60.5L562 61.3L578.7 65.1L590.7 68L600.7 69.1L610.2 69.2L625.6 67.9L631.4 68.4L636.2 69.7L640.6 73L645.3 77.9L647.5 81.7L648.4 85.7L649 91.2L647.7 97.3L646.2 100.9L644.1 104.8L640.2 107.9L628.3 115.1L622.2 120.1L618.7 124.8L612.3 130.6L593.8 141.9L591.2 143.6L559.6 162.2L558.3 162.7L557.1 162.5L537.9 158.2L536.6 157.9L533.5 157.1M550.2 375.1L552.6 372.4L553.3 371.2L556 365.7L560.2 358.7L563.7 353.8L571.8 344.5L575.5 340.8L578.6 337.3L579.5 336.1M524.9 130.3L527.6 128.7L528.5 128.1L542.8 119.7L547.7 119.3L564.4 123.4L583.5 128.2L586.4 130.1L592.2 139.3L593.8 141.9M609.6 337.2L609.1 334.6L614 314.9L614.2 308.7L613.7 304.8L613.1 302.2L612.4 299.6L611.2 296.7L604.8 285.4L603.8 283.6L602.8 280.5L602.5 279.7L602.1 276L602.5 272.2L615.4 234.3L619.1 226.6L622.2 222.1L625.2 220.7L629.1 220.8L632.3 222.2L634.7 224.9L636.7 229.9L638 239.8L640.4 250.9L642.6 257.2L646.2 264.9L651.4 273.3L652.3 274.5L659.7 282.1L666.6 288.9L670.1 294.5L671.5 299.8L671.5 305.9L670.5 310.3L668.3 311.4M450.3 346L455.2 345.7L465.3 344.9L468.2 345.4L485.5 344L523.1 341.3M432 638.6L430.4 636.9L426.7 630.5L424.7 627.9L422.1 625.4L416.3 621L413.7 619.3L406.7 614.3L403.8 613.6L400.8 613.8L398.7 614.8L396.6 616.5L391.6 624.3L387.9 629.1M500.5 249.9L499.8 240.8M395.6 -35.9L389 -24.7L379.4 -9.7L368.1 8.4L366.2 11.4L362.1 16.9M104.2 499.3L108.2 493.5L111.1 489.9L144.4 446L161.6 423.1L171.7 410.6L179.7 403.1L187.8 397L197 392L206.4 388.3M499.8 240.8L498.9 231.2L498.6 229.6L497.9 227.3L486.1 205.6L485.4 202.5L485.5 199.4L486.3 196.3L488.6 192.2L491.4 190L495.6 188.3L510.8 184.8L514.1 183.7L517.3 182.2L521.4 179.4L526.1 175.1L528.6 171.9L530.9 167.8L532.3 164.1L533.3 160.3L533.5 157.1L533.7 152.4L533.1 147.8L532.1 143.6L529.7 138.3L524.9 130.3L518.4 119.4L514.4 113.9L508.5 107.7L505.5 103.8L500.3 96.2L497.6 93.4L494.8 91.6L491 89.9L488.2 89.3L484.8 89L481.7 89.3L451.7 99L438.8 101.9L419.7 105.2L414 105.5L410 105.2L394.8 103.1L390.4 103L385.3 103.6L371.2 106.8L369.2 107.3L366.7 107.9M579.5 336.1L581.8 336.5L591.8 335.6L598.9 336L609.6 337.2L610.9 338L616.7 337.1L627.7 331.7L659.1 309.7M579.5 336.1L579.9 333.6L581.5 326.2L582.2 321.4L582.6 304.3L581.7 299.9L579.9 296.9L576.7 292.8L571.8 289.5L566.3 287.3L524 277.2L517.7 274.8L511.4 270.5L507.3 266L504.6 261.8L502.7 258.3L501.2 254L500.5 249.9M404.9 274.2L404.3 271.5L403.6 267.5L403.2 265.7L400.7 253.1L392.9 220.3L391.7 215.4L390.1 208.6L387.6 197L382.2 175.4L379.1 162.1L373.3 137L367.9 114.3L366.7 107.9L365.8 103.5L363.6 93.7L361.9 84.8L359.5 74L358.6 70.1L354.7 51.4L355.1 47M406 278.6L404.9 274.2M365.2 749.7L369.9 748L371.9 747.2L384.6 738.9L393.5 733.3L396.3 731.6L412.2 721.8L418.9 717.3L423 714.5L427.8 711.1L430.3 709.4L436.7 701L441.4 693L447.7 682.5M678.8 559.4L674 555.3L660.3 543.8L656.6 540.3L655.8 539.8L653.3 537L651.3 534L633.9 503.7L631.5 500.6L629.3 498.3L625 495L620.8 492.5L614.9 490.1L598.5 485.9L597.6 485.6L595.8 485.1M319.2 677.1L317.5 671.8L311.1 652.5L309.7 648L307.3 637.4L305.7 630.4L297.9 605.3M359.3 644L361.3 646.9L361.9 649L361.7 655.1L362 656.4L362.7 657.7L364.3 658.4M26.8 562.6L31.1 562.3L43.7 562M139.1 713.9L143.1 717.6L153.2 727.8L155.9 730.9L162.7 738.6L168.6 746.1L170.7 749.1M396.3 391.5L395.5 387.4L395.3 385.9L387.9 354.1L384.5 338.6L379.9 317.7L379.6 316.6L378.9 313M788.9 700.4L788.8 704.9L788.5 736.5L788.4 760.3L788 771.9L787.9 790.7L787.5 834.6L787.3 844.5L787.5 868.2L787.6 879.4L787.2 920.7L787.1 926.2M289.7 571.9L285.5 555L273.2 505M297.9 605.3L291.4 578.4L289.7 571.9M347.5 667.3L354.8 663.6L359.7 661L361.8 659.8L364.3 658.4M483.4 626.6L485.6 631.9L486.3 633.4L489.1 640.3L491 644.8L492.2 647.7L497.1 659.4M447.7 682.5L452 683.5L468.4 679.1L471.9 677.7L478.7 674.9L481.4 673.2L488.5 668.7L497.1 659.4L501.9 654M447.7 682.5L448 678.7L446.9 674.5L437.4 651.5L434.5 644.2L433.4 641.4L432 638.6M359 318.8L346.6 324L340 327.4L335.5 330.7L330.9 335.5L318.4 349.6L313.8 353.4L313 353.9L310.8 355.3L308.1 356.8M262.8 403.6L261.9 395.5L257.1 380.8L256.9 380.2L255.6 376.7M347.7 726L345.8 723.3L344.7 721.8L337.5 710.9L328.9 695.7L323.8 685.7L323 684.1L321.1 680.7L319.2 677.1M523.1 341.3L563.4 338L565 338.4L567.3 339.4L569.2 341.3L569.8 342L571.8 344.5M255.6 376.7L259.6 374.7L273.2 368.5L291.4 362.7L299.5 360.4L308.1 356.8M308.1 356.8L301.6 357.7L301.1 357.7L293.5 358.7L273.3 364.4L259.5 370.6L258.2 371.2L254.1 373L248.4 374.9L242.8 379.1M263.2 423L262.9 405.1L262.8 403.6M790.8 678.4L790 688.7L789.3 696.3L788.9 700.4M791.3 671.8L790.8 678.4M938.6 703.7L892.6 703.4L843.7 702.7L799 702.4L794.1 701L788.9 700.4M498.4 709.7L513.2 696.9L516.4 694.8L518.1 690.2L527.8 663.5L530 659.7L531.1 658.4L534.5 654.8L539.1 652.1L581.2 639.5M271.5 489.9L270.8 483.2L269.4 477.5L265.9 459.9L264.2 444.8L263.2 423M273.2 505L271.5 489.9M400.3 308.4L407.3 306.8L409 305.9L410.2 304.6M407.2 284.1L406 278.6M200.9 378.6L204.9 385.1L206.4 388.3M242.8 379.1L251.1 378.5L255.6 376.7M206.4 388.3L216.3 385.7L230.1 382.2M230.1 382.2L236.4 380.7M239 380L242.8 379.1M236.4 380.7L239 380M383.6 640.6L386 635.6L386.2 635.1L387.1 632.6L387.9 629.1M364.3 658.4L374 652.9L377.7 649.8L381.7 644.6L383.6 640.6M791.3 671.8L789.7 664.6L786.3 656.2L782.1 649.3L775.5 641.9L744 614.7L700.1 576.8L683.1 562.8L678.8 559.4M378.9 313L375.9 313.5L374.5 313.8L369.2 315.2L362.1 317.5L359 318.8M255.6 376.7L254.1 373M18.7 623.2L-3.5 606.1M168 734.8L158.4 723.5L149 713.8L143.6 708.6M143.6 708.6L137.5 703.1L117.6 686.5L102 676.1L82.2 663.8L30.6 632L18.7 623.2M115.5 694.9L132.4 708.2L139.1 713.9M-36.7 583.1L-32.3 588.3L-10.5 608L1.8 618.2L27.2 637L38.3 644.1L54.8 654.5L75.9 667.5L96.6 680.5L112 692.2L115.5 694.9M794.5 720.6L794.4 715.4L794.2 704.8L794.1 701L794.2 698.7L794.2 696.3L794.2 695.5L794.4 683L793.3 679L791.3 671.8M793.9 790.7L794.4 744.7L794.5 736.4L794.5 720.6M334.5 528.7L335.2 533.5L340.6 556.9L342.8 566.8L342.6 569.3M361.9 517.9L359.3 518.5L347.4 521.1L339.5 522.8L336.6 524.3L335.1 526.5L334.5 528.7M87.9 532L94.4 516.9L98.6 509.5L101.8 503L104.2 499.3M59.8 559.9L66.8 557L72.9 553.3L78.6 547.8L85.4 537.7L87.9 532M-0.9 568.6L2.6 566.8L9.6 564.7L16.8 563.3L23.4 562.8L26.8 562.6M43.7 562L48.2 561.7L53 561.4L55.8 560.9L59.8 559.9"/>
        <g>
          <path class="lot" d="M575 418.3L563.6 415.9L561.2 418.4L558.6 419.3L557.1 423.4L556.5 425.1L554.1 424.6L552.6 432.2L556.2 433.6L558.3 433.7L586.2 439.7L586.7 437.1L582.4 425.8L575 418.3Z" data-lot="l0" data-name="Campus lot" data-x="566" data-y="426.1"><title>Campus lot</title></path>
          <path class="lot" d="M366.7 312.1L373.4 310.5L373.1 308.8L405.4 301.2L404.6 292.4L402.8 285.7L398 283.9L389.3 285.7L375.1 296.4L374.3 304.8L362.8 308.1L363.5 311.5L366.6 310.8L366.7 312.1Z" data-lot="l1" data-name="Campus lot" data-x="380.2" data-y="301.7"><title>Campus lot</title></path>
          <path class="lot" d="M495.5 340.6L527.6 337.8L525.9 317.5L518.5 318.2L517.8 313.4L508.8 314.4L496 315.8L494 319L495.5 340.6Z" data-lot="l2" data-name="Campus lot" data-x="508.8" data-y="324.1"><title>Campus lot</title></path>
          <path class="lot" d="M506.4 546.9L514.6 544.1L514.1 542.9L512.8 543.5L511.3 537.8L512.5 537.3L507.8 521.6L500.3 523.8L506.4 546.9Z" data-lot="l3" data-name="Campus lot" data-x="509.6" data-y="538.3"><title>Campus lot</title></path>
          <path class="lot" d="M446.1 421.1L448.8 422.6L455.2 419L454.8 416.8L452 415.4L444.4 401.1L437.1 403L444.5 417.2L446.1 421.1Z" data-lot="l4" data-name="Campus lot" data-x="447.7" data-y="415.2"><title>Campus lot</title></path>
          <path class="lot" d="M591.1 642.8L620.2 692.7L603.1 692.2L587.9 666.1L586.6 648.7L591.1 642.8Z" data-lot="l5" data-name="Campus lot" data-x="596.6" data-y="664.2"><title>Campus lot</title></path>
          <path class="lot" d="M376.7 645.6L382.6 636.4L383.8 632.4L383.7 626.8L382.9 621.8L384.7 621.5L382 608.5L374.6 598.3L371.2 599L375.3 619.5L373.4 624.5L366.6 627L366.5 636.2L370.7 646.8L376.7 645.6Z" data-lot="l6" data-name="Campus lot" data-x="376.8" data-y="626"><title>Campus lot</title></path>
          <path class="lot" d="M267.9 424.3L266.4 426.9L267.7 449.2L268.7 450.6L277.1 449.8L280.2 449.1L284.2 445.5L279.2 421.5L267.9 424.3Z" data-lot="l7" data-name="Campus lot" data-x="273.3" data-y="437.9"><title>Campus lot</title></path>
          <path class="lot" d="M181.6 359.7L184.5 358L198.8 381.1L176.3 395.5L177.9 400.1L157.3 417.3L153.9 414.5L151.8 409.3L195.2 381.8L191.8 376.2L181.6 359.7Z" data-lot="l8" data-name="Campus lot" data-x="177.3" data-y="386.7"><title>Campus lot</title></path>
          <path class="lot" d="M276.7 358.7L276.1 350.9L305 348.1L310 352.1L301.7 354L301.9 354.7L299.2 355.4L289.5 356.9L276.7 358.7Z" data-lot="l9" data-name="Campus lot" data-x="293" data-y="354.4"><title>Campus lot</title></path>
          <path class="lot" d="M38.8 252.6L59.6 252.1L59.4 243.7L66.9 243.6L67.1 250.6L64.9 250.6L64.9 254.3L71.5 254L71.8 263L68.5 266.6L45.6 266.8L37.7 253.5L38.8 252.6Z" data-lot="l10" data-name="Campus lot" data-x="58.1" data-y="254.2"><title>Campus lot</title></path>
          <path class="lot" d="M23.9 221.2L48 220.6L48.1 222.7L53.5 222.6L53.6 225.9L53.1 225.9L53.2 228.3L26.4 228.9L26.4 226.6L24 226.7L23.9 221.2Z" data-lot="l11" data-name="Campus lot" data-x="39.5" data-y="224.6"><title>Campus lot</title></path>
          <path class="lot" d="M273.7 463.7L283.4 461.5L281.3 450.2L291.2 448.1L296.1 449.9L303.3 449.8L305.5 458.6L302.4 461.8L293.2 466L281 483L277.5 488.1L275.6 488.4L274.8 482.5L277.4 480.8L273.7 463.7Z" data-lot="l12" data-name="Campus lot" data-x="286" data-y="466.4"><title>Campus lot</title></path>
          <path class="lot" d="M321.3 213.5L327 219.2L316.3 230L313.9 227.6L310.7 230.8L305.6 225.8L316.7 214.6L318.6 216.4L321.3 213.5Z" data-lot="l13" data-name="Campus lot" data-x="316.8" data-y="221.3"><title>Campus lot</title></path>
          <path class="lot" d="M377.9 566.7L389.3 619.4L387.7 620.8L386.6 621L375.7 569L377.9 566.7Z" data-lot="l14" data-name="Campus lot" data-x="382.5" data-y="594"><title>Campus lot</title></path>
          <path class="lot" d="M363.4 642.2L353.5 602.2L351 602.8L360.6 642.9L363.4 642.2Z" data-lot="l15" data-name="Campus lot" data-x="358.4" data-y="626.5"><title>Campus lot</title></path>
          <path class="lot" d="M376.5 665.1L374.8 662.5L371.7 664L370 661.1L375.7 657.8L374.8 656.3L378.3 654L381.6 652.4L384.3 651.7L389.1 650.9L388.3 640L392.9 639.6L393.3 645.4L397 645.2L397.3 648.9L393.7 649.2L393.7 652.4L397.1 653.6L396.1 655.9L394.7 657.6L392.6 658.6L391 659L388.3 659.1L384.6 660.1L381.4 661.5L376.5 665.1Z" data-lot="l16" data-name="Campus lot" data-x="386" data-y="654.9"><title>Campus lot</title></path>
          <path class="lot" d="M327.8 620L338 617.5L345.5 649.5L342.1 652.1L339 639.5L333.2 641L327.8 620Z" data-lot="l17" data-name="Campus lot" data-x="336.2" data-y="634.2"><title>Campus lot</title></path>
          <path class="lot" d="M395.1 624.2L407.3 619.1L408.9 622.7L402.9 625.2L404.7 629.1L393.6 633.6L392.7 631.2L396.1 627.1L395.1 624.2Z" data-lot="l18" data-name="Campus lot" data-x="399.6" data-y="626.3"><title>Campus lot</title></path>
          <path class="lot" d="M446 304.5L452.2 301.2L457.7 295.8L461.4 295.4L462.6 297.8L470.3 296.8L471.1 300.4L474.5 300.2L474.7 303.9L483.7 303L484.9 313.7L486.4 313.8L486.7 319.2L476.9 320.1L476.8 315.8L470.6 316.3L469.6 306.4L454.8 307.5L447 307.2L446 304.5Z" data-lot="l19" data-name="Campus lot" data-x="467.7" data-y="306.2"><title>Campus lot</title></path>
          <path class="lot" d="M317.8 629.4L319.3 629L319 628L320.2 627.6L319.2 623.7L321.6 623.1L325.1 622.1L328 633.4L319.7 635.6L317.8 629.4Z" data-lot="l20" data-name="Campus lot" data-x="320.8" data-y="628.1"><title>Campus lot</title></path>
          <path class="lot" d="M368.9 67.6L360.6 69.6L362.9 78.8L371.2 76.8L368.9 67.6Z" data-lot="l21" data-name="Campus lot" data-x="366.5" data-y="72.1"><title>Campus lot</title></path>
          <path class="lot" d="M420.3 621.5L432.2 611.4L431.1 608.8L429.4 608L417.2 619.3L420.3 621.5Z" data-lot="l22" data-name="Campus lot" data-x="425.1" data-y="615.1"><title>Campus lot</title></path>
          <path class="lot" d="M772.9 624.9L774.1 624.4L775.4 624L775.7 624.9L776.1 626.2L774.8 626.7L773.6 627.1L772.9 624.9Z" data-lot="l23" data-name="Campus lot" data-x="774.5" data-y="625.4"><title>Campus lot</title></path>
          <path class="lot" d="M720.4 576.4L721.1 578.7L722.2 578.4L723.4 578L722.6 575.7L721.5 576L720.4 576.4Z" data-lot="l24" data-name="Campus lot" data-x="721.7" data-y="577.1"><title>Campus lot</title></path>
          <path class="lot named" d="M403.9 250.1L426 243.8L432.2 228.1L441.4 223.2L459 225.7L480.1 214.3L476.1 199.3L476.4 197L447.5 192.6L409.8 201.1L403.7 177.4L401.3 178L400.8 175.8L389.5 178.5L390 180.7L387.6 181.2L403.9 250.1Z" data-lot="l25" data-name="H16" data-x="425.2" data-y="205.7"><title>H16</title></path>
          <path class="lot named" d="M410 454.7L417.3 457.6L422.2 454L415.3 423.5L414.2 423.4L404.1 428.1L410 454.7Z" data-lot="l26" data-name="H10" data-x="413.3" data-y="442.3"><title>H10</title></path>
          <path class="lot named" d="M332.4 302.7L359.3 296.8L375.1 285.1L389.5 271.7L398.9 268.9L388.3 223.3L375.7 226.5L357.9 254.8L348 271.4L345.6 274.5L340.7 276.7L334.3 278L329 277.1L327.3 280.5L332.4 302.7Z" data-lot="l27" data-name="H12" data-x="355.6" data-y="272.7"><title>H12</title></path>
          <path class="lot named" d="M427.7 369.9L429.6 377.7L448.9 373.3L465.5 369.5L463.8 361.4L427.7 369.9Z" data-lot="l28" data-name="H4" data-x="443.8" data-y="370.3"><title>H4</title></path>
          <path class="lot named" d="M596 590.2L598.1 589L596.9 586.9L605.5 581.9L604 579.3L606.8 577.7L608.2 580.1L626.9 569.1L628.1 568.4L629.7 567.4L639.1 583.7L647.6 598.2L645.4 599.5L646.6 601.6L615.9 619.5L614.8 617.5L612.7 618.7L597.5 592.6L596 590.2Z" data-lot="l29" data-name="Grand Ave Structure" data-x="616.6" data-y="590.1"><title>Grand Ave Structure</title></path>
          <path class="lot named" d="M529 183.9L530 185.5L531.1 184.8L536.8 194.7L540.2 192.6L544.6 200.8L539.5 204.2L540.5 205.9L504.5 226.7L503.6 225.2L502.4 225.8L492.3 208.3L494.1 207.3L492.7 204.9L525.8 185.7L529 183.9Z" data-lot="l30" data-name="Village Dr Structure" data-x="521" data-y="201.3"><title>Village Dr Structure</title></path>
          <path class="lot named" d="M572.4 56.2L563.5 54.8L560.3 54.2L521.9 47.3L519 46.7L513.9 45.8L516.4 31.6L518.3 31.6L518.9 29.3L569.8 38.9L569.5 40.7L571.5 41.1L571.5 41.4L574.6 42L572.4 56.2Z" data-lot="l31" data-name="Canyon Circle Structure" data-x="548.9" data-y="43.9"><title>Canyon Circle Structure</title></path>
          <path class="lot named" d="M389.4 387.1L373.2 317.2L364.8 319.7L352.1 325.8L352.6 327.8L350.8 328.7L353.3 341.2L355.8 340.9L357.7 346L362.5 345.2L373.1 390.8L381 389.2L389.4 387.1Z" data-lot="l32" data-name="H2" data-x="365.8" data-y="349.7"><title>H2</title></path>
          <path class="lot named" d="M373.2 217L387 213.9L370.3 141.6L368.1 142.1L367.8 141.2L356.5 143.8L357 146.2L353.9 146.9L369.5 214.8L372.6 214.1L373.2 217Z" data-lot="l33" data-name="H14 South" data-x="368.1" data-y="176.2"><title>H14 South</title></path>
          <path class="lot named" d="M141 301.8L132.7 281L130.1 275.6L132.3 274.1L121.1 256.6L118.3 258.1L116.4 254.5L87.1 266.9L88.1 269.7L83.5 271.4L96.8 302.9L98.1 305.4L101.8 314.1L106.3 312.4L107.6 315L141 301.8Z" data-lot="l34" data-name="H1" data-x="112.6" data-y="285.1"><title>H1</title></path>
          <path class="lot named" d="M352 138.4L368.4 134.5L358.2 90.6L341.9 94.4L352 138.4Z" data-lot="l35" data-name="H14 North" data-x="354.5" data-y="119.2"><title>H14 North</title></path>
          <path class="lot named" d="M207.5 117.4L228.2 132.5L230.4 132L230.6 132L239.6 124L247.5 125.7L249.9 123.5L240 111.8L236.1 115.4L230.5 122.7L227.2 120.3L225.7 121.6L216 110.4L210 115.3L207.5 117.4Z" data-lot="l36" data-name="H15" data-x="228.4" data-y="121.5"><title>H15</title></path>
          <path class="lot named" d="M687 640.9L694.9 636L700.6 632.4L699.4 630.5L698.8 629.3L681.7 600.2L680.8 598.9L674.2 602.6L666.7 607.2L669 611.1L687 640.9Z" data-lot="l37" data-name="Structure 131" data-x="685.4" data-y="620.9"><title>Structure 131</title></path>
          <path class="lot named" d="M84.3 80.1L82.6 82.3L90.3 88.1L92.2 85.9L84.3 80.1Z" data-lot="l38" data-name="Rodeo Office" data-x="86.7" data-y="83.3"><title>Rodeo Office</title></path>
        </g>
        <g>
          <text x="425.2" y="210.7">H16</text>
          <text x="413.3" y="447.3">H10</text>
          <text x="355.6" y="277.7">H12</text>
          <text x="443.8" y="375.3">H4</text>
          <text x="616.6" y="595.1">Grand Ave</text>
          <text x="521" y="206.3">Village Dr</text>
          <text x="548.9" y="48.9">Canyon Cir</text>
          <text x="365.8" y="354.7">H2</text>
          <text x="368.1" y="181.2">H14</text>
          <text x="112.6" y="290.1">H1</text>
          <text x="354.5" y="124.2">H14</text>
          <text x="228.4" y="126.5">H15</text>
          <text x="685.4" y="625.9">131</text>
          <text x="86.7" y="88.3">Rodeo</text>
        </g>
        <g class="pin">
          <path d="M0 0C-3-9-12-15-12-24a12 12 0 1 1 24 0C12-15 3-9 0 0z"/>
        </g>
      </svg>
      <p class="credit">Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors</p>
    </div>
  </div>
`);

// Find my spot: remembers the lot you parked in on this device and pins it on the map.
(function () {
  var KEY = "findMySpot";

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; }
  }

  function write(spot) {
    try {
      if (spot) localStorage.setItem(KEY, JSON.stringify(spot));
      else localStorage.removeItem(KEY);
    } catch (e) {}
  }

  function show(spot) {
    var root = document.getElementById("features");
    var lot = spot && root.querySelector('[data-lot="' + spot.lot + '"]');
    var pin = root.querySelector(".pin");
    var selected = root.querySelector(".lot.selected");
    if (selected) selected.classList.remove("selected");
    root.querySelector(".clear").hidden = !lot;
    root.querySelector("#spot-lot").value = lot && root.querySelector('#spot-lot option[value="' + spot.lot + '"]') ? spot.lot : "";
    if (!lot) {
      pin.style.display = "none";
      root.querySelector(".status").textContent = "No spot saved yet.";
      return;
    }
    lot.classList.add("selected");
    pin.setAttribute("transform", "translate(" + lot.dataset.x + " " + lot.dataset.y + ")");
    pin.style.display = "block";
    root.querySelector(".status").textContent = "Your car is in " + lot.dataset.name + ". Saved at " +
      new Date(spot.time).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) + ".";
  }

  function save(id) {
    var spot = id ? { lot: id, time: Date.now() } : null;
    write(spot);
    show(spot);
  }

  document.addEventListener("click", function (e) {
    var lot = e.target.closest("#features .lot");
    if (lot) save(lot.dataset.lot);
    if (e.target.closest("#features .clear")) save(null);
  });
  document.addEventListener("change", function (e) {
    if (e.target.id === "spot-lot") save(e.target.value);
  });
  document.addEventListener("DOMContentLoaded", function () { show(read()); });
})();
