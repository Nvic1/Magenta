import { NextRequest, NextResponse } from "next/server";

export  default async function GET(req: NextRequest, res: NextResponse){
    const json = {
        name: "endpoint",
        status: 200,
    };

    return new NextResponse(JSON.stringify(json));
}

