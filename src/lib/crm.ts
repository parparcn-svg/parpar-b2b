import { Lead, LeadStatus } from "./types"

class CRMStore {
  private leads: Lead[] = []

  addLead(lead: Lead) {
    this.leads.push(lead)
  }

  getAll(): Lead[] {
    return [...this.leads]
  }

  getById(id: string): Lead | undefined {
    return this.leads.find((l) => l.id === id)
  }

  updateStatus(id: string, status: LeadStatus): Lead | undefined {
    const lead = this.leads.find((l) => l.id === id)
    if (lead) lead.status = status
    return lead
  }

  getByPipeline(pipeline: string): Lead[] {
    return this.leads.filter((l) => l.pipeline === pipeline)
  }
}

export const crmStore = new CRMStore()
