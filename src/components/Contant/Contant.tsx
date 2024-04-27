import woman from "../../../public/assets/woman.png";
import you from "../../../public/assets/you.png";
import { useState } from "react";
import Post from "../User-post/Post";


export default function Contnat() {
  const [number, setNumber] = useState(12);
  const [replay, setReplay] = useState(false);
  const [send, setSend] = useState(false);
  const [comment, setComment] = useState("");

  function handleSend() {
    if (comment === "") {
      setSend(send);
      alert("write something...");
    }
    setSend(!send);
  }

  function handlereplay() {
    setReplay(!replay);
  }

  function plus() {
    setNumber(number + 1);
  }
  function minus() {
    if (number == 0) {
      return 0;
    }
    setNumber(number - 1);
  }
  console.log(comment);
  return (
    <>
      <div className="with-comment">
        <div className="post">
          <div className="text-div">
            <div className="user">
              <img src={woman} alt="img" />
              <p>name</p>
              <p>1 month ago</p>
            </div>
            <p className="post-text">
              Impressive! Though it seems the drag feature could be improved.
              But overall it looks incredible. You’ve nailed the design and the
              responsiveness at various breakpoints works really well.
            </p>
          </div>
          <div className="replay-div">
            <button>
              <p onClick={plus}>+</p>
              <p>{number}</p>
              <p onClick={minus}>-</p>
            </button>
            <div>
              <img src="" alt="arrow" />
              <p onClick={handlereplay}>replay</p>
            </div>
          </div>
        </div>
        <div className={replay ? "add" : "none"}>
          <img src={you} alt="you" />
          <input
            type="text"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            className={send ? "none" : ""}
          />
          <p className={send ? "comment" : "none"}>{comment}</p>
          <button onClick={handleSend}>send</button>
        </div>
      </div>
      <Post />
    </>
  );
}
