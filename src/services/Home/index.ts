import API from 'services/API'

const getHomeContent = async () => {
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
  } catch (error) {}
}

export default { getHomeContent }
