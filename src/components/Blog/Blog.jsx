import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div>
      <img
        className="rounded-lg w-full"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <img className="w-[60px]  rounded-full" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min red</span>
        </div>
      </div>
      <h2 className="text-4xl">Title: {title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};
Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
