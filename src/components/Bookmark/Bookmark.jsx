import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-slate-200 p-4 my-4 rounded-xl">
      <h3 className="text-lg font-semibold"> {title}</h3>
    </div>
  );
};
Bookmark.prototype = {
  bookmark: PropTypes.object,
};

export default Bookmark;
