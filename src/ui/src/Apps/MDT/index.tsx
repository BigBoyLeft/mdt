import React from "react";
import useAppEvent from "../../Services/useAppEvent";
import { connect } from "react-redux";
import "./index.scss";

import { Header, SideBar, Main } from "./Components";

const MDT = ({ visible, data, setVisible, setData }) => {
    useAppEvent("MDT", "setVisible", (data: any) => {
        setVisible(data.visible);
    });

    return (
        visible && (
            <div id="UI_MDT" className="UI_MDT">
                <div className="UI_MDT_SCREEN">
                    <Header />
                    <SideBar />
                    <Main />
                </div>
            </div>
        )
    );
};

const mapStateToProps = (state: any) => ({
    visible: state.MDT.visible,
    data: state.MDT.data,
});

const mapDispatchToProps = (dispatch: any) => ({
    setVisible: (visible: boolean) => dispatch({ type: "SET_MDT_VISIBLE", payload: visible }),
    setData: (data: { key: string; value: any }) => dispatch({ type: "SET_HUD_DATA", payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MDT);
