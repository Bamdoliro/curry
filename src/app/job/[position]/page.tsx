"use client";

import AppLayout from "@/layouts/AppLayout";
import { useParams } from "next/navigation";

const JobDetailPage = () => {
  const { id } = useParams();
  return <AppLayout>as</AppLayout>;
};

export default JobDetailPage;
