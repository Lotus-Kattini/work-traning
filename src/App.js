import './App.css';
import Home from './components/Home';
import Othersidebar from './components/Othersidebar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='bg-[#081028] flex'>
     <Sidebar/>
     <Home/>
     <Othersidebar/>
    </div>
  );
}

export default App;
