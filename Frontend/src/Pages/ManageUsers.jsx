import { useEffect, useState } from "react";
import API from "../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ManageUsers() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const [users, setUsers] = useState([]);

    const [search, setSearch] = useState("");

    const getUsers = async () => {

        try {

            const res = await API.get("/admin/users", {
                headers: {
                    Authorization: token
                }
            });

            setUsers(res.data.users);

        } catch (error) {

            toast.error("Unable to Load Users");

        }

    };

    const deleteUser = async (id, role) => {

        if (role === "admin") {
            toast.error("Admin cannot be deleted");
            return;
        }

        const confirmDelete = window.confirm("Delete this user?");

        if (!confirmDelete) return;

        try {

            const res = await API.delete(`/admin/user/${id}`, {
                headers: {
                    Authorization: token
                }
            });
            toast.success(res.data.message);
            getUsers();
        } catch (error) {
            toast.error(error.response?.data?.message || "Delete Failed");
        }};
    useEffect(() => {getUsers();}, []);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container-fluid bg-dark min-vh-100 text-white">
            <div className="row bg-black p-3 shadow">
                <div className="col-md-6">
                    <h2 className="text-danger">
                        Manage Users
                    </h2>
                </div>
                <div className="col-md-6 text-end">
                    <button
                        className="btn btn-danger"
                        onClick={() => navigate("/admin-dashboard")}
                    >
                        Back
                    </button>
                </div>
            </div>
            <div className="container mt-4">
                <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Search User..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <table className="table table-dark table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredUsers.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <span className={
                                            user.role === "admin"
                                                ? "badge bg-danger"
                                                : user.role === "recruiter"
                                                    ? "badge bg-warning text-dark"
                                                    : "badge bg-success"
                                        }>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td>
                                        {
                                            user.role === "admin"
                                                ?
                                                <button
                                                    className="btn btn-secondary btn-sm"
                                                    disabled
                                                >
                                                    Protected
                                                </button>
                                                :
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => deleteUser(user._id, user.role)}
                                                >
                                                    Delete
                                                </button>
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ManageUsers;