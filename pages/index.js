import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (result.data) {
        2;
        setData(result.data);
      }
    })();
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-center text-2xl font-bold">Posts</h1>
      <hr className="my-8" />
      <div className="flex flex-col gap-y-10">
        {data.map((item, index) => (
          <Link key={index} passHref href={`post/${item.id}`}>
            <a className="">
              <div className="font-bold text-lg capitalize mb-2">{item.title}</div>
              <p className="text-gray-500">{item.body}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
