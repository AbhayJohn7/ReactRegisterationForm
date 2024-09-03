import React, { useState } from "react";
import "./App.css"; // Import custom CSS

function RegistrationForm() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    course: "",
  });

  // State to store errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form data
  const validate = () => {
    let validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!formData.address.trim()) {
      validationErrors.address = "Address is required";
    }

    if (!formData.mobile) {
      validationErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      validationErrors.mobile = "Mobile number must be 10 digits";
    }

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email address is invalid";
    }

    if (!formData.gender) {
      validationErrors.gender = "Gender is required";
    }

    if (!formData.dob) {
      validationErrors.dob = "Date of birth is required";
    }

    if (!formData.course) {
      validationErrors.course = "Course selection is required";
    }

    return validationErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // No errors, alert form data
      alert(
        `Data Stored Successfully:\nName: ${formData.name}\nAddress: ${formData.address}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nGender: ${formData.gender}\nDate of Birth: ${formData.dob}\nCourse: ${formData.course}`
      );

      // Clear form fields
      setFormData({
        name: "",
        address: "",
        mobile: "",
        email: "",
        gender: "",
        dob: "",
        course: "",
      });
    }
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      name: "",
      address: "",
      mobile: "",
      email: "",
      gender: "",
      dob: "",
      course: "",
    });
    setErrors({});
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Higher Secondary Admission Form</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <div className="text-danger">{errors.address}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            className="form-control"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="form-check-input"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="form-check-input"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              <label className="form-check-label">Female</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                value="Other"
                className="form-check-input"
                checked={formData.gender === "Other"}
                onChange={handleChange}
              />
              <label className="form-check-label">Other</label>
            </div>
          </div>
          {errors.gender && <div className="text-danger">{errors.gender}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="form-control"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <div className="text-danger">{errors.dob}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <select
            id="course"
            name="course"
            className="form-control"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Humanities">Humanities</option>
          </select>
          {errors.course && <div className="text-danger">{errors.course}</div>}
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleReset}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
