import React, { FC, useState, useEffect } from 'react'
import { Container, Cursor } from './styled'
import Header from 'components/Header'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'

const WORDS = ['Creative', 'Hard Worker', 'Frontend', 'React', 'React Native']
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

  const typeAndErase = async (word: string) => {
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
    setActiveWordIndex((prevState) => (prevState + 1) % WORDS.length)
  }

  useEffect(() => {
    typeAndErase(WORDS[activeWordIndex])
  }, [activeWordIndex])

  return (
    <>
      <Header />
      <Container>
        <Subtitle>If you're searching for a</Subtitle>
        <Title>
          {wordToShow}
          <Cursor typing={isTyping}>&nbsp;</Cursor>
        </Title>
        <Subtitle>Developer. You came to the right place!</Subtitle>
      </Container>
    </>
  )
}

export default Home
