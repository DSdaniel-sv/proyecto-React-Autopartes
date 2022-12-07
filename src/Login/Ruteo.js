import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/Ingreso";
import { Profile } from "../Login/Profile";
import { LogoutButton } from '../Login/Logout';

function Ruteo() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          < LoginButton />
        )}
    </div>
  );
}

export default Ruteo;