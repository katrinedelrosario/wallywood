import { ContentWrapper } from "../../components/app/contentwrapper/contentwrapper"


const Login = () => {
  const submitHandle = async e => {
    console.log(e.target.form);
  }


  return (
    <ContentWrapper
      title='login'
      description='description'>
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
          <button type="button" onClick={e => submitHandle()}>login</button>
        </div>
      </form>
    </ContentWrapper>
  )
}

export default Login
