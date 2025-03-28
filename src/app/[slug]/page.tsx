"use client";

import Ads from "@/components/ads/Ads";
import { OldAPI } from "@/services/oldService";
import { autoBatchEnhancer } from "@reduxjs/toolkit";
import { setServers } from "dns";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { serialize } from "v8";

interface PageDetails {
  id: number;
  title: string;
  slug: string;
  heading: string;
  short_description: string;
  long_description: string;
  card_heading_one?: string | null;
  card_heading_two?: string | null;
  card_heading_three?: string | null;
  card_description_one?: string | null;
  card_description_two?: string | null;
  card_description_three?: string | null;
  meta_description: string;
  meta_keywords: string;
}

const Page = () => {
  const params = useParams(); // Get dynamic route parameters
  const slug = params?.slug as string | undefined; // Ensure it's a string or undefined
  const [error, setError] = useState<boolean>(false);
  const [show_pages, set_show_pages] = useState<PageDetails>();

  useEffect(() => {
    if (slug) {
      console.log("Slug:", slug);

      OldAPI.get(`page/${slug}`)
        .then((res) => {
          console.log("res", res.data);
          set_show_pages(res.data);
          setError(false); // Reset error if successful
        })
        .catch((err) => {
          console.error("Error fetching page:", err);
          setError(true); // Set error state if API fails (e.g., 404)
        });
    }
  }, [slug]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-red-500">
          404 - Page Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      {/* banner */}
      <div>
        <h1>Dynamic Page: {slug}</h1>
      </div>

      {/* add */}
      <Ads />

      {/* long description */}
      <div className="flex items-center justify-start md:justify-center">
        <div className="lg:w-[80%] px-4 sm:px-8 lg:px-10">
          <div>
            <p className="w-[100%] lg:w-[100%] xl:w-[100%] mt-4 font_2 text-md leading-[1.6] mb-6 text-black font-Lexend">
              <p
                dangerouslySetInnerHTML={{
                  __html: show_pages?.long_description || "",
                }}
              ></p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
