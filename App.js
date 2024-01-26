import react from 'react';
import Welcome from './welcomeComponent'

const Button = () => {
  return <button>Submit</button>
}

const  App =() =>{
  return (
    <div>
      <h1>Hello World</h1>
      <Welcome name="bella"/>
      <Welcome name="nana"/>
      <button>Submit</button>
    </div>
  );
}


export default App;
