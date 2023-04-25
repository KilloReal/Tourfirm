import { useRecoilValue } from "recoil";

import { authAtom } from "../state";
import { useUserActions } from "../actions";

function Navbar() {
  const auth = useRecoilValue(authAtom);
  const userActions = useUserActions();

  console.log(auth);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Tourfirm
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Tours
            </a>
          </li>
        </ul>
      </div>

      <a href="/me" className="navbar-text" style={{ marginRight: "10px" }}>
        {auth.username}
      </a>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={userActions.logout}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
