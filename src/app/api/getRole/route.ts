import { getUserIdFromToken, getUserRoleFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbconfig/dbconfig";

connect();

export async function GET(request: NextRequest) {
    try {
        const userRole = await getUserRoleFromToken(request);
        // if (!userId) {
        //     return NextResponse.json({ error: "User ID not found in token" }, { status: 401 });
        // }
        
        // const user = await User.findOne({ _id: userId }).select("role");
        // if (!user) {
        //     return NextResponse.json({ error: "User not found" }, { status: 404 });
        // }

        return NextResponse.json({
            message: "User Found",
            data: userRole
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
