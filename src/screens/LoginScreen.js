import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import FormContainer from '../components/FromContainer.js'
import { login } from '../actions/userActions'
import FromContainer from '../components/FromContainer.js'

const LoginScreen = ({location, history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const dispatch = useDispatch()
  
    const userLogin = useSelector((state) => state.userLogin)
    console.log(userLogin);
    const { loading, error, userInfo } = userLogin
  
    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
          history.push(redirect)
        }
      }, [history, userInfo, redirect])
    
      const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
      }
    

  return (
    <div>
   <FromContainer>
        <h1>Sign In</h1>
        <form  onSubmit={submitHandler}>
        <div>
        <label htmlFor="email">Email</label>
        <input type="email" value={email} placeholder='Email' onChange={(e) => {
            setEmail(e.target.value)
        }} />
        </div>

        <div>
        <label htmlFor="email">Email</label>
        <input placeholder="Enter Password" value={password} onChange={(e) => {
            setPassword(e.target.value)
        }} />
        </div>
        <button type="submit">SignIN</button>
        </form>

        <div>
            New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} >register</Link>
        </div>
    </FromContainer>
    {loading ? <Loader/> : ''}
    {error ? <h1>{error}</h1> : '' }
    </div>
  )
}

export default LoginScreen