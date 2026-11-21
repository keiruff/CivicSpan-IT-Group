export const procurementOptions = [
  'Commercial project',
  'Virginia state or local procurement (SWaM participation)',
  'Federal procurement (CAGE / UEI validation)',
  'Corporate office upgrade',
] as const

export const hardwareVendors = [
  { name: 'Dell Technologies', details: 'Precision engineering workstations, Latitude laptops, OptiPlex desktops, PowerEdge servers, and storage.' },
  { name: 'Cisco', details: 'Catalyst switches and routers, Meraki access points and firewalls, and collaboration endpoints.' },
  { name: 'Epson', details: 'WorkForce Pro scanners, wide-format technical printers, and workgroup printers and supplies.' },
  { name: 'Ergotron', details: 'Mobile technology carts, monitor mounts, desk risers, and charging solutions.' },
] as const

export const deploymentOptions = [
  'Urgent deployment (within 30 days)',
  'Upcoming quarter (30–90 days)',
  'Planning phase or active bid',
] as const
