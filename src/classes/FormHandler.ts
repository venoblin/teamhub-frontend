class FormHandler {
  static submit = (evt: React.FormEvent, callBack?: Function) => {
    evt.preventDefault()
    if(callBack) callBack()
  }
}

export default FormHandler