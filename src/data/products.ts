export type ProductCategory = 'Business Hardware'

export type Product = {
  id: string
  name: string
  category: ProductCategory
  description: string
  image: string
  fulfillment: string
  type: 'Business hardware'
  rating: number
  recommendedFor: string[]
  whyRecommended: string[]
}

export const products: Product[] = [
  {
    id: 'dell-laptop',
    name: 'Dell Latitude Business Laptop',
    category: 'Business Hardware',
    description: 'Business-class Dell laptop standard scoped for users, lifecycle, warranty, onboarding, and managed support needs.',
    image: '/infrastructure-it-support-mid-atlantic.webp',
    fulfillment: 'Request a custom bundle quote. CivicSpan reviews user roles, quantities, warranty needs, deployment tasks, and support package options before quoting.',
    type: 'Business hardware',
    rating: 5,
    recommendedFor: ['Business users', 'Endpoint deployment', 'Lifecycle planning'],
    whyRecommended: ['Reliable business platform', 'Strong warranty options', 'Easy to standardize across teams', 'Best quoted with onboarding and support'],
  },
  {
    id: 'dell-monitor',
    name: 'Dell UltraSharp Monitor',
    category: 'Business Hardware',
    description: 'Dell monitor category scoped with desk standards, docking needs, user roles, and workstation bundle requirements.',
    image: '/images/services/it-support.png',
    fulfillment: 'Request a custom bundle quote. CivicSpan confirms display size, resolution, warranty, docking, and rollout needs before quoting.',
    type: 'Business hardware',
    rating: 5,
    recommendedFor: ['Office work', 'Engineering review', 'Dual-monitor setups'],
    whyRecommended: ['Excellent display quality', 'Long lifecycle', 'Strong fit for business workstations', 'Best paired with a workstation or laptop bundle'],
  },
  {
    id: 'dell-workstation',
    name: 'Dell Precision Workstation',
    category: 'Business Hardware',
    description: 'Dell Precision workstation planning for CAD, GIS, Bentley, engineering, and power-user workloads that need validated specs.',
    image: '/images/services/engineering-support.png',
    fulfillment: 'Request a custom spec review. CivicSpan validates CAD/Bentley workloads, GPU, memory, storage, warranty, deployment, and support requirements before quoting.',
    type: 'Business hardware',
    rating: 5,
    recommendedFor: ['CAD', 'Bentley', 'GIS', 'Engineering'],
    whyRecommended: ['Curated specs for CAD/Bentley workloads', 'Validated GPU, memory, and storage fit', 'Warranty and lifecycle planning', 'Optional onboarding and managed support'],
  },
  {
    id: 'dell-network-switch',
    name: 'Dell Networking Switch',
    category: 'Business Hardware',
    description: 'Dell networking hardware planning for small offices, refresh projects, and standardized business infrastructure.',
    image: '/images/services/cloud-support.png',
    fulfillment: 'Request a custom quote. CivicSpan confirms port count, PoE needs, VLANs, rack/cabling requirements, deployment scope, and support expectations before quoting.',
    type: 'Business hardware',
    rating: 5,
    recommendedFor: ['Network refresh', 'Small offices', 'Infrastructure upgrades'],
    whyRecommended: ['Scoped to the business network design', 'Best quoted with deployment planning', 'Supports lifecycle and support documentation'],
  },
  {
    id: 'dell-docking-station',
    name: 'Dell Docking Station',
    category: 'Business Hardware',
    description: 'Dell docking station planning for standardized laptop deployments, desk setups, monitors, and hybrid work packages.',
    image: '/images/services/workflow-automation.png',
    fulfillment: 'Request a custom bundle quote. CivicSpan confirms laptop models, display requirements, power delivery, desk standards, and deployment quantities before quoting.',
    type: 'Business hardware',
    rating: 5,
    recommendedFor: ['Hybrid work', 'Laptop deployments', 'Desk setups'],
    whyRecommended: ['Reduces cable clutter', 'Supports repeatable desk setups', 'Pairs well with Dell laptops', 'Best scoped with the full endpoint bundle'],
  },
]

export const productCategories: ProductCategory[] = ['Business Hardware']
