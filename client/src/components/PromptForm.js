import React from "react";

export default function PromptForm() {
  return (
    <div>
      <h1>Add New Prompt</h1>
      <form method="POST" action="http://localhost:5000/create">
        <div>
          <label>Title</label>
          <input type="text" name="title" required />
        </div>

        <div>
          <label>Description</label>
          <input type="text" name="description" required />
        </div>

        <div>
          <button type="submit">Add Anime</button>
        </div>
      </form>
    </div>
  );
}
