import { useContext } from 'react'
import { Authorization } from '../authprovider'

function SignUp() {
    const { SignIn } = useContext(Authorization)

    return (
        <div className="h-[60vh] flex flex-col justify-center space-y-10 items-center font-bold p-2">
            <button
                onClick={SignIn}
                className="bg-blue-500 hover:bg-blue-600 w-1/3 rounded-lg p-2 border-2 
            border-white focus:ring ring-blue-600">
                Sign up
            </button>
            <h1 className='text-2xl'>Rules!</h1>
            <ol className="flex flex-col space-y-2 text-lg">
                <li><h3>Insulting behaviour is not permitted! 😑</h3></li>
                <li><h3>Dont do naughty naughty 😈</h3></li>
                <li><h3>Have fun! 😎</h3></li>
            </ol>
        </div>
    )
}

export default SignUp