// holds useReducer, filter state, passes dispatch down

import { useReducer } from "react";
import "./App.css";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function reducer(state, action) {
  if (action.type === "add-note") {
    return [
      ...state,
      { id: Date.now(), title: action.title, content: action.content },
    ];
  }
  if (action.type === "delete-note") {
    return state.filter((note) => note.id !== action.id);
  }
  if (action.type === "edit-note") {
    return state.map((note) =>
      note.id === action.id
        ? { ...note, title: action.title, content: action.content }
        : note,
    );
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <>
      <NoteInput dispatch={dispatch} />
      <NoteList notes={state} dispatch={dispatch} />
    </>
  );
}

export default App;
