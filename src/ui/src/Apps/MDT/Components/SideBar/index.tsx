import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { connect } from "react-redux";
import "./index.scss";

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsIcon from '@mui/icons-material/Settings';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import Panels from '../Pages'

const SideBar = ({ currentPage, setPage }) => {
    const MdtButton = styled(Button)`
        background: #1f3245;
        margin: 0 !important;
        font-size: 0.8rem;
        justify-content: left;
        transform: translateY(0) !important;
        outline: none !important;
        border: none !important;
        margin-top: 1px !important;
        color: #f0f0f0 !important;
        font-weight: 500;
        letter-spacing: 2px;
        vertical-align: center;
        align-items: center;

        &.mdt_button_active {
            background: #1a202b;
        }

        &:hover {
            background: #1a202b;
        }
    `

    const handleClick = (page) => {
        setPage(page);
    }

    return (
        <div className="MDT_SideBar">
            {Panels.map((panel, index) => (
                <MdtButton disableRipple className={"idk_some_cool_button " + (currentPage === index ? "mdt_button_active" : "")} key={index} onClick={() => {handleClick(index)}} disableElevation variant="contained" sx={{padding: '20px', borderRadius: '0', color: "white"}} size="large" startIcon={panel.icon} fullWidth>{panel.label}</MdtButton>
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

export default connect(useMapStateToProps, useMapDispatchToProps)(SideBar);
