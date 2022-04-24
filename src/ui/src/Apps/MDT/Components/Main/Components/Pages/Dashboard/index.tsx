import React from "react";
import "./index.scss";

import { connect } from "react-redux";

const Dashboard = ({ warrants, reports }) => {
    return (
        <div className="MDT_Dashboard">
            <div className="MDT_Panel_Small">
                <div className="MDT_Panel_Small_Header">Active Warrants</div>
                <div className="MDT_Card_Wrapper">
                    <div className="MDT_Card">
                        <div className="MDT_Card_Header">
                            <div className="MDT_Card_primary">Test Warrant</div>
                            <div className="MDT_Card_secondary">192 | Carter Zamgato</div>
                        </div>
                        <div className="MDT_Card_Content">
                            Expires in 4 Hours and 30 MinutesExpires in 4 Hours and 30 MinutesExpires in 4 Hours and 30 MinutesExpires in 4 Hours and 30 MinutesExpires in 4 Hours and 30 MinutesExpires
                            in 4 Hours and 30 Minutes
                        </div>
                    </div>
                </div>
            </div>
            <div className="MDT_Panel_Small">
                <div className="MDT_Panel_Small_Header">Recent Reports</div>
                <div className="MDT_Card_Wrapper">
                    <div className="MDT_Card">
                        <div className="MDT_Card_Header">
                            <div className="MDT_Card_primary">Test Report</div>
                            <div className="MDT_Card_secondary">192 | Carter Zamgato</div>
                        </div>
                        <div className="MDT_Card_Content">
                            Expires in 4 Hours and 30 MinutesExpires in 4 Hours and 30 MinutesExpires in 4 Hours and 30 MinutesExpires in 4 Hours and 30 MinutesExpires in 4 Hours and 30 MinutesExpires
                            in 4 Hours and 30 Minutes
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const useMapStateToProps = (state: any) => ({
    warrants: state.MDT.warrants,
    reports: state.MDT.reports,
})

export default connect(useMapStateToProps)(Dashboard);
