import React from 'react';
import logo from './logo.svg';

import { Skills } from './components/skillsview/skillsview';
import { BackgroundParticles } from 'components/particles/particles';

import style from './App.module.css';


function App() {
  return (
    <div className={style.App}>
			<BackgroundParticles />
			<Skills />
    </div>
  );
}

export default App;
