export type TState = {
  loading?: boolean
  sections: Array<TSection>
  section_title: string
}

export type TSection = {
  title: string
  description: string
  tools_title: string
  tools: Array<TTool>
  part: {
    title: string
    description: string
  }
}

export type TTool = {
  value: string
  note?: string
}
