export type TState = {
  header: THeader
  footer: TFooter
  loading?: boolean
}

export type THeader = {
  link: Array<TLink>
  language: Array<TLanguage>
}

export type TLink = {
  url: string
  label: string
}

export type TLanguage = {
  value: string
  label: string
}

export type TFooter = {
  contact_email: string
  socials: Array<TSocial>
}

export type TSocial = {
  label: string
  url: string
}

export type TLayoutResponse = {
  layout: {
    header: THeader
    footer: TFooter
  }
}
