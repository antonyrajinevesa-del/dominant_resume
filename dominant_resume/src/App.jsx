import { useState } from "react";
import "./index.css";

/*
  REUSABLE REACT LAB TEMPLATE
  Keep the header, form, result area, and reset button.
  Change the fields and handleSubmit logic for each lab question.
*/

const initialForm = {
  name: "",
  value: "",
  category: "",
};

function App() {
  const [form, setForm] = useState(initialForm);
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");

  // Common form input handler
  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setMessage("");
  }

  // Replace this logic with the selected question's requirement
  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim()) {
      setMessage("Please enter a name or title.");
      return;
    }

    const newResult = {
      id: Date.now(),
      name: form.name.trim(),
      value: form.value.trim(),
      category: form.category,
    };

    setResults([...results, newResult]);
    setForm(initialForm);
    setMessage("Added successfully!");
  }

  function handleDelete(id) {
    setResults(results.filter((item) => item.id !== id));
  }

  function handleReset() {
    setForm(initialForm);
    setResults([]);
    setMessage("");
  }

  return (
    <main>
      <header>
        <h1>React Lab Application</h1>
        <p>Reusable starter template for React practicals</p>
      </header>

      <section>
        <h2>Application Form</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name / Title *</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter a name or title"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="value">Value / Description</label>
          <input
            id="value"
            name="value"
            type="text"
            placeholder="Enter a value or description"
            value={form.value}
            onChange={handleChange}
          />

          <label htmlFor="category">Category / Type</label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Other">Other</option>
          </select>

          <div className="buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>

        {message && <p role="status">{message}</p>}
      </section>

      <section>
        <h2>Results ({results.length})</h2>

        {results.length === 0 ? (
          <p>No results yet. Submit the form to add one.</p>
        ) : (
          <ul>
            {results.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong>
                {item.value && <span> — {item.value}</span>}
                {item.category && <span> ({item.category})</span>}
                {" "}
                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <footer>
        <p>React + Vite · Replace the form and logic for each question</p>
      </footer>
    </main>
  );
}

export default App;
