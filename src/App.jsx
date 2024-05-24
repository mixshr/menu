import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  return <main>
    <section className='menu'>
      <Menu title='Our menu'/>
    </section>
  </main>;
}

export default App;
