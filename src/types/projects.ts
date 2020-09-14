export type TState = {
  loading?: boolean
  section_title: string
  tech_label: string
  repo_label: string
  live: string
  gallery: string
  projects: Array<TProject>
}

export type TProject = {
  id: number
  title: string
  description: string
  technologies: string
  repository_link?: string
  live_link?: string
  cover_image: TImage
  gallery?: Array<TImage>
}

export type TImage = {
  url: string
  provider_metadata: {
    resource_type: string
  }
}

export type TProjectsResponse = {
  projects: Array<TProject>
  projectsView: {
    section_title: string
    tech_label: string
    repo_label: string
    live: string
    gallery: string
  }
}
