export type TRoute = {
  path: string
  private?: boolean
  component: React.FunctionComponent
  notExact?: boolean
}

export default TRoute
