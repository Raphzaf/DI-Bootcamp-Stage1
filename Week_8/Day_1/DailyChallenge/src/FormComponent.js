import React from 'react';

function FormComponent({ data, handleChange, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#d2ae80', padding: '20px' }}>
        <h2>Sample form</h2>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={data.firstName}
          onChange={handleChange}
        /><br />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={data.lastName}
          onChange={handleChange}
        /><br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={data.age}
          onChange={handleChange}
        /><br /><br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={data.gender === 'male'}
            onChange={handleChange}
          /> Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={data.gender === 'female'}
            onChange={handleChange}
          /> Female
        </label><br /><br />

        <label>Select your destination</label><br />
        <select
          name="destination"
          value={data.destination}
          onChange={handleChange}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="Japan">Japan</option>
          <option value="Thailand">Thailand</option>
          <option value="Brazil">Brazil</option>
        </select><br /><br />

        <label>Dietary restrictions:</label><br />
        <label>
          <input
            type="checkbox"
            name="nutsFree"
            checked={data.nutsFree}
            onChange={handleChange}
          /> Nuts free
        </label><br />
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={data.lactoseFree}
            onChange={handleChange}
          /> Lactose free
        </label><br />
        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={data.vegan}
            onChange={handleChange}
          /> Vegan
        </label><br /><br />

        <button type="submit">Submit</button>
      </form>

      <div style={{ backgroundColor: '#1c4c4c', color: 'white', padding: '20px', marginTop: '10px' }}>
        <h3>Entered information:</h3>
        <p><em>Your name:</em> {data.firstName} {data.lastName}</p>
        <p><em>Your age:</em> {data.age}</p>
        <p><em>Your gender:</em> {data.gender}</p>
        <p><em>Your destination:</em> {data.destination}</p>
        <p><em>Your dietary restrictions:</em></p>
        <p>**Nuts free : {data.nutsFree ? "Yes" : "No"}</p>
        <p>**Lactose free : {data.lactoseFree ? "Yes" : "No"}</p>
        <p>**Vegan meal : {data.vegan ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default FormComponent;
