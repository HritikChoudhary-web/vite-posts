import './Card.css';
import { usePost } from '../context/PostContext';

const Card = ({ post }) => {
  const { removePost } = usePost();

  return (
    <div className="card">
      <button className="close-btn" onClick={() => removePost(post.id)}>×</button>
      <h3>{post.title.slice(0, 35)}...</h3>
      <p>{post.body.slice(0, 50)}...</p>
      <img
        src={`https://picsum.photos/200/100?random=${post.id}`}
        alt="Random"
      />
      <small>{new Date().toUTCString()}</small>
    </div>
  );
};

export default Card;
