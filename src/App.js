import './App.css';
import BentoGrid from './Components/BentoGrid';
import logoGaze from './assets/LogoGaze.svg'

function App() {
  return (
    <body className='bg-gray-150 h-screen w-screen flex flex-col'>
      <div className='bg-white fixed h-[6%] top-0 left-0 right-0 w-screen'>
        <img src={logoGaze} alt='Gaze Logo' className='h-full p-3 m-auto hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer' />
      </div>
      <div className='flex-1 flex m-20'>
        <BentoGrid>
        </BentoGrid>
      </div>
    </body>
  );
}

export default App;
