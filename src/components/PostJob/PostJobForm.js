import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import  { Redirect } from 'react-router-dom'
import styles from "../../CSS/Form.module.css";
import axios from "axios";

function PostJobForm() {
  const [formState, setFormState] = useState({
     employer_full_name : "",
     skill_required : null,
     location : null,
     pincode : null,
     employer_contact : null,
     message : ""
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
      .post("http://127.0.0.1:8000/api/jobs/register/", {

          "employer_full_name": formState.employer_full_name,
          "skill_required": formState.skill_required,
          "location": formState.location,
          "pincode": formState.pincode,
          "employer_contact": formState.employer_contact,
          "message": formState.message,
      })
      .then((response) => {
        console.log(response);
        alert("You have been registered successfully ");
        <Redirect to='/'/>
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
          Add Job Opportunity.
        </Form.Label>

        <Form.Group>
          <Form.Control
            className={styles.Input}
            type="text"
            name="employer_full_name"
            value={formState.employer_full_name}
            placeholder="Employer Full Name"
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
            name="employer_contact"
            value={formState.employer_contact}
            placeholder="Employee Number"
          //   style={{ marginLeft: "40px", marginTop: "30px" }}
            onChange={handleChange}
          />
        </Form.Group>


        <Form.Group>
          <Form.Control
            as="select"
            className={styles.Input}
            name="skill_required"
            value={formState.skill_required}
            defaultValue="Choose Skill required"
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
            name="location"
            value={formState.location}
            defaultValue="Choose Job Location"
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
            placeholder="Message for candidate"
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

export default PostJobForm ;








