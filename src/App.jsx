import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu, setMenu] = useState(items);

  return <main>
    <h2 className='title'>Our menu</h2>
    <div className='underline'></div>
    <section className='menu'>
      <Menu items={menu}/>
    </section>
  </main>;
}

export default App;
