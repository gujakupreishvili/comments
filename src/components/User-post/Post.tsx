import you from "../../../public/assets/you.png";
import { useState } from "react";
import Modal from "../Modal/Modal";
export default function Post() {
  const [comment, setComment] = useState("");
  const [todo, setTodo] = useState([]);
  const [showmodal, setShowmodal] = useState(false);

  function handleSubmit() {
    if (!comment) {
      alert("write something...");
    }
    setTodo((prev) => [...prev, comment]);
    setComment("");
  }
  function showDeleteModal() {
    setShowmodal(!showmodal);
  }
  console.log(todo);
  return (
    <>
      <div className="your-post1">
        {todo.map((item) => {
          return (
            <div>
              <div className="user">
                <img src={you} alt="" />
                <p>juliusomo</p>
                <p>You</p>
                <p>1 month ago</p>
              </div>
              <p>{item}</p>
              <button onClick={showDeleteModal}>delelte</button>
              <button>update</button>
              {showmodal && <Modal  setShowmodal={setShowmodal} product={item} setTodo={setTodo}/>}
            </div>
          );
        })}
      </div>

      <div className="your-post ">
        <input
          type="text"
          placeholder="Add a comment..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <div className="user-div">
          <img src={you} alt="" />
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
    </>
  );
}
