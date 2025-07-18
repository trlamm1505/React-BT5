const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      className="p-2 border rounded w-full mb-4"
      type="text"
      placeholder="Tìm kiếm theo tên hoặc email..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBox;
