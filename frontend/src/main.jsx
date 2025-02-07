// import { Provider } from "@/components/ui/provider"
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { BrowserRouter } from "react-router-dom"
// import customTheme from "./Comp/Theme.jsx"; 

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider theme={customTheme}>
//     <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
//       <BrowserRouter>
//       <App />
//       </BrowserRouter>
//     </Provider>
//   </StrictMode>,
// )









import { Provider } from "@/components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)