import { useState } from "react";


export default function BodyForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOB, setDateOB] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [emailAddress, setEmailAddress] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [checkedValue, setCheckedValue] = useState(false);
  const [emailErrors, setEmailErrors] = useState("")

  function submitForm(e){
    e.preventDefault()
    checkedValue ? (console.log( firstName, lastName, dateOB, phoneNumber, emailAddress, zipCode)) : (alert("Please check 'I Agree'"))
  }
  return(

  <div>
    <form>
      <label>First Name * </label>
      <input required type="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      
      <br/>

      <label>Last Name * </label>
      <input required type="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
     
      <br/>

      <label>Date of Birth * </label>
      <input required type="date" maxLength="8" name="date_of_birth" value={dateOB} onChange={(e) => setDateOB(e.target.value)}/>

      <br/>

      <label> Email Address </label>
      <input type="email" name="email_address" placeholder="Email Address" value={emailAddress} onChange={(e) => {
        setEmailErrors("")
        setEmailAddress(e.target.value) 
        e.target.validity.valid ? console.log(e.target.value) : setEmailErrors(e.target.validationMessage)
      }
        }/>
      
      {emailErrors.length > 0 ? <><br/><span class="error" aria-live="polite">{emailErrors}</span></> : null }

      <br/>

      <label>Phone Number </label>
      <input type="tel" maxLength="10" pattern="[0-9]*" placeholder="Phone Number" value={phoneNumber} onChange={(e) => (e.target.validity.valid ? setPhoneNumber(e.target.value) : null ) }/>

      <br/>

      <label>Zipcode</label>
      <input type="zipcode" maxLength="5" pattern="[0-9]*" placeholder="Zipcode" value={zipCode} onChange={(e) => e.target.validity.valid ? setZipCode(e.target.value): null }/>

      <br/>

      <label>Preferred Language </label>
      <select>
        <option value="english">English</option>
        <option value="french">French</option>
        <option value="german">German</option>
      </select>

      <br/>

      <label>I agree</label>
      <input type="checkbox" onClick={ ()=> setCheckedValue(!checkedValue)} />

      <br/>

      <button onClick={submitForm} variant="primary" type="submit">
        Submit
      </button>
    </form>
  </div>);
}

