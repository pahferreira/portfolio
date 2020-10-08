import React from 'react'
import { Container, Text, IconsContainer, Link } from './styled'
import { AiFillGithub, AiOutlineWhatsApp, AiFillLinkedin } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { TStore } from 'types/storage'
import { TState as TLayoutState, TSocial } from 'types/layout'

const Footer = () => {
  const { footer } = useSelector<TStore, TLayoutState>((state) => state.layout)

  const _renderIcon = (social: string) => {
    switch (social) {
      case 'github':
        return <AiFillGithub size={22} color="#D4D4D4" />
      case 'linkedin':
        return <AiFillLinkedin size={22} color="#D4D4D4" />
      case 'whatsapp':
        return <AiOutlineWhatsApp size={22} color="#D4D4D4" />
      default:
        break
    }
  }

  return (
    <Container>
      <Text>{footer.contact_email}</Text>
      <IconsContainer>
        {footer.socials.map((social: TSocial) => (
          <Link key={social.label} href={social.url} target="blank">
            {_renderIcon(social.label)}
          </Link>
        ))}
      </IconsContainer>
    </Container>
  )
}

export default Footer
