---
layout: home
title: "Welcome"
---

<div class="layout">
<aside class="side-profile" markdown="0">
  <img src="/images/updated_selfie.JPG" alt="Roberto Tejada Arevalo" />
  <h1>Roberto (Rob) Tejada Arevalo</h1>
  <p>PhD Candidate, Astrophysical Sciences</p>
  <p><a href="https://web.astro.princeton.edu/" target="_blank" rel="noopener">Princeton University</a></p>
  <p class="side-links">
    <a href="mailto:arevalo@princeton.edu">Email</a> |
    <a href="https://github.com/robtejada" target="_blank" rel="noopener">GitHub</a> |
    <a href="https://orcid.org/0000-0001-6708-3427" target="_blank" rel="noopener">ORCID</a> |
    <a href="/assets/cv_2026.pdf">CV (PDF)</a>
  </p>
</aside>
<div class="main-col" markdown="1">

## About

I am a planetary modeler broadly interested in planetary evolution, formation, and internal dynamics. My academic journey has been non-traditional: I began my higher education at a community college three years after graduating from high school. As a PhD candidate, I am committed not only to advancing my research but also to mentoring and supporting others from disadvantaged backgrounds on their academic journeys.

## Research Interests

I'm a **final-year PhD candidate** in astrophysics at Princeton University working with Adam Burrows.
A better understanding of the gas giants in our Solar System will grant us a better understanding of the formation and evolution of gas giant exoplanets more broadly.
My thesis work encompasses the evolution of Jupiter, Saturn, Uranus and Neptune, and recently, the evolution of sub-Neptune exoplanets.
I will be starting my first postdoctoral position as a University of California Presidential Postdoctoral Fellow at UC Santa Cruz, working with Jonathan Fortney. The illustrations below show interior region sketches of Jupiter and Saturn that we've published in [Tejada Arevalo et al. (2025a)](https://iopscience.iop.org/article/10.3847/1538-4357/ada030) and [Sur et al. (2025)](https://iopscience.iop.org/article/10.3847/2041-8213/adad62), and Uranus and Neptune in [Tejada Arevalo et al. (2025b)](https://iopscience.iop.org/article/10.3847/2041-8213/adf3a5). The downward arrows in the Jupiter and Saturn models indicate helium rain, and the red regions indicate regions stable to convection. 

