import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import stripHtml from 'string-strip-html';

const SmallCard = ({ blog }) => {
  return (
    <div className='card'>
      <section>
        <Link href={`/blogs/${blog.slug}`}>
          <a>
            <img
              className='img img-fluid'
              style={{ height: '250px', width: '100%' }}
              src={blog.photo}
              alt={blog.title}
            />
          </a>
        </Link>
      </section>

      <div className='card-body'>
        <section>
          <Link href={`/blogs/${blog.slug}`}>
            <a>
              <h5 className='card-title'>{blog.title}</h5>
            </a>
          </Link>
          <p className='card-text'>{stripHtml(blog.excerpt)}</p>
        </section>
      </div>

      <div className='card-body'>
        Posted {moment(blog.updatedAt).fromNow()} by{' '}
        <Link href={`/profile/${blog.postedBy.username}`}>
          <a className='float-right'>{blog.postedBy.name}</a>
        </Link>
      </div>
    </div>
  );
};

export default SmallCard;
