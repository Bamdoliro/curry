import { NextResponse } from "next/server";
import fs from "fs";

interface JobDetailType {
  post: string;
  title: string;
  position?: string;
  googleFormLink?: string;
}

const JOD_DETAIL_DATA: JobDetailType[] = [
  {
    post: "곰돌이로.md",
    title: "Gomdoliro",
    position: "곰돌이로 팀원",
    googleFormLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    post: "프론트엔드.md",
    title: "Frontend Developer",
    position: "프론트엔드 개발자",
    googleFormLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    post: "백엔드.md",
    title: "Backend Developer",
    position: "백엔드 개발자",
    googleFormLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    post: "디자이너.md",
    title: "Product Designer",
    position: "디자이너",
    googleFormLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export async function GET(request: Request) {
  try {
    const id = parseInt(request.url.split("/").at(-1) ?? "") - 1;
    if (!JOD_DETAIL_DATA[id]) {
      return new NextResponse("not found", { status: 404 });
    }
    const { post, ...jobDetail } = JOD_DETAIL_DATA[id];
    const file = fs.readFileSync(`posts/${post}`, "utf8");

    return NextResponse.json({
      markdown: file,
      ...jobDetail,
    });
  } catch {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
