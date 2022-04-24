import "./index.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { connect } from "react-redux";
import { useState } from "react";

const Header = ({ currentPage, setPage }) => {
    const [state, setState] = useState(false)
    const opacity = () => {
        setState(!state)
        document.getElementById("UI_MDT").style.opacity = state ? "1" : "0.75";
    }

    return (
        <div className="MDT_Header">
            <div className="MDT_Header_Logo">
                MDT
            </div>
            <div onMouseEnter={opacity} onMouseLeave={opacity} className="MDT_Header_MDT">
                Mobile Database Terminal
                <div className="MDT_Header_Officer_Street">Carter Zamgato | LSPD</div>
            </div>
            <div className="MDT_Header_Time">
                <div>{new Date().toLocaleString().split(',')[0]}</div>
                <div>{new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
            </div>
        </div>
    );
};

const useMapStateToProps = (state: any) => ({
    currentPage: state.MDT.page,
});

const useMapDispatchToProps = (dispatch: any) => ({
    setPage: (page: string) => dispatch({ type: "SET_HUD_DATA", payload: { key: "currentPage", value: page } }),
});

export default connect(useMapStateToProps, useMapDispatchToProps)(Header);
