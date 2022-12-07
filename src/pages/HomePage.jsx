import {Link} from "react-router-dom";
import useAuth from "components/shared/Hooks/UseAuth";

const HomePage = () => {
    const isLogin = useAuth();
    return (
        <div>
            <h1>Phonebook</h1>
            {!isLogin ? (
          <>
            <Link to="/register">To register page</Link>
            <span>or</span>
            <Link to="/login">To login page</Link>
          </>
        ) : (
          <Link to="/contacts">My contacts</Link>
        )}
        </div>
    )
}

export default HomePage;