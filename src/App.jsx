import './App.css';
import Card from './components/Card';
import Pagination from './components/Pagination';
import { usePost } from './context/PostContext';

function App() {
  const { posts, currentPage, postsPerPage, loading } = usePost();

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="app">
      <h1>Post Cards</h1>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          <div className="grid">
            {currentPosts.map(post => (
              <Card key={post.id} post={post} />
            ))}
          </div>
          <Pagination />
        </>
      )}
    </div>
  );
}

export default App;
