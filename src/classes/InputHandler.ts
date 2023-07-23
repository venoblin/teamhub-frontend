class InputHandler {
  static changeListen = (event: React.ChangeEvent, state: Object, setState: Function) => {
    // listens for input change
    const target: any = event.target
    setState({...state, [target.name]: target.value})
  }
}

export default InputHandler