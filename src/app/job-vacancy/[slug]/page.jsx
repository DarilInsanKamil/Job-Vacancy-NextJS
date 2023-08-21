import React, { Suspense } from "react";
import Image from "next/image";
import { LoadingBox } from "../../../components/loadingcomp/loadingbox";


const getData = async (params) => {
  const res = await fetch(
    `https://dev-example.sanbercloud.com/api/job-vacancy/${params}`
  );
  return res.json();
};

export default async function DetailJob({ params }) {
  const data = await getData(params.slug);
  return (
    <div>
      <p>DetailJob: {params.slug}</p>
      <div>
        <Suspense fallback={<LoadingBox />}>
          <p>{data.title}</p>
          <Image src={data.company_image_url} alt={data.title} height={300} width={300} />
        </Suspense>
      </div>
    </div>
  );
}
