export const changeListen = (event: React.ChangeEvent, state: Object | string, setState: Function) => {
  // listens for input change
  const target: any = event.target

  if (typeof state === 'string') {
    setState(target.value)
  } else {
    setState({...state, [target.name]: target.value})
  }
}