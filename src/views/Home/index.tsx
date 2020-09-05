import React, { FC, useState, useEffect, useCallback } from 'react'
import { Container, Cursor, Title, Subtitle } from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { TStore } from 'types/storage'
import { TState as THomeState } from 'types/home'
import { trigger } from 'storage/ducks/home'

const TYPING_DELAY = 150
const ERASING_DELAY = 100
const START_TO_ERASE_DELAY = 1500
const NEXT_WORD = 1000

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

const Home: FC = () => {
  const [activeWordIndex, setActiveWordIndex] = useState<number>(0)
  const [wordToShow, setwordToShow] = useState<string>('')
  const [isTyping, setIsTyping] = useState(true)
  const [words, setWords] = useState<Array<string>>([])
  const dispatch = useDispatch()
  const home = useSelector<TStore, THomeState>((state) => state.home)

  useEffect(() => {
    dispatch(trigger())
  }, [dispatch])

  useEffect(() => {
    setWords(home.qualities.map((quality) => quality.value))
  }, [home.qualities])

  const typeAndErase = useCallback(
    async (word: string = '') => {
      // Typing
      setIsTyping(true)
      for (let i = 0; i < word.length; i++) {
        await sleep(TYPING_DELAY)
        setwordToShow((prevState) => prevState + word[i])
      }
      setIsTyping(false)
      await sleep(START_TO_ERASE_DELAY)
      setIsTyping(true)
      // Erasing
      for (let i = 0; i < word.length; i++) {
        await sleep(ERASING_DELAY)
        setwordToShow((prevState) => prevState.slice(0, prevState.length - 1))
      }
      // Next Word
      setIsTyping(false)
      await sleep(NEXT_WORD)
      setActiveWordIndex((activeWordIndex + 1) % words.length)
    },
    [words, activeWordIndex]
  )

  useEffect(() => {
    typeAndErase(words[activeWordIndex])
  }, [activeWordIndex, typeAndErase, words])

  return (
    <Container>
      <Subtitle>{home.top_message}</Subtitle>
      <Title>
        {wordToShow}
        <Cursor typing={isTyping}>&nbsp;</Cursor>
      </Title>
      <Subtitle>{home.bottom_message}</Subtitle>
    </Container>
  )
}

export default Home
