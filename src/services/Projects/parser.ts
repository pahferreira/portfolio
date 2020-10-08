import { TState as TProjectsState, TProjectsResponse } from 'types/projects'

export const parseProjectsContent = ({
  projects,
  projectsView,
}: TProjectsResponse): TProjectsState => {
  const { section_title, tech_label, repo_label, live, gallery } = projectsView
  return {
    projects,
    section_title,
    tech_label,
    repo_label,
    live,
    gallery,
  }
}
