import React from "react";

const AppContainer = ({ title, children }) => {
    return (
        <div className="container">
            <div class="card">
                <h5 class="card-header">{title}</h5>
                <div class="card-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AppContainer;
