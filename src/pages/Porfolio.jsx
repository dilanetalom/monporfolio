import React, { useState } from 'react';
// import './index.css';
import Layout from '../components/Layout';

const Porfolio = () => {
  const [activeSection, setActiveSection] = useState('home'); // 'home' par défaut
  return (
    <Layout activeSection={activeSection} setActiveSection={setActiveSection} />
  );
}

export default Porfolio