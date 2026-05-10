// single note, shows title + content, Delete and Edit buttons

import { useRef, useState } from "react";

function NoteItem({ note, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);
  const titleInputRef = useRef();
  const contentInputRef = useRef();
  return (
    <>
      <div className="note-card">
        <div>
          <h4>
            {isEditing ? (
              <div>
                <input
                  ref={titleInputRef}
                  type="text"
                  defaultValue={editedTitle}
                />
              </div>
            ) : (
              editedTitle
            )}
          </h4>
          <p className="note-content">
            {isEditing ? (
              <input
                ref={contentInputRef}
                type="text"
                defaultValue={editedContent}
              />
            ) : (
              editedContent
            )}
          </p>
        </div>
        <div>
          {isEditing ? (
            <button
              onClick={() => {
                dispatch({
                  type: "edit-note",
                  id: note.id,
                  title: setEditedTitle(titleInputRef.current.value),
                  content: setEditedContent(contentInputRef.current.value),
                });
                setIsEditing(false);
              }}
            >
              save
            </button>
          ) : (
            <button
              onClick={() => {
                setIsEditing(true);
              }}
            >
              Edit
            </button>
          )}

          <button
            onClick={() => {
              dispatch({ type: "delete-note", id: note.id });
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default NoteItem;
