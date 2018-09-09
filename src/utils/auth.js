// simple functions to simulate auth actions
// not ideal solution but does the job
export const login = ({ email, password }) => {
  const userPassword = localStorage.getItem(email)
  if (userPassword === password) {
    localStorage.setItem('loggedIn', true)
    return { status: 'Success', error: '' }
  }
  return { status: 'Error', error: 'User doesn\'t exist, or password is incorrect' }
}

export const signup = (email) => {
  localStorage.setItem(email, 'password')
  localStorage.setItem('loggedIn', true)
}
