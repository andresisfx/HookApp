import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { SimpleForm } from './components/SimpleForm.jsx'
import { CounterApp } from './useState/CounterApp.jsx'
import {CounterWithCustomHook}  from './useState/CounterWithCustomHook.jsx';
import {MultipleCustomHooks}  from './Examples/MultipleCustomHooks.jsx';
import { FocusScreen } from './useRef/FocusScreen.jsx';
import { Memorize } from './memos/Memorize.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <SimpleForm /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen/> */}
    <Memorize/>
  </StrictMode>,
)
