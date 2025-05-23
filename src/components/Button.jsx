export default function Button({ data, onClick, selectedId }) {
  return data.map((data) => (
    <button
      className={`btn ${
        selectedId === data.id ? "btn-primary" : "btn-outline-primary"
      }`}
      key={data.id}
      onClick={() => onClick(data.id)}>
      {data.title}
    </button>
  ));
}
