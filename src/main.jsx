import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './greeting.jsx'
import Component2 from './Component2.jsx'
import PackingList from './PackingList.jsx'
import Animals from './Animals.jsx'
import Gallery from './Gallery.jsx'
import SplittingList from './SplittingList.jsx'
import RecipeList from './recipesFolder/Recipes.jsx'
import LineSeperator from './LineSeperator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LineSeperator />
  </StrictMode>,
)
