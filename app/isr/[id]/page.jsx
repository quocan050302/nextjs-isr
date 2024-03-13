import { RenderingInfo } from "@/app/TabGroup/rendering-info";
import React from "react";

export default async function Page({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    next: { revalidate: 60, tags: ["collection"] },
  });
  const data = await res.json();

  return (
    <div>
      {data.map((post, index) => (
        <div key={index} className="grid grid-cols-6 gap-x-6 gap-y-3">
          <div className="col-span-full space-y-3 lg:col-span-4">
            <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
              {post.title}
            </h1>
            <p className="font-medium text-gray-500">{post.body}</p>
          </div>
          <div className="-order-1 col-span-full lg:order-none lg:col-span-2">
            <RenderingInfo type="isr" />
          </div>
        </div>
      ))}
    </div>
  );
}
