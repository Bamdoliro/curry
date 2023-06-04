export interface CareerListDataType {
  id: number;
  position: string;
  skils: string[];
  bedge: string;
}

export const CAREER_LIST_DATA: CareerListDataType[] = [
  {
    id: 1,
    position: "곰돌이로에서는 어떤 것을 배울수있나요?",
    skils: ["곰돌 파워", "깜찍함", "카와이"],
    bedge: "인턴",
  },
  {
    id: 2,
    position: "Frontend Developer",
    skils: ["HTML", "CSS", "Javascript", "열정", "끈기"],
    bedge: "인턴",
  },
  {
    id: 3,
    position: "Backend Developer",
    skils: ["Java", "열정", "끈기"],
    bedge: "인턴",
  },
  {
    id: 4,
    position: "Product Designer",
    skils: ["열정", "끈기"],
    bedge: "인턴",
  },
];
