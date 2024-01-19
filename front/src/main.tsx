import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './Pages/Login/Login.tsx';
import { SignUp } from './Pages/SignUp/SignUp.tsx';
import { Playground } from './Pages/Playground/Playground.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Pages/Home/Home.tsx';
import { StudentsContainer } from './Components/StudentsContainer/StudentsContainer.tsx';
import { StudentGenerate } from './Pages/Student/StudentGenerate.tsx';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);   

const router = createBrowserRouter([
	{
		path: "/",
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
		path: "student",
		element: <Home role='student'/>
	},
	{
		path: "teacher",
		element: <Home role='teacher' />
	},
	{
		path: "manager",
		element: <Home role="manager" />
	},
	{
		path: "student_schedule",
		element: <StudentGenerate />
	}
])

root.render(
	<React.StrictMode>
			<RouterProvider router={router}/>
	</React.StrictMode>
);
