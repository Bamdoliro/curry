import { NextResponse } from "next/server";
import fs from "fs";

interface JobDetail {
  [key: string]: {
    post: string;
    title: string;
    position?: string;
    googleFormLink?: string;
  };
}

const getJobDetail: JobDetail = {
  1: {
    post: "밤돌이로.md",
    title: "Bamdoliro",
  },
  2: {
    post: "프론트엔드.md",
    title: "Frontend Developer",
    position: "프론트엔드 개발자",
    googleFormLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  3: {
    post: "백엔드.md",
    title: "Backend Developer",
    position: "백엔드 개발자",
    googleFormLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  4: {
    post: "디자이너.md",
    title: "Product Designer",
    position: "디자이너",
    googleFormLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
};

export async function GET(request: Request) {
  try {
    const id = request.url.split("/").at(-1) ?? "";

    if (!getJobDetail?.[id]) {
      return new NextResponse("not found", { status: 404 });
    }

    const { post, ...jobDetail } = getJobDetail[id];

    var path = `posts/${post}`;
    var file = fs.readFileSync(path, "utf8");

    return NextResponse.json({
      markdown: file,
      ...jobDetail,
    });
  } catch {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
