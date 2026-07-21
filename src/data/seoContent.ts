export type ContentPage = {
  slug: string
  title: string
  eyebrow: string
  description: string
  intro: string
  sections: { heading: string; body: string; bullets?: string[] }[]
  faqs?: { question: string; answer: string }[]
  related: { label: string; href: string }[]
}

export const siteUrl = 'https://civicspanitgroup.com'

export const topicPages: ContentPage[] = [
  {
    slug: 'microsoft',
    title: 'Microsoft Consulting for Small Business and Public-Sector Teams',
    eyebrow: 'Microsoft',
    description: 'Microsoft 365, SharePoint, Teams, Intune, and Entra ID consulting for small businesses, municipalities, nonprofits, and infrastructure teams.',
    intro: 'CivicSpan helps organizations turn Microsoft 365 from a collection of apps into a reliable operating environment for email, files, meetings, device access, and security.',
    sections: [
      { heading: 'What we support', body: 'We help with Microsoft 365 tenant setup, email migration, Teams deployment, SharePoint document structure, Intune device management, and Entra ID identity controls.', bullets: ['Microsoft 365 setup and administration', 'SharePoint document libraries and permissions', 'Teams channels, meetings, and collaboration standards', 'Intune enrollment for business laptops', 'Entra ID MFA, access, and account cleanup'] },
      { heading: 'Who it is for', body: 'This is built for organizations that need practical Microsoft support without a full-time internal administrator: small businesses, local government vendors, nonprofits, and engineering-focused teams.' },
      { heading: 'Outcome', body: 'The goal is simple: users can sign in, find files, join meetings, and work securely from managed devices with fewer support issues.' },
    ],
    faqs: [
      { question: 'Can CivicSpan migrate from Google Workspace to Microsoft 365?', answer: 'Yes. We plan the mail, calendar, contact, file, DNS, and user cutover steps so the migration is controlled and documented.' },
      { question: 'Do you support existing Microsoft 365 tenants?', answer: 'Yes. We can review an existing tenant, clean up users and permissions, and document recommended improvements.' },
    ],
    related: [
      { label: 'Microsoft 365 Migration Services', href: '/topics/microsoft-365-migration-services' },
      { label: 'SharePoint Consulting', href: '/topics/sharepoint-consulting' },
      { label: 'Microsoft 365 Northern Virginia', href: '/locations/microsoft-365-northern-virginia' },
      { label: 'Contact CivicSpan', href: '/contact' },
    ],
  },
  {
    slug: 'microsoft-365-for-small-business',
    title: 'Microsoft 365 for Small Business',
    eyebrow: 'Microsoft 365',
    description: 'Microsoft 365 setup, security, email, Teams, and SharePoint support for small businesses that need a professional IT foundation.',
    intro: 'Microsoft 365 can cover email, documents, meetings, identity, and device management. CivicSpan configures it around how your small business actually works.',
    sections: [
      { heading: 'Core setup', body: 'We configure accounts, email domains, security defaults, shared mailboxes, Teams, and SharePoint libraries so staff have a consistent place to work.', bullets: ['Business email and DNS setup', 'User and group structure', 'Teams and SharePoint setup', 'OneDrive guidance', 'MFA and access controls'] },
      { heading: 'Small business priorities', body: 'Small businesses need Microsoft 365 to be secure without becoming complicated. We focus on the settings that reduce risk and confusion first.' },
      { heading: 'When to call', body: 'Reach out if users cannot find files, email is inconsistent, Teams has become disorganized, or your business is adding new employees and devices.' },
    ],
    related: [
      { label: 'Microsoft Consulting', href: '/topics/microsoft' },
      { label: 'Need to Deploy 50 New Laptops?', href: '/blog/need-to-deploy-50-new-laptops' },
      { label: 'Small Business Startup Package', href: '/solutions/small-business-startup-package' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    slug: 'microsoft-365-migration-services',
    title: 'Microsoft 365 Migration Services',
    eyebrow: 'Migration',
    description: 'Email, file, Teams, and SharePoint migration planning for organizations moving into Microsoft 365.',
    intro: 'A Microsoft 365 migration is not just moving mailboxes. It is a cutover plan for identity, files, permissions, devices, and user communication.',
    sections: [
      { heading: 'Migration scope', body: 'CivicSpan helps map the current environment, prepare users, configure Microsoft 365, migrate data, and support the cutover.', bullets: ['Mailbox and calendar migration', 'DNS and domain validation', 'SharePoint and OneDrive structure', 'Teams rollout planning', 'Post-migration support'] },
      { heading: 'Avoiding downtime', body: 'We plan migrations around business hours, DNS timing, user readiness, and rollback paths so teams are not surprised on cutover day.' },
      { heading: 'Documentation', body: 'Every migration should leave behind an admin summary, user instructions, and a list of known decisions for future support.' },
    ],
    faqs: [
      { question: 'How long does a Microsoft 365 migration take?', answer: 'Small migrations can often be planned and completed in days. Larger or more complex environments need additional discovery, staging, and user communication.' },
      { question: 'Can you migrate from Google Workspace?', answer: 'Yes. CivicSpan can help plan the migration from Google Workspace mail, calendar, contacts, and files into Microsoft 365.' },
    ],
    related: [
      { label: 'Microsoft 365 Migration Package', href: '/solutions/microsoft-365-migration' },
      { label: 'SharePoint Consulting', href: '/topics/sharepoint-consulting' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    slug: 'sharepoint-consulting',
    title: 'SharePoint Consulting',
    eyebrow: 'SharePoint',
    description: 'SharePoint document library, permissions, folder cleanup, and collaboration consulting for practical Microsoft 365 environments.',
    intro: 'SharePoint works best when it has a clear structure. CivicSpan helps teams replace scattered folders with libraries, permissions, and guidance that users can follow.',
    sections: [
      { heading: 'Common SharePoint problems', body: 'Messy libraries, broken permissions, duplicate folders, and unclear file ownership create daily friction. We help simplify the structure before it becomes unmanageable.', bullets: ['Library and folder design', 'Permission review', 'Teams-connected sites', 'External sharing guidance', 'User documentation'] },
      { heading: 'Engineering and government workflows', body: 'For infrastructure teams, SharePoint often sits beside ProjectWise, CAD file systems, and procurement documents. We help define what belongs where.' },
      { heading: 'Outcome', body: 'A cleaner SharePoint environment makes it easier for staff to find current files and easier for administrators to support access requests.' },
    ],
    related: [
      { label: 'ProjectWise vs SharePoint', href: '/topics/projectwise-vs-sharepoint' },
      { label: 'Microsoft Teams Deployment', href: '/topics/microsoft-teams-deployment' },
      { label: 'Microsoft Consulting', href: '/topics/microsoft' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    slug: 'microsoft-teams-deployment',
    title: 'Microsoft Teams Deployment',
    eyebrow: 'Teams',
    description: 'Microsoft Teams deployment, channel structure, meeting standards, and collaboration setup for small organizations.',
    intro: 'Teams becomes noisy when it grows without a plan. CivicSpan helps define channels, permissions, meetings, and file storage so Teams supports work instead of interrupting it.',
    sections: [
      { heading: 'Teams deployment support', body: 'We help configure teams, channels, naming standards, meeting policies, guest access, and file storage expectations.', bullets: ['Team and channel planning', 'Meeting and chat guidance', 'Guest access review', 'SharePoint-connected files', 'User onboarding materials'] },
      { heading: 'When Teams needs cleanup', body: 'If staff are creating duplicate teams, losing files, or using chat for decisions that need records, the environment needs structure and documentation.' },
    ],
    related: [
      { label: 'SharePoint Consulting', href: '/topics/sharepoint-consulting' },
      { label: 'Microsoft 365 for Small Business', href: '/topics/microsoft-365-for-small-business' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    slug: 'intune-device-management',
    title: 'Intune Device Management',
    eyebrow: 'Intune',
    description: 'Microsoft Intune setup for laptop enrollment, baseline security, BitLocker, app deployment, and remote workforce support.',
    intro: 'Intune helps small organizations standardize laptops without touching every device manually. CivicSpan sets up practical policies that support users and reduce risk.',
    sections: [
      { heading: 'Device management basics', body: 'We help enroll Windows laptops, apply security baselines, deploy common applications, document assets, and support remote users.', bullets: ['Windows device enrollment', 'BitLocker and security settings', 'Application assignment', 'Remote wipe and lost-device procedures', 'Hardware documentation'] },
      { heading: 'Good fit', body: 'Intune is especially useful when your team is hiring, replacing laptops, moving to remote work, or standardizing Dell business hardware.' },
    ],
    related: [
      { label: 'Dell Laptop Deployment Services', href: '/topics/dell-laptop-deployment-services' },
      { label: 'New Employee Technology Package', href: '/solutions/new-employee-technology' },
      { label: 'Need to Deploy 50 New Laptops?', href: '/blog/need-to-deploy-50-new-laptops' },
    ],
  },
  {
    slug: 'entra-id-consulting',
    title: 'Entra ID Consulting',
    eyebrow: 'Identity',
    description: 'Microsoft Entra ID account, MFA, access, group, and identity cleanup support for Microsoft 365 organizations.',
    intro: 'Identity is the front door to your Microsoft environment. CivicSpan helps clean up accounts, groups, access, and MFA so users can work securely.',
    sections: [
      { heading: 'Identity cleanup', body: 'We review user accounts, administrator roles, groups, stale access, MFA coverage, and sign-in patterns to identify practical improvements.', bullets: ['MFA review', 'Admin role review', 'User and group cleanup', 'Shared mailbox access', 'Onboarding and offboarding steps'] },
      { heading: 'Why it matters', body: 'Account sprawl and weak access controls create risk. A documented identity structure makes onboarding, offboarding, and troubleshooting easier.' },
    ],
    related: [
      { label: 'Microsoft 365 Security Mistakes', href: '/blog/5-common-microsoft-365-security-mistakes' },
      { label: 'Microsoft 365 for Small Business', href: '/topics/microsoft-365-for-small-business' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    slug: 'dell',
    title: 'Dell Business Hardware Consulting and Deployment',
    eyebrow: 'Dell',
    description: 'Dell Latitude, Precision, small business computer, government procurement, and laptop deployment support from CivicSpan IT Group.',
    intro: 'CivicSpan helps organizations choose, configure, document, and deploy Dell business hardware for office, remote, engineering, and public-sector environments.',
    sections: [
      { heading: 'Hardware support areas', body: 'We support standardized business laptops, engineering workstations, procurement coordination, device setup, and post-deployment documentation.', bullets: ['Dell Latitude laptops', 'Dell Precision workstations', 'Small business computers', 'Government procurement support', 'Laptop deployment services'] },
      { heading: 'Why standardization matters', body: 'Standard models reduce troubleshooting time, make onboarding easier, and improve security policy consistency.' },
    ],
    related: [
      { label: 'Dell Latitude Business Laptops', href: '/topics/dell-latitude-business-laptops' },
      { label: 'Dell Precision Workstations', href: '/topics/dell-precision-workstations' },
      { label: 'Dell Business Laptop Setup', href: '/solutions/dell-business-laptops' },
    ],
  },
  {
    slug: 'dell-latitude-business-laptops',
    title: 'Dell Latitude Business Laptops',
    eyebrow: 'Dell Latitude',
    description: 'Dell Latitude laptop selection, setup, security hardening, and deployment support for small businesses and remote teams.',
    intro: 'Dell Latitude laptops are a practical standard for business users who need reliable devices, manageable configurations, and consistent support.',
    sections: [
      { heading: 'Deployment-ready setup', body: 'CivicSpan can help select models, configure Windows, apply security settings, install applications, and document each device.', bullets: ['Model selection guidance', 'Windows and app setup', 'BitLocker and account configuration', 'Asset records', 'User handoff checklist'] },
      { heading: 'Best fit', body: 'Latitude laptops work well for general business users, remote staff, field coordinators, and new employee onboarding.' },
    ],
    related: [
      { label: 'Dell Laptop Deployment Services', href: '/topics/dell-laptop-deployment-services' },
      { label: 'Intune Device Management', href: '/topics/intune-device-management' },
      { label: 'New Employee Technology', href: '/solutions/new-employee-technology' },
    ],
  },
  {
    slug: 'dell-precision-workstations',
    title: 'Dell Precision Workstations',
    eyebrow: 'Dell Precision',
    description: 'Dell Precision workstation planning and setup for CAD, GIS, Bentley, and engineering workloads.',
    intro: 'Engineering teams need workstations sized for the software they actually run. CivicSpan helps align Dell Precision hardware with CAD, GIS, and Bentley workloads.',
    sections: [
      { heading: 'Engineering workstation setup', body: 'We help with workstation selection, GPU and memory planning, application installation, user configuration, and documentation.', bullets: ['CAD and GIS workload review', 'Bentley software installation support', 'GPU and driver considerations', 'Local storage planning', 'Deployment documentation'] },
      { heading: 'Avoid under-spec systems', body: 'Slow workstations create lost production time. A properly configured Precision workstation can reduce daily friction for technical staff.' },
    ],
    related: [
      { label: 'Engineering Workstation Package', href: '/solutions/engineering-workstation-package' },
      { label: 'ProjectWise Performance Issues', href: '/topics/projectwise-performance-issues' },
      { label: 'Engineering IT Maryland', href: '/locations/engineering-it-maryland' },
    ],
  },
  {
    slug: 'dell-small-business-computers',
    title: 'Dell Small Business Computers',
    eyebrow: 'Small Business Hardware',
    description: 'Dell computer planning and setup for small businesses that need reliable, documented technology without enterprise complexity.',
    intro: 'The right small business computer standard makes onboarding, support, and security easier. CivicSpan helps choose and configure systems that fit the work.',
    sections: [
      { heading: 'What we configure', body: 'We support laptops, desktops, monitors, docking stations, Microsoft 365 accounts, security settings, printers, and user handoff documentation.', bullets: ['Device selection', 'Business account setup', 'Security hardening', 'Printer and peripheral setup', 'Asset documentation'] },
      { heading: 'When to standardize', body: 'Standardization is useful when your team is growing, replacing old devices, or opening a new office.' },
    ],
    related: [
      { label: 'Small Business Startup Package', href: '/solutions/small-business-startup-package' },
      { label: 'IT Support Fredericksburg VA', href: '/locations/it-support-fredericksburg-va' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    slug: 'dell-government-procurement',
    title: 'Dell Government Procurement Support',
    eyebrow: 'Government Procurement',
    description: 'Dell hardware planning and procurement support for municipalities, public-sector vendors, and government-adjacent organizations.',
    intro: 'Public-sector technology purchases need clean documentation, standardized hardware, and a support plan. CivicSpan helps coordinate the technical side of Dell procurement.',
    sections: [
      { heading: 'Procurement support', body: 'We help define hardware requirements, document configurations, coordinate setup needs, and prepare deployment checklists.', bullets: ['Laptop and workstation requirements', 'Standard configuration lists', 'Deployment planning', 'Asset documentation', 'User rollout support'] },
      { heading: 'Who it helps', body: 'Municipalities, public agencies, contractors, nonprofits, and infrastructure teams that need business-grade systems and clean records.' },
    ],
    related: [
      { label: 'Transportation Technology Pennsylvania', href: '/locations/transportation-technology-pennsylvania' },
      { label: 'Dell Laptop Deployment Services', href: '/topics/dell-laptop-deployment-services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    slug: 'dell-laptop-deployment-services',
    title: 'Dell Laptop Deployment Services',
    eyebrow: 'Laptop Deployment',
    description: 'Remote and onsite Dell laptop deployment services including account setup, security, applications, and user handoff documentation.',
    intro: 'Deploying laptops is more than handing out hardware. CivicSpan prepares devices so users can sign in, access email, reach files, and work securely from day one.',
    sections: [
      { heading: 'Deployment checklist', body: 'We can configure Windows, Microsoft 365 accounts, MFA, BitLocker, common applications, printers, VPN requirements, and user instructions.', bullets: ['Device setup and naming', 'Microsoft account assignment', 'Security settings', 'Application installation', 'Asset and handoff notes'] },
      { heading: 'Remote deployment', body: 'For remote staff, we help define the shipping, account, first-login, and support handoff process so deployment does not depend on office access.' },
    ],
    related: [
      { label: 'Intune Device Management', href: '/topics/intune-device-management' },
      { label: 'Need to Deploy 50 New Laptops?', href: '/blog/need-to-deploy-50-new-laptops' },
      { label: 'Dell Business Laptop Setup', href: '/solutions/dell-business-laptops' },
    ],
  },
  {
    slug: 'projectwise',
    title: 'Bentley ProjectWise Consulting and Support',
    eyebrow: 'ProjectWise',
    description: 'ProjectWise consulting for engineering teams, DOT workflows, workspace issues, cache problems, performance, and SharePoint comparisons.',
    intro: 'ProjectWise is a specialized document and engineering collaboration platform. CivicSpan helps infrastructure teams troubleshoot the practical problems that slow daily production.',
    sections: [
      { heading: 'ProjectWise support topics', body: 'We focus on client configuration, cache problems, workspace issues, datasource connectivity, user guidance, and practical administration checklists.', bullets: ['ProjectWise cache cleanup', 'Workspace configuration review', 'Performance troubleshooting', 'Administrator checklists', 'ProjectWise and SharePoint boundaries'] },
      { heading: 'Why it matters', body: 'Small configuration issues can interrupt CAD production, file access, and project delivery. A structured review can identify repeat problems and prevent support churn.' },
    ],
    related: [
      { label: 'What is Bentley ProjectWise?', href: '/topics/what-is-bentley-projectwise' },
      { label: 'ProjectWise Health Check', href: '/solutions/projectwise-health-check' },
      { label: 'ProjectWise Support Virginia', href: '/locations/projectwise-support-virginia' },
    ],
  },
  {
    slug: 'what-is-bentley-projectwise',
    title: 'What is Bentley ProjectWise?',
    eyebrow: 'ProjectWise Guide',
    description: 'A practical explanation of Bentley ProjectWise for engineering, transportation, and infrastructure teams.',
    intro: 'Bentley ProjectWise is used by engineering and infrastructure organizations to manage project documents, CAD files, references, and collaboration workflows.',
    sections: [
      { heading: 'What ProjectWise does', body: 'ProjectWise gives teams a controlled place for design files, references, project documents, access permissions, and engineering collaboration across offices and partners.' },
      { heading: 'Why teams use it', body: 'Infrastructure projects involve many files, disciplines, reviewers, and revisions. ProjectWise helps keep project data organized and controlled when basic file shares are not enough.' },
      { heading: 'Common support needs', body: 'Most issues involve client configuration, local cache behavior, datasource access, workspace paths, and user training.', bullets: ['Slow file opens', 'Cache errors', 'Workspace warnings', 'Disconnected datasources', 'User access issues'] },
    ],
    faqs: [
      { question: 'Is ProjectWise the same as SharePoint?', answer: 'No. SharePoint is a broad Microsoft document and collaboration platform. ProjectWise is specialized for engineering design collaboration and CAD-centered project environments.' },
    ],
    related: [
      { label: 'ProjectWise vs SharePoint', href: '/topics/projectwise-vs-sharepoint' },
      { label: 'Common ProjectWise Problems', href: '/topics/common-projectwise-problems' },
      { label: 'ProjectWise Health Check', href: '/solutions/projectwise-health-check' },
    ],
  },
  {
    slug: 'common-projectwise-problems',
    title: 'Common ProjectWise Problems',
    eyebrow: 'ProjectWise Troubleshooting',
    description: 'Common ProjectWise client, cache, workspace, datasource, and performance problems engineering teams run into.',
    intro: 'ProjectWise problems often look like random user issues, but many repeat across workstations because of configuration, cache, or workspace patterns.',
    sections: [
      { heading: 'Problems we see often', body: 'The most common issues include slow file opens, stale local cache files, missing workspace resources, datasource disconnects, and unclear user workflows.', bullets: ['Files open slowly', 'References do not resolve', 'Local cache grows too large', 'Workspace paths are wrong', 'Users see repeated login or datasource errors'] },
      { heading: 'Why they repeat', body: 'If the environment is not documented, each issue gets solved one workstation at a time. A health check identifies shared causes and creates a repeatable fix.' },
    ],
    related: [
      { label: 'How to Clean a ProjectWise Cache', href: '/topics/how-to-clean-a-projectwise-cache' },
      { label: 'ProjectWise Workspace Best Practices', href: '/topics/projectwise-workspace-best-practices' },
      { label: 'ProjectWise Health Check', href: '/solutions/projectwise-health-check' },
    ],
  },
  {
    slug: 'projectwise-workspace-best-practices',
    title: 'ProjectWise Workspace Best Practices',
    eyebrow: 'ProjectWise Workspaces',
    description: 'Practical ProjectWise workspace best practices for engineering firms managing CAD standards and project configuration.',
    intro: 'A clean ProjectWise workspace helps users open the right files with the right standards, references, resources, and project settings.',
    sections: [
      { heading: 'Workspace basics', body: 'Workspace configuration should be documented, consistent, and tested across representative workstations before a rollout.', bullets: ['Document standards and paths', 'Test with real project files', 'Keep local and managed resources clear', 'Use naming standards', 'Record known dependencies'] },
      { heading: 'Support value', body: 'When workspace behavior is predictable, support teams can distinguish a workstation issue from a project configuration issue faster.' },
    ],
    related: [
      { label: 'ProjectWise Administrator Checklist', href: '/topics/projectwise-administrator-checklist' },
      { label: 'Common ProjectWise Problems', href: '/topics/common-projectwise-problems' },
      { label: 'ProjectWise Health Check', href: '/solutions/projectwise-health-check' },
    ],
  },
  {
    slug: 'projectwise-performance-issues',
    title: 'ProjectWise Performance Issues',
    eyebrow: 'ProjectWise Performance',
    description: 'ProjectWise performance troubleshooting for slow file opens, cache issues, workstation bottlenecks, and network-related delays.',
    intro: 'Slow ProjectWise performance can come from cache behavior, workstation resources, network paths, datasource latency, or workspace configuration.',
    sections: [
      { heading: 'What to review first', body: 'Start with the affected users, file types, workstations, network location, local cache, and whether the problem happens in one project or many.', bullets: ['Local cache size and path', 'Workstation storage and memory', 'Network connection quality', 'Datasource connection behavior', 'Workspace and reference file loading'] },
      { heading: 'Health check approach', body: 'CivicSpan documents patterns, checks repeatable settings, and separates local workstation issues from broader environment problems.' },
    ],
    related: [
      { label: 'ProjectWise Running Slow?', href: '/blog/projectwise-running-slow' },
      { label: 'How to Clean a ProjectWise Cache', href: '/topics/how-to-clean-a-projectwise-cache' },
      { label: 'ProjectWise Health Check', href: '/solutions/projectwise-health-check' },
    ],
  },
  {
    slug: 'how-to-clean-a-projectwise-cache',
    title: 'How to Clean a ProjectWise Cache',
    eyebrow: 'ProjectWise Cache',
    description: 'A practical overview of ProjectWise cache cleanup considerations and why teams should document the process before deleting files.',
    intro: 'A ProjectWise cache can grow large or hold stale files, but cache cleanup should be handled carefully so users do not lose local work or break references.',
    sections: [
      { heading: 'Before cleaning', body: 'Confirm that local work has been checked in, identify the cache location, note affected projects, and document the current issue.', bullets: ['Confirm files are checked in', 'Close Bentley applications', 'Record the cache path', 'Check available disk space', 'Document the user and project context'] },
      { heading: 'Why not guess', body: 'Deleting the wrong local files can create confusion or data loss. A repeatable checklist helps support staff clean safely and consistently.' },
      { heading: 'When to get help', body: 'If multiple users have cache issues, the cause may be workspace, datasource, or training related rather than one local workstation.' },
    ],
    related: [
      { label: 'ProjectWise Cache Problems Explained', href: '/blog/projectwise-cache-problems-explained' },
      { label: 'Common ProjectWise Problems', href: '/topics/common-projectwise-problems' },
      { label: 'ProjectWise Health Check', href: '/solutions/projectwise-health-check' },
    ],
  },
  {
    slug: 'projectwise-administrator-checklist',
    title: 'ProjectWise Administrator Checklist',
    eyebrow: 'ProjectWise Admin',
    description: 'A practical ProjectWise administrator checklist for reviewing users, datasources, cache behavior, workspaces, documentation, and support handoffs.',
    intro: 'ProjectWise administrators need repeatable checks for user access, datasource health, client configuration, workspaces, and support documentation.',
    sections: [
      { heading: 'Checklist areas', body: 'A good review covers users, groups, permissions, client versions, cache paths, workspace standards, logs, and recurring support tickets.', bullets: ['Users and groups', 'Datasource connections', 'Client versions', 'Cache configuration', 'Workspace standards', 'Known issues and fixes'] },
      { heading: 'Documentation matters', body: 'The best checklist is tied to written support steps so future issues can be handled consistently instead of rediscovered.' },
    ],
    related: [
      { label: 'ProjectWise Workspace Best Practices', href: '/topics/projectwise-workspace-best-practices' },
      { label: 'ProjectWise Health Check', href: '/solutions/projectwise-health-check' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    slug: 'projectwise-vs-sharepoint',
    title: 'ProjectWise vs SharePoint',
    eyebrow: 'Comparison',
    description: 'ProjectWise vs SharePoint for engineering files, business documents, collaboration, permissions, and infrastructure project workflows.',
    intro: 'ProjectWise and SharePoint both manage documents, but they serve different needs. Most engineering organizations need a clear boundary between the two.',
    sections: [
      { heading: 'Where ProjectWise fits', body: 'ProjectWise is stronger for CAD-centered engineering collaboration, references, managed workspaces, and project design environments.' },
      { heading: 'Where SharePoint fits', body: 'SharePoint is stronger for general business documents, Microsoft Teams files, policies, office collaboration, and searchable records.' },
      { heading: 'Practical rule', body: 'Keep engineering production files in the environment designed for engineering controls, and use SharePoint for business collaboration, communications, and non-CAD documentation.' },
    ],
    related: [
      { label: 'SharePoint Consulting', href: '/topics/sharepoint-consulting' },
      { label: 'What is Bentley ProjectWise?', href: '/topics/what-is-bentley-projectwise' },
      { label: 'ProjectWise for DOTs', href: '/topics/projectwise-for-dots' },
    ],
  },
  {
    slug: 'projectwise-for-dots',
    title: 'ProjectWise for DOTs',
    eyebrow: 'Transportation Technology',
    description: 'ProjectWise support considerations for departments of transportation, engineering consultants, and transportation project teams.',
    intro: 'Transportation projects depend on controlled design files, standards, external partners, and long project histories. ProjectWise often sits at the center of that workflow.',
    sections: [
      { heading: 'DOT workflow considerations', body: 'DOT and transportation teams need consistent access, clear project structure, workspace standards, and documentation for consultants and internal users.', bullets: ['Project access and permissions', 'Workspace and CAD standards', 'External partner workflows', 'Cache and performance support', 'Administrator checklists'] },
      { heading: 'Support focus', body: 'CivicSpan helps review practical user problems and document repeatable support paths for teams working with transportation project data.' },
    ],
    related: [
      { label: 'Transportation Technology Pennsylvania', href: '/locations/transportation-technology-pennsylvania' },
      { label: 'ProjectWise Support Virginia', href: '/locations/projectwise-support-virginia' },
      { label: 'ProjectWise Health Check', href: '/solutions/projectwise-health-check' },
    ],
  },
]

export const locationPages: ContentPage[] = [
  {
    slug: 'it-support-fredericksburg-va',
    title: 'IT Support in Fredericksburg, VA',
    eyebrow: 'Fredericksburg VA',
    description: 'Practical IT support for small businesses, nonprofits, and infrastructure-focused teams in Fredericksburg, Virginia.',
    intro: 'CivicSpan is headquartered in Fredericksburg and supports local organizations that need dependable technology help, documentation, and Microsoft 365 support.',
    sections: [
      { heading: 'Local support focus', body: 'We help with Microsoft 365, business laptops, user support, documentation, and technical troubleshooting for growing organizations.', bullets: ['Small business IT support', 'Microsoft 365 setup', 'Dell laptop deployment', 'Documentation and training', 'Remote and onsite coordination'] },
      { heading: 'Useful for', body: 'Businesses that need a practical technology partner without hiring a full-time internal IT department.' },
    ],
    related: [
      { label: 'Microsoft 365 for Small Business', href: '/topics/microsoft-365-for-small-business' },
      { label: 'Dell Small Business Computers', href: '/topics/dell-small-business-computers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    slug: 'it-consulting-richmond-va',
    title: 'IT Consulting in Richmond, VA',
    eyebrow: 'Richmond VA',
    description: 'IT consulting for Richmond-area small businesses, nonprofits, public-sector vendors, and infrastructure-focused teams.',
    intro: 'CivicSpan supports Richmond-area organizations with Microsoft 365, device deployment, workflow cleanup, documentation, and practical technical consulting.',
    sections: [
      { heading: 'Consulting areas', body: 'We help assess current systems, clean up workflows, improve documentation, and support Microsoft and Dell environments.', bullets: ['Microsoft 365 tenant review', 'SharePoint and Teams structure', 'Laptop standards', 'Process documentation', 'User support planning'] },
      { heading: 'Regional delivery', body: 'Support can be remote-first with scheduled onsite coordination when a project requires local presence.' },
    ],
    related: [
      { label: 'SharePoint Consulting', href: '/topics/sharepoint-consulting' },
      { label: 'Dell Laptop Deployment Services', href: '/topics/dell-laptop-deployment-services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    slug: 'projectwise-support-virginia',
    title: 'ProjectWise Support in Virginia',
    eyebrow: 'Virginia ProjectWise',
    description: 'ProjectWise support for Virginia engineering, infrastructure, and transportation teams facing cache, workspace, and performance issues.',
    intro: 'CivicSpan supports Virginia infrastructure teams that need practical help with ProjectWise client issues, cache cleanup, workspace configuration, and user support.',
    sections: [
      { heading: 'ProjectWise support areas', body: 'We focus on the issues that interrupt production: slow files, cache errors, workspace warnings, datasource problems, and missing documentation.', bullets: ['Client configuration review', 'Cache cleanup guidance', 'Workspace troubleshooting', 'Performance issue triage', 'Administrator checklists'] },
      { heading: 'Best starting point', body: 'A ProjectWise Health Check gives your team a written summary of issues, causes, and recommended next steps.' },
    ],
    related: [
      { label: 'ProjectWise Health Check', href: '/solutions/projectwise-health-check' },
      { label: 'Common ProjectWise Problems', href: '/topics/common-projectwise-problems' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    slug: 'engineering-it-maryland',
    title: 'Engineering IT Support in Maryland',
    eyebrow: 'Maryland Engineering IT',
    description: 'Engineering IT support for Maryland firms using CAD, GIS, ProjectWise, Dell workstations, and Microsoft 365.',
    intro: 'Engineering teams need IT support that understands production software, workstations, project files, and documentation. CivicSpan supports these environments across the Mid-Atlantic.',
    sections: [
      { heading: 'Engineering IT needs', body: 'We help with workstation standards, ProjectWise issues, Microsoft collaboration tools, and support documentation for technical teams.', bullets: ['Dell Precision workstations', 'ProjectWise troubleshooting', 'Microsoft 365 and SharePoint', 'CAD/GIS support coordination', 'User documentation'] },
      { heading: 'Why specialized support helps', body: 'Generic IT support often misses workflow context. Engineering IT support needs to understand how users depend on files, references, standards, and deadlines.' },
    ],
    related: [
      { label: 'Dell Precision Workstations', href: '/topics/dell-precision-workstations' },
      { label: 'ProjectWise Performance Issues', href: '/topics/projectwise-performance-issues' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    slug: 'transportation-technology-pennsylvania',
    title: 'Transportation Technology Support in Pennsylvania',
    eyebrow: 'Pennsylvania Transportation IT',
    description: 'Technology support for Pennsylvania transportation, engineering, and infrastructure teams working with Microsoft 365, Dell hardware, and ProjectWise.',
    intro: 'Transportation teams depend on reliable systems, clear documentation, and controlled project data. CivicSpan supports the technology behind that work.',
    sections: [
      { heading: 'Support areas', body: 'We help transportation-focused organizations with project collaboration, hardware deployment, Microsoft 365, and ProjectWise troubleshooting.', bullets: ['ProjectWise for transportation workflows', 'Dell laptop and workstation deployment', 'Microsoft 365 collaboration', 'Documentation and checklists', 'Remote support planning'] },
      { heading: 'Practical approach', body: 'We focus on reducing day-to-day technical friction so project teams can spend more time on delivery.' },
    ],
    related: [
      { label: 'ProjectWise for DOTs', href: '/topics/projectwise-for-dots' },
      { label: 'Dell Government Procurement', href: '/topics/dell-government-procurement' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    slug: 'microsoft-365-northern-virginia',
    title: 'Microsoft 365 Support in Northern Virginia',
    eyebrow: 'Northern Virginia Microsoft 365',
    description: 'Microsoft 365 setup, migration, SharePoint, Teams, Intune, and Entra ID support for Northern Virginia organizations.',
    intro: 'CivicSpan supports Northern Virginia organizations that need practical Microsoft 365 consulting, migration planning, and user-ready documentation.',
    sections: [
      { heading: 'Microsoft 365 services', body: 'We support email migration, SharePoint structure, Teams rollout, Intune device management, and Entra ID access cleanup.', bullets: ['Microsoft 365 migration', 'SharePoint consulting', 'Teams deployment', 'Intune setup', 'Entra ID review'] },
      { heading: 'Who we help', body: 'Small businesses, nonprofits, public-sector vendors, and infrastructure-focused teams that need secure collaboration without unnecessary complexity.' },
    ],
    related: [
      { label: 'Microsoft 365 Migration Services', href: '/topics/microsoft-365-migration-services' },
      { label: 'Entra ID Consulting', href: '/topics/entra-id-consulting' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export const blogPages: ContentPage[] = [
  {
    slug: 'how-much-should-a-small-business-spend-on-it',
    title: 'How Much Should a Small Business Spend on IT?',
    eyebrow: 'Small Business IT',
    description: 'A practical guide to small business IT spending, including support, Microsoft 365, devices, security, and documentation.',
    intro: 'Small business IT spending should be tied to risk, user count, devices, and how much downtime the organization can tolerate.',
    sections: [
      { heading: 'What belongs in the budget', body: 'A useful IT budget includes business email, user support, laptops, security, backups, documentation, and periodic cleanup.', bullets: ['Microsoft 365 licensing and administration', 'Laptop replacement planning', 'Security tools and MFA', 'Support time', 'Documentation and onboarding'] },
      { heading: 'Warning signs', body: 'If every technical problem is handled as an emergency, the organization is underinvesting in planning and documentation.' },
      { heading: 'CivicSpan approach', body: 'We help small teams prioritize the basics first: secure accounts, reliable devices, clear file structure, and support documentation.' },
    ],
    related: [
      { label: 'Microsoft 365 for Small Business', href: '/topics/microsoft-365-for-small-business' },
      { label: 'Dell Small Business Computers', href: '/topics/dell-small-business-computers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    slug: 'signs-your-engineering-firm-has-outgrown-its-it-support',
    title: 'Signs Your Engineering Firm Has Outgrown Its IT Support',
    eyebrow: 'Engineering IT',
    description: 'Signs an engineering firm needs more specialized IT support for CAD, ProjectWise, workstations, Microsoft 365, and documentation.',
    intro: 'Engineering firms outgrow generic IT support when technical workflows, production files, and specialized software are no longer understood by the support process.',
    sections: [
      { heading: 'Common signs', body: 'The support model is no longer enough when CAD users lose time, ProjectWise problems repeat, workstations are inconsistent, and documentation is missing.', bullets: ['ProjectWise issues repeat across users', 'Workstations are underpowered or inconsistent', 'File access problems delay project work', 'New hires take too long to set up', 'Support fixes are not documented'] },
      { heading: 'What to do next', body: 'Start with an environment review that separates workstation, network, application, and workflow issues.' },
    ],
    related: [
      { label: 'Engineering IT Maryland', href: '/locations/engineering-it-maryland' },
      { label: 'ProjectWise Health Check', href: '/solutions/projectwise-health-check' },
      { label: 'Dell Precision Workstations', href: '/topics/dell-precision-workstations' },
    ],
  },
  {
    slug: '5-common-microsoft-365-security-mistakes',
    title: '5 Common Microsoft 365 Security Mistakes',
    eyebrow: 'Microsoft 365 Security',
    description: 'Five common Microsoft 365 security mistakes small organizations should fix first: MFA, admin roles, sharing, stale users, and device controls.',
    intro: 'Most Microsoft 365 security problems start with basic settings that were never reviewed after the tenant was created.',
    sections: [
      { heading: 'Five common mistakes', body: 'Small organizations should review these areas before adding more complicated tools.', bullets: ['MFA is not enforced for every user', 'Too many accounts have administrator roles', 'External sharing is not documented', 'Former users still have access', 'Laptops are not encrypted or managed'] },
      { heading: 'First step', body: 'A focused Microsoft 365 review can identify the highest-risk settings and create a practical cleanup plan.' },
    ],
    related: [
      { label: 'Entra ID Consulting', href: '/topics/entra-id-consulting' },
      { label: 'Intune Device Management', href: '/topics/intune-device-management' },
      { label: 'Microsoft 365 for Small Business', href: '/topics/microsoft-365-for-small-business' },
    ],
  },
  {
    slug: 'how-to-prepare-for-a-windows-11-upgrade',
    title: 'How to Prepare for a Windows 11 Upgrade',
    eyebrow: 'Windows 11',
    description: 'A practical Windows 11 upgrade preparation checklist for small businesses, including hardware, apps, users, files, and support planning.',
    intro: 'A Windows 11 upgrade should start with device readiness, application compatibility, user communication, and a support plan.',
    sections: [
      { heading: 'Upgrade checklist', body: 'Before upgrading, review hardware compatibility, business applications, user files, device encryption, printers, and support availability.', bullets: ['Check hardware eligibility', 'Confirm critical applications', 'Back up important user data', 'Review BitLocker and account access', 'Plan user communication'] },
      { heading: 'Deployment approach', body: 'Upgrade a small pilot group first, document issues, and then schedule the rest of the rollout.' },
    ],
    related: [
      { label: 'Intune Device Management', href: '/topics/intune-device-management' },
      { label: 'Dell Laptop Deployment Services', href: '/topics/dell-laptop-deployment-services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    slug: 'projectwise-cache-problems-explained',
    title: 'ProjectWise Cache Problems Explained',
    eyebrow: 'ProjectWise Cache',
    description: 'A practical explanation of ProjectWise cache problems, why they happen, and how engineering teams should approach cleanup.',
    intro: 'ProjectWise cache problems can make files open slowly, references behave unexpectedly, or local storage fill up on engineering workstations.',
    sections: [
      { heading: 'Why cache problems happen', body: 'Cache issues can come from stale local files, large project histories, workstation storage limits, interrupted checkouts, or unclear cleanup procedures.', bullets: ['Large local cache folders', 'Stale files', 'Unclear check-in status', 'Multiple project workspaces', 'Limited workstation storage'] },
      { heading: 'Do not treat it as one-off', body: 'If the same cache problem appears across users, review the workflow, workspace, and support process instead of only cleaning one machine.' },
    ],
    related: [
      { label: 'How to Clean a ProjectWise Cache', href: '/topics/how-to-clean-a-projectwise-cache' },
      { label: 'ProjectWise Performance Issues', href: '/topics/projectwise-performance-issues' },
      { label: 'ProjectWise Health Check', href: '/solutions/projectwise-health-check' },
    ],
  },
  {
    slug: 'employees-cant-access-email',
    title: 'Employees Can’t Access Email?',
    eyebrow: 'Problem Led IT',
    description: 'What to check when employees cannot access Microsoft 365 email, including passwords, MFA, licensing, DNS, and account status.',
    intro: 'Email access problems are urgent because they block communication. The fastest path is to separate account issues from device, DNS, and licensing issues.',
    sections: [
      { heading: 'First checks', body: 'Review user status, password reset history, MFA prompts, license assignment, Outlook profile, and whether the issue affects one user or everyone.', bullets: ['User account enabled', 'License assigned', 'MFA working', 'Password reset completed', 'Outlook and webmail tested'] },
      { heading: 'When it is bigger', body: 'If multiple users are affected, check domain, DNS, tenant health, and recent configuration changes.' },
    ],
    related: [
      { label: 'Microsoft 365 Migration Services', href: '/topics/microsoft-365-migration-services' },
      { label: 'Entra ID Consulting', href: '/topics/entra-id-consulting' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    slug: 'projectwise-running-slow',
    title: 'ProjectWise Running Slow?',
    eyebrow: 'Problem Led ProjectWise',
    description: 'What to review when ProjectWise is running slow, including local cache, network, workstation, datasource, and workspace factors.',
    intro: 'Slow ProjectWise performance is usually a pattern, not a mystery. Start by identifying who is affected, which projects are slow, and what changed recently.',
    sections: [
      { heading: 'What to check', body: 'Review the local cache, workstation specs, network path, datasource behavior, project workspace, and whether other Bentley tools are also slow.', bullets: ['Affected users and projects', 'Cache size and storage', 'Network connection', 'Workstation resources', 'Workspace and reference loading'] },
      { heading: 'When to schedule a health check', body: 'If slow performance repeats across users or projects, a structured ProjectWise Health Check can document root causes and next steps.' },
    ],
    related: [
      { label: 'ProjectWise Performance Issues', href: '/topics/projectwise-performance-issues' },
      { label: 'How to Clean a ProjectWise Cache', href: '/topics/how-to-clean-a-projectwise-cache' },
      { label: 'ProjectWise Health Check', href: '/solutions/projectwise-health-check' },
    ],
  },
  {
    slug: 'need-to-deploy-50-new-laptops',
    title: 'Need to Deploy 50 New Laptops?',
    eyebrow: 'Problem Led Deployment',
    description: 'A practical laptop deployment plan for teams that need to configure, secure, document, and hand off many new devices.',
    intro: 'A 50-laptop deployment needs a repeatable checklist, not one-off setup. The goal is consistent devices, secure access, and a clean user handoff.',
    sections: [
      { heading: 'Deployment plan', body: 'Define the model standard, user list, application set, Microsoft 365 access, security policies, asset records, and support schedule before devices arrive.', bullets: ['Hardware standard', 'User and device mapping', 'Application list', 'MFA and security setup', 'Asset documentation', 'Handoff instructions'] },
      { heading: 'Remote teams', body: 'Remote deployment needs an added plan for shipping, first login, support windows, and return handling for failed devices.' },
    ],
    related: [
      { label: 'Dell Laptop Deployment Services', href: '/topics/dell-laptop-deployment-services' },
      { label: 'Intune Device Management', href: '/topics/intune-device-management' },
      { label: 'New Employee Technology Package', href: '/solutions/new-employee-technology' },
    ],
  },
]

export const faqItems = [
  { question: 'Can you migrate from Google Workspace?', answer: 'Yes. CivicSpan can help plan and support a migration from Google Workspace mail, calendars, contacts, and files into Microsoft 365.', href: '/topics/microsoft-365-migration-services' },
  { question: 'How long does a Microsoft migration take?', answer: 'Small migrations can often be completed in days after discovery. Larger migrations need more time for staging, DNS planning, testing, and user communication.', href: '/topics/microsoft-365-migration-services' },
  { question: 'What is ProjectWise?', answer: 'Bentley ProjectWise is a collaboration and document management platform commonly used by engineering and infrastructure teams for project files and CAD-centered workflows.', href: '/topics/what-is-bentley-projectwise' },
  { question: 'How much does ProjectWise consulting cost?', answer: 'Pricing depends on the number of users, workstations, issues, and environment complexity. CivicSpan offers a ProjectWise Health Check starting at $1,500.', href: '/solutions/projectwise-health-check' },
  { question: 'Can you deploy Dell laptops remotely?', answer: 'Yes. CivicSpan can prepare a remote deployment plan covering device setup, Microsoft 365 access, security, shipping, first login, and support handoff.', href: '/topics/dell-laptop-deployment-services' },
  { question: 'Do you work with municipalities?', answer: 'Yes. CivicSpan supports municipalities, public-sector vendors, nonprofits, engineering teams, and other infrastructure-focused organizations.', href: '/who-we-support' },
]

export const allContentPages = [...topicPages, ...locationPages, ...blogPages]

export function findTopic(slug: string) {
  return topicPages.find((page) => page.slug === slug)
}

export function findLocation(slug: string) {
  return locationPages.find((page) => page.slug === slug)
}

export function findBlog(slug: string) {
  return blogPages.find((page) => page.slug === slug)
}
