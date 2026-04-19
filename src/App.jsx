import Header from './components/Layout/Header';
import AnnouncementTape from './components/Layout/AnnouncementTape';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementTape />
      <Header />
      
      {/* Hero Section - Temporary */}
      <main className="container-custom py-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
            Graphic Tees for the Culture
          </h2>
          <p className="text-gray-600">
            Tap on ☰ to see the Souled Store style sidebar
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;