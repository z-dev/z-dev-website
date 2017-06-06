export const handleNameChange = (inputValue) => {
  return {type: 'contactUs/HANDLE_NAME_CHANGE', payload: inputValue}
}

export const handleEmailChange = (inputValue) => {
  return {type: 'contactUs/HANDLE_EMAIL_CHANGE', payload: inputValue}
}

export const handleMessageChange = (inputValue) => {
  return {type: 'contactUs/HANDLE_MESSAGE_CHANGE', payload: inputValue}
}
