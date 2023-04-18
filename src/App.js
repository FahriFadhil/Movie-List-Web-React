import Nav from './layout/Nav';
import Header from './layout/Header';

function App() {
  return (
    <div className="App bg-neutral-600">
      <Nav />
      <header className='relative'>
        <img src="https://source.unsplash.com/1600x900?panorama" class="absolute inset-0 w-full h-full object-cover z-[1] brightness-50"></img>
        <div className="container relative mx-auto z-20">
          <h1 className='text-4xl text-center text-neutral-50 py-12'>Geetings Movie Fellas, Any Mood to Explore?</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
