
import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Adresse from './component/profile/Adresse';

function App() {
  return (
    <div className="App">
      <ProfilePhoto   />
      <FullName/>
      <Adresse/>
    </div>
  );
}

export default App;
