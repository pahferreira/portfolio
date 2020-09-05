import API from 'services/API'
import { TState as TLayoutState } from 'types/layout'

export const getLayout = async (): Promise<TLayoutState | undefined> => {
  try {
    const { data } = await API.post('/graphql', {
      query: `
      query {
        layout {
          header {
            link {
              url
              label: label_pt
            }
            language {
              value
              label: label_pt
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
