import React from "react";

function CustomButton() {
  return (
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary">
        -
      </button>
      <span>{}</span>
      <button type="button" class="btn btn-primary">
        +
      </button>
    </div>
  );
}

export default CustomButton;
