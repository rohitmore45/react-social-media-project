import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import axios from "axios";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
  }, []);

  // using fetch but async await
  // const res = await fetch("https://dummyjson.com/posts");
  // const data = await res.json();
  // addInitialPosts(data.posts);
  // using axios library
  // const res = await axios.get("https://dummyjson.com/posts");
  // // console.log(res.data.posts);
  // addInitialPosts(res.data.posts);

  return (
    <>
      {postList.length === 0 ? (
        <WelcomeMsg />
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
};
export default PostList;
