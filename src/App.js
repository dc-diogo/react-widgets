import React from 'react';
import Accordion from './components/Accordion';

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

class App extends React.Component {
  render() {
    return (
      <div>
        <Accordion items={items} />
      </div>
    );
  }
}

export default App;
