"use client"

import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Aos () {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quad',
      duration: 1000,
    });
  }, [])

  return <></>
}