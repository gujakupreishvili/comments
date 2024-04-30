import you from "../../../public/assets/you.png";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { MdDelete, MdEdit } from "react-icons/md";

interface PostProps {}

export default function Post({}: PostProps) {
  const [comment, setComment] = useState<string>("");
  const [todo, setTodo] = useState<string[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [, setEditText] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number>(-1);

  function handleSubmit() {
    if (!comment) {
      alert("write something...");
      return;
    }
    if (editIndex === -1) {
      setTodo((prev) => [...prev, comment]);
    } else {
      setTodo((prev) => {
        const updatedTodo = [...prev];
        updatedTodo[editIndex] = comment;
        return updatedTodo;
      });
      setEditIndex(-1);
      setEditText("");
    }
    setComment("");
  }

  function showDeleteModal() {
    setShowModal(!showModal);
  }

  function handleEdit(index: number) {
    setEditIndex(index);
    setEditText(todo[index]);
    setComment(todo[index]);
  }

  return (
    <>
      <div className="your-post1">
        {todo.map((item, index) => {
          return (
            <div key={index} className="your-prost-result">
              <div className="user">
                <img src={you} alt="" />
                <p className="your-name">juliusomo</p>
                <p className="you-div">You</p>
                <p className="date">1 month ago</p>
              </div>
              <p className="item">{item}</p>
              <div onClick={showDeleteModal} className="delete">
                <MdDelete />
                <h3>Delete</h3>
              </div>
              <div className="edit" onClick={() => handleEdit(index)}>
                <MdEdit />
                <h3>Edit</h3>
              </div>
              {showModal && (
                <Modal
                  setShowModal={setShowModal}
                  product={item}
                  setTodo={setTodo}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="your-post ">
        <textarea
          placeholder="Add a comment..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          className="user-input"
        />
        <div className="user-div">
          <img src={you} alt="" />
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
    </>
  );
}
