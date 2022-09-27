import {useState} from 'react';

const FromUser = () => {
  const [stateName, setName] = useState('');
  const [statePassword, setPassword] = useState('');

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // prevent page refresh

    //  access input values here
    console.log('Nombre 👉️', stateName);
    console.log('Password 👉️', statePassword);

    //  clear all input values in the form
    setName('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={event => setName(event.target.value)}
          value={stateName}
          required
        />
        <label>Contraseña</label>
        <input
          id="password"
          name="password"
          type="password"
          value={statePassword}
          onChange={event => setPassword(event.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FromUser;