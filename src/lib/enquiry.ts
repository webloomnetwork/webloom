const STORAGE_KEY = 'webloom-enquiry'

export interface EnquiryData {
  services: string[]
  addOns: string[]
  package?: string
}

const defaultEnquiry: EnquiryData = { services: [], addOns: [], package: undefined }

export function getEnquiry(): EnquiryData {
  if (typeof window === 'undefined') return defaultEnquiry
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultEnquiry
    const parsed = JSON.parse(raw)
    return {
      services: Array.isArray(parsed.services) ? parsed.services : [],
      addOns: Array.isArray(parsed.addOns) ? parsed.addOns : [],
      package: parsed.package || undefined,
    }
  } catch {
    return defaultEnquiry
  }
}

export function setEnquiry(data: EnquiryData) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function addService(service: string) {
  const curr = getEnquiry()
  if (!curr.services.includes(service)) {
    setEnquiry({ ...curr, services: [...curr.services, service] })
  }
}

export function addServices(services: string[]) {
  const curr = getEnquiry()
  const merged = [...new Set([...curr.services, ...services])]
  setEnquiry({ ...curr, services: merged })
}

export function addAddOn(addOn: string) {
  const curr = getEnquiry()
  if (!curr.addOns.includes(addOn)) {
    setEnquiry({ ...curr, addOns: [...curr.addOns, addOn] })
  }
}

export function setPackage(pkg: string) {
  const curr = getEnquiry()
  setEnquiry({ ...curr, package: pkg })
}

export function clearEnquiry() {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
}

// Smart add-on suggestions based on selected services
export const ADDONS = [
  { id: 'maintenance', name: 'Website Maintenance & Hosting', price: '£49/mo' },
  { id: 'logo', name: 'Logo Design', price: '£199' },
  { id: 'menu', name: 'Menu/Flyer Design', price: '£149' },
  { id: 'seo', name: 'SEO Content Writing', price: '£99/page' },
  { id: 'business-cards', name: 'Business Cards & Stationery', price: 'From £99' },
  { id: 'ads', name: 'Facebook & Instagram Ads Setup', price: 'From £199' },
] as const

export function getSuggestedAddOns(services: string[]): string[] {
  const lower = services.map(s => s.toLowerCase())
  const suggested: string[] = []

  const hasWebDesign = lower.some(s =>
    s.includes('website design') || s.includes('website redesign') || s.includes('e-commerce')
  )
  if (hasWebDesign) {
    suggested.push('Logo Design')
    suggested.push('Website Maintenance & Hosting')
  }

  if (lower.some(s => s.includes('logo'))) {
    suggested.push('Business Cards & Stationery')
  }

  if (lower.some(s => s.includes('menu') || s.includes('cafe') || s.includes('restaurant'))) {
    suggested.push('Menu/Flyer Design')
  }

  if (lower.some(s => s.includes('e-commerce') || s.includes('website'))) {
    suggested.push('SEO Content Writing')
  }

  return [...new Set(suggested)]
}
