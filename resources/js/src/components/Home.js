import React from "react";

const Home = () => {
    return (
        <div className="container">
            <div class="card">
                <div class="card-header">Laravel + React.JS - CRUD</div>
                <div class="card-body">
                    
                    <a href="#" class="btn btn-primary">
                        Go somewhere
                    </a>
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
                                    <td>  PHP web framework</td>
                                    <td>
                                        <a href="#" className="btn btn-warning">EDIT</a>
                                        <a href="#" className="btn btn-danger">DELETE</a>
                                    </td>
                                    
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
