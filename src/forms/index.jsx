import { useState } from 'react';

export default function MyForm() {
  const [inputs, setInputs] = useState({
    name: '',
    mytxt: '',
    myCar: 'Volvo',
    selectedFruit: 'banana'
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setInputs(values => ({ ...values, [name]: value }))
  };

  const handleSubmit = (event) => {
    let fillings = '';
    if (inputs.tomato) fillings += 'tomato';
    if (inputs.onion) {
      if (inputs.tomato) fillings += ' and ';
      fillings += 'onion';
    }
    if (fillings == '') fillings = 'no fillings';

    alert(`Form submitted with name: ${inputs.name}, suggestion: ${inputs.mytxt},
      and car: ${inputs.myCar} and a burger with ${fillings}. Your favourite fruit is ${inputs.selectedFruit}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input type="text" name="name" value={inputs.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Enter your suggestion:
        <textarea
          name="mytxt"
          value={inputs.mytxt}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Choose your car:
        <select name="myCar" value={inputs.myCar} onChange={handleChange}>
          <option value="Volvo">Volvo</option>
          <option value="Saab">Saab</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Audi">Audi</option>
        </select>
      </label>
      <br /><br />
      <p>I want a burger with:</p>
      <label>Tomato:
      <input
        type="checkbox"
        name="tomato"
        checked={inputs.tomato}
        onChange={handleChange}
      />
      </label>
      <label>Onion:
        <input
          type="checkbox"
          name="onion"
          checked={inputs.onion}
          onChange={handleChange}
        />
      </label>
      <br /><br />
      <p>Select your favorite fruit:</p>
      <label>
        <input
          type="radio"
          name="selectedFruit"
          value="apple"
          checked={inputs.selectedFruit === 'apple'}
          onChange={handleChange}
        /> Apple
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="selectedFruit"
          value="banana"
          checked={inputs.selectedFruit === 'banana'}
          onChange={handleChange}
        /> Banana
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="selectedFruit"
          value="cherry"
          checked={inputs.selectedFruit === 'cherry'}
          onChange={handleChange}
        /> Cherry
      </label>
      <br /><br />
      <p>Your name is: {inputs.name}</p>
      <p>Your suggestion is: {inputs.mytxt}</p>
      <p>Your selected car is: {inputs.myCar}</p>
      <p>Your burger fillings are: {[inputs.tomato && 'tomato', inputs.onion && 'onion'].filter(Boolean).join(' and ') || 'no fillings'}</p>
      <p>Your favorite fruit is: {inputs.selectedFruit}</p>
      <input type="submit" value="Submit" />
    </form>
  );
}