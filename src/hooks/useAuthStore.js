import { useDispatch, useSelector } from "react-redux";
/* import { loginApi } from '../api/loginApi'; */
import { onChecking, onLogin, onLogout, clearErrorMessage } from '../store/index';
import axios from 'axios';

const loginApi = axios.create({
    baseURL: "https://reqres.in/api/"
});

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

    return {
        //* Properties
        errorMessage,
        status,
        user,

        //*Methods
        startLogin,
        startLogout
    }

}