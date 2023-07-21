
class InputHandler {
  static listen = (event: React.ChangeEvent, state: Object, setState: Function) => {
    // listens for input change
    const target: any = event.target
    console.log(target)
    setState({...state, [target.name]: target.value})
  }
}

export default InputHandler