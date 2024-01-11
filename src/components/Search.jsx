export default function Search(props) {
  return (
    <div className="form-floating">
      <input
        type="text"
        className="form-control"
        onChange={props.change}
        value={props.search}
        placeholder="Search"
      />
      <label>Search</label>
    </div>
  );
}
