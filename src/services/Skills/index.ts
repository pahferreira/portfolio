import API from 'services/API'
import { TState as TSkillsState } from 'types/skills'

export const getSkillsContent = async (): Promise<TSkillsState | undefined> => {
  try {
    const { data } = await API.post('/graphql', {
      query: `
        query {
          skill {
            section_title: section_title_pt
            sections {
              title: title_pt
              description: description_pt
              tools_title: tools_title_pt
              tools {
                value: value_pt
                note: note_pt
              }
              part{
                title: title_pt
                description: description_pt
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
