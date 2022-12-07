import { useDispatch } from "react-redux";
import { logout } from "redux/auth/auth-operations";
// import { getUser } from "redux/auth/auth-selector";

export default function NavbarUser() {
const dispatch = useDispatch();
// const { name } = useSelector(getUser);

    const onLogout = () => {
        dispatch(logout());
    }
    
  return (
    <div>Welcome back 
      <button onClick={onLogout}> Logout </button>
    </div>
  )
}
