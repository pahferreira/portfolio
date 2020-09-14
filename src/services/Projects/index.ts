import API from 'services/API'
import { TState as TProjectsState } from 'types/projects'
import { parseProjectsContent } from './parser'

export const getProjectsContent = async (
  currentLanguage: string
): Promise<TProjectsState | undefined> => {
  try {
    const { data } = await API.post('/graphql', {
      query: `
        query {
          projectsView {
            section_title: section_title_${currentLanguage}
            tech_label: tech_label_${currentLanguage}
            repo_label: repo_label_${currentLanguage}
            live
            gallery: gallery_${currentLanguage}
          }
          projects {
            id
            title
            description: description_${currentLanguage}
            live_link
            repository_link
            technologies
            cover_image{
              url
            }
            gallery {
              url
              provider_metadata
            }
          }
        }
      `,
    })
    return parseProjectsContent(data.data)
  } catch (error) {
    return
  }
}
