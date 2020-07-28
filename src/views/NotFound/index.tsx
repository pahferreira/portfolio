import React, { FC } from 'react'
import { Container, Title, Subtitle, BackLink } from './styled'

const NotFound: FC = () => {
  return (
    <Container>
      <Title>Page not Found!</Title>
      <Subtitle>Dammit!</Subtitle>
      <Subtitle>I swear to God it worked on my machine.</Subtitle>
      <BackLink to="/portfolio">Back to homepage</BackLink>
    </Container>
  )
}

export default NotFound
