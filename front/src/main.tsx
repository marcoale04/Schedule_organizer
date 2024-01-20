import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './Pages/Login/Login.tsx';
import { SignUp } from './Pages/SignUp/SignUp.tsx';
import { Playground } from './Pages/Playground/Playground.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Pages/Home/Home.tsx';
import { StudentGenerate } from './Pages/Student/StudentGenerate.tsx';
import { ManagerGenerator } from './Pages/Manager/ManagerGenerator.tsx';
import { StudentQuery } from './Pages/Student/StudentQuery.tsx';
import { Teacher } from './Pages/Teacher/Teacher.tsx';
import { Redirect } from './Pages/Redirect/Redirect.tsx';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);   

const router = createBrowserRouter([
	{
		path: "/",
		element: <Redirect />
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <SignUp />
	}, 
	{
		path: "/playground",
		element: <Playground />
	},
	{
		path: "alumno",
		element: <Home role='student'/>
	},
	{
		path: "profesor",
		element: <Home role='teacher' />
	},
	{
		path:"/consulta_matricula",
		element: <Teacher />
	},
	{
		path: "directivo",
		element: <Home role="manager" />
	},
	{
		path: "registrar_horario",
		element: <StudentGenerate />
	},
	{
		path: "generar_horario",
		element: <ManagerGenerator />
	},
	{
		path: "consultar_horario",
		element: <StudentQuery />
	}
])

root.render(
	<React.StrictMode>
			<RouterProvider router={router}/>
	</React.StrictMode>
);
