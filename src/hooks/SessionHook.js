import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";

export function useSession() {
    const context = useContext(SessionContext)
    return context
}
