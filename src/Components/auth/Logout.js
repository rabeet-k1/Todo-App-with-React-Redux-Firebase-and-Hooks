import { useEffect } from "react";
import { store } from "../../store/store";
import { signOut } from "../../store/actions/authActions";

const Logout = props => {
  useEffect(() => {
    store.dispatch(signOut());
    window.location = "/login";
  });
  return null;
};

export default Logout;
