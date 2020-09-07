import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React',
    content: 'REact is a front end javascript framework'
  },
  {
    title: 'Por que usar React?',
    content:
      'Porque react é a biblioteca favorita entre os engenheiros de software frontend'
  },
  {
    title: 'Como usar React?',
    content:
      'Fazendo cursos que vc encontra na internet e codando igual um retardado coisas que nem parecem fazer muito sentido...'
  }
];

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color black',
    value: 'black'
  },
  {
    label: 'A shade of blue',
    value: 'blue'
  }
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;
