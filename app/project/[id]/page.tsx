'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import { Project } from '@/types/project';


type Res = {
  status : number,
  message : string,
  data : Project | null,
}


function Page({params} : {params : Promise<{id : string}>}) {
  const [data, setData] = useState<Project>();

  useEffect(() => {
    const fetchData = async () => {
      const { id } = await params;
      const res = await fetch(`/api/project/${id}`);
      const parseRes : Res = await res.json();
      if (parseRes.message === "Id not found") {

      } else {
        if(parseRes.data) {
          setData(parseRes.data);
        }
      }


    }
    fetchData();


  }, [])
  return (
    <>
    <div>{data?.project_title}</div>
    </>
  )
}

export default Page