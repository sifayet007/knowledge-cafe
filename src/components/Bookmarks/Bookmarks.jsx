import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-[#F3F3F3] md: p-3 m-5 rounded-3xl h-fit">
      <div>
        <h3 className="text-2xl font-bold text-center bg-[#EFEDFD] border-2 border-[#6047EC] rounded-lg p-5">
          Spent time on read : {readingTime}
          min
        </h3>
      </div>

      <h2 className="text-[clamp(1rem, 2.5vw, 2rem)] text-center font-bold mt-5">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.prototype = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
