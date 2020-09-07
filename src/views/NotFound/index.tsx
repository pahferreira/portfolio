import React, { FC, useEffect } from 'react'
import { Container, Title, Subtitle, BackLink } from './styled'
import { useSelector, useDispatch } from 'react-redux'
import { useLanguage } from 'hooks/useLanguage'
import { TStore } from 'types/storage'
import { TState as TNotFoundState } from 'types/notFound'
import { trigger } from 'storage/ducks/notFound'

const NotFound: FC = () => {
  const dispatch = useDispatch()
  const { currentLanguage } = useLanguage()
  const { title, subtitle, message, url_label } = useSelector<
    TStore,
    TNotFoundState
  >((state) => state.notFound)

  useEffect(() => {
    dispatch(trigger(currentLanguage))
  }, [dispatch, currentLanguage])

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Subtitle>{message}</Subtitle>
      <BackLink to="/portfolio">{url_label}</BackLink>
    </Container>
  )
}

export default NotFound
