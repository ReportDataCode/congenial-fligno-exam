import React from "react";
import AppContainer from "./AppContainer";

const Add = () => {
    return (
        <AppContainer title="ADD POST">
            <form>
                <div className="form-group">
                    <label>title</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-success" type="button">ADD</button>
                </div>
            </form>
        </AppContainer>
    );
};

export default Add;
