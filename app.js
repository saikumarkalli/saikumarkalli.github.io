// ==========================================
// RENDER FUNCTIONS
// ==========================================

function renderNav(data) {
  const container = document.getElementById('nav');
  if (!container) return;
  container.innerHTML = `
    <div class="nm">${data.logo.prefix}<b>${data.logo.highlight}</b><s>${data.logo.suffix}</s></div>
    <ul class="nav-ul">
      ${data.links.map(l => `<li><a href="#${l.id}">${l.label}</a></li>`).join('')}
    </ul>
    <div class="nav-actions">
      <a href="${data.resume.url}" id="resume-link" class="btn-resume" target="_blank" rel="noopener" download>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span>${data.resume.text}</span>
      </a>
      <a href="${data.hireMe.url}" class="nav-cta">&#x2714; ${data.hireMe.text}</a>
    </div>
  `;
}

function renderHero(data) {
  const container = document.getElementById('hero');
  if (!container) return;
  container.innerHTML = `
    <div>
      <div class="avail">
        <div class="avail-dot"></div>
        <span class="avail-badge">${data.availability.badge}</span>
        <span class="avail-txt">${data.availability.text}</span>
      </div>
      <h1 class="hero-name">${data.name.line1}<br>${data.name.line2}<br><span class="a">${data.name.line3}</span></h1>
      <div class="hero-role">
        <span id="ty">${data.rolePrefix}</span><span class="caret"></span><br>
        <span style="font-size:.85rem">${data.roleSub}</span>
      </div>
      <div class="domains">
        ${data.domains.map(d => `<span class="db ${d.class}">${d.icon} ${d.text}</span>`).join('')}
      </div>
      <div class="stats">
        ${data.stats.map(s => `
        <div>
          <div class="stn" ${s.isText ? '' : `data-count="${s.count}"`}>${s.isText ? s.count : '0'}</div>
          <div class="stl">${s.label}</div>
        </div>
        `).join('')}
      </div>
      <div class="btns">
        ${data.buttons.map(b => `
          <a href="${b.href}" class="${b.class}" ${b.isEmail ? '' : 'target="_blank" rel="noopener" download'}>
            ${b.isEmail ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> ` : ''}
            ${b.text}
          </a>
        `).join('')}
      </div>
    </div>
    <div class="hcard">
      <div class="hcl">
        <svg viewBox="0 0 96 96" style="width:13px;height:13px;flex-shrink:0" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ag1" x1="0" y1="0" x2="48" y2="96" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#114a8b" /><stop offset="1" stop-color="#0669bc" /></linearGradient>
            <linearGradient id="ag2" x1="52" y1="26" x2="96" y2="96" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3ccbf4" /><stop offset="1" stop-color="#2892df" /></linearGradient>
          </defs>
          <path d="M33 4h29L30 90a4 4 0 01-4 3H5a4 4 0 01-4-6L28 7a4 4 0 014-3z" fill="url(#ag1)" />
          <path d="M71 60H29a2 2 0 00-1 3l27 26a4 4 0 003 1h24z" fill="#0078d4" />
          <path d="M68 7a4 4 0 00-4-3H34a4 4 0 014 3L66 88a4 4 0 01-4 6h30a4 4 0 004-6z" fill="url(#ag2)" />
        </svg>
        ${data.azureCard.title}
      </div>
      <div class="hct">${data.azureCard.status}</div>
      ${data.azureCard.rows.map(r => `<div class="hcr"><span class="hck">${r.label}</span><span class="hcv ${r.class}">${r.value}</span></div>`).join('')}
      <div class="hcm">
        <div class="hcmn">${data.azureCard.metric.value}</div>
        <div class="hcml">${data.azureCard.metric.label}</div>
      </div>
    </div>
  `;
}

function renderQuote(data) {
  const container = document.getElementById('quote');
  if (!container) return;
  container.innerHTML = `
    <div class="qi rv">
      <div class="qm">&ldquo;</div>
      <p class="qt">${data.text}</p>
      <div class="qa">${data.author}</div>
    </div>
  `;
}

function renderBackend(data) {
  const container = document.getElementById('backend');
  if (!container) return;
  container.innerHTML = `
    <div class="wrap">
      <div class="sh rv">
        <div class="sn">${data.header.sn}</div>
        <h2 class="st">${data.header.stPart1}<em>${data.header.stEm}</em>${data.header.stPart2}</h2>
        <p class="ss">${data.header.ss}</p>
      </div>
      <div class="beg">
        <div class="rv">
          <div class="bsl">
            ${data.skills.map(s => `
              <div class="bli">
                <div class="bli-ico">${s.icon}</div>
                <div style="flex:1">
                  <div class="bli-n">${s.name}</div>
                  <div class="bli-d">${s.desc}</div>
                </div>
                <div class="lv ${s.levelClass}">${s.level}</div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="rv d2">
          <div class="ac">
            <div class="ac-t">${data.architecture.title}</div>
            ${data.architecture.layers.map(l => `
              <div class="ac-l" data-n="${l.n}">
                <div class="ac-lt">${l.title}</div>
                <div class="ac-li">${l.chips.map(c => `<span class="chip ${c.class}">${c.text}</span>`).join('')}</div>
              </div>
            `).join('')}
          </div>
          <div class="ac">
            <div class="ac-t">${data.frontend.title}</div>
            <div class="ac-li" style="padding:.4rem 0;flex-wrap:wrap;gap:.32rem">
              ${data.frontend.chips.map(c => `<span class="chip ${c.class}">${c.text}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCloud(data) {
  const container = document.getElementById('cloud');
  if (!container) return;
  container.innerHTML = `
    <div class="wrap">
      <div class="cwrap rv">
        <div>
          <div class="sn">${data.header.sn}</div>
          <h2 class="st">${data.header.stPart1}<em>${data.header.stEm}</em></h2>
          <p class="ss">${data.header.ss}</p>
        </div>
        <div class="azb rv d2">
          <svg viewBox="0 0 96 96" style="width:48px;height:48px" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="azg1" x1="0" y1="0" x2="48" y2="96" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#114a8b" /><stop offset="1" stop-color="#0669bc" /></linearGradient>
              <linearGradient id="azg2" x1="52" y1="26" x2="96" y2="96" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3ccbf4" /><stop offset="1" stop-color="#2892df" /></linearGradient>
            </defs>
            <path d="M33 4h29L30 90a4 4 0 01-4 3H5a4 4 0 01-4-6L28 7a4 4 0 014-3z" fill="url(#azg1)" />
            <path d="M71 60H29a2 2 0 00-1 3l27 26a4 4 0 003 1h24z" fill="#0078d4" />
            <path d="M68 7a4 4 0 00-4-3H34a4 4 0 014 3L66 88a4 4 0 01-4 6h30a4 4 0 004-6z" fill="url(#azg2)" />
          </svg>
          <div class="azbt">${data.azureBadge.title}</div>
          <div class="azbs">${data.azureBadge.subtitle}</div>
        </div>
      </div>
      <div class="csg rv d1">
        ${data.services.map(s => `
          <div class="cs">
            <div class="cs-i">${s.icon}</div>
            <div class="cs-n">${s.name}</div>
            <div class="cs-d">${s.desc}</div>
            <div class="cs-b">${s.badge}</div>
          </div>
        `).join('')}
      </div>
      <div class="cn rv d2">
        <div style="font-size:1.1rem">&#x1F3AF;</div>
        <div class="cn-t">${data.nextGoal}</div>
      </div>
    </div>
  `;
}

function renderAI(data) {
  const container = document.getElementById('ai');
  if (!container) return;
  const logos = {
    'Claude (Anthropic)': '<svg viewBox="0 0 24 24" style="width:38px;height:38px;border-radius:6px;background:#f5dfc6;fill:#100f0f"><path d="M12 4.5c.8 4.2 3.3 6.7 7.5 7.5-4.2.8-6.7 3.3-7.5 7.5-.8-4.2-3.3-6.7-7.5-7.5 4.2-.8 6.7-3.3 7.5-7.5z" /></svg>',
    'ChatGPT / GPT-4o': '<svg viewBox="0 0 24 24" style="width:38px;height:38px;border-radius:6px;background:#10a37f;fill:#fff"><path d="M22.28 9.68a8.31 8.31 0 0 0-1.42-4.14 8.44 8.44 0 0 0-4.63-3.6 8.31 8.31 0 0 0-5.87.5 8.44 8.44 0 0 0-4.19 3.03A8.31 8.31 0 0 0 5.4 9.68a8.44 8.44 0 0 0 1.42 4.14 8.31 8.31 0 0 0 4.63 3.6 8.44 8.44 0 0 0 5.87-.5 8.31 8.31 0 0 0 4.19-3.03 8.44 8.44 0 0 0 .77-4.21zm-13.72-5a6.38 6.38 0 0 1 3.23-.88v2A4.2 4.2 0 0 0 8.56 8H6.5a6.45 6.45 0 0 1 2.06-3.32zM3.46 9.88a6.45 6.45 0 0 1 .46-3.87L5.68 7A4.2 4.2 0 0 0 4.2 10.5v1.89a6.38 6.38 0 0 1-.74-2.51zm9.68 10.7a6.38 6.38 0 0 1-3.23.88v-2a4.2 4.2 0 0 0 3.23-2.12h2.06a6.45 6.45 0 0 1-2.06 3.24zm7.4-4.52a6.45 6.45 0 0 1-.46 3.87l-1.76-1a4.2 4.2 0 0 0 1.48-3.5v-1.89h1.48a6.38 6.38 0 0 1-.74 2.52zm-8.8-1.55a2 2 0 1 1-3.9 0 2 2 0 0 1 3.9 0z" /></svg>',
    'GitHub Copilot': '<svg viewBox="0 0 24 24" style="width:38px;height:38px;border-radius:6px;background:#161b22;fill:#fff"><path d="M12 .3c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4 1 0 2 .1 3 .4 2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 22.1 24 17.6 24 12.3c0-6.6-5.4-12-12-12z" /></svg>',
    'Antigravity': '<svg viewBox="0 0 24 24" style="width:38px;height:38px;border-radius:6px;background:#0d0e1c;fill:none;stroke:#0af;stroke-width:1.5;stroke-linejoin:round;stroke-linecap:round"><path d="M12 3l8 14H4l8-14z" stroke-width="2" /><path d="M12 8l4 7H8l4-7z" /><circle cx="12" cy="12" r="1.5" fill="#0af" /></svg>',
    'Azure OpenAI Service': '<svg viewBox="0 0 24 24" style="width:38px;height:38px;border-radius:6px;background:#001a3a;fill:#0078d4"><path d="M3.5 19l8.5-14 8.5 14H3.5z" fill="none" stroke="#0078d4" stroke-width="2.5" stroke-linejoin="round" /><path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" fill="#10a37f" /></svg>',
    'LLM Integration Patterns': '<svg viewBox="0 0 24 24" style="width:38px;height:38px;border-radius:6px;background:#13142a;fill:none;stroke:#fff;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round"><circle cx="18" cy="18" r="3" stroke="#f5c842" /><circle cx="6" cy="6" r="3" stroke="#0af" /><circle cx="18" cy="6" r="3" stroke="#3ecf8e" /><circle cx="6" cy="18" r="3" stroke="#ff8c55" /><path d="M8.1 8.1l7.8 7.8M15.9 8.1l-7.8 7.8" stroke="#5a6480" stroke-width="1.2" /><path d="M6 9v6M18 9v6M9 6h6M9 18h6" stroke="#5a6480" stroke-width="1.2" /></svg>'
  };

  container.innerHTML = `
    <div class="wrap">
      <div class="sh rv">
        <div class="sn">${data.header.sn}</div>
        <h2 class="st">${data.header.stPart1}<em>${data.header.stEm}</em>${data.header.stPart2}</h2>
        <p class="ss">${data.header.ss}</p>
      </div>
      <div class="ai-intro rv">${data.intro}</div>
      <div class="aig">
        ${data.tools.map(t => `
          <div class="aic rv ${t.delayClass}">
            <div class="ai-logo">${logos[t.n] || ''}</div>
            <div class="ai-n">${t.n}</div>
            <div class="ai-cat">${t.cat}</div>
            <div class="ai-d">${t.d}</div>
            <div class="ai-u">
              <div class="ai-ul">Use Case</div>
              <div class="ai-ut">${t.u}</div>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="aitr rv d2">
        <span style="font-size:.52rem;color:var(--muted);letter-spacing:.18em;text-transform:uppercase;margin-right:.45rem">Also in toolkit &rarr;</span>
        ${data.toolkit.map(t => `<span class="aitp">${t}</span>`).join('')}
      </div>
    </div>
  `;
}

function renderSwagger(data) {
  const container = document.getElementById('swagger');
  if (!container) return;
  container.innerHTML = `
    <div class="wrap">
      <div class="sh rv">
        <div class="sn">${data.header.sn}</div>
        <h2 class="st">${data.header.stPart1}<em>${data.header.stEm}</em></h2>
        <p class="ss">${data.header.ss}</p>
      </div>
      <div class="rv">
        <div class="sw-head">
          <div class="sw-title-block">
            <div class="sw-meta">
              <div class="sw-version">${data.version}</div>
              <div class="sw-oas">${data.oas}</div>
            </div>
          </div>
          <div class="sw-base">${data.baseUrl}</div>
          <div class="sw-auth">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Bearer / Azure AD
          </div>
        </div>
        <div class="sw-tags" id="sw-tags">
          ${data.tags.map(t => `<span class="sw-tag ${t.id === 'all' ? 'active' : ''}" data-tag="${t.id}"><span class="sw-tag-dot" style="background:${t.color}"></span>${t.label}</span>`).join('')}
        </div>
        <div class="sw-list" id="sw-endpoints"></div>
      </div>
    </div>
  `;
}

function renderDomains(data) {
  const container = document.getElementById('domains');
  if (!container) return;
  container.innerHTML = `
    <div class="wrap">
      <div class="sh rv">
        <div class="sn">${data.header.sn}</div>
        <h2 class="st">${data.header.stPart1}<em>${data.header.stEm}</em></h2>
        <p class="ss">${data.header.ss}</p>
      </div>
      <div class="domg">
        ${data.items.map(d => `
          <div class="domc ${d.class} rv ${d.delayClass}">
            <div class="dal"></div>
            <div class="dom-i">${d.icon}</div>
            <div class="dom-n">${d.name}</div>
            <div class="dom-s">${d.sub}</div>
            <div class="dom-p">${d.desc}</div>
            <div class="dom-tags">${d.tags.map(t => `<span class="dtt">${t}</span>`).join('')}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderExperience(data) {
  const container = document.getElementById('experience');
  if (!container) return;
  container.innerHTML = `
    <div class="wrap">
      <div class="sh rv">
        <div class="sn">${data.header.sn}</div>
        <h2 class="st">${data.header.stPart1}<em>${data.header.stEm}</em></h2>
      </div>
      <div class="tl">
        ${data.jobs.map(j => `
          <div class="tli">
            <div class="tld"></div>
            <div class="tl-p">${j.date}</div>
            <div class="tl-co">${j.company}</div>
            <div class="tl-ro">${j.role}</div>
            <div class="tlb">
              ${j.projects.map(p => `
                <div class="tlpt ${p.badgeClass}">${p.badgeText}</div>
                <ul class="tlul">
                  ${p.bullets.map(b => `<li>${b}</li>`).join('')}
                </ul>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderProjects(data) {
  const container = document.getElementById('projects');
  if (!container) return;
  
  const mockups = [
    `<div class="pmbr"><div class="pmba"><div class="pmd" style="background:#ff5f57"></div><div class="pmd" style="background:#ffbd2e"></div><div class="pmd" style="background:#28c840"></div></div><div class="pmbo"><div class="pml a"></div><div class="pml b"></div><div class="pml c"></div><div class="pmcl"><div class="pmcb h"></div><div class="pmcb g"></div><div class="pmcb"></div><div class="pmcb"></div><div class="pmcb h"></div><div class="pmcb r"></div></div></div></div>`,
    `<div class="pmbr"><div class="pmba"><div class="pmd" style="background:#ff5f57"></div><div class="pmd" style="background:#ffbd2e"></div><div class="pmd" style="background:#28c840"></div></div><div class="pmbo"><div class="pml a" style="width:40%"></div><div class="pml b"></div><div class="pmcl" style="grid-template-columns:1fr 1fr"><div class="pmcb r"></div><div class="pmcb h"></div></div></div></div>`,
    `<div class="pmbr"><div class="pmba"><div class="pmd" style="background:#ff5f57"></div><div class="pmd" style="background:#ffbd2e"></div><div class="pmd" style="background:#28c840"></div></div><div class="pmbo"><div style="font-size:.5rem;color:var(--a1);letter-spacing:.2em;margin-bottom:.35rem">DHRUV &#x2736;</div><div class="pml a" style="width:50%"></div><div class="pmcl" style="grid-template-columns:1fr 1fr"><div class="pmcb" style="background:rgba(123,94,167,.2)"></div><div class="pmcb h"></div></div></div></div>`,
    `<div class="pmbr"><div class="pmba"><div class="pmd" style="background:#ff5f57"></div><div class="pmd" style="background:#ffbd2e"></div><div class="pmd" style="background:#28c840"></div></div><div class="pmbo"><div class="pml" style="width:45%;background:rgba(255,140,85,.15)"></div><div class="pml b"></div><div class="pmcl" style="grid-template-columns:1fr"><div class="pmcb" style="height:48px"></div></div></div></div>`
  ];
  
  container.innerHTML = `
    <div class="wrap">
      <div class="sh rv">
        <div class="sn">${data.header.sn}</div>
        <h2 class="st">${data.header.stPart1}<em>${data.header.stEm}</em></h2>
      </div>
      <div class="pjg">
        ${data.items.map((p, i) => `
          <div class="pjc ${p.isFeatured ? 'ft' : ''} rv ${p.delayClass}">
            <div class="pjmk" ${i === 2 ? 'style="background:linear-gradient(135deg,#080918,#0e0620)"' : ''}>
              ${mockups[i]}
              <span class="pjbg ${p.bgClass}">${p.bgText}</span>
            </div>
            <div class="pji">
              <div class="pjdt">${p.dt}</div>
              <div class="pjt">${p.title}</div>
              <p class="pjd">${p.desc}</p>
              <div class="pjtech">${p.tech.map(t => `<span class="ptt">${t}</span>`).join('')}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderContact(data) {
  const container = document.getElementById('contact');
  if (!container) return;
  container.innerHTML = `
    <div class="wrap">
      <div class="cog">
        <div class="rv">
          <h2 class="coh">${data.header.stPart1}</h2>
          <p class="cos">${data.subtitle}</p>
          <a href="${data.emailBtn.url}" class="copb">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            ${data.emailBtn.text}
          </a>
        </div>
        <div class="rv d2">
          <div class="cll">
            ${data.links.map((l, i) => `
              <a href="${l.url}" ${i > 0 && i < 3 ? 'target="_blank" rel="noopener"' : ''} class="cli">
                <div class="clico">
                  ${i === 0 ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>` : ''}
                  ${i === 1 ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>` : ''}
                  ${i === 2 ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>` : ''}
                  ${i === 3 ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5 19.79 19.79 0 01.22 1.5A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.61-.61a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>` : ''}
                </div>
                <div>
                  <div class="cllb">${l.label}</div>
                  <div class="cllv">${l.value}</div>
                </div>
              </a>
            `).join('')}
          </div>
          <div class="avb">
            <div class="avbd"></div>
            <div class="avbt">${data.availability}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderFooter(data) {
  const container = document.getElementById('footer');
  if (!container) return;
  container.innerHTML = `
    <div class="ftl">${data.left}</div>
    <div class="ftr">${data.right}</div>
  `;
}

// Hydrate DOM
function hydrateDOM() {
  if (typeof portfolioData !== 'undefined') {
    renderNav(portfolioData.nav);
    renderHero(portfolioData.hero);
    renderQuote(portfolioData.quote);
    renderBackend(portfolioData.backend);
    renderCloud(portfolioData.cloud);
    renderAI(portfolioData.ai);
    renderSwagger(portfolioData.swagger);
    renderDomains(portfolioData.domains);
    renderExperience(portfolioData.experience);
    renderProjects(portfolioData.projects);
    renderContact(portfolioData.contact);
    renderFooter(portfolioData.footer);
  }
}

// Run hydration before other scripts
hydrateDOM();


    /* ─── NAV SCROLL ─── */
    var nav = document.getElementById('nav');
    window.addEventListener('scroll', function () { nav.classList.toggle('sc', window.scrollY > 50); });

    /* ─── GALAXY CANVAS ─── */
    var cv = document.getElementById('c'), ctx = cv.getContext('2d');
    var stars = [], nebs = [], shots = [];
    var lastW = 0, lastH = 0;

    function resize() {
      var w = window.innerWidth, h = window.innerHeight;
      if (w === lastW && Math.abs(h - lastH) < 100) return;
      lastW = w; lastH = h; cv.width = w; cv.height = h; buildScene();
    }
    function buildScene() {
      stars = []; nebs = []; shots = [];
      var W = cv.width, H = cv.height;
      for (var i = 0; i < 280; i++) {
        var t = Math.random();
        stars.push({ x: Math.random() * W, y: Math.random() * H, r: t < .6 ? Math.random() * .55 + .18 : t < .88 ? Math.random() * .85 + .45 : Math.random() * 1.3 + .9, o: t < .6 ? Math.random() * .16 + .04 : t < .88 ? Math.random() * .28 + .1 : Math.random() * .45 + .22, tw: Math.random() * 6.28, ts: Math.random() * .016 + .004, vx: (Math.random() - .5) * (t < .6 ? .03 : .08), vy: (Math.random() - .5) * (t < .6 ? .03 : .08), blue: Math.random() > .88, warm: Math.random() > .93 });
      }
      for (var j = 0; j < 5; j++) nebs.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 190 + 70, az: Math.random() > .5, o: Math.random() * .038 + .01 });
      for (var k = 0; k < 3; k++) addShot(k * 110);
    }
    function addShot(d) { shots.push({ x: Math.random() * cv.width * .7, y: Math.random() * cv.height * .4, len: Math.random() * 100 + 50, spd: Math.random() * 3.2 + 2.2, ang: .7854 + (Math.random() - .5) * .4, life: 0, max: Math.random() * 70 + 40, delay: d !== undefined ? d : Math.floor(Math.random() * 320) }); }
    function frame() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      for (var n = 0; n < nebs.length; n++) { var nb = nebs[n]; var g = ctx.createRadialGradient(nb.x, nb.y, 0, nb.x, nb.y, nb.r); var col = nb.az ? '0,110,200' : '55,45,130'; g.addColorStop(0, 'rgba(' + col + ',' + nb.o + ')'); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(nb.x, nb.y, nb.r, 0, 6.2832); ctx.fill(); }
      for (var s = 0; s < stars.length; s++) { var st = stars[s]; st.tw += st.ts; var op = st.o * (.65 + .35 * Math.sin(st.tw)); st.x += st.vx; st.y += st.vy; if (st.x < 0) st.x = cv.width; else if (st.x > cv.width) st.x = 0; if (st.y < 0) st.y = cv.height; else if (st.y > cv.height) st.y = 0; if (st.r > 1.0) { var g2 = ctx.createRadialGradient(st.x, st.y, 0, st.x, st.y, st.r * 4); var sc = st.blue ? '160,210,255' : st.warm ? '255,235,190' : '255,255,255'; g2.addColorStop(0, 'rgba(' + sc + ',' + (op * .4) + ')'); g2.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g2; ctx.beginPath(); ctx.arc(st.x, st.y, st.r * 4, 0, 6.2832); ctx.fill(); } var fc = st.blue ? 'rgba(165,212,255,' + op + ')' : st.warm ? 'rgba(255,235,190,' + op + ')' : 'rgba(255,255,255,' + op + ')'; ctx.fillStyle = fc; ctx.beginPath(); ctx.arc(st.x, st.y, st.r, 0, 6.2832); ctx.fill(); }
      for (var i = shots.length - 1; i >= 0; i--) { var sh = shots[i]; if (sh.delay > 0) { sh.delay--; continue; } sh.life++; if (sh.life > sh.max) { shots.splice(i, 1); addShot(); continue; } var prog = sh.life / sh.max; var al = prog < .3 ? prog / .3 : prog > .7 ? (1 - prog) / .3 : 1; al = Math.min(1, al) * .8; var ex = sh.x + Math.cos(sh.ang) * sh.spd * sh.life; var ey = sh.y + Math.sin(sh.ang) * sh.spd * sh.life; var tx = ex - Math.cos(sh.ang) * sh.len; var ty = ey - Math.sin(sh.ang) * sh.len; var sg = ctx.createLinearGradient(tx, ty, ex, ey); sg.addColorStop(0, 'rgba(195,230,255,0)'); sg.addColorStop(1, 'rgba(195,230,255,' + al + ')'); ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(ex, ey); ctx.strokeStyle = sg; ctx.lineWidth = 1.1; ctx.stroke(); }
      requestAnimationFrame(frame);
    }
    window.addEventListener('resize', resize);
    resize(); frame();

    /* ─── TYPEWRITER ─── */
    
    var phrases = portfolioData.hero.phrases; var pi = 0, ci = phrases[0].length, del = true;
    var tyEl = document.getElementById('ty');
    function type() {
      var p = phrases[pi];
      if (del) { ci--; tyEl.textContent = p.substring(0, ci); if (ci < 0) { del = false; pi = (pi + 1) % phrases.length; setTimeout(type, 450); return; } }
      else { ci++; tyEl.textContent = p.substring(0, ci); if (ci > p.length) { del = true; setTimeout(type, 2000); return; } }
      setTimeout(type, del ? 45 : 82);
    }
    setTimeout(type, 2000);

    /* ─── COUNTER ─── */
    function counter(el, n) { var c = 0, step = n / 50; var t = setInterval(function () { c += step; if (c >= n) { el.textContent = n + '+'; clearInterval(t); } else el.textContent = Math.floor(c) + '+'; }, 28); }

    /* ─── INTERSECTION OBSERVER ─── */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('on'); var dc = e.target.getAttribute('data-count'); if (dc) { counter(e.target, parseInt(dc)); e.target.removeAttribute('data-count'); } io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.rv, .tli, [data-count]').forEach(function (el) { io.observe(el); });

    /* ─── ACTIVE NAV ─── */
    var navLinks = document.querySelectorAll('.nav-ul a');
    var sio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) navLinks.forEach(function (l) { l.classList.toggle('on', l.getAttribute('href') === '#' + e.target.id); }); });
    }, { threshold: 0.3 });
    document.querySelectorAll('section[id]').forEach(function (s) { sio.observe(s); });

    /* ─────────────────────────────────────────────
       VISITOR COUNTER  (localStorage, month-wise)
    ───────────────────────────────────────────── */
    (function () {
      var KEY = 'skk_v2';
      var data;
      try { data = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { data = {}; }

      var now = new Date();
      var mk = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
      data[mk] = (data[mk] || 0) + 1;
      try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { }

      var total = Object.values(data).reduce(function (a, b) { return a + b; }, 0);
      document.getElementById('vc-total').textContent = total;

      var months = Object.keys(data).sort().slice(-6);
      var max = Math.max.apply(null, months.map(function (m) { return data[m]; }));
      var NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var container = document.getElementById('vc-months');

      months.forEach(function (m) {
        var parts = m.split('-');
        var label = NAMES[parseInt(parts[1]) - 1] + ' ' + parts[0].slice(2);
        var pct = max > 0 ? Math.round(data[m] / max * 100) : 0;
        var row = document.createElement('div');
        row.className = 'vc-row';
        row.innerHTML = '<span class="vc-month">' + label + '</span><div class="vc-bar-track"><div class="vc-bar" data-w="' + pct + '"></div></div><span class="vc-n">' + data[m] + '</span>';
        container.appendChild(row);
      });

      document.getElementById('vc-tab').addEventListener('click', function () {
        var w = document.getElementById('vc-widget');
        w.classList.toggle('open');
        if (w.classList.contains('open')) {
          setTimeout(function () {
            document.querySelectorAll('.vc-bar').forEach(function (b) {
              b.style.width = b.getAttribute('data-w') + '%';
            });
          }, 80);
        }
      });
    })();

    /* ─────────────────────────────────────────────
       SWAGGER-STYLE API EXPLORER
    ───────────────────────────────────────────── */
    

    function inClass(inVal) {
      return { path: 'pin-path', query: 'pin-query', body: 'pin-body', header: 'pin-header' }[inVal] || 'pin-query';
    }
    function codeClass(code) {
      return 'c-' + code;
    }

    function buildEndpoints(tag) {
      var list = document.getElementById('sw-endpoints');
      list.innerHTML = '';
      var filtered = tag === 'all' ? ENDPOINTS : ENDPOINTS.filter(function (e) { return e.tag === tag; });

      filtered.forEach(function (ep, idx) {
        var paramsRows = ep.params.map(function (p) {
          return '<tr><td class="sw-param-name">' + p.name + (p.req ? '<span class="sw-req">*</span>' : '') + '</td><td><span class="sw-param-in ' + inClass(p.in) + '">' + p.in + '</span></td><td class="sw-param-type">' + p.type + '</td><td class="sw-param-desc">' + p.desc + '</td></tr>';
        }).join('');

        var respItems = ep.responses.map(function (r) {
          return '<div class="sw-resp"><span class="sw-code ' + codeClass(r.code) + '">' + r.code + '</span><div><div class="sw-resp-desc">' + r.desc + '</div>' + (r.schema ? '<div class="sw-resp-schema">' + r.schema + '</div>' : '') + '</div></div>';
        }).join('');

        var pathHtml = ep.path.replace(/\{([^}]+)\}/g, '<span class="param">{$1}</span>');

        var el = document.createElement('div');
        el.className = 'sw-ep';
        el.dataset.id = idx;
        el.innerHTML =
          '<div class="sw-ep-head">' +
          '<span class="sw-method m-' + ep.method.toLowerCase() + '">' + ep.method + '</span>' +
          '<span class="sw-path">' + pathHtml + '</span>' +
          '<span class="sw-summary">' + ep.summary + '</span>' +
          '<span class="sw-chevron">▾</span>' +
          '</div>' +
          '<div class="sw-body">' +
          '<div class="sw-inner">' +
          '<div>' +
          '<div class="sw-col-title">Parameters</div>' +
          (ep.params.length ?
            '<table class="sw-params"><thead><tr><th>Name</th><th>In</th><th>Type</th><th>Description</th></tr></thead><tbody>' + paramsRows + '</tbody></table>'
            : '<div style="font-size:.55rem;color:var(--dim)">No parameters</div>') +
          '</div>' +
          '<div>' +
          '<div class="sw-col-title">Responses</div>' +
          '<div class="sw-responses">' + respItems + '</div>' +
          '</div>' +
          '</div>' +
          '</div>';

        el.querySelector('.sw-ep-head').addEventListener('click', function () {
          var isOpen = el.classList.contains('open');
          document.querySelectorAll('.sw-ep.open').forEach(function (x) { x.classList.remove('open'); });
          if (!isOpen) el.classList.add('open');
        });

        list.appendChild(el);
      });
    }

    // Tag filter
    document.querySelectorAll('.sw-tag').forEach(function (tag) {
      tag.addEventListener('click', function () {
        document.querySelectorAll('.sw-tag').forEach(function (t) { t.classList.remove('active'); });
        tag.classList.add('active');
        buildEndpoints(tag.dataset.tag);
      });
    });

    buildEndpoints('all');
  


