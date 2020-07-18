import React, { FC } from 'react'
import { Container } from './styled'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'

const NotFound: FC = () => {
  return (
    <Container>
      <Title>Page not Found!</Title>
      <Subtitle>Dammit!</Subtitle>
      <Subtitle>I swear to God it worked on my machine.</Subtitle>
    </Container>
  )
}

export default NotFound
