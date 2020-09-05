import API from 'services/API'
import { TState as TAboutState } from 'types/about'

export const getAboutContent = async (): Promise<TAboutState | undefined> => {
  try {
    const { data } = await API.post('/graphql', {
      query: `
        query {
          about {
            section_title: section_title_pt
            title
            description: description_pt
            greeting: greeting_pt
            picture {
              url
            }
          }
        }
      `,
    })
    return data.data.about
  } catch (error) {
    return
  }
}