<div class="slice-pair">
<figure class="slice-fig">
<figcaption>Jupiter</figcaption>
<svg class="jupiter-slice" viewBox="0 0 420 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of Jupiter's interior showing central core, convective region, and helium rain layer">
  <defs>
    <radialGradient id="j-interior" cx="40" cy="400" r="340" gradientUnits="userSpaceOnUse">
      <stop offset="0%"  stop-color="#8a1d0c" />
      <stop offset="14%" stop-color="#c8431f" />
      <stop offset="30%" stop-color="#a55433" />
      <stop offset="48%" stop-color="#4e5a7c" />
      <stop offset="66%" stop-color="#5c7aa8" />
      <stop offset="82%" stop-color="#7c94be" />
      <stop offset="88%" stop-color="#d4a04a" />
      <stop offset="90%" stop-color="#eac881" />
      <stop offset="91.5%" stop-color="#e8d7a6" />
      <stop offset="100%" stop-color="#c2d2e3" />
    </radialGradient>
    <marker id="carrow-j" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ffffff" />
    </marker>
    <marker id="rarrow-j" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M 0 0 L 8 4 L 0 8 z" fill="#1a2332" />
    </marker>
  </defs>

  <!-- Pizza-slice wedge: apex at (40,400), opens to right-up, 90 deg, radius 340 -->
  <path d="M 40 400 L 380 400 A 340 340 0 0 0 40 60 Z"
        fill="url(#j-interior)" stroke="#1a2332" stroke-width="1.5" stroke-linejoin="round" />

  <!-- Convection cells (CCW loops) -->
  <g stroke="#ffffff" stroke-width="1.2" fill="none" opacity="0.8">
    <!-- Cell 1: (247,325) r=10 -->
    <path d="M 247 335 A 10 10 0 0 1 247 315" marker-end="url(#carrow-j)" />
    <path d="M 247 315 A 10 10 0 0 1 247 335" marker-end="url(#carrow-j)" />
    <!-- Cell 2: (196,244) r=10 -->
    <path d="M 196 254 A 10 10 0 0 1 196 234" marker-end="url(#carrow-j)" />
    <path d="M 196 234 A 10 10 0 0 1 196 254" marker-end="url(#carrow-j)" />
    <!-- Cell 3: (115,193) r=10 -->
    <path d="M 115 203 A 10 10 0 0 1 115 183" marker-end="url(#carrow-j)" />
    <path d="M 115 183 A 10 10 0 0 1 115 203" marker-end="url(#carrow-j)" />
  </g>

  <!-- Helium rain: inward-pointing arrows -->
  <g stroke="#1a2332" stroke-width="1" fill="none">
    <line x1="345" y1="318" x2="324" y2="324" marker-end="url(#rarrow-j)" />
    <line x1="299" y1="219" x2="281" y2="231" marker-end="url(#rarrow-j)" />
    <line x1="221" y1="141" x2="209" y2="159" marker-end="url(#rarrow-j)" />
  </g>

  <!-- Faint helium-rain inner boundary hint -->
  <g fill="none" stroke="#1a2332" stroke-opacity="0.25" stroke-width="0.8" stroke-dasharray="3 4">
    <path d="M 339 400 A 299 299 0 0 0 40 101" />
  </g>

  <!-- Radius axis: ticks + labels along the bottom, outside the slice -->
  <g stroke="#1a2332" stroke-width="1" fill="none">
    <line x1="40"  y1="400" x2="40"  y2="410" />
    <line x1="108" y1="400" x2="108" y2="410" />
    <line x1="176" y1="400" x2="176" y2="410" />
    <line x1="244" y1="400" x2="244" y2="410" />
    <line x1="312" y1="400" x2="312" y2="410" />
    <line x1="380" y1="400" x2="380" y2="410" />
  </g>
  <g font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="13" fill="#1a2332" text-anchor="middle">
    <text x="40"  y="426">0</text>
    <text x="108" y="426">0.2</text>
    <text x="176" y="426">0.4</text>
    <text x="244" y="426">0.6</text>
    <text x="312" y="426">0.8</text>
    <text x="380" y="426">1.0</text>
    <text x="210" y="442" font-style="italic">R / R_Jup</text>
  </g>

  <!-- Inline region labels (horizontal) -->
  <g font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-weight="600" text-anchor="middle">
    <text x="100" y="362" font-size="13" fill="#ffffff">Fuzzy/stable<tspan x="100" dy="15">region</tspan></text>
    <text x="220" y="290" font-size="14" fill="#ffffff">Convective region</text>
    <text x="50" y="100" font-size="14" fill="#1a2332" text-anchor="start">Helium rain<tspan x="50" dy="16">region</tspan></text>
  </g>
</svg>
</figure>

