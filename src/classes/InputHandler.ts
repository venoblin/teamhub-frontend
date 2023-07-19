class InputHandler {
  static listen = (event: React.ChangeEvent, state: Object, setState: Function) => {
    // listens for input change
    const target = event.target
    setState({...state, [target.name]: target.value})
  }
}

export default InputHandler