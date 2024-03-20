import { getUserIdFromToken, getUserRoleFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbconfig/dbconfig";

connect();

export async function GET(request: NextRequest) {
    try {
        const user = await User.find({}).select("role username");


        return NextResponse.json({
            message: "User Found",
            data: user
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