<figure class="slice-fig">
<figcaption>Saturn</figcaption>
<svg class="jupiter-slice" viewBox="0 0 420 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of Saturn's interior with heavier-element fuzzy core and a deeper, thicker helium rain layer">
  <defs>
    <radialGradient id="s-interior" cx="40" cy="400" r="340" gradientUnits="userSpaceOnUse">
      <stop offset="0%"  stop-color="#7a1608" />
      <stop offset="14%" stop-color="#d84a28" />
      <stop offset="30%" stop-color="#b85638" />
      <stop offset="48%" stop-color="#6e5a7c" />
      <stop offset="60%" stop-color="#7a94be" />
      <stop offset="64%" stop-color="#d4a04a" />
      <stop offset="68%" stop-color="#eac881" />
      <stop offset="74%" stop-color="#e8d7a6" />
      <stop offset="82%" stop-color="#7c94be" />
      <stop offset="100%" stop-color="#c2d2e3" />
    </radialGradient>
    <marker id="carrow-s" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ffffff" />
    </marker>
    <marker id="rarrow-s" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M 0 0 L 8 4 L 0 8 z" fill="#1a2332" />
    </marker>
  </defs>

  <path d="M 40 400 L 380 400 A 340 340 0 0 0 40 60 Z"
        fill="url(#s-interior)" stroke="#1a2332" stroke-width="1.5" stroke-linejoin="round" />

  <!-- Convection cells: inner convective region -->
  <g stroke="#ffffff" stroke-width="1.2" fill="none" opacity="0.8">
    <!-- Inner cell A: (199,308) r=8 -->
    <path d="M 199 316 A 8 8 0 0 1 199 300" marker-end="url(#carrow-s)" />
    <path d="M 199 300 A 8 8 0 0 1 199 316" marker-end="url(#carrow-s)" />
    <!-- Inner cell B: (103,228) r=8 -->
    <path d="M 103 236 A 8 8 0 0 1 103 220" marker-end="url(#carrow-s)" />
    <path d="M 103 220 A 8 8 0 0 1 103 236" marker-end="url(#carrow-s)" />
    <!-- Outer cell A: (331,294) r=10 -->
    <path d="M 331 304 A 10 10 0 0 1 331 284" marker-end="url(#carrow-s)" />
    <path d="M 331 284 A 10 10 0 0 1 331 304" marker-end="url(#carrow-s)" />
    <!-- Outer cell B: (239,163) r=10 -->
    <path d="M 239 173 A 10 10 0 0 1 239 153" marker-end="url(#carrow-s)" />
    <path d="M 239 153 A 10 10 0 0 1 239 173" marker-end="url(#carrow-s)" />
    <!-- Outer cell C: (120,101) r=10 -->
    <path d="M 120 111 A 10 10 0 0 1 120 91" marker-end="url(#carrow-s)" />
    <path d="M 120 91 A 10 10 0 0 1 120 111" marker-end="url(#carrow-s)" />
  </g>

  <!-- Helium rain: inward-pointing arrows (deeper, thicker band) -->
  <g stroke="#1a2332" stroke-width="1" fill="none">
    <line x1="289" y1="333" x2="245" y2="345" marker-end="url(#rarrow-s)" />
    <line x1="263" y1="271" x2="224" y2="294" marker-end="url(#rarrow-s)" />
    <line x1="222" y1="218" x2="190" y2="250" marker-end="url(#rarrow-s)" />
    <line x1="169" y1="177" x2="146" y2="216" marker-end="url(#rarrow-s)" />
    <line x1="107" y1="151" x2="95"  y2="195" marker-end="url(#rarrow-s)" />
  </g>

  <g stroke="#1a2332" stroke-width="1" fill="none">
    <line x1="40"  y1="400" x2="40"  y2="410" />
    <line x1="108" y1="400" x2="108" y2="410" />
    <line x1="176" y1="400" x2="176" y2="410" />
    <line x1="244" y1="400" x2="244" y2="410" />
    <line x1="312" y1="400" x2="312" y2="410" />
    <line x1="380" y1="400" x2="380" y2="410" />
  </g>
  <g font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="13" fill="#1a2332" text-anchor="middle">
    <text x="40"  y="426">0</text>
    <text x="108" y="426">0.2</text>
    <text x="176" y="426">0.4</text>
    <text x="244" y="426">0.6</text>
    <text x="312" y="426">0.8</text>
    <text x="380" y="426">1.0</text>
    <text x="210" y="442" font-style="italic">R / R_Sat</text>
  </g>

  <!-- Inline region label -->
  <g font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-weight="600" text-anchor="middle">
    <text x="100" y="362" font-size="13" fill="#ffffff">Fuzzy/stable<tspan x="100" dy="15">region</tspan></text>
  </g>
</svg>
</figure>

