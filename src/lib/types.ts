export type B2BIntent = "supplier" | "distributor" | "buyer"

export interface Inquiry {
  company_name: string
  business_type: B2BIntent
  country: string
  product_interest: string
  moq: string
  email: string
  whatsapp: string
  message?: string
}

export interface Lead extends Inquiry {
  id: string
  pipeline: CRMPipeline
  status: LeadStatus
  created_at: string
}

export type CRMPipeline = "OEM" | "Wholesale" | "Bulk Orders"
export type LeadStatus = "new" | "contacted" | "negotiating" | "converted" | "lost"

export interface GEOEntity {
  name: string
  type: string
  description: string
}

export interface GEORelationship {
  source: string
  target: string
  relation: string
}
