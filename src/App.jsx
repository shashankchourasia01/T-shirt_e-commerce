import Header from './components/Layout/Header';
import AnnouncementTape from './components/Layout/AnnouncementTape';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementTape />
      <Header />
      <HomePage />
    </div>
  );
}

export default App;