import API from 'services/API'
import { TState as TAboutState } from 'types/about'

export const getAboutContent = async (
  currentLanguage: string
): Promise<TAboutState | undefined> => {
  try {
    const { data } = await API.post('/graphql', {
      query: `
        query {
          about {
            section_title: section_title_${currentLanguage}
            title
            description: description_${currentLanguage}
            greeting: greeting_${currentLanguage}
            picture {
              url
            }
            mobile_picture {
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
