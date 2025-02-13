import { TabMenu } from 'primereact/tabmenu';
import { useState } from 'react';
import Home from '@/view/Home/Home';
import About from './view/About/About';
export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    { label: 'Home', icon: 'pi pi-home', view: <Home /> },
    { label: 'About', icon: 'pi pi-inbox', view: <About /> }
  ];

  return (
    <div className="app" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      
    </div>
  )
}