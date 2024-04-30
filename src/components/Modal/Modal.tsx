export default function Modal({ setShowmodal, product, setTodo }: any) {
  const handlDelete = () => {
    setTodo((prev: any[]) => prev.filter((item: any) => item !== product));
    setShowmodal(false);
  };

  return (
    <div className="modal">
      <div className="overlay">
        <div className="delete-div">
          <h3>Delete comment</h3>
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and can’t be undone.
          </p>
          <div>
            <button onClick={handlDelete} className="delete-btn">
              YES, DELETE
            </button>
            <button onClick={() => setShowmodal(false)} className="cancel-btn">
              NO, CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
