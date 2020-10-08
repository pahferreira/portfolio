import API from 'services/API'
import { TState as THomeState } from 'types/home'

export const getHomeContent = async (
  currentLanguage: string
): Promise<THomeState | undefined> => {
  try {
    const { data } = await API.post('/graphql', {
      query: `
        query {
          home {
            top_message: top_message_${currentLanguage}
            bottom_message: bottom_message_${currentLanguage}
            qualities {
              value: value_${currentLanguage}
            }
          }
        }
      `,
    })
    return data.data.home
  } catch (error) {
    return
  }
}
