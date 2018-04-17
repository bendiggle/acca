import React from "react";
import Header from './src/components/header';
import SidePanel from './src/components/side-panel';
import { renderRoutes } from "react-router-config";

const AppRoot = (props) => {
    return (
        <div>
            <Header/>
            <div id="main" className="row">
                <section className="two-thirds column">
                    {renderRoutes(props.route.routes)}
                </section>
                <SidePanel/>
            </div>
        </div>
    );
};

export default AppRoot;
