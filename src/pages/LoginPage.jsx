import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
// import { isLogin } from 'redux/auth/auth-selector';
import LoginForm from 'components/LoginForm/LoginForm';
// import { Navigate } from 'react-router-dom';

export default function LoginPage() {
  const dispatch = useDispatch();
  // const isUserLogin = useSelector(isLogin);

  const onLogin = (data) => {
    dispatch(login(data));
  }

  // if (isUserLogin) {
  //   return <Navigate to="/my-contacts" />
  // }
  
  return (
    <div>
      <h1>Login page</h1>
      <LoginForm onSubmit={onLogin}/>
    </div>
  )
}