<figure class="slice-fig">
<figcaption>Uranus</figcaption>
<svg class="jupiter-slice" viewBox="0 0 420 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of Uranus's interior with two fuzzy-core regions and two convective regions">
  <defs>
    <radialGradient id="u-interior" cx="40" cy="400" r="340" gradientUnits="userSpaceOnUse">
      <stop offset="0%"  stop-color="#8a1d0c" />
      <stop offset="12%" stop-color="#c8431f" />
      <stop offset="22%" stop-color="#a55433" />
      <stop offset="28%" stop-color="#6e5a7c" />
      <stop offset="32%" stop-color="#4e5a7c" />
      <stop offset="60%" stop-color="#5c7aa8" />
      <stop offset="80%" stop-color="#7c94be" />
      <stop offset="83%" stop-color="#a55433" />
      <stop offset="88%" stop-color="#c8431f" />
      <stop offset="92%" stop-color="#c8431f" />
      <stop offset="94%" stop-color="#a55433" />
      <stop offset="96%" stop-color="#4e5a7c" />
      <stop offset="100%" stop-color="#b8c9dc" />
    </radialGradient>
    <marker id="carrow-u" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ffffff" />
    </marker>
  </defs>

  <path d="M 40 400 L 380 400 A 340 340 0 0 0 40 60 Z"
        fill="url(#u-interior)" stroke="#1a2332" stroke-width="1.5" stroke-linejoin="round" />

  <!-- Convection cells in the inner (main) convective region -->
  <g stroke="#ffffff" stroke-width="1.2" fill="none" opacity="0.8">
    <path d="M 218 327 A 10 10 0 0 1 218 307" marker-end="url(#carrow-u)" />
    <path d="M 218 307 A 10 10 0 0 1 218 327" marker-end="url(#carrow-u)" />
    <path d="M 152 249 A 10 10 0 0 1 152 229" marker-end="url(#carrow-u)" />
    <path d="M 152 229 A 10 10 0 0 1 152 249" marker-end="url(#carrow-u)" />
    <path d="M 74  217 A 10 10 0 0 1 74  197" marker-end="url(#carrow-u)" />
    <path d="M 74  197 A 10 10 0 0 1 74  217" marker-end="url(#carrow-u)" />
  </g>

  <g stroke="#1a2332" stroke-width="1" fill="none">
    <line x1="40"  y1="400" x2="40"  y2="410" />
    <line x1="108" y1="400" x2="108" y2="410" />
    <line x1="176" y1="400" x2="176" y2="410" />
    <line x1="244" y1="400" x2="244" y2="410" />
    <line x1="312" y1="400" x2="312" y2="410" />
    <line x1="380" y1="400" x2="380" y2="410" />
  </g>
  <g font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="13" fill="#1a2332" text-anchor="middle">
    <text x="40"  y="426">0</text>
    <text x="108" y="426">0.2</text>
    <text x="176" y="426">0.4</text>
    <text x="244" y="426">0.6</text>
    <text x="312" y="426">0.8</text>
    <text x="380" y="426">1.0</text>
    <text x="210" y="442" font-style="italic">R / R_Ura</text>
  </g>

  <!-- Outer-red-band label -->
  <g font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-weight="600" fill="#ffffff" font-size="10">
    <text x="50" y="90" text-anchor="start">Large compositional<tspan x="50" dy="14">gradient</tspan></text>
  </g>
</svg>
</figure>

<figure class="slice-fig">
<figcaption>Neptune</figcaption>
<svg class="jupiter-slice" viewBox="0 0 420 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of Neptune's interior with a thin fuzzy-core band and convective regions everywhere else">
  <defs>
    <radialGradient id="n-interior" cx="40" cy="400" r="340" gradientUnits="userSpaceOnUse">
      <stop offset="0%"  stop-color="#3a2412" />
      <stop offset="22%" stop-color="#5a3a1e" />
      <stop offset="28%" stop-color="#5a3a1e" />
      <stop offset="31%" stop-color="#4c688c" />
      <stop offset="36%" stop-color="#5c7aa8" />
      <stop offset="38%" stop-color="#5c7aa8" />
      <stop offset="39%" stop-color="#8a5040" />
      <stop offset="40%" stop-color="#c8431f" />
      <stop offset="41%" stop-color="#8a5040" />
      <stop offset="43%" stop-color="#5c7aa8" />
      <stop offset="72%" stop-color="#7c94be" />
      <stop offset="100%" stop-color="#b8c9dc" />
    </radialGradient>
    <marker id="carrow-n" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ffffff" />
    </marker>
  </defs>

  <path d="M 40 400 L 380 400 A 340 340 0 0 0 40 60 Z"
        fill="url(#n-interior)" stroke="#1a2332" stroke-width="1.5" stroke-linejoin="round" />

  <!-- Convection cells distributed throughout convective region -->
  <g stroke="#ffffff" stroke-width="1.2" fill="none" opacity="0.8">
    <path d="M 228 342 A 10 10 0 0 1 228 322" marker-end="url(#carrow-n)" />
    <path d="M 228 322 A 10 10 0 0 1 228 342" marker-end="url(#carrow-n)" />
    <path d="M 181 269 A 10 10 0 0 1 181 249" marker-end="url(#carrow-n)" />
    <path d="M 181 249 A 10 10 0 0 1 181 269" marker-end="url(#carrow-n)" />
    <path d="M 108 222 A 10 10 0 0 1 108 202" marker-end="url(#carrow-n)" />
    <path d="M 108 202 A 10 10 0 0 1 108 222" marker-end="url(#carrow-n)" />
    <path d="M 291 265 A 10 10 0 0 1 291 245" marker-end="url(#carrow-n)" />
    <path d="M 291 245 A 10 10 0 0 1 291 265" marker-end="url(#carrow-n)" />
    <path d="M 185 159 A 10 10 0 0 1 185 139" marker-end="url(#carrow-n)" />
    <path d="M 185 139 A 10 10 0 0 1 185 159" marker-end="url(#carrow-n)" />
  </g>

  <g stroke="#1a2332" stroke-width="1" fill="none">
    <line x1="40"  y1="400" x2="40"  y2="410" />
    <line x1="108" y1="400" x2="108" y2="410" />
    <line x1="176" y1="400" x2="176" y2="410" />
    <line x1="244" y1="400" x2="244" y2="410" />
    <line x1="312" y1="400" x2="312" y2="410" />
    <line x1="380" y1="400" x2="380" y2="410" />
  </g>
  <g font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="13" fill="#1a2332" text-anchor="middle">
    <text x="40"  y="426">0</text>
    <text x="108" y="426">0.2</text>
    <text x="176" y="426">0.4</text>
    <text x="244" y="426">0.6</text>
    <text x="312" y="426">0.8</text>
    <text x="380" y="426">1.0</text>
    <text x="210" y="442" font-style="italic">R / R_Nep</text>
  </g>

  <!-- Compact-core label -->
  <g font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-weight="600" text-anchor="middle">
    <text x="90" y="385" font-size="11" fill="#ffffff">Compact core</text>
  </g>
