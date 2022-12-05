// import {   useState, useEffect} from 'react';
// import axios from 'axios';

// function Student() {
//     const [firstname, setfirstname] = useState();
//     const [lastname, setlastname] = useState();
//     const [age, setage] = useState();
//     const [email, setemail] = useState();
//     const [pass, setpass] = useState();
//     const [username, setusername] = useState();
//     const [fav_coffee, setfav_coffee] = useState();

//     const [costumer, setcostumer] = useState([]); 

    
//     useEffect(()=>{
//         const url = 'http://localhost/sat-app/dbReg.php'; 
//         axios.get(url).then((response)=>{
//             setcostumer(response.data);
//             console.log(costumer);
//         })
//     },[]) 

//     const submitBtn = function(e){
//         e.preventDefault();
//         let getData = new FormData();
//         getData.append('firstname',firstname); 
//         getData.append('lastname',lastname); 
//         getData.append('age', age);
//         getData.append('email', email);
//         getData.append('pass',pass); 
//         getData.append('username', username);
//         getData.append('fav_coffee', fav_coffee);
//         getData.append('function', 'insert');


//         axios({
//             method: 'POST', 
//             url: 'http://localhost/sat-app/dbReg.php',
//             data: getData , 
//             config: 'Content-Type ="multipart/form-data"'
//         }).then(function(response){
//             //alert("successfully deleted!");
//             const url = 'http://localhost/sat-app/dbReg.php'; 
//             axios.get(url).then((response)=>{
//                 setcostumer(response.data);
//                 console.log(costumer);
//             })
//         });
//     }

//     const delBtn = function(e){
//         //alert (e.currentTarget.id);
//         let getData = new FormData();
//         getData.append('costumer_id', e.currentTarget.id);
//         getData.append('function', 'delete');
//         axios({
//             method: 'POST', 
//             url: 'http://localhost/sat-app/dbReg.php', 
//             data: getData , 
//             config: 'Content-Type ="multipart/form-data"'
//         }).then(function(result){
//             //alert("successfully deleted!");
//             const url = 'http://localhost/sat-app/dbReg.php'; 
//             axios.get(url).then((response)=>{
//                 setcostumer(response.data);
//                 console.log(costumer);
//             })
//         }).catch(function(error){
//             // alert ("mali");
//             console.log(error);
//         });
//     }

//     const upBtn = function(e){
//         // alert (e.currentTarget.title);
//         // alert("successfully deleted!");
//         let getData = new FormData();
//         getData.append('costumer_id', e.currentTarget.title);
//         getData.append('firstname',document.getElementById('firstname'+e.currentTarget.title).value);
//         getData.append('lastname',document.getElementById('lastname'+e.currentTarget.title).value)
//         getData.append('age',document.getElementById('age'+e.currentTarget.title).value);
//         getData.append('email',document.getElementById('email'+e.currentTarget.title).value);
//         getData.append('pass',document.getElementById('pass'+e.currentTarget.title).value)
//         getData.append('username',document.getElementById('username'+e.currentTarget.title).value);
//         getData.append('fav_coffee',document.getElementById('fav_coffee'+e.currentTarget.title).value);        

//         getData.append('function', 'update');
//         axios({
//             method: 'POST',
//             url: 'http://localhost/sat-app/dbReg.php',
//             data: getData ,
//             config: 'Content-Type ="multipart/form-data"'
//         }).then(function(result){
//             // alert("successfully updated!");

//         }).catch(function(error){
//             // alert ("mali");
//             console.log(error);
//         })
//     }



//     return(
//         <div>
//             <h1>Mermaid Costumer List</h1>
//             <br></br>
//             <form action="">
//                 <input type="text" name="firstname" value={firstname} onChange = {(e) => setfirstname(e.target.value)} />
//                 <input type="text" name="lastname" value={lastname} onChange = {(e) => setlastname(e.target.value)}/>
//                 <input type="number" name="age" value={age} onChange = {(e) => setage(e.target.value)}/>
//                 <input type="text" name="email" value={email} onChange = {(e) => setemail(e.target.value)}/>
//                 <input type="password" name="pass" value={pass} onChange = {(e) => setpass(e.target.value)}/>
//                 <input type="text" name="username" value={username} onChange = {(e) => setusername(e.target.value)}/>
//                 <input type="text" name="fav_coffee" value={fav_coffee} onChange = {(e) => setfav_coffee(e.target.value)}/>
//                 <input type="submit" onClick={submitBtn} />

//             </form>
//             <table>
//                 <thead>
//                     <tr>
//                         <th> First Name</th>
//                         <th> Last Name</th>
//                         <th> Age </th>
//                         <th> Email</th>
//                         <th> Password </th>
//                         <th> User Name</th>
//                         <th> Favorite Coffee</th>
                        
//                     </tr>
//                 </thead>
//                   <tbody>
//                   {costumer.map((val)=>{
//                     return(
//                     <tr key={val.costumer_id}>
//                         <td><input id ={'firstname'+val.costumer_id} defaultValue={val.firstname}  /></td>
//                         <td><input defaultValue={val.lastname}  id ={'lastname'+val.costumer_id} /></td>
//                         <td><input defaultValue={val.age}  id ={'age'+val.costumer_id}/></td>
//                         <td><input defaultValue={val.email}  id ={'email'+val.costumer_id}/></td>
//                         <td><input defaultValue={val.pass}  id ={'pass'+val.costumer_id} /></td>
//                         <td><input defaultValue={val.username}  id ={'username'+val.costumer_id}/></td>
//                         <td><input defaultValue={val.fav_coffee}  id ={'fav_coffee'+val.costumer_id}/></td>

//                         <td><button id={val.costumer_id} onClick={delBtn}>Delete</button></td>
//                         <td><button title={val.costumer_id} onClick={upBtn}>Update</button></td>
//                     </tr>
//                     )
//                 })}

//                 </tbody>

//             </table>
//         </div>
//     )
// }

// export default Student;