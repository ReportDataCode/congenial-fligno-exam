import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AppContainer from "./AppContainer";
import api from "../api";

const Home = () => {
    useEffect(() => {
        api.getAllPosts().then((res) => {
            console.log("test get all posts");
            console.log(res);
        });
    }, []);

    return (
        <AppContainer title="Laravel + React.JS - CRUD">
            <div className="card-body">
                <Link to="/add" className="btn btn-primary">
                    ADD POST
                </Link>
                <div className="table-responsive">
                    <table className="table table-striped mt-4">
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
                                    <Link
                                        to="/edit/1"
                                        className="btn btn-warning"
                                    >
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
