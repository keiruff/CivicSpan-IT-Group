export type PillarPage = {
  slug: string
  title: string
  eyebrow: string
  description: string
  intro: string
  outcome: string
  sections: { heading: string; body: string; bullets?: string[] }[]
  supporting: { group: 'Topics' | 'Blog' | 'Solutions' | 'Locations' | 'FAQ' | 'Services'; label: string; href: string }[]
}

export const pillarPages: PillarPage[] = [
  {
    slug: 'infrastructure-modernization',
    title: 'Infrastructure Modernization',
    eyebrow: 'Modernization Pillar',
    description: 'Infrastructure modernization support for Windows 11 readiness, cloud migration, endpoint refreshes, Microsoft 365 improvements, and operational resilience.',
    intro: 'Infrastructure modernization is the work of making technology easier to operate, secure, document, and improve over time.',
    outcome: 'A clearer roadmap for replacing aging systems, standardizing endpoints, improving cloud operations, and reducing operational risk.',
    sections: [
      { heading: 'What this pillar covers', body: 'CivicSpan connects modernization work across endpoints, cloud platforms, Microsoft 365, security baselines, documentation, and refresh planning.', bullets: ['Windows 11 readiness', 'Azure and cloud migration planning', 'Endpoint refreshes', 'Microsoft 365 modernization', 'Security hardening', 'Documentation and handoff planning'] },
      { heading: 'Why it matters', body: 'Modernization projects fail when they are treated as one-time technical upgrades. The better approach is to connect them to lifecycle planning, user readiness, governance, and long-term support.' },
      { heading: 'Best starting point', body: 'Start with an assessment and roadmap that identifies the current environment, the highest-risk gaps, and the sequence of improvements that will reduce disruption.' },
    ],
    supporting: [
      { group: 'Blog', label: 'How to Prepare for a Windows 11 Upgrade', href: '/blog/how-to-prepare-for-a-windows-11-upgrade' },
      { group: 'Topics', label: 'Device Lifecycle Planning', href: '/topics/device-lifecycle-planning' },
      { group: 'Topics', label: 'Microsoft 365 Migration Services', href: '/topics/microsoft-365-migration-services' },
      { group: 'Solutions', label: 'Microsoft 365 Migration Package', href: '/solutions/microsoft-365-migration' },
      { group: 'Services', label: 'Managed Infrastructure Services', href: '/services#managed-infrastructure-services' },
      { group: 'Locations', label: 'IT Consulting in Richmond, VA', href: '/locations/it-consulting-richmond-va' },
    ],
  },
  {
    slug: 'microsoft-365',
    title: 'Microsoft 365 Operations',
    eyebrow: 'Microsoft 365 Pillar',
    description: 'Microsoft 365 operations pillar for migration, SharePoint governance, Teams, OneDrive, Intune, Entra ID, security, and documentation.',
    intro: 'Microsoft 365 becomes the operating layer for email, files, meetings, identity, devices, and collaboration when it is structured and governed well.',
    outcome: 'A Microsoft 365 environment that users can understand, administrators can support, and leadership can trust as the organization grows.',
    sections: [
      { heading: 'What this pillar covers', body: 'This pillar connects Microsoft 365 setup, migration, governance, identity, device management, and user documentation into one operating model.', bullets: ['Microsoft 365 migration', 'SharePoint governance', 'OneDrive best practices', 'Teams structure', 'Entra ID identity cleanup', 'Intune device management'] },
      { heading: 'Why it matters', body: 'Most Microsoft 365 problems are not single-app issues. They are structure, permission, identity, lifecycle, and documentation issues that show up as user confusion and support tickets.' },
      { heading: 'Best starting point', body: 'Start with a tenant review or migration plan that documents domains, users, groups, devices, file locations, sharing rules, and security settings.' },
    ],
    supporting: [
      { group: 'Topics', label: 'Microsoft Consulting', href: '/topics/microsoft' },
      { group: 'Topics', label: 'Microsoft 365 Migration Services', href: '/topics/microsoft-365-migration-services' },
      { group: 'Topics', label: 'SharePoint Governance', href: '/topics/sharepoint-governance' },
      { group: 'Topics', label: 'OneDrive Best Practices', href: '/topics/onedrive-best-practices' },
      { group: 'Topics', label: 'Entra ID Basics', href: '/topics/entra-id-basics' },
      { group: 'Blog', label: '5 Common Microsoft 365 Security Mistakes', href: '/blog/5-common-microsoft-365-security-mistakes' },
      { group: 'Solutions', label: 'Microsoft 365 Migration Package', href: '/solutions/microsoft-365-migration' },
      { group: 'Locations', label: 'Microsoft 365 Support in Northern Virginia', href: '/locations/microsoft-365-northern-virginia' },
    ],
  },
  {
    slug: 'engineering-technology',
    title: 'Engineering Technology Operations',
    eyebrow: 'Engineering Pillar',
    description: 'Engineering technology operations for ProjectWise, Bentley, CAD, GIS, workstations, permissions, documentation, and infrastructure project teams.',
    intro: 'Engineering technology operations keep ProjectWise, Bentley, CAD, GIS, workstations, and project data reliable enough for production work.',
    outcome: 'Fewer engineering workflow interruptions, cleaner support paths, better documentation, and technology standards that match real project delivery.',
    sections: [
      { heading: 'What this pillar covers', body: 'This pillar connects ProjectWise support, Bentley workflows, CAD and GIS environments, workstation standards, permissions, cache issues, and engineering documentation.', bullets: ['ProjectWise troubleshooting', 'Bentley workspace support', 'CAD and GIS coordination', 'Dell Precision workstation planning', 'Cache and performance review', 'Engineering runbooks and checklists'] },
      { heading: 'Why it matters', body: 'Generic IT support often misses the context behind engineering tools. CivicSpan focuses on the environment around the tools: access, configuration, standards, documentation, and operational continuity.' },
      { heading: 'Best starting point', body: 'Start with a ProjectWise Health Check or engineering workstation review to identify the patterns slowing teams down.' },
    ],
    supporting: [
      { group: 'Topics', label: 'Bentley ProjectWise Consulting and Support', href: '/topics/projectwise' },
      { group: 'Topics', label: 'What is Bentley ProjectWise?', href: '/topics/what-is-bentley-projectwise' },
      { group: 'Topics', label: 'ProjectWise Workspace Best Practices', href: '/topics/projectwise-workspace-best-practices' },
      { group: 'Topics', label: 'ProjectWise Performance Issues', href: '/topics/projectwise-performance-issues' },
      { group: 'Blog', label: 'ProjectWise Running Slow?', href: '/blog/projectwise-running-slow' },
      { group: 'Solutions', label: 'ProjectWise Health Check', href: '/solutions/projectwise-health-check' },
      { group: 'Solutions', label: 'Engineering Workstation Package', href: '/solutions/engineering-workstation-package' },
      { group: 'Locations', label: 'Engineering IT Support in Maryland', href: '/locations/engineering-it-maryland' },
    ],
  },
  {
    slug: 'cloud-operations',
    title: 'Cloud Operations',
    eyebrow: 'Cloud Pillar',
    description: 'Cloud operations support for Microsoft 365, Azure migration planning, identity, cloud security, documentation, and operational governance.',
    intro: 'Cloud operations turn cloud tools from disconnected apps into a manageable environment with structure, ownership, documentation, and security controls.',
    outcome: 'Cleaner cloud administration, stronger identity and permission controls, better migration planning, and fewer surprises as the organization grows.',
    sections: [
      { heading: 'What this pillar covers', body: 'CivicSpan supports cloud operations through Microsoft 365 structure, Azure migration planning, identity cleanup, cloud security, governance, and runbooks.', bullets: ['Cloud environment review', 'Azure migration planning', 'Microsoft 365 administration', 'Cloud security', 'Identity and permission review', 'Operations documentation'] },
      { heading: 'Why it matters', body: 'Cloud tools are easy to adopt but hard to operate when ownership, permissions, data locations, and recovery paths are unclear.' },
      { heading: 'Best starting point', body: 'Start by mapping the cloud tools, data locations, identities, admins, integrations, and documentation gaps that affect daily operations.' },
    ],
    supporting: [
      { group: 'Topics', label: 'Microsoft Consulting', href: '/topics/microsoft' },
      { group: 'Topics', label: 'Entra ID Consulting', href: '/topics/entra-id-consulting' },
      { group: 'Topics', label: 'SharePoint Governance', href: '/topics/sharepoint-governance' },
      { group: 'Blog', label: '5 Common Microsoft 365 Security Mistakes', href: '/blog/5-common-microsoft-365-security-mistakes' },
      { group: 'Solutions', label: 'Microsoft 365 Migration Package', href: '/solutions/microsoft-365-migration' },
      { group: 'Services', label: 'AI Readiness Foundations', href: '/services#ai-readiness-foundations' },
      { group: 'FAQ', label: 'Microsoft 365 FAQ', href: '/faq' },
    ],
  },
  {
    slug: 'it-documentation',
    title: 'IT Documentation & Knowledge Operations',
    eyebrow: 'Documentation Pillar',
    description: 'IT documentation pillar for SOPs, runbooks, onboarding guides, knowledge bases, CMDB planning, disaster recovery documentation, and operational handoffs.',
    intro: 'IT documentation turns fragile individual knowledge into operational capability that survives staff changes, vendor transitions, and emergencies.',
    outcome: 'A more supportable environment where users, administrators, vendors, and leadership can understand how key technology actually works.',
    sections: [
      { heading: 'What this pillar covers', body: 'This pillar connects SOPs, runbooks, knowledge bases, onboarding, asset records, CMDB planning, and disaster recovery documentation.', bullets: ['SOPs and runbooks', 'Knowledge bases', 'Onboarding and offboarding guides', 'Asset and CMDB planning', 'Disaster recovery documentation', 'Administrator handoffs'] },
      { heading: 'Why it matters', body: 'If a process cannot be explained, repeated, or handed off, it is an operational risk. Documentation reduces repeat issues and makes support faster.' },
      { heading: 'Best starting point', body: 'Start with the workflows that cause the most confusion: onboarding, permissions, device deployment, ProjectWise issues, Microsoft 365 administration, and recovery steps.' },
    ],
    supporting: [
      { group: 'Services', label: 'Environment-Specific Documentation', href: '/services#training' },
      { group: 'Services', label: 'Infrastructure & Technology Operations', href: '/infrastructure-technology-operations' },
      { group: 'Topics', label: 'ProjectWise Administrator Checklist', href: '/topics/projectwise-administrator-checklist' },
      { group: 'Topics', label: 'Device Lifecycle Planning', href: '/topics/device-lifecycle-planning' },
      { group: 'Blog', label: 'How Much Should a Small Business Spend on IT?', href: '/blog/how-much-should-a-small-business-spend-on-it' },
      { group: 'Solutions', label: 'New Employee Technology Package', href: '/solutions/new-employee-technology' },
      { group: 'FAQ', label: 'Documentation FAQ', href: '/faq' },
    ],
  },
  {
    slug: 'technology-lifecycle-management',
    title: 'Technology Lifecycle Management',
    eyebrow: 'Lifecycle Pillar',
    description: 'Technology lifecycle management pillar connecting planning, procurement, deployment, security, documentation, operations, modernization, and continuous improvement.',
    intro: 'Technology lifecycle management is CivicSpan’s organizing framework: plan, procure, deploy, secure, document, operate, modernize, and repeat.',
    outcome: 'A technology environment that is easier to budget, refresh, secure, document, support, and improve over time.',
    sections: [
      { heading: 'What this pillar covers', body: 'This pillar ties CivicSpan’s services into one lifecycle so each engagement supports the next operational stage.', bullets: ['Plan: assessments and roadmaps', 'Procure: Dell solutions', 'Deploy: Microsoft 365 and endpoints', 'Secure: identity and cloud security', 'Document: SOPs and runbooks', 'Operate: managed services', 'Modernize: Windows 11, Azure, and cloud migration'] },
      { heading: 'Why it matters', body: 'Organizations often buy technology as isolated projects. Lifecycle management turns those projects into a repeatable operating model.' },
      { heading: 'Best starting point', body: 'Start by identifying which lifecycle stage is creating the most risk or friction today, then connect it to a practical next step.' },
    ],
    supporting: [
      { group: 'Services', label: 'Infrastructure & Technology Operations', href: '/infrastructure-technology-operations' },
      { group: 'Topics', label: 'Device Lifecycle Planning', href: '/topics/device-lifecycle-planning' },
      { group: 'Topics', label: 'Business Laptop Buying Guide', href: '/topics/business-laptop-buying-guide' },
      { group: 'Solutions', label: 'Dell Business Laptops Setup', href: '/solutions/dell-business-laptops' },
      { group: 'Solutions', label: 'New Employee Technology Package', href: '/solutions/new-employee-technology' },
      { group: 'Blog', label: 'Need to Deploy 50 New Laptops?', href: '/blog/need-to-deploy-50-new-laptops' },
      { group: 'Services', label: 'Managed Infrastructure Services', href: '/services#managed-infrastructure-services' },
    ],
  },
]

export const findPillar = (slug: string) => pillarPages.find((page) => page.slug === slug)
