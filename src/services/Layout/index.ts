import API from 'services/API'
import { TState as TLayoutState } from 'types/layout'

export const getLayout = async (
  currentLanguage: string
): Promise<TLayoutState | undefined> => {
  try {
    const { data } = await API.post('/graphql', {
      query: `
      query {
        layout {
          header {
            link {
              url
              label: label_${currentLanguage}
            }
            language {
              value
              label: label_${currentLanguage}
            }
          }
          footer {
            contact_email
            socials {
              url
              label
            }
          }
        }
      }
      `,
    })
    return data.data.layout
  } catch (error) {
    return
  }
}
