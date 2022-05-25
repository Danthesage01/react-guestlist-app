import React from 'react'
import {useState} from "react"
import Button from './shared/Button'
import InputCard from './shared/InputCard'
function GuestForm( { handleAdd } ) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
  })
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")



  function handleChange(e){
    if(formData.firstName === "" || formData.lastName === ""){
      setBtnDisabled(true)
      setMessage(null)
    }
    else if(formData.firstName !== "" && formData.firstName.trim().length <= 1){
      setMessage(`Name cannot be ${formData.lastName.trim().length} characters`)
      setBtnDisabled(true)
    }
    else if(formData.lastName !== "" && formData.lastName.trim().length <= 1){
      setMessage(`Name cannot be ${formData.lastName.trim().length} characters`)
      setBtnDisabled(true)
    }
    else{
      setMessage(null)
      setBtnDisabled(false)
    }
    const {name, value } = e.target

      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: `${value.charAt(0).toUpperCase()}${value.slice(1)}`
      }))
  }

  function handleSubmit(e){
    e.preventDefault()
    if(formData.firstName.trim().length >= 2 && formData.lastName.trim().length >= 2){
    const newGuest = {
      firstName: formData.firstName,
      lastName: formData.lastName
    }
    handleAdd(newGuest)

    setFormData(prevFormData => ({
      firstName: "",
      lastName: ""
    }))
  }
  }
  return (
    <InputCard>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Provide names of expected guests</h2>
        <div className='input-group'>
          <input 
          type="text"
          name="firstName"
          placeholder="Enter firstName"
          onChange={handleChange}
          value={formData.firstName}
          />
          <input 
          type="text"
          name="lastName"
          placeholder="Enter lastName"
          onChange={handleChange}
          value={formData.lastName}
          />
        </div>
        <Button type="submit" version="secondary" isDisabled={btnDisabled}>Submit</Button>
        {message && <div className="message">{message}</div>}
      </form>
   </InputCard>
  )
}

export default GuestForm