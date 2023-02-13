import axios from "axios"
import { ContentWrapper } from "../../components/app/contentwrapper/contentwrapper"
import { useAuth } from "../../components/providers/authProvider"

const Login = () => {

  const {loginData, setLoginData} = useAuth()

  const submitHandle = async e => {
    const formdata = new URLSearchParams()
    formdata.append('username', e.target.form.username.value)
    formdata.append('password', e.target.form.password.value)

    const endpoint = 'http://localhost:4000/login'
    try {
      const result = await axios.post(endpoint, formdata)
      handleSessionData(result.data.access_token)
    } catch (err) {
      console.error(`kunne ikke logge ind: ${err}`)
    }
  }

  const handleSessionData = data => {
    if (data) {
      sessionStorage.setItem('token', JSON.stringify(data))
      setLoginData()
    }
  }

  const Logout = () => {
    sessionStorage.removeItem('token')
    setLoginData()
  }

  return (
    <ContentWrapper
      title='login'
      description='description'>
      {!loginData ? (
        <form method="POST">
          <div>
            <label htmlFor="username">brugernavn: </label>
            <input type="text" name="username" />
          </div>
          <div>
            <label htmlFor="password">adgangskode: </label>
            <input type="password" name="password" />
          </div>
          <div>
            <button type="button" onClick={(e) => submitHandle(e)}>login</button>
          </div>
        </form>

      ) : (
        <div>
          <p>du er logget ind</p>
          <button type="button" onClick={() => Logout()}>log ud</button>
        </div>
      )}
    </ContentWrapper>
  )
}

export default Login
