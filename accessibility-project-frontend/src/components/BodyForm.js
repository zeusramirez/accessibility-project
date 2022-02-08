import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from "react";


export default function BodyForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOB, setDateOB] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [emailAddress, setEmailAddress] = useState("");
  const [zipCode, setZipCode] = useState("");

  function submitForm(e){
    e.preventDefault()
    console.log("First name:", firstName, "Last name:", lastName, "Date of Birth:", dateOB, "Phone Number:", phoneNumber, "Zipcode:", zipCode,)
  }
  return(

  <div>
    <Form>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name
        <Form.Control type="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </Form.Label>

      <Form.Group className="mb-3" controlId="formlastName">
        <Form.Label>Last Name
        <Form.Control type="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label>Date of Birth
        <Form.Control type="date" name="date_of_birth" onChange={(e) => setDateOB(e.target.value)}/>
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Email Address
          <Form.Control type="text" name="email_address" placeholder="Email Address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/>
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone Number
        <Form.Control type="tel" pattern="[0-9]*" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
        </Form.Label>
      </Form.Group>

      <Form.Group>
        <Form.Label>Zipcode 
        <Form.Control type="tel" pattern="[0-9]*" placeholder="Zipcode" value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label>Preferred Language
        <Form.Select>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="german">German</option>
        </Form.Select>
        </Form.Label>
      </Form.Group>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I Agree" />
      </Form.Group>
        <Button onClick={submitForm} variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  </div>);
}

