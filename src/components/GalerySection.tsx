"use client";

import { useEffect } from "react";

export default function GalerySection() {
  const videos = [
    "https://www.instagram.com/reel/C8jUIuWsh-q/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    "https://www.instagram.com/reel/DNNKo2XsF5T/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    "https://www.instagram.com/reel/DQ1Qp0ojY6q/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    "https://www.instagram.com/reel/DOBq2vWjCfk/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    "https://www.instagram.com/reel/DFkHdhHOSmb/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  ];

  useEffect(() => {
    if (globalThis.window !== undefined && (globalThis as unknown as { instgrm: { Embeds: { process: () => void } } }).instgrm) {
      (globalThis as unknown as { instgrm: { Embeds: { process: () => void } } }).instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(script);
    }
  }, []);

  const getEmbedUrl = (url: string) => {
    const baseUrl = url.split("?")[0];
    const cleanUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    return `${cleanUrl}embed`;
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-10 text-neutral-800">
          Momentos Musicales en Vivo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((url, index) => (
            <div 
              key={url} 
              className="overflow-hidden rounded-2xl bg-black shadow-lg aspect-9/16 w-full max-w-[380px] mx-auto border border-neutral-200 relative"
            >
              <iframe
                title={`Video ${index + 1}`}
                src={getEmbedUrl(url)}
                className="absolute w-full h-[125%] left-0 top-0 mt-[-45px]"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
