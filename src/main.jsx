import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './Router/router'
import "./index.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='arvo-regular'>
    <RouterProvider router={router}/>
    </div>
   </StrictMode>,
)
