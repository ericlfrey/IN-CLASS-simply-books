import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

export default function AuthorForm() {
  return (
    <Form>
      <h2 className="text-white mt-5">Author</h2>
      {/* FIRST NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="First Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter First Name"
          name="first-name"
          // value={formInput.title}
          // onChange={handleChange}
          required
        />
      </FloatingLabel>
      {/* LAST NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Last Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Last Name"
          name="last-name"
          // value={formInput.title}
          // onChange={handleChange}
          required
        />
      </FloatingLabel>
      {/* EMAIL NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Email" className="mb-3">
        <Form.Control
          type="email"
          placeholder="Enter Email"
          name="email"
          // value={formInput.title}
          // onChange={handleChange}
          required
        />
      </FloatingLabel>
      {/* EMAIL NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Image URL" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter Image URL"
          name="image-url"
          // value={formInput.title}
          // onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* FAVORITE  */}
      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="favorite"
        name="favorite"
        label="Favorite?"
      // checked={formInput.sale}
      // onChange={(e) => {
      //   setFormInput((prevState) => ({
      //     ...prevState,
      //     sale: e.target.checked,
      //   }));
      // }}
      />
      {/* SUBMIT BUTTON  */}
      <Button type="submit">Author</Button>
    </Form>
  );
}
