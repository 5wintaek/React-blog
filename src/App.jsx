/*eslint-disable*/
import './styles/App.css'; // 경로 import 해야함
import { Header, Category, Modal } from '@/components';

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
    </div>
  );
}

export default App;
