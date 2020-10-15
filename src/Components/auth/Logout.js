import { useEffect } from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const Logout = (props) => {
    useEffect(() => {
        props.signOut();
        window.location = "/login";
    })
    return null;
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(Logout);
