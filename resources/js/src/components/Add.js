import React, { useState } from "react";
import AppContainer from "./AppContainer";
import api from "../api";
import { useHistory } from "react-router-dom";

const Add = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const onAddSubmit = async () => {
        setLoading(true);
        try {
            await api.addPost({
                title,
                description,
            });
            history.push("/");
        } catch {
            alert("Failed to add  post");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AppContainer title="ADD POST">
            <form>
                <div className="form-group">
                    <label>title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button
                        className="btn btn-success"
                        type="button"
                        disabled={loading}
                        onClick={onAddSubmit}
                    >
                        {loading ? "LOADING..." : "ADD"}
                    </button>
                </div>
            </form>
        </AppContainer>
    );
};

export default Add;
