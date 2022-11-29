import React, { useState, useEffect } from "react";

const getLocalItems = () => {
  let list = localStorage.getItem('ShowData');
  console.log(list)
  
  if(list){
    return JSON.parse(localStorage.getItem('ShowData'));
  }
  else{
    return [];
  }
}



function Maketodo() {
  
  const [data, setData] = useState("");
  const [show, setShow] = useState(getLocalItems());

  const setClick = (e) => {
    e.preventDefault();
    if (data === "") {
      alert("Please Fill The Data");
    } else {
      setShow((order) => {
        return [...order, data];
      });

      setData("");
    }
  };

  const deleteItems = (index) => {
    const newFruits = show.filter(( _, i) => i !== index);
    setShow(newFruits);
    console.log(index);
    console.log(newFruits);
  };

  useEffect(()=>{
    localStorage.setItem('ShowData',JSON.stringify(show))
  },[show])

    
  return (
    <div className="container text-white h-25 bg-secondary rounded-15 w-50 mt-5">
      <div className="row">
        <div className="col">
          <form>
            <div className="mb-3 mt-3 form-check d-flex mx-auto justify-content-center">
              <input
                type="text"
                className="form-control rounded-15 md-9"
                id="exampleInputPassword1"
                autoComplete="off"
                placeholder="Enter your Todos..."
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary mx-3 md-3"
                onClick={setClick}
              >
                Submit
              </button>
            </div>
          </form>
          <div className="col w-100 mt-4 mx-3">
            {show.map((todo, index) => {
              return (
                <div className=" container row text-start flexing" key={index}>
                  <div className="alert alert-primary w-100">
                    {index}
                    <button
                      className="rounded ml-2 mx-2"
                      onClick={() => deleteItems(index)}
                    >
                      ×
                    </button>
                    {todo}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maketodo;
