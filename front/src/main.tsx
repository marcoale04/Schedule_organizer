import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './Pages/Login/Login.tsx';
import { SignUp } from './Pages/SignUp/SignUp.tsx';

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
])

root.render(
	<React.StrictMode>
			<RouterProvider router={router}/>
	</React.StrictMode>
);
