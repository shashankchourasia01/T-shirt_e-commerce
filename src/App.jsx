import Header from './components/Layout/Header';
import AnnouncementTape from './components/Layout/AnnouncementTape';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <AnnouncementTape />
      <Header />
      
      {/* Temporary content - baad mein hata denge */}
      <main className="container-custom py-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-white mb-4">
            Welcome to TShirt Store
          </h2>
          <p className="text-secondary-gray">
            Your navbar is ready! Click on ☰ to see sidebar.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;