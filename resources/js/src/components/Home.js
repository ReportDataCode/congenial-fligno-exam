import React from "react";
import { Link } from "react-router-dom";
import AppContainer from "./AppContainer";

const Home = () => {
    return (
        <AppContainer title="Laravel + React.JS - CRUD">
            <div class="card-body">
                <Link to="/add" class="btn btn-primary">
                    ADD POST
                </Link>
                <div class="table-responsive">
                    <table class="table table-striped mt-4">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Title</td>
                                <td>Description</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Laravel</td>
                                <td> PHP web framework</td>
                                <td>
                                    <Link to="/edit/1" className="btn btn-warning">
                                        EDIT
                                    </Link>
                                    <Link href="#" className="btn btn-danger">
                                        DELETE
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AppContainer>
    );
};

export default Home;
