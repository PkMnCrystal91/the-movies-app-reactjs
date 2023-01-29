import { useDispatch, useSelector } from "react-redux";
/* import { loginApi } from '../api/loginApi'; */
import { onChecking, onLogin, onLogout, clearErrorMessage } from '../store/index';
import axios from 'axios';

const loginApi = axios.create({
    baseURL: "https://reqres.in/api/"
});

/* To keep session */
loginApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        dispatch( onChecking() );
        try {
            const { data } = await loginApi.post('/login', {
                email, password
            });
            /* console.log(data.token) */
            localStorage.setItem('token' , data.token);
            dispatch( onLogin({ token: data.token }));

        } catch {
            dispatch( onLogout('Wrong Credentials'));
            setTimeout( () => { clearErrorMessage() }, 10);
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }

    const checkToken = async() => {
        const token = localStorage.getItem('token');
        if( !token ) return dispatch( onLogout() );

        try {
            const { data } = await loginApi.get('/login');
            localStorage.setItem('token', data.token );
            dispatch( onLogin({ token: data.token}));
        } catch(error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    return {
        //* Properties
        errorMessage,
        status,
        user,

        //*Methods
        startLogin,
        startLogout,
        checkToken
    }

}