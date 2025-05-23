export default function Button({ data, onClick }) {
  return data.map((data) => (
    <button
      className="btn btn-primary"
      key={data.id}
      onClick={() => onClick(data.id)}>
      {data.title}
    </button>
  ));
}
