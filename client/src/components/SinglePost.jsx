import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function SinglePost({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  createdAt = format(new Date(createdAt), 'dd/MM/yyyy');

  return (
    <main className='blog-main'>
      <section className='post'>
        <Link to={`/detailpost/${_id}`}>
          <img src={'http://localhost:8000/' + cover} alt='blog post' />
        </Link>
        <div>
          <Link to={`/detailpost/${_id}`}>
            <h2 className='post-description'>{title}</h2>
          </Link>
          <span className='author'>{author.username} </span>
          <span> - </span>
          <time className='post-date'>{createdAt} </time>
          <p className='post-preview'>{summary}</p>
        </div>
      </section>
    </main>
  );
}
