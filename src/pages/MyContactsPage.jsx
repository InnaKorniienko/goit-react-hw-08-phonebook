// import { Navigate } from "react-router-dom";
import Phonebook from "components/Phonebook/Phonebook";
// import useAuth from "components/shared/Hooks/UseAuth";

const MyContactsPage = () => {
    // const isLogin = useAuth();

    // if (!isLogin) {
    //     return <Navigate to="/login" />
    //   }

    return (
        <div>
            {/* <h1>My Contacts Page</h1> */}
            <Phonebook />
        </div>
    )
}

export default MyContactsPage;