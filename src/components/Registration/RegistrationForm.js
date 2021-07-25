import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import styles from "../../CSS/Form.module.css";
import axios from "axios";

function RegistrationForm() {
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    age: null,
    gender: null,
    address_line_1: "",
    address_line_2: "",
    state: "",
    pincode: null,
    contact_number: null,
    aadhar_number: null,
    // date_of_birth: null,
    current_location: null,
    skill: null,
    message: "",
  });


  const handleChange = (event) => {
     setFormState({ ...formState ,
       [event.target.name]: event.target.value 
     });
   };


  const handleSubmit = (event) => {
     event.preventDefault();
     console.log("data is : " ,formState);

    axios
      .post("http://127.0.0.1:8000/api/", {

               "first_name": formState.first_name,
               "last_name": formState.last_name,
               "age": formState.age,
               "gender": formState.gender,
               "address_line_1":formState.address_line_1,
               "address_line_2": formState.address_line_2,
               "state": formState.state,
               "pincode": formState.pincode,
               "contact_number": formState.contact_number,
               "aadhar_number": formState.aadhar_number,
               "current_location": formState.current_location,
               "skill": formState.skill,
               "message": formState.message,
      })
      .then((response) => {
        console.log(response);
        alert("You have been registered successfully ");
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Input");
      });

  }

  return (
    <div style={{ marginBottom: "80px" }}>
      <Form onSubmit={handleSubmit} className={styles.FormBody}>
        <Form.Label className={styles.CardTitle}>
          Add your profile to get hired
        </Form.Label>

        <Form.Group>
          <Form.Control
            className={styles.Input}
            type="text"
            name="first_name"
            value={formState.first_name}
            placeholder="First Name"
          //   style={{ marginLeft: "40px", marginTop: "30px" }}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            className={styles.Input}
            type="text"
            name="last_name"
            value={formState.last_name}
            placeholder="Last Name"
          //   style={{ marginLeft: "40px", marginTop: "30px"}}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            className={styles.Input}
            type="number"
            name="age"
            value={formState.age}
            placeholder="Age"
          //   style={{ marginLeft: "40px", marginTop: "30px" }}
            onChange={handleChange}
          />
        </Form.Group>


        <Form.Group>
          <Form.Control
            as="select"
            className={styles.Input}
            name="gender"
            value={formState.gender}
            defaultValue="Choose Your Gender"
          //   style={{ marginTop: "30px", marginLeft: "40px" }}
            onChange={handleChange}
          >
            <option>Choose Gender </option>
            <option>M</option>
            <option>F</option>
            <option>O</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Control
            className={styles.Input}
            type="text"
            name="address_line_1"
            value={formState.address_line_1}
            placeholder="Address Line 1"
          //   style={{ marginLeft: "40px", marginTop: "30px" }}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            className={styles.Input}
            type="text"
            name="address_line_2"
            value={formState.address_line_2}
            placeholder="Address Line 2"
          //   style={{ marginLeft: "40px", marginTop: "30px" }}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            className={styles.Input}
            type="text"
            name="state"
            value={formState.state}
            placeholder="State"
          //   style={{ marginLeft: "40px", marginTop: "30px" }}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            className={styles.Input}
            type="number"
            name="pincode"
            value={formState.pincode}
            placeholder="Pin Code"
          //   style={{ marginLeft: "40px", marginTop: "30px" }}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            className={styles.Input}
            type="number"
            name="contact_number"
            value={formState.contact_number}
            placeholder="Contact Number"
          //   style={{ marginLeft: "40px", marginTop: "30px" }}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            className={styles.Input}
            type="number"
            name="aadhar_number"
            value={formState.aadhar_number}
            placeholder="Aadhar Number"
          //   style={{ marginLeft: "40px", marginTop: "30px" }}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            as="select"
            className={styles.Input}
            name="skill"
            value={formState.skill}
            defaultValue="Choose Skill"
          //   style={{ marginTop: "30px", marginLeft: "40px" }}
            onChange={handleChange}
          >
            <option>Choose Category </option>
            <option>ELECTRICIAN </option>
            <option>PLUMBER </option>
            <option>MECHANIC </option>
            <option>COOK </option>
            <option>PEON </option>
            <option>DRIVER </option>
            <option>MAID </option>
            <option>LABOUR </option>
            <option>SECURITY GUARD </option>
            <option>OTHERS </option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Control
            as="select"
            className={styles.Input}
            name="current_location"
            value={formState.current_location}
            defaultValue="Choose Current Location"
          //   style={{ marginTop: "30px", marginLeft: "40px" }}
            onChange={handleChange}
          >
            <option>Choose Category </option>
            <option> mumbai </option>
            <option> delhi </option>
            <option> banglore </option>
            <option> pune </option>
          </Form.Control>
        </Form.Group>


        <Form.Group>
          <Form.Control
            className={styles.Input}
            type="text"
            name="message"
            value={formState.message}
            placeholder="Message"
          //   style={{ marginLeft: "40px", marginTop: "30px" }}
            onChange={handleChange}
          />
        </Form.Group>


        <Form.Group>
          <Button className={styles.Button} type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default RegistrationForm ;
