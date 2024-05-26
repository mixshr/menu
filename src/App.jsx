import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(
    items.map((item) => item.category)
)]
function App() {
  const [menu, setMenu] = useState(items);
  const filterItems = (category) => {
    if (category === "all") {
      setMenu(items);
    } else {
      const newMenu = menu.filter((item) => category === item.category);
      setMenu(newMenu);
    }
  }

  return <main>
    <h2 className='title'>Our menu</h2>
    <div className='underline'></div>
    <section className='menu'>
      <Categories categories={allCategories} filterItems={filterItems}/>
      <Menu items={menu} />
    </section>
  </main>;
}

export default App;
