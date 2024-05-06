export interface PopUpProps {
  message: string,
  onClose: () => void
}

export interface PopUpContextType {
  isShowing: boolean,
  toggleIsShowing: () => void
}