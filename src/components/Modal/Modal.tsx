export default function Modal({setShowmodal , product, setTodo}:any) {

  const handlDelete = ()=>{
    setTodo((prev: any[]) => prev.filter((item: any) => item !==product))
    setShowmodal(false)

  }

  return (
    <div>
      <p>you sure </p>
      <button onClick={handlDelete}>Delete</button>
      <button onClick={()=>setShowmodal(false)}>Canlce</button>
    </div>
  );
}
