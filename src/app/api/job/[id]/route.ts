import { NextResponse } from "next/server";
import JOB_DETAIL_DATA from "@/data/JobDetailData";
import fs from "fs";

export async function GET(request: Request) {
  try {
    const id = parseInt(request.url.split("/").at(-1) ?? "") - 1;
    if (!JOB_DETAIL_DATA[id]) {
      return new NextResponse("not found", { status: 404 });
    }
    const { post, ...jobDetail } = JOB_DETAIL_DATA[id];
    const file = fs.readFileSync(`posts/${post}`, "utf8");

    return NextResponse.json({
      markdown: file,
      ...jobDetail,
    });
  } catch {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
