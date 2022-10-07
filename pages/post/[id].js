import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (id) {
      (async () => {
        const result = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        if (result.data) {
          setPost(result.data);
        }
      })();
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      (async () => {
        const result = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        );

        if (result.data) {
          setComments(result.data);
        }
      })();
    }
  }, [id]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="font-bold text-lg capitalize text-center">
        {post.title}
      </div>
      <hr className="my-8" />
      <p className="text-gray-500">{post.body}</p>
      <hr className="my-8" />
      <div>
        <h3 className="font-semibold text-xl mb-6">Comments</h3>
        <div className="flex flex-col gap-y-8">
          {comments.map((item, index) => (
            <Fragment key={index}>
              <div>
                <div className="flex gap-x-2 items-center mb-3">
                  <div className="capitalize">{item.name}</div>
                  <a className="lowercase text-blue-500 text-sm" href={`mailto:${item.email}`}>
                    {item.email}
                  </a>
                </div>
                <div className="text-gray-500">{item.body}</div>
              </div>
              <hr />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
