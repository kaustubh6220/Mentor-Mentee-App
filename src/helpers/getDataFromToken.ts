import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getUserIdFromToken = (request: NextRequest): string | null => {
    try {
        const token = request.cookies.get("token")?.value;
        if (!token) {
            throw new Error("Token not found in cookies");
        }
        
        const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
        return decodedToken.id || null; // Return only the user ID
    } catch (error:any) {
        throw new Error(error.message);
    }
}


export const getUserRoleFromToken = (request: NextRequest): string | null => {
    try {
        const token = request.cookies.get("token")?.value;
        if (!token) {
            throw new Error("Token not found in cookies");
        }
        
        const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
        return decodedToken.role || null; // Return only the user ID
    } catch (error:any) {
        throw new Error(error.message);
    }
}
