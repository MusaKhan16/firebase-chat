
//Components
import { SiFirebase, SiTailwindcss, SiReact } from 'react-icons/si'
import Chat from './components/chatbody'
import SignUp from './components/authenticate'

//Hooks
import { useContext } from 'react'

//Context Global state
import { Authorization } from './authprovider'


function App() {
  const { appAuth, user, SignOut } = useContext(Authorization)

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500  h-screen grid place-items-center">
      <div className='w-11/12  max-w-full md:max-w-[720px] text-white font-bol bg-[#ffffff55] 
                        backdrop-blur-lg rounded-xl overflow-hidden shadow-md'>
        <header className='flex items-center justify-around text-4xl p-4 bg-zinc-800'>
          <section className='flex justify-around items-center w-1/2 mr-1'>
            <SiReact className='text-blue-500' />
            <SiFirebase className='text-amber-300' />
            <SiTailwindcss className='text-sky-500' />
          </section>
          {user && <button onClick={SignOut} className='font-bold bg-blue-500 hover:bg-blue-700 px-6 py-2 text-base rounded-md'>Sign Out</button>}
        </header>
        {user ? <Chat /> : <SignUp />}
      </div>
    </div>
  );
}

export default App;
