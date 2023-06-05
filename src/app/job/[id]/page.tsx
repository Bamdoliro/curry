import path from "path";
import fs from "fs";
import JOB_DETAIL_DATA from "@/data/JobDetailData";
import { notFound, useParams } from "next/navigation";
import JobDetail from "@/client/JobDetail";

const getJobDetail = async (id: number) => {
  try {
    if (!JOB_DETAIL_DATA[id]) {
      notFound();
    }
    const { post, ...jobDetail } = JOB_DETAIL_DATA[id];
    const file = fs.readFileSync(
      path.resolve(process.cwd(), `posts/${post}`),
      "utf8"
    );

    return {
      markdown: file,
      ...jobDetail,
    };
  } catch {
    notFound();
  }
};

const JobDetailPage = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id) - 1;
  const props = await getJobDetail(id);

  return <JobDetail {...props} />;
};

export default JobDetailPage;
