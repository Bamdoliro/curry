export interface JobDetailDataType {
  post: string;
  title: string;
  position?: string;
  googleFormLink?: string;
}

export const JOB_DETAIL_DATA: JobDetailDataType[] = [
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
