import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { blogStore } from './redux/store/index.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={blogStore}>
    <StrictMode>
      <App />
    </StrictMode>,
  </Provider>
)
