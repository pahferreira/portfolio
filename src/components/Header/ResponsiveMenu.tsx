import React, { FC, useState } from 'react'
import { MenuButton, MenuContainer, MenuOption } from './styled'
import MenuIcon from '@material-ui/icons/Menu'
import { useLocation } from 'react-router-dom'

type Option = {
  url: string
  label: string
}

type Props = {
  options: Array<Option>
}

const ResponsiveMenu: FC<Props> = (props: Props) => {
  const { options } = props
  const [open, setOpen] = useState<boolean>(false)
  const location = useLocation()

  return (
    <>
      <MenuButton onClick={() => setOpen((prevState: boolean) => !prevState)}>
        <MenuIcon />
      </MenuButton>
      <MenuContainer open={open}>
        {options.map((option: Option) => (
          <MenuOption
            key={option.label}
            to={option.url}
            active={location.pathname === option.url ? 'true' : 'false'}>
            {option.label}
          </MenuOption>
        ))}
      </MenuContainer>
    </>
  )
}

export default ResponsiveMenu
