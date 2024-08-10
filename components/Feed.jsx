"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ postList, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {postList &&
        postList.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={() => handleTagClick(post)}
          />
        ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchedPost, setSearchedPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredPost = posts.filter((item) => {
      return (
        item.tag.includes(searchText) ||
        item.prompt.includes(searchText) ||
        item.creator.username.includes(searchText)
      );
    });
    setSearchedPosts(filteredPost);
  }, [searchText]);

  const handleTagClick = (post) => {
    setSearchText(post.tag);
  };
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList
        postList={searchText !== "" ? searchedPost : posts}
        handleTagClick={(post) => handleTagClick(post)}
      />
    </section>
  );
};

export default Feed;
