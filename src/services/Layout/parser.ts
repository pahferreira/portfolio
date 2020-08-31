import { TLayoutResponse, TState as TLayoutState } from 'types/layout'

export const parseLayoutData = ({ layout }: TLayoutResponse): TLayoutState => ({
  ...layout,
})
