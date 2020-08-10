import React from 'react'
import { Container, Text, IconsContainer, Link } from './styled'
import { AiFillGithub, AiOutlineWhatsApp, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <Container>
      <Text>pah.webdev@gmail.com</Text>
      <Text alignSelf>Writed and Coded by myself :&#41;</Text>
      <IconsContainer>
        <Link href="https://github.com/pahferreira" target="blank">
          <AiFillGithub size={22} color="#D4D4D4" />
        </Link>
        <Link href="https://www.linkedin.com/in/pahferreira/" target="blank">
          <AiFillLinkedin size={22} color="#D4D4D4" />
        </Link>
        <Link
          href="https://web.whatsapp.com/send?phone=5583986135475"
          target="blank">
          <AiOutlineWhatsApp size={22} color="#D4D4D4" />
        </Link>
      </IconsContainer>
    </Container>
  )
}

export default Footer
