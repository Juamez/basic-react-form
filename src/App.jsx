import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmation: "",
    isChecked: false
  })

  function handleChange(e) {
    const {name, type, value, checked} = e.target
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
    console.log(formData)
  }

  function handleSubmit(event) {
    event.preventDefault()
    formData.password === formData.confirmation ? console.log("Successfully") : console.log("passwords not match")
    formData.isChecked ? console.log("Thanks for signing up for our newsletter") : null
  }

return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email address"
                className="form--input"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <input 
                type="password" 
                placeholder="Password"
                className="form--input"
                onChange={handleChange}
                name="password"
            />
            <input 
                type="password" 
                placeholder="Confirm password"
                className="form--input"
                onChange={handleChange}
                name="confirmation"
            />
            
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    name="isChecked"
                    onChange={handleChange}
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button className="form--submit">
                Sign up
            </button>
        </form>
    </div>
  )
}

export default App
