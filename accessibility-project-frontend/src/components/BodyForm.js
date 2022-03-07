import { useState } from "react";


export default function BodyForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOB, setDateOB] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [checkedValue, setCheckedValue] = useState(false);
  const [emailErrors, setEmailErrors] = useState("")

  function submitForm(e){
    e.preventDefault()
    console.log( firstName, lastName, dateOB, emailAddress, phoneNumber, zipCode)
  }
  return(

  <div>
    <form>
      <label for="first-name">First Name * </label>
      <input required={true} id="first-name" type="firstName" aria-label="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      
      <br/>

      <label for="last-name" >Last Name * </label>
      <input required={true} id="last-name" type="lastName" aria-label="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
     
      <br/>

      <label for="date-ob">Date of Birth * </label>
      <input required={true} id="date-ob" type="date" maxLength="8" aria-label="Enter your date of birth" name="date_of_birth" value={dateOB} onChange={(e) => setDateOB(e.target.value)}/>

      <br/>

      <label for="email"> Email Address </label>
      <input id="email" type="email" name="email_address" aria-describedby="email-help" aria-label="Enter your email address" value={emailAddress} onChange={(e) => {
        setEmailErrors("")
        setEmailAddress(e.target.value) 
        e.target.validity.valid ? console.log(e.target.value) : setEmailErrors(e.target.validationMessage)
      }
        }/>
      
      {emailErrors.length > 0 ? <><br/><div id="email-help" class="error" aria-live="polite">{emailErrors}</div></> : null }

      <br/>

      <label for="phone-num">Phone Number </label>
      <input id="phone-num" type="tel" maxLength="10" pattern="[0-9]*" value={phoneNumber} onChange={(e) => (e.target.validity.valid ? setPhoneNumber(e.target.value) : null ) }/>

      <br/>

      <label for="zipcode">Zipcode</label>
      <input id="zipcode" type="zipcode" maxLength="5" pattern="[0-9]*" value={zipCode} onChange={(e) => e.target.validity.valid ? setZipCode(e.target.value): null }/>

      <br/>

      <label for="language">Preferred Language </label>
      <select name="language" id="language">
        <option value="english">English</option>
        <option value="french">French</option>
        <option value="german">German</option>
      </select>

      <br/>

      <label for="agree">I agree</label>
      <input id="agree" required={true} type="checkbox" onClick={ (e)=> setCheckedValue(e.target.checked)} />

      <br/>

      <button aria-label="Submit form" onClick={submitForm} variant="primary" type="submit">
        Submit
      </button>
    </form>
  </div>);
}

