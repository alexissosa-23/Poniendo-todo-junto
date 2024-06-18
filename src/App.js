import React from 'react';
import PersonCard from './Componentes/PersonCard';
import './App.css';

const App = () => {
  return (
    <div className='contenedor'>
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Blond" />
      <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
    </div>
  );
};

export default App;
