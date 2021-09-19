import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContainer from "./AppContainer";
import api from "../api";

const Home = () => {
    const [posts, setPosts] = useState(null);

    const fetchPosts = () => {
        api.getAllPosts().then((res) => {
            const result = res.data;
            setPosts(result.data);
        });
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderPosts = () => {
        if (!posts) {
            return (
                <tr>
                    <td colSpan="4">Loading posts...</td>
                </tr>
            );
        }
        if (posts.length === 0) {
            return (
                <tr>
                    <td colSpan="4">There is post yet. Add one.</td>
                </tr>
            );
        }
        return posts.map((post) => (
            <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>
                    <Link className="btn btn-warning" to={`/edit/${post.id}`}>
                        Edit
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                            api.deletePost(post.id)
                                .then(fetchPosts)
                                .catch((err) => {
                                    alert(
                                        "Failed to delete post with id: " +
                                            post.id
                                    );
                                });
                        }}
                    >
                        DELETE
                    </button>
                </td>
            </tr>
        ));
    };

    return (
        <AppContainer title="Laravel + React.JS - CRUD">
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
                    <tbody>{renderPosts()}</tbody>
                </table>
            </div>
        </AppContainer>
    );
};

export default Home;
