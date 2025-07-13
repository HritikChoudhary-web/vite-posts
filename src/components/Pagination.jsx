import { usePost } from '../context/PostContext';

const Pagination = () => {
  const { posts, currentPage, setCurrentPage, postsPerPage } = usePost();
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
