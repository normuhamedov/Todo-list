import React, { useState } from "react";
import "./Todo.scss";
import { ImArrowLeft } from 'react-icons/im'

import { ImArrowRight } from 'react-icons/im'
const Todo = () => {

  const [visible, setVisible] = useState(false);
  
  const [editMode, setEditMode] = useState(false);

  const [todo, setTodo] = useState(() => {
    const getStorage = localStorage.getItem("todos");
    return getStorage ? JSON.parse(getStorage) : [];
  });

  const [id, setId] = useState('')
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  // const [salary, setSalary] = useState("");
  
  const getInputId = (e) => {
    setId(e.target.value);
  };
  const getInputfName = (e) => {
    setFirstName(e.target.value);
  };
  const getInputlName = (e) => {
    setLastName(e.target.value);
  };
  // const getInputuName = (e) => {
  //   setUserName(e.target.value);
  // };
  const getInputAge = (e) => {
    setAge(e.target.value);
  };
  // const getInputSalary = (e) => {
  //   setSalary(e.target.value);
  // };
  
  const inputValueSubmit = (e) => {
    e.preventDefault();
    if (!firstName.trim()) return;
    if (editMode) {
      const updatedTodo = todo.map((item) => {
        if (item.id === id) {
          item.fName = firstName;
          item.lName = lastName;
          // item.uName = userName;
          item.age = age;
          // item.salary = salary;
        }
        return item;
      });
      setTodo(updatedTodo);
      setId("");
      setFirstName("");
      setLastName("");
      // setUserName("");
      setAge("");
      // setSalary("");
      setEditMode(false);
    } else {
      setTodo([
        ...todo,
        {
          id: id,
          fName: firstName,
          lName: lastName,
          // uName: userName,
          age: age,
          // salary: salary,
        },
      ]);
      setId("");
      setFirstName("");
      setLastName("");
      // setUserName("");
      setAge("");
      // setSalary("");
    }
  };

localStorage.setItem("todos", JSON.stringify(todo));

const userDelete = (id) => {
  const deleteItem = todo.filter((item) => item.id !== id);
  setTodo(deleteItem);
}

const userEdit = (id) => {
  setEditMode(true);
  setId(id);
  const editItem = todo.find((item) => item.id === id);
  setFirstName(editItem.fName);
  setLastName(editItem.lName);
  // setUserName(editItem.uName);
  setAge(editItem.age);
  // setSalary(editItem.salary);
};


return (
  <>


<table className="tablesss">
  <thead>
  <tr className="table_row" >
  <th>ID</th>
  <th>First name</th>
  <th>Last name</th>
  {/* <th>Username</th> */}
  <th>Age</th>
  {/* <th>Salary</th> */}
  <th>Edit</th>
  <th>Delate</th>
  </tr>
  </thead>
  
  <tbody>
  {
    todo.map((element) => (
      <tr key={element.id}>
      <td>{element.id}</td>
      <td> {element.fName}</td>
      <td> {element.lName}</td>
      {/* <td> {element.uName}</td> */}
      <td> {element.age}</td>
      {/* <td> {element.salary}</td> */}
      <td>
      <button className="btn btn-success" onClick={() => userEdit(element.id)}>edit</button>
      </td>
      <td>  
      <button className="btn btn-danger" onClick={() => userDelete(element.id)}>
      Delate
      </button>
      </td>
      </tr>
      ))
    }
    </tbody>
    </table>

    <div className="todo_inputs">
  <div className="headerss">
  < ImArrowRight className="leftt"/>
  <button className="btn btn-primary"
        onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>
        < ImArrowLeft className="leftt"/>
  </div> 
  <div className={`myDiv ${visible ? 'visible' : ''}`}>
    <div className="crud crudActive">
    <h2 className="todo_title">User Details</h2>
    
    <form action="#" className="form" onSubmit={inputValueSubmit}>
    <input type="text" placeholder="id" value={id} onChange={getInputId} />
    <input type="text" placeholder="First name" value={firstName} onChange={getInputfName} />
    <input type="text" placeholder="Last name" value={lastName} onChange={getInputlName} />
    {/* <input type="text" placeholder="Username" value={userName} onChange={getInputuName} /> */}
    <input type="text" placeholder="Age" value={age} onChange={getInputAge} />
    {/* <input type="text" placeholder="Salary" value={salary} onChange={getInputSalary} /> */}
    
    <button type="submit" className="submit_btn">{editMode ?  "Save" : "Add"}</button>
    </form>
    
    </div>
    
    
    </div>
    </div>
    
   
    </>
    );
  };
  
  export default Todo;