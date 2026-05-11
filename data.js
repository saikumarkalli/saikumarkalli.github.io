const portfolioData = {
  nav: {
    logo: { prefix: "SK", highlight: "Kalli", suffix: "." },
    links: [
      { id: "backend", label: "Stack" },
      { id: "cloud", label: "Azure" },
      { id: "ai", label: "AI" },
      { id: "swagger", label: "API" },
      { id: "domains", label: "Domains" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" }
    ],
    resume: { text: "Resume", url: "assets/resume.pdf" },
    hireMe: { text: "Hire Me", url: "mailto:kallileelasaikumar@gmail.com" }
  },
  hero: {
    availability: { badge: "AVAILABLE NOW", text: "Full-time · Remote" },
    name: { line1: "SAI", line2: "KUMAR", line3: "KALLI" },
    rolePrefix: "Full Stack .NET Engineer",
    roleSub: "Cloud-Native · Azure · AI-Augmented",
    phrases: ['Full Stack .NET Engineer', 'Azure Cloud Architect', 'AI-Augmented Developer', 'Microservices Builder', 'API Performance Expert'],
    domains: [
      { class: "fin", icon: "⚡", text: "FinTech / Audit" },
      { class: "hlt", icon: "🏥", text: "HealthCare" },
      { class: "gov", icon: "🏛️", text: "GovTech" },
      { class: "cld", icon: "☁️", text: "Azure Cloud" }
    ],
    stats: [
      { count: 2, label: "Companies" },
      { count: 3, label: "Domains/Projects" },
      { count: 4, label: "Years Exp." },
      { count: "30%", label: "API Boost", isText: true }
    ],
    buttons: [
      { href: "#projects", class: "btn-p", text: "View Work" },
      { href: "assets/resume.pdf", class: "btn-resume-hero", text: "Resume / CV" },
      { href: "mailto:kallileelasaikumar@gmail.com", class: "btn-g", text: "Email Me", isEmail: true }
    ],
    azureCard: {
      title: "Azure Portal — Developer Profile",
      status: "LIVE STATUS",
      rows: [
        { label: "Role", value: "Software Engineer", class: "" },
        { label: "Company", value: "Ascendion Eng.", class: "" },
        { label: "Domain", value: "FinTech — Audit", class: "gd" },
        { label: "Stack", value: ".NET Core + Angular", class: "" },
        { label: "Cloud", value: "Microsoft Azure", class: "" },
        { label: "AI Tools", value: "Claude · GPT · Copilot", class: "g" },
        { label: "Status", value: "● Available", class: "g" }
      ],
      metric: { value: "30%", label: "API Performance Gain · Production" }
    }
  },
  quote: {
    text: "We are the <strong>archaeologists of the future</strong> &mdash;<br>every API we forge, every microservice we deploy,<br>is a fossil that will outlive the hand that wrote it.<br><strong>Build with intent. The systems remember.</strong>",
    author: "Sai Kumar Kalli"
  },
  backend: {
    header: { sn: "01 · Backend Engineering", stPart1: "The ", stEm: "engine", stPart2: "<br>room", ss: "Production-grade .NET architecture powering enterprise systems across finance, healthcare and government." },
    skills: [
      { icon: "⚙️", name: ".NET Core 10 / C#", desc: "Enterprise APIs, Web Jobs, background services, clean architecture", level: "Expert", levelClass: "le" },
      { icon: "🔗", name: "RESTful Web API Design", desc: "OpenAPI/Swagger, versioning, JWT + Azure AD/Entra ID auth", level: "Expert", levelClass: "le" },
      { icon: "📡", name: "SignalR · Real-time Systems", desc: "Live dashboards, workforce notifications, event-driven updates", level: "Advanced", levelClass: "la" },
      { icon: "🗄️", name: "SQL Server + EF Core", desc: "Stored procs, LINQ, Cosmos DB, ADO.NET high-performance queries", level: "Expert", levelClass: "le" },
      { icon: "🏛️", name: "Microservices Architecture", desc: "Clean Architecture, Repository, DI, SOLID-first design patterns", level: "Advanced", levelClass: "la" },
      { icon: "🧪", name: "Testing · NUnit + Moq", desc: "Unit & integration testing, SonarQube quality gates, Contrast", level: "Proficient", levelClass: "lp" }
    ],
    architecture: {
      title: "▸ Clean Architecture Layers",
      layers: [
        { n: "04", title: "Presentation", chips: [{ text: "Web API", class: "h" }, { text: "Angular 17", class: "h" }, { text: "Swagger", class: "" }, { text: "React", class: "" }] },
        { n: "03", title: "Application", chips: [{ text: "CQRS", class: "h" }, { text: "MediatR", class: "h" }, { text: "FluentVal", class: "" }, { text: "AutoMapper", class: "" }] },
        { n: "02", title: "Domain / Core", chips: [{ text: "Entities", class: "h" }, { text: "Interfaces", class: "h" }, { text: "DDD", class: "" }, { text: "Value Obj", class: "" }] },
        { n: "01", title: "Infrastructure", chips: [{ text: "EF Core", class: "h" }, { text: "Azure Bus", class: "h" }, { text: "Redis", class: "h" }, { text: "Cosmos DB", class: "" }] }
      ]
    },
    frontend: {
      title: "▸ Frontend & Dev Practices",
      chips: [{ text: "Angular 17", class: "h" }, { text: "TypeScript", class: "h" }, { text: "React", class: "" }, { text: "RxJS", class: "" }, { text: "CI/CD", class: "" }, { text: "API Mgmt", class: "h" }, { text: "Git", class: "" }, { text: "Agile", class: "" }]
    }
  },
  cloud: {
    header: { sn: "02 · Cloud", stPart1: "Azure<br>", stEm: "First", ss: "Every production system I've shipped runs on Microsoft Azure &mdash; architected, monitored, secured and optimized end-to-end." },
    azureBadge: { title: "Microsoft Azure", subtitle: "Primary Cloud Platform" },
    services: [
      { icon: "🖥️", name: "App Services", desc: "Hosting .NET APIs with auto-scaling, slot deployments and custom domain SSL", badge: "Compute" },
      { icon: "⚡", name: "Azure Functions", desc: "Serverless background processing, scheduled jobs, event-triggered workloads", badge: "Serverless" },
      { icon: "📨", name: "Service Bus", desc: "Async messaging, decoupled microservice communication, dead-letter handling", badge: "Messaging" },
      { icon: "🗃️", name: "Blob Storage", desc: "Secure document storage for audit artifacts at enterprise scale", badge: "Storage" },
      { icon: "🔐", name: "Key Vault", desc: "Secrets & certificates &mdash; zero hardcoded credentials in production", badge: "Security" },
      { icon: "⚡", name: "Redis Cache", desc: "In-memory caching reducing DB load and improving API throughput", badge: "Performance" },
      { icon: "📊", name: "App Insights + Monitor", desc: "Full observability &mdash; distributed traces, custom metrics, alert rules", badge: "Observability" },
      { icon: "🔑", name: "Azure AD / Entra ID", desc: "JWT auth, Managed Identity, RBAC &mdash; enterprise identity without sprawl", badge: "Identity" }
    ],
    nextGoal: "<strong>Next Goal:</strong> Azure Solutions Architect Expert (AZ-305) &mdash; multi-region architectures, hybrid connectivity and enterprise-scale landing zones."
  },
  ai: {
    header: { sn: "03 · AI & LLMs", stPart1: "AI-", stEm: "Native", stPart2: "<br>Developer", ss: "Integrating LLMs and AI platforms into real development workflows &mdash; amplifying code quality, velocity and system intelligence every sprint." },
    intro: "In the era where <strong>context is the new compute</strong>, I leverage foundation models and AI-powered tools to accelerate architecture decisions, code reviews and documentation &mdash; bringing a measurably sharper edge to every delivery.",
    tools: [
      { n: "Claude (Anthropic)", cat: "Foundation Model · Reasoning", d: "Complex architectural reasoning, API design reviews, technical documentation and system design &mdash; exceptional at nuanced .NET and Azure decision-making.", u: "Architecture · Code reviews · Tech docs", delayClass: "" },
      { n: "ChatGPT / GPT-4o", cat: "Foundation Model · OpenAI", d: "Rapid prototyping, SQL query generation, test case brainstorming and boilerplate acceleration with strong multi-modal support.", u: "Prototyping · SQL gen · Test scaffolding", delayClass: "d1" },
      { n: "GitHub Copilot", cat: "AI Pair Programmer · Microsoft", d: "In-editor AI deeply integrated into daily .NET development. Autocomplete, function generation, unit tests and PR reviews &mdash; always on in production codebases.", u: "In-editor coding · Autocomplete · PR reviews", delayClass: "d2" },
      { n: "Antigravity", cat: "AI Platform · Deployment", d: "AI-powered development and deployment platform &mdash; accelerating full-stack delivery pipelines, infrastructure automation and DevOps workflows.", u: "Deployment · DevOps automation · Pipelines", delayClass: "d1" },
      { n: "Azure OpenAI Service", cat: "Cloud AI · Microsoft", d: "Enterprise-grade OpenAI models on Azure &mdash; secure, compliant, Azure AD integrated. Used for building intelligent AI features inside .NET enterprise solutions.", u: "Enterprise AI · Secure LLM APIs", delayClass: "d2" },
      { n: "LLM Integration Patterns", cat: "Architecture · Applied AI", d: "RAG architectures, prompt engineering, embedding pipelines and integrating AI APIs into .NET backends for intelligent feature delivery at scale.", u: "RAG · Prompt engineering · AI APIs", delayClass: "d3" }
    ],
    toolkit: ["Semantic Kernel (.NET)", "LangChain", "Copilot Studio", "Perplexity AI", "Cursor IDE", "Gemini API", "Prompt Engineering", "Vector DBs"]
  },
  swagger: {
    header: { sn: "04 · API Design", stPart1: "API ", stEm: "Explorer", ss: "Production REST APIs I've designed and shipped — documented in OpenAPI / Swagger style. Versioned, secured, observable." },
    version: "v2.4.1",
    oas: "OAS 3.0",
    baseUrl: "https://api.skk-platform.com/v2",
    tags: [
      { id: "all", label: "All", color: "var(--a1)" },
      { id: "audit", label: "Audit", color: "var(--gold)" },
      { id: "workforce", label: "Workforce", color: "#3ecf8e" },
      { id: "identity", label: "Identity", color: "#ff8c55" },
      { id: "notifications", label: "Notifications", color: "#0af" }
    ]
  },
  domains: {
    header: { sn: "05 · Industries", stPart1: "Domain<br>", stEm: "Depth", ss: "Production experience across three complex industries &mdash; each with distinct compliance demands, scalability challenges and business stakes." },
    items: [
      { class: "fin", delayClass: "", icon: "💰", name: "FINTECH", sub: "Audit · Asset Management", desc: "Architecting an enterprise Audit Automation Platform for asset management clients at Ascendion &mdash; compliance workflows, audit trail integrity and financial data pipelines.", tags: ["Audit Automation", "Asset Management", "Compliance", "Financial APIs", "Cosmos DB"] },
      { class: "hlt", delayClass: "d1", icon: "🏥", name: "HEALTHCARE", sub: "Workforce · Scheduling", desc: "Built a real-time Workforce Management System &mdash; scheduling, availability and compliance tracking. SignalR for live updates, Azure Service Bus for reliable async event processing.", tags: ["WFM Systems", "Real-time SignalR", "Compliance", "Scheduling APIs", "Redis"] },
      { class: "gov", delayClass: "d2", icon: "🏛️", name: "GOVTECH", sub: "Irrigation · Data Systems", desc: "Delivered MICADA &mdash; a government irrigation management platform. Data entry modules, reporting dashboards and complex SQL Server procedures.", tags: ["ASP.NET Web Forms", "SQL Reporting", "Dashboards", "Stored Procs"] }
    ]
  },
  experience: {
    header: { sn: "06 · Career", stPart1: "Where I've<br>", stEm: "shipped" },
    jobs: [
      {
        date: "Apr 2024 &mdash; Present",
        company: "Ascendion Engineering",
        role: "Software Engineer · Hyderabad, India",
        projects: [
          {
            badgeClass: "gd", badgeText: "Audit Tool Automation Platform · FinTech",
            bullets: [
              "Architecting a <strong>cloud-native audit automation platform</strong> for asset management clients &mdash; full SDLC ownership",
              "Improved API response times by <strong>25&ndash;30%</strong> via targeted profiling and Azure optimization",
              "Built scalable services with <strong>Azure Functions, Blob Storage, Key Vault</strong> and App Services",
              "Enhanced code coverage with <strong>NUnit + Moq</strong>; quality gates via SonarQube &amp; Contrast",
              "Leveraged <strong>GitHub Copilot</strong> daily to accelerate velocity and code quality",
              "Validated contracts via <strong>Swagger and Azure API Management</strong>"
            ]
          }
        ]
      },
      {
        date: "Aug 2021 &mdash; Mar 2024",
        company: "People Tech Group Inc.",
        role: "Associate Software Engineer · Hyderabad, India",
        projects: [
          {
            badgeClass: "gr", badgeText: "Workforce Management System · HealthCare",
            bullets: [
              "Built RESTful APIs for <strong>workforce scheduling, availability and compliance workflows</strong>",
              "Implemented <strong>real-time features via SignalR</strong> for live shift notifications",
              "Integrated <strong>Azure Service Bus</strong> for async processing; <strong>Redis Cache</strong> for throughput",
              "Developed responsive <strong>Angular frontend</strong> with TypeScript and Bootstrap"
            ]
          },
          {
            badgeClass: "wm", badgeText: "MICADA &mdash; Government Irrigation Platform · GovTech",
            bullets: [
              "Built modules using <strong>ASP.NET Web Forms</strong> for government irrigation workflows",
              "Created <strong>reporting dashboards</strong> and user management features",
              "Wrote complex <strong>stored procedures, views and SQL Server queries</strong>"
            ]
          }
        ]
      }
    ]
  },
  projects: {
    header: { sn: "07 · Work", stPart1: "Things I've<br>", stEm: "built" },
    items: [
      {
        isFeatured: true, delayClass: "",
        bgClass: "pbfin", bgText: "★ FinTech — Audit",
        dt: "Featured · Current Role · Ascendion Engineering", title: "Audit Tool Automation Platform",
        desc: "Enterprise cloud-native audit automation for asset management firms. Full SDLC ownership. 25&ndash;30% API performance improvement. AI-powered tooling, automated audit trail, document workflows via Blob Storage, zero-secret architecture via Key Vault.",
        tech: [".NET Core 8", "C#", "Angular 17", "Azure Functions", "Service Bus", "Cosmos DB", "Key Vault", "App Insights", "GitHub Copilot"]
      },
      {
        isFeatured: false, delayClass: "d1",
        bgClass: "pbhc", bgText: "HealthCare",
        dt: "Enterprise · Real-time", title: "Workforce Management System",
        desc: "Real-time healthcare workforce scheduling with live SignalR notifications. Azure Service Bus, Redis caching, and responsive Angular UI for field staff.",
        tech: [".NET Core", "SignalR", "Redis", "Service Bus", "Angular", "SQL Server"]
      },
      {
        isFeatured: false, delayClass: "d2",
        bgClass: "pbsd", bgText: "Side Project",
        dt: "Personal · Full Stack", title: "Dhruv Application",
        desc: "Full-stack personal project &mdash; architecture to Azure deployment. Advanced .NET patterns, JWT auth, Entity Framework Core, modern Angular frontend with real-time features.",
        tech: [".NET Core", "Angular", "Azure", "EF Core", "JWT Auth"]
      },
      {
        isFeatured: false, delayClass: "d3",
        bgClass: "pbgov", bgText: "GovTech",
        dt: "Government · Data Systems", title: "MICADA — Irrigation Platform",
        desc: "State-level government irrigation management. Data entry forms, reporting dashboards, user management. Complex SQL Server stored procedures.",
        tech: ["ASP.NET Web Forms", "Web API", "SQL Server", "Reporting"]
      }
    ]
  },
  contact: {
    header: { stPart1: "Let's build<br><span>something</span>great" },
    subtitle: "Open to full-time roles, contract engagements and interesting collaborations. Deep .NET + Azure expertise, AI-augmented workflows and a track record of shipping production-grade systems.",
    emailBtn: { text: "Send me an email", url: "mailto:kallileelasaikumar@gmail.com" },
    links: [
      { label: "Email (Primary)", value: "kallileelasaikumar@gmail.com", url: "mailto:kallileelasaikumar@gmail.com" },
      { label: "LinkedIn", value: "linkedin.com/in/saikumarkalli", url: "https://linkedin.com/in/saikumarkalli" },
      { label: "GitHub", value: "github.com/saikumarkalli", url: "https://github.com/saikumarkalli" },
      { label: "Phone", value: "+91 8179242086", url: "tel:+918179242086" }
    ],
    availability: "Currently available · Hyderabad, India · Open to relocation"
  },
  footer: {
    left: "&copy; 2026 Sai Kumar Kalli &middot; Full Stack .NET Developer &middot; Hyderabad",
    right: "Built with <span>precision</span> &middot; Deployed on <span>Azure</span>"
  }
};

var ENDPOINTS = [
  {
    method: 'GET', path: '/audit/engagements', summary: 'List audit engagements',
    tag: 'audit',
    params: [
      { name: 'status', in: 'query', type: 'string', desc: 'Filter by status: active|closed|pending', req: false },
      { name: 'clientId', in: 'query', type: 'guid', desc: 'Filter by client UUID', req: false },
      { name: 'pageSize', in: 'query', type: 'int', desc: 'Results per page (default 20)', req: false }
    ],
    responses: [
      { code: '200', desc: 'Paginated list of engagements', schema: 'AuditEngagementPage' },
      { code: '401', desc: 'Unauthorized — bearer token required', schema: '' },
      { code: '400', desc: 'Invalid query parameters', schema: 'ProblemDetails' }
    ]
  },
  {
    method: 'POST', path: '/audit/engagements', summary: 'Create engagement',
    tag: 'audit',
    params: [
      { name: 'body', in: 'body', type: 'CreateEngagementRequest', desc: 'Engagement details — clientId, title, scope, assigneeIds', req: true }
    ],
    responses: [
      { code: '201', desc: 'Engagement created', schema: 'AuditEngagementDto' },
      { code: '400', desc: 'Validation failed', schema: 'ValidationProblem' },
      { code: '401', desc: 'Unauthorized', schema: '' }
    ]
  },
  {
    method: 'GET', path: '/audit/engagements/{id}/documents', summary: 'Get engagement documents',
    tag: 'audit',
    params: [
      { name: 'id', in: 'path', type: 'guid', desc: 'Engagement identifier', req: true },
      { name: 'category', in: 'query', type: 'string', desc: 'Document category filter', req: false }
    ],
    responses: [
      { code: '200', desc: 'List of document metadata', schema: 'DocumentDto[]' },
      { code: '404', desc: 'Engagement not found', schema: 'ProblemDetails' }
    ]
  },
  {
    method: 'GET', path: '/workforce/shifts', summary: 'Get shift schedule',
    tag: 'workforce',
    params: [
      { name: 'Authorization', in: 'header', type: 'Bearer', desc: 'JWT access token', req: true },
      { name: 'date', in: 'query', type: 'date', desc: 'Schedule date (ISO 8601)', req: false },
      { name: 'departmentId', in: 'query', type: 'guid', desc: 'Filter by department', req: false }
    ],
    responses: [
      { code: '200', desc: 'Array of shift objects', schema: 'ShiftDto[]' },
      { code: '401', desc: 'Token expired or invalid', schema: '' }
    ]
  },
  {
    method: 'PUT', path: '/workforce/shifts/{shiftId}/assign', summary: 'Assign staff to shift',
    tag: 'workforce',
    params: [
      { name: 'shiftId', in: 'path', type: 'guid', desc: 'Shift identifier', req: true },
      { name: 'body', in: 'body', type: 'AssignStaffRequest', desc: 'staffId + role', req: true }
    ],
    responses: [
      { code: '200', desc: 'Assignment confirmed', schema: 'ShiftAssignmentDto' },
      { code: '409', desc: 'Shift capacity exceeded or scheduling conflict', schema: 'ConflictProblem' },
      { code: '404', desc: 'Shift not found', schema: 'ProblemDetails' }
    ]
  },
  {
    method: 'POST', path: '/identity/token', summary: 'Exchange credentials for JWT',
    tag: 'identity',
    params: [
      { name: 'body', in: 'body', type: 'TokenRequest', desc: 'grant_type, client_id, client_secret or user credentials', req: true }
    ],
    responses: [
      { code: '200', desc: 'Access + refresh token pair', schema: 'TokenResponse' },
      { code: '400', desc: 'Invalid grant or credentials', schema: 'OAuth2Error' },
      { code: '401', desc: 'Client authentication failed', schema: '' }
    ]
  },
  {
    method: 'DELETE', path: '/identity/sessions/{sessionId}', summary: 'Revoke session / logout',
    tag: 'identity',
    params: [
      { name: 'sessionId', in: 'path', type: 'guid', desc: 'Active session UUID', req: true }
    ],
    responses: [
      { code: '204', desc: 'Session revoked', schema: '' },
      { code: '404', desc: 'Session not found', schema: '' }
    ]
  },
  {
    method: 'POST', path: '/notifications/send', summary: 'Send real-time notification via SignalR',
    tag: 'notifications',
    params: [
      { name: 'body', in: 'body', type: 'NotificationRequest', desc: 'recipientIds, type, payload JSON', req: true }
    ],
    responses: [
      { code: '202', desc: 'Notification queued for delivery', schema: 'NotificationReceipt' },
      { code: '400', desc: 'Invalid recipient or payload', schema: 'ValidationProblem' }
    ]
  },
  {
    method: 'GET', path: '/notifications/hubs/status', summary: 'Check SignalR hub health',
    tag: 'notifications',
    params: [],
    responses: [
      { code: '200', desc: 'Hub online — connected clients count', schema: 'HubStatusDto' },
      { code: '503', desc: 'Hub unavailable', schema: 'ProblemDetails' }
    ]
  }
];
