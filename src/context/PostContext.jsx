import { createContext, useContext, useEffect, useState } from 'react';

const PostContext = createContext();

export const usePost = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      await new Promise(res => setTimeout(res, 5000)); // simulate 5s delay
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data.slice(0, 100)); // just in case API returns more
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const removePost = (id) => {
    let updatedPosts = posts.filter(post => post.id !== id);
    const totalCards = updatedPosts.length;
    const lastPage = Math.ceil(totalCards / postsPerPage);
    if (currentPage > lastPage) setCurrentPage(lastPage);
    setPosts(updatedPosts);
  };

  const value = {
    posts,
    removePost,
    currentPage,
    setCurrentPage,
    postsPerPage,
    loading,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
