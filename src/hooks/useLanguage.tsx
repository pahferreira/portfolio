import React, { useState, createContext, useContext, FC } from 'react'

type LanguageContextType = {
  currentLanguage: string
  setCurrentLanguage: (language: string) => void
}

const LanguageContext: React.Context<LanguageContextType | null> = createContext<LanguageContextType | null>(
  null
)

type Props = {
  children: Array<JSX.Element> | JSX.Element
}

const LanguageProvider: FC<Props> = ({ children }: Props) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en')

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguage = (): LanguageContextType => {
  const context: LanguageContextType | null = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  } else {
    return context
  }
}

export { useLanguage, LanguageProvider }
