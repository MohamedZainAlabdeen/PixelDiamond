import { createRoot } from 'react-dom/client'

import Router from "./routers/Router.jsx";
import './index.css'

createRoot(document.getElementById('root')!).render(<Router />)
