interface JobDetailDataType {
  post: string;
  title: string;
  position: string;
  googleFormLink: string;
}

const JOB_DETAIL_DATA: JobDetailDataType[] = [
  {
    post: "곰돌이로.md",
    title: "Gomdoliro",
    position: "곰돌이로 팀원",
    googleFormLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScBmssFZc5Rxxj5YLxxP2Mq0EKAphbeNCPKBl48XPGWUGFpZQ/viewform",
  },
  {
    post: "프론트엔드.md",
    title: "Frontend Developer",
    position: "프론트엔드 개발자",
    googleFormLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScBmssFZc5Rxxj5YLxxP2Mq0EKAphbeNCPKBl48XPGWUGFpZQ/viewform",
  },
  {
    post: "백엔드.md",
    title: "Backend Developer",
    position: "백엔드 개발자",
    googleFormLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScBmssFZc5Rxxj5YLxxP2Mq0EKAphbeNCPKBl48XPGWUGFpZQ/viewform",
  },
  {
    post: "디자이너.md",
    title: "Product Designer",
    position: "디자이너",
    googleFormLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScBmssFZc5Rxxj5YLxxP2Mq0EKAphbeNCPKBl48XPGWUGFpZQ/viewform",
  },
];

export default JOB_DETAIL_DATA;
