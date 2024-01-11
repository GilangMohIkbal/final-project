import Search from "./Search";

export default function Header(props) {
  return (
    <header className="bg-danger">
      <div className="container">
        <div className="d-flex justify-content-between align-item-center py-3">
          <h4 className="text-white">{props.title}</h4>
          <div>
            <Search search={props.search} change={props.change} />
          </div>
        </div>
      </div>
    </header>
  );
}
