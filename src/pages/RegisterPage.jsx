import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
// import { isLogin } from '../redux/auth/auth-selector';
import RegisterForm from 'components/RegisterForm/RegisterForm';
// import { Navigate } from 'react-router-dom';

export default function RegisterPage() {
  const dispatch = useDispatch();
  // const isUserLogin = useSelector(isLogin);

  const onRegister = (data) => {
    dispatch(signup(data));
  }

  // if (isUserLogin) {
  //   return <Navigate to="/my-contacts" />
  // }

  return (
    <div>
        <h1>Register page</h1>
        <RegisterForm onSubmit={onRegister}/>
    </div>
  )
}
