import React, { useState } from 'react';
function AgeCalculator() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const dob = new Date(dateOfBirth);
    const today = new Date();
    const ageInMilliseconds = today - dob;
    const ageInYears = Math.floor(ageInMilliseconds / 31557600000); // Approximate number of milliseconds in a year
    setAge(ageInYears);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 className="text-center font-bold my-4">Age Calculator</h2>
      <label className="text-center my-2">Enter your date of birth</label><br/>
      <input
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        className="my-3 text-center" cols="30"
      /><br/>
      <button className="btn btn-primary" onClick={calculateAge}>Calculate Age</button>
      {age !== null && (
        <p className="my-4">
          <b>Your age is: {age} {age === 1 ? 'year' : 'years'} old.</b>
        </p>
      )}
      </div>
  );
}

export default AgeCalculator;


