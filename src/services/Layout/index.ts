import API from 'services/API'
import { parseLayoutData } from './parser'
import { TState as TLayoutState } from 'types/layout'

const getLayout = async (): Promise<TLayoutState | undefined> => {
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
    return parseLayoutData(data.data)
  } catch (error) {
    return
  }
}

export default { getLayout }
