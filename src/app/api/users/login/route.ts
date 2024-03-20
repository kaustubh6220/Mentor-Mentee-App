import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// Establish database connection
connect();

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const reqBody = await request.json();
        const { email, password } = reqBody;
        
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        }

        // Check if role matches
        if (user.role !== reqBody.role) {
            return NextResponse.json({ error: "Role does not match" }, { status: 400 });
        }

        // Verify password
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
        }

        // Create token data
        const tokenData = {
            role: user.role,
            id: user._id,
            username: user.username,
            email: user.email
        };

        // Create token
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });

        // Set token as cookie and return success response with role included
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            role: user.role
        });
        response.cookies.set("token", token, { httpOnly: true });
        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
