import React from 'react';



function App1() {

  var empsArray =
    [
      { "empno": 6589, "ename": "SRIRAM", "job": "MANAGER", "sal": 3200, "deptno": 30 },
      { "empno": 7369, "ename": "SMITH", "job": "CLERK", "sal": 800, "deptno": 20 },
      { "empno": 7499, "ename": "ALLEN", "job": "SALESMAN", "sal": 1600, "deptno": 30 },
      { "empno": 6589, "ename": "SRIRAM", "job": "MANAGER", "sal": 3200, "deptno": 30 },
      { "empno": 7369, "ename": "SMITH", "job": "CLERK", "sal": 800, "deptno": 20 },
      { "empno": 7499, "ename": "ALLEN", "job": "SALESMAN", "sal": 1600, "deptno": 30 },
      { "empno": 6589, "ename": "SRIRAM", "job": "MANAGER", "sal": 3200, "deptno": 30 },
      { "empno": 7369, "ename": "SMITH", "job": "CLERK", "sal": 800, "deptno": 20 },
      { "empno": 7499, "ename": "ALLEN", "job": "SALESMAN", "sal": 1600, "deptno": 30 }
    ];




  let resultsArray = empsArray.map(item =>
    <tr>
      <td>{item.empno}</td>
      <td>{item.ename}</td>
      <td>{item.job}</td>
      <td>{item.sal}</td>
      <td>{item.deptno}</td>
    </tr>);

  
  return (
    <>
      <h3>Developing Web Applications using React JS</h3>
      <hr />

      <table border="2" width="500">


        <tr>

          <th>Empno</th>
          <th>Ename</th>
          <th>Job</th>
          <th>Salary</th>
          <th>Deptno </th>
        </tr>

        {resultsArray}
      </table>


    </>
  );
}


function App2and3() {

  let usersArray = [{ "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" },
  { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" },
  { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg" },
  { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg" },
  { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://reqres.in/img/faces/5-image.jpg" },
  { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg" }
  ];

 
  let resultsArray1 = usersArray.map(item =>
    <tr>
      <td>{item.id}</td>
      <td>{item.email}</td>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td><img src = {item.avatar}></img></td>
    </tr>);

  return (
    <>
      <h3>Developing Web Applications using React JS</h3>
      <hr />
      <table border="2" width="500">
        <tr>
          <th>id</th>
          <th>email</th>
          <th>first_name</th>
          <th>last_name</th>
          <th>avatar</th>
        </tr>

        {resultsArray1}

      </table>
      

    </>
  );
}


function App4() {

  let usersArray = [{ "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" },
  { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" },
  { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg" },
  { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg" },
  { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://reqres.in/img/faces/5-image.jpg" },
  { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg" }
  ];

  let Imagearr = usersArray.map(item=>
    <img width="100" src={item.avatar}/>)

  return (
    <>
      <h3>Developing Web Applications using React JS</h3>
      <hr />

      
      <div>
      {Imagearr}
      </div>

    </>
  );
}
export default App1;


/*Assignment Question 5
A “key” is a special string attribute you need to include when creating lists of elements in React. 
Keys are used in React to identify which items in the list are changed, updated, or deleted.
Keys are used to give an identity to the elements in the lists.*/
