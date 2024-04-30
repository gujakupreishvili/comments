import { FaReply } from "react-icons/fa";
export default function Post({
  img,
  text,
  plus,
  number,
  minus,
  handlereplay,
}: any) {
  return (
    <>
      <div className="post">
        <div className="text-div">
          <div className="user">
            <img src={img} alt="img" />
            <p>name</p>
            <p>1 month ago</p>
          </div>
          <p className="post-text">{text}</p>
        </div>
        <div className="replay-div">
          <button>
            <p onClick={plus}>+</p>
            <p>{number}</p>
            <p onClick={minus}>-</p>
          </button>
          <div className="replay-div">
            <FaReply />
            <p onClick={handlereplay}>replay</p>
          </div>
        </div>
      </div>
    </>
  );
}
