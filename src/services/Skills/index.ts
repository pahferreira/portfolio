import API from 'services/API'
import { TState as TSkillsState } from 'types/skills'

export const getSkillsContent = async (
  currentLanguage: string
): Promise<TSkillsState | undefined> => {
  try {
    const { data } = await API.post('/graphql', {
      query: `
        query {
          skill {
            section_title: section_title_${currentLanguage}
            sections {
              title: title_${currentLanguage}
              description: description_${currentLanguage}
              tools_title: tools_title_${currentLanguage}
              tools {
                value: value_${currentLanguage}
                note: note_${currentLanguage}
              }
              part{
                title: title_${currentLanguage}
                description: description_${currentLanguage}
              }
            }
          }
        }
      `,
    })
    return data.data.skill
  } catch (error) {
    return
  }
}
