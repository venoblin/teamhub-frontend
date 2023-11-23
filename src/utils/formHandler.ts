export const submit = (evt: React.FormEvent, callBack?: Function) => {
  evt.preventDefault()
  if(callBack) callBack()
}