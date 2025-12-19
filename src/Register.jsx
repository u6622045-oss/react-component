import React, { useState } from 'react';

const Register = () => {

  const genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Others', value: 'Others' }
  ];

  const hobbyOptions = [
    { label: 'Music', value: 'Music' },
    { label: 'Movies', value: 'Movies' },
    { label: 'Plastic Model', value: 'Plastic Model' }
  ];

  const roleOptions = [
    { label: 'General staff', value: 'General staff' },
    { label: 'Developer', value: 'Developer' },
    { label: 'System Analyst', value: 'System Analyst' }
  ];

  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    gender: '',
    role: 'General staff'
  });
  const [hobbies, setHobbies] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onHobbiesToggle = (event) => {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;

    if (!isChecked) {
      setHobbies((prev) => prev.filter((item) => item !== targetValue));
    } else {
      setHobbies((prev) => [...prev, targetValue]);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>Registration Form</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input name="username" placeholder="Username" onChange={handleChange} />
        <input name="firstname" placeholder="Firstname" onChange={handleChange} />
        <input name="lastname" placeholder="Lastname" onChange={handleChange} />

        <div>
          <p>Gender:</p>
          {genderOptions.map((opt) => (
            <label key={opt.value}>
              <input type="radio" name="gender" value={opt.value} onChange={handleChange} />
              {opt.label}
            </label>
          ))}
        </div>

        <div>
          <p>Hobbies:</p>
          {hobbyOptions.map((opt) => (
            <label key={opt.value}>
              <input type="checkbox" value={opt.value} onChange={onHobbiesToggle} />
              {opt.label}
            </label>
          ))}
        </div>

        <div>
          <p>Apply Role:</p>
          <select name="role" onChange={handleChange} value={formData.role}>
            {roleOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </form>

      <hr />
      <h3>Real-time Reflection</h3>
      <div style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px' }}>
        <p><strong>Username:</strong> {formData.username}</p>
        <p><strong>Full Name:</strong> {formData.firstname} {formData.lastname}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Hobbies:</strong> {hobbies.join(', ')}</p>
        <p><strong>Role:</strong> {formData.role}</p>
      </div>
    </div>
  );
};

export default Register;