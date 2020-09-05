import API from 'services/API'
import { TState as THomeState } from 'types/home'

export const getHomeContent = async (): Promise<THomeState | undefined> => {
  try {
    const { data } = await API.post('/graphql', {
      query: `
        query {
          home {
            top_message: top_message_pt
            bottom_message: bottom_message_pt
            qualities {
              value: value_pt
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
