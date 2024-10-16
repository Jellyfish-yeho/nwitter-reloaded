import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function ProtectedRoute({
    children,
}: {
    children: React.ReactNode;
}) {
    //로그인한 user || null
    const user = auth.currentUser;
    // console.log("user:", user);
    if (user === null) {
        return <Navigate to="/login" />;
    }
    return children;
}