</svg>
</figure>
</div>

## Publications
1. **Tejada Arevalo R.** et al., [*Sub-Neptune Memories I: Implications of Inefficient Mantle Cooling and Silicate Rain*](https://iopscience.iop.org/article/10.3847/1538-4357/ae5483), *ApJ* 243 (2026)
2. **Tejada Arevalo R.**, [*Different Inhomogeneous Evolutionary Histories for Uranus and Neptune*](https://iopscience.iop.org/article/10.3847/2041-8213/adf3a5), *ApJL* 989 (2025).
3. **Tejada Arevalo R.**, et al., [*Jupiter Evolutionary Models Incorporating Stably Stratified Regions*](https://iopscience.iop.org/article/10.3847/1538-4357/ada030), *ApJ* 979 (2025).
4. Sur, A. et al., (incl. **Tejada Arevalo R.**), [*Simultaneous Evolutionary Fits for Jupiter and Saturn Incorporating Fuzzy Cores*](https://iopscience.iop.org/article/10.3847/2041-8213/adad62), *ApJL* 980 (2025).
5. **Tejada Arevalo R.**, et al., [*Equations of State, Thermodynamics, and Miscibility Curves for Jovian Planet and Giant Exoplanet Evolutionary Models*](https://iopscience.iop.org/article/10.3847/1538-4365/ad6cd7), *ApJS* 274 (2024).
6. Sur, A. et al., (incl. **Tejada Arevalo R.**)., [*APPLE: An Evolution Code for Modeling Giant Planets*](https://iopscience.iop.org/article/10.3847/1538-4357/ad57c3), *ApJ* 971 (2024).
7. **Tejada Arevalo R.**, et al., [*Stability Constrained Characterization of the 23 Myr Old V1298 Tau System: Do Young Planets Form in Mean Motion Resonance Chains?*](https://iopscience.iop.org/article/10.3847/2041-8213/ac70e0), *ApJL* 932 (2022)
8. **Tejada Arevalo R.**, et al., [*Further Evidence for Tidal Spin-up of Hot Jupiter Host Stars*](https://iopscience.iop.org/article/10.3847/1538-4357/ac1429), *ApJ* 919 (2021)

## Recent Research Projects

### Sub-Neptune Evolution

[Tejada Arevalo et al. (2026)](https://iopscience.iop.org/article/10.3847/1538-4357/ae5483) investigates the evolution of sub-Neptune exoplanets (between 1.5 and 4 Earth radii) subject to a convectively, Ledoux-stable envelope-mantle interface and explores the effects of silicate rain. Internal luminosities from the mantle to the envelope are only transferred via conduction and radiation, resulting in inefficient cooling of the mantles. This means that sub-Neptune mantles and cores can remain liquid over their lifespan, and that hot initial conditions can result in inflated sub-Neptune radii over Gyr timescales. Our work showcases the first models to incorporate silicate rain in sub-Neptune envelopes. The diagram below shows the basic setup of the sub-Neptune structure in [Tejada Arevalo et al. (2026)](https://iopscience.iop.org/article/10.3847/1538-4357/ae5483).

<img src="/images/subneptune_cutaway.png" alt="Sub-Neptune interior cross-section: Fe-Si core, MgSiO3 mantle, and H-He-Z envelope with 2:1 mantle-to-core ratio" loading="lazy" style="max-width: 480px;" />

The following plot shows that hot liquid mantles maintain larger radii by approximately 10% at Gyr ages. 
<img src="/images/Fig2_10Mearth_entropy_dependence_light.png" alt="Sub-Neptune entropy dependence" loading="lazy" />

### Interior Evolution of Uranus and Neptune

[Tejada Arevalo et al. (2025b)](https://iopscience.iop.org/article/10.3847/2041-8213/adf3a5) models the evolution of Uranus and Neptune informed by formation models using methane-ammonia-water equation of state mixtures under the influence of convective mixing. I found that while Uranus and Neptune could have formed with a similar composition gradient, their initial entropy profiles determine whether their envelopes homogenize, and thus whether they release their internal heat. I propose that the difference between the luminosities of Uranus and Neptune could be due to convective mixing of their interior structures.

<div class="figure-pair">
  <img src="/images/Fig4a_uranus_evol_phase_diagram_light.png" alt="Uranus evolution phase diagram" loading="lazy" />
  <img src="/images/Fig4b_neptune_evol_phase_diagram_light.png" alt="Neptune evolution phase diagram" loading="lazy" />
</div>

### Interior Evolution of Jupiter and Saturn

[Tejada Arevalo et al. (2025a)](https://iopscience.iop.org/article/10.3847/1538-4357/ada030) and [Sur et al. (2025)](https://iopscience.iop.org/article/10.3847/2041-8213/adad62) investigated the non-adiabatic and inhomogeneous evolution of Jupiter and Saturn in the presence of helium rain and extended or "fuzzy" cores. If Jupiter's fuzzy core as measured by *Juno* is a relic from formation, then Jupiter could have started with a colder interior rather than traditional hot start models. These models predict higher helium demixing temperatures, closer to experimental results.

<img src="/images/2025_fig.JPG" alt="Jupiter evolution model" loading="lazy" />

### Stability Characterization of V1298 Tau

[Tejada Arevalo et al. (2022)](https://iopscience.iop.org/article/10.3847/2041-8213/ac70e0) focused on the orbital stability of the gas giants in the compact exoplanet system V1298 Tau. We found that the mass and eccentricity of V1298 Tau b could be too large as indicated by early RV measurements, inferred by assessing the long-term stability of the system.

<img src="/images/2022_fig.JPG" alt="V1298 Tau stability analysis" loading="lazy" />

### Tidal Spin-Up of Hot Jupiter Host Stars

[Tejada Arevalo et al. (2021)](https://iopscience.iop.org/article/10.3847/1538-4357/ac1429) compared the measured rotation periods and velocities of hot Jupiter host stars with those of cold Jupiter and small planet host stars. We found that hot Jupiter host stars spin faster, casting additional nuance into the inferred ages of stars with stellar models.

<img src="/images/2021_fig.JPG" alt="Hot Jupiter host star rotation" loading="lazy" />

## Software

I put together a repo that centralizes the most updated equations of state for H-He and other materials, along with miscibility curves, for modeling gas giant interiors. I provide user-friendly Python 3 code along with H-He-Z mixtures. The details are described in [Tejada Arevalo et al. (2024)](https://iopscience.iop.org/article/10.3847/1538-4365/ad6cd7).
The GitHub repo can be found [here](https://github.com/robtejada/eos/tree/main). A downloadable version can be found [here](https://drive.google.com/drive/u/1/folders/1V13BQLZ9_VKWoZQp6T5i7OXp8zreIrt7).

## Beyond Research

Like many astronomers, I am passionate about the outdoors and visit national parks whenever I can. The photo shown here was taken at the Matanuska Glacier in Alaska. I am an enthusiastic weightlifter, and believe strongly in the connection between physical health and mental health. 
<img src="/images/glacier_me.JPG" alt="At the Matanuska Glacier, Alaska" loading="lazy" style="max-width: 400px;" />

</div>
</div>
