export interface ErrorPopupProps {
  message: string,
  onClose: () => void
}

export interface Error {
  response: {
    message: string
  }
}