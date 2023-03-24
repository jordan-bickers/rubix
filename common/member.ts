export interface Member {
  id?: number
  name: string
  group: string | null
}

export interface ExternalMember {
  id?: string
  first: string
  last: string
}
