import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAuthStore, useForm } from '../../hooks';

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

export const LoginPage = () => {

    const { startLogin, errorMessage} = useAuthStore();
    const { loginEmail, loginPassword, onInputChange:onLoginInputChange } = useForm( loginFormFields );

    const loginSubmit = ( event ) => {
        event.preventDefault();
        startLogin({ email: loginEmail, password: loginPassword });
    }

    useEffect(() => {
        if ( errorMessage !== undefined ) {
            Swal.fire('Error authenticating user', errorMessage, 'error');
        }
    }, [errorMessage]);

  return (
    /* Backgroung Container */
    <div className='flex items-center justify-center h-screen bg-zinc-700'>
        {/* Card */}
        <div className=' bg-zinc-800 p2 mx-6 rounded-2xl'>
            {/* Flex Container */}
            <div className='flex flex-col rounded-l-xl m-8 gap-4'>

                {/* Logo */}
                <img src="https://flowbite.com/docs/images/logo.svg" className='h-6 mr-3 sm:h-9' alt="company-logo" />
                {/* Form */}

                <h2 className='font-bold font-sans text-center text-white'>The Movies App</h2>

                <form onSubmit={ loginSubmit } className='flex flex-col' action="">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
                        name="loginEmail"
                        value={ loginEmail }
                        onChange={ onLoginInputChange }
                    />
                    <input
                        type="password"
                        placeholder="Enter your email address"
                        className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
                        name="loginPassword"
                        value={ loginPassword }
                        onChange={ onLoginInputChange } 
                    />

                    <button
                        className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500 mt-4"
                        type="submit"
                        value="Login"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
