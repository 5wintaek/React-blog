/*eslint-disable*/
import './styles/App.css'; // 경로 import 해야함
import { Header } from '@/components';
import { Category } from './components/Category/Category';

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
    </div>
  );
}

export default App;
