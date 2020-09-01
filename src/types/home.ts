export type TState = {
  loading?: boolean
  top_message: string
  bottom_message: string
  qualities: Array<TQuality>
}

export type TQuality = {
  value: string
}
