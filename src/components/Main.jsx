import Button from "./Button";
import React, { useState } from "react";

export default function Main({ data }) {
  const [selectedId, setSelectedId] = useState(data[0]?.id || null);

  const handleButtonClick = (id) => {
    setSelectedId(id);
  };

  const selectedItem = data.find((item) => item.id === selectedId);

  return (
    <main>
      <div className="container">
        <div className="d-flex flex-row justify-content-start gap-5">
          <Button data={data} onClick={handleButtonClick} />
        </div>

        <div className="card">
          <h1>{selectedItem.title}</h1>
          <p>{selectedItem.description}</p>
        </div>
      </div>
    </main>
  );
}
