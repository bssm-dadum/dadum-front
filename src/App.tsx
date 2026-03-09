import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

const App = () => {
  return (
    <Routes>
      {/* TODO: 라우트를 여기에 추가하세요 */}
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
