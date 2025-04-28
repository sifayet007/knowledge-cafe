import { prototype } from "postcss/lib/previous-map";
import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="mt-8">
      <img
        className="rounded-lg w-full"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center mt-8">
        <div className="flex items-center gap-6">
          <img className="w-[60px]  rounded-full" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min red</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-xl text-orange-400"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-[clamp(20px, 50%, 50px)] font-bold my-4 ">
        Title: {title}
      </h2>
      <p className="mb-5">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      {/* read mark button  */}
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="underline text-[#6047EC]"
      >
        Mark as read
      </button>

      <hr className="my-10" />
    </div>
  );
};
Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
  handleMarkAsRead: prototype.func,
};

export default Blog;
