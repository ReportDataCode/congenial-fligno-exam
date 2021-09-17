import React from "react";
import AppContainer from "./AppContainer";

const Add = () => {
    return (
        <AppContainer title="ADD POST">
            <form>
                <div className="form-group">
                <label>title</label>
                <input type="text" className="form-control"/>
                </div>
            </form>
        </AppContainer>
    );
};

export default Add;
