// Code React

// Liens entre nos fichiers
import React from 'react';
import { render } from 'react-dom';
import 'index.css';
import citation from 'citations.js';

class App extends React.Component{
  state = { // state = gros objet dans lequel on place
// toutes les infos dont on a besoin pour chaque élément
    citation
  }
};

  render() { //ce que l'on veut afficher
    const cards = Object
                    .keys(this.state.citations)
                    .map(key => <Card key={key} details={this.state.recettes[key]} />);

  return (
    <div className="box">
      <Header />
      <div className='cards'>
        {cards}
      </div>
    </div>
  )
  }
