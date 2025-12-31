import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  const addStudent = (e) => {
    e.preventDefault();

    if (editId === null) {
      setStudents([...students, { id: Date.now(), name }]);
    } else {
      setStudents(
        students.map((s) =>
          s.id === editId ? { ...s, name } : s
        )
      );
      setEditId(null);
    }

    setName("");
  };

  const editStudent = (student) => {
    setName(student.name);
    setEditId(student.id);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>CRUD App</h2>

      <form onSubmit={addStudent}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student Name"
          required
        />
        <button type="submit">
          {editId ? "Update" : "Add"}
        </button>
      </form>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}
            <button onClick={() => editStudent(student)}>Edit</button>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
