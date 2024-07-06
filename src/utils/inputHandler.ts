export const changeListen = (evt: React.ChangeEvent, state: Object | string, setState: Function) => {
  // listens for input change
  const target: any = evt.target

  if (typeof state === 'string' || typeof state === "boolean") {
    setState(target.value)
  } else {
    let value = target.value

    if (value === 'true') {
      value = true
    } else if (value === 'false') {
      value = false
    }

    setState({...state, [target.name]: value})
  }
}