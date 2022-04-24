import { connect } from "react-redux";
import "./index.scss";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Slide from "@mui/material/Slide";
import { useEffect, useRef, useState } from "react";
import Panels from '../Pages'

const Main = ({ currentPage, setPage }) => {
    const [lastDirection, setLastDirection] = useState("up");
    const container = useRef(null);

    useEffect(() => {
        setLastDirection(lastDirection === "up" ? "down" : "up");
    }, [currentPage]);
    return (
        <div ref={container} className="MDT_Main">
            {Panels.map((panel: any, index) => (
                <Slide key={index} style={{ transitionDelay: currentPage === index ? '100ms' : '0ms' }} container={container.current} in={currentPage === index} direction={lastDirection === "up" ? "down" : "up"}>
                    <div className="MDT_Panel">{panel.component}</div>
                </Slide>
            ))}
        </div>
    );
};

const useMapStateToProps = (state: any) => ({
    currentPage: state.MDT.page,
});

const useMapDispatchToProps = (dispatch: any) => ({
    setPage: (page: string) => dispatch({ type: "SET_MDT_PAGE", page: page }),
});

export default connect(useMapStateToProps, useMapDispatchToProps)(Main);
