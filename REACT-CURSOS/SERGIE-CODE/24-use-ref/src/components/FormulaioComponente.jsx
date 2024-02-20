import { useRef } from "react"
import { useForm } from "../hooks/useForm"
import { useEffect } from "react"

export const FormulaioComponente = () => {

  const focusRef = useRef()
  console.log(focusRef)

  const initialForm = {
    userName: '',
    email: '',
    password: ''
  }

  const { formState, userName, email, password, onInputChange } = useForm(initialForm)

  const onSubmit = (evento) => {
    evento.preventDefault()
    console.log(formState)
  }

  // lo que va a pasar es que el cursor se va a posicionar sobre el email
  // o sea en un elemento del formulario
  useEffect(() =>{
    focusRef.current.focus()
  },[])

  return (
    <form onSubmit={onSubmit}>

      <div className="form-group">
        <label htmlFor="userName">User</label>
        <input
          type="text"
          className="form-control"
          name="userName"
          placeholder="Enter your Username"
          value={userName}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          ref={focusRef}
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}
