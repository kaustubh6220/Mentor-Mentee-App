import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { userId, newRole } = reqBody;

        // Find the user by userId and update the role
        const user = await User.findOneAndUpdate({ username: userId }, { role: newRole });

        if (!user) {
            throw new Error("User not found");
        }

        return NextResponse.json({
            message: "Role updated successfully",
            success: true,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
