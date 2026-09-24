import { useEffect, useState } from 'react';
import aboutIcon from './icons/about.png';
import gradIcon from './icons/grad.png';
import lightbulbIcon from './icons/lightbulb.png';
import sendIcon from './icons/send.png';
import skillsIcon from './icons/skills.png';

const menuItems = [
  { label: 'About', href: '#about', icon: aboutIcon },
  { label: 'Projects', href: '#work', icon: lightbulbIcon },
  { label: 'Skills & experience', href: '#skills', icon: skillsIcon },
  { label: 'Education', href: '#education', icon: gradIcon },
  { label: 'Contact', href: '#contact', icon: sendIcon }
];

export default function Header({ name = 'Hiari' }) {
  const [clickedItem, setClickedItem] = useState('');

  useEffect(() => {
    function resetMenu() {
      if (window.location.hash === '#top' || window.location.hash === '') {
        setClickedItem('');
      }
    }

    window.addEventListener('hashchange', resetMenu);
    return () => window.removeEventListener('hashchange', resetMenu);
  }, []);

  function handleMenuClick(label) {
    setClickedItem(label);
  }

  return (
    <header className="site-header">
      <a className="logo" href="#top">{name}</a>
      <nav className="icon-nav" aria-label="Main navigation">
        {menuItems.map((item) => (
          <a
            className={`icon-nav-link${clickedItem === item.label ? ' is-clicked' : ''}`}
            href={item.href}
            key={item.label}
            onClick={() => handleMenuClick(item.label)}
          >
            <img src={item.icon} alt="" />
            <span className="icon-tooltip" role="tooltip">{item.label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
