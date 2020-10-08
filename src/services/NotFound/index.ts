import API from 'services/API'
import { TState as TNotFoundState } from 'types/notFound'

export const getNotFoundContent = async (
  currentLanguage: string
): Promise<TNotFoundState | undefined> => {
  try {
    const { data } = await API.post('/graphql', {
      query: `
        query {
          notFound {
            title: title_${currentLanguage}
            subtitle: subtitle_${currentLanguage}
            message: message_${currentLanguage}
            url_label: url_label_${currentLanguage}
          }
        }
      `,
    })
    return data.data.notFound
  } catch (error) {
    return
  }
}
