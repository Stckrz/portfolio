import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import { Layout } from './pages/layout/layout';
import { SkillsPage } from 'pages/skills/skills';
import { Home } from 'pages/home/home';
import { ProjectsPage } from 'pages/projects/projectspage';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route index element={<Home />} />
					<Route path="home" element={<Home />} />
					<Route path="skills" element={<SkillsPage />} />
					<Route path="projects" element={<ProjectsPage />} />
				</Route>
			</Routes>
		</Router>
	</React.StrictMode>
);

reportWebVitals();
