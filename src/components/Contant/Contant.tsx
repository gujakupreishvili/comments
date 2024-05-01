import woman from "../../../public/assets/woman.png";
import you from "../../../public/assets/you.png";
import { useState } from "react";
import Post from "../User-post/Post";
import Other from "../post/Other";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

export default function Contnat() {
  const [number, setNumber] = useState(12);
  const [replay, setReplay] = useState(false);
  const [send, setSend] = useState(false);
  const [comment, setComment] = useState("");
  const [showmodal, setShowmodal] = useState(false);

  function handleSend() {
    if (comment.trim() === "") {
      alert("Please write something...");
    } else {
      setSend(!send);
    }
  }
  function modal() {
    setShowmodal(!showmodal);
  }
  function showDeleteModal() {
    setShowmodal(!showmodal);
    setReplay(false);
    setSend(false);
    setComment("");
  }

  function handlereplay() {
    setReplay(!replay);
  }

  function plus() {
    setNumber((prevNumber) => prevNumber + 1);
  }

  function minus() {
    setNumber((prevNumber) => (prevNumber > 0 ? prevNumber - 1 : 0));
  }
  return (
    <>
      <div className="with-comment">
        <Other
          img={woman}
          plus={plus}
          number={number}
          minus={minus}
          handlereplay={handlereplay}
          text={
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well."
          }
        />
        <div className={replay ? "add" : "none"}>
          <div className="header">
            <img src={you} alt="you" />
            <input
              type="text"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              className={send ? "none" : ""}
            />
            {!send && (
              <button onClick={handleSend} className="reply-btn">
                Reply
              </button>
            )}
            <div className={send ? "control" : "none"}>
              <div className="delete" onClick={modal}>
                <MdDelete />
                <h3>Delete</h3>
              </div>
              <div className="edit">
                <MdEdit />
                <h3 className={!send ? "none" : ""} onClick={handleSend}>
                  Edit
                </h3>
              </div>
            </div>
          </div>
          <p className={send ? "comment" : "none"}>{comment}</p>
        </div>
      </div>
      {showmodal && (
        <div className="modal">
          <div className="overlay">
            <div className="delete-div">
              <h3>Delete comment</h3>
              <p>
                Are you sure you want to delete this comment? This will remove
                the comment and can’t be undone.
              </p>
              <div>
                <button
                  onClick={() => showDeleteModal()}
                  className="delete-btn"
                >
                  YES, DELETE
                </button>
                <button
                  onClick={() => setShowmodal(false)}
                  className="cancel-btn"
                >
                  NO, CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Post />
    </>
  );
}
