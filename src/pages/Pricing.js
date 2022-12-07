import six from '../assets/img/six.jpg';
import { IconBrandInstagram } from '@tabler/icons';

function Login() {

  return (
    <div>
      <br></br>
    <h1 style={{margin:"10px"}}> Please Login! </h1>
    <br></br>
    <div>

      <form>
      <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
      <br></br>
      <button type="submit" className="btn btn-success">Submit</button>
      </form>

  <div>
<br/>
<br/>
<br/>

<div className="card mb-3">
  <img src={six} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">"Today's good mood is sponsored by Mermaid coffee."</h5>
    <br/>

    <div> 
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" 
    width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" 
    strokeLinecap="round" strokeLinejoin="round"> 
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="4" y="4" width="16" height="16" rx="4"></rect>
      <circle cx="12" cy="12" r="3"></circle>
      <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
    </svg>
    <br/>
    <h4>Instagram</h4>
    </div>

  </div>
</div>

<br/>
<br/>

  </div>
  </div>
  
  </div>
  )
}


export default Login; 


// import {   useState, useEffect} from 'react';
// import axios from 'axios';

// function Student() {
//     const [firstname, setfirstname] = useState();
//     const [lastname, setlastname] = useState();
//     const [age, setage] = useState();
//     const [email, setemail] = useState();
//     const [pass, setpass] = useState();
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
//             alert ("mali");
//             console.log(error);
//         });
//     }

//     const upBtn = function(e){
//         // alert (e.currentTarget.title);
        
//         let getData = new FormData();
//         getData.append('costumer_id', e.currentTarget.title);
//         getData.append('firstname',document.getElementById('firstname'+e.currentTarget.title).value);
//         getData.append('lastname',document.getElementById('lastname'+e.currentTarget.title).value)
//         getData.append('age',document.getElementById('age'+e.currentTarget.title).value);
//         getData.append('email',document.getElementById('email'+e.currentTarget.title).value);
//         getData.append('pass',document.getElementById('pass'+e.currentTarget.title).value)
//         getData.append('fav_coffee',document.getElementById('fav_coffee'+e.currentTarget.title).value);        

//         getData.append('function', 'update');
//         axios({
//             method: 'POST',
//             url: 'http://localhost/sat-app/dbReg.php',
//             data: getData ,
//             config: 'Content-Type ="multipart/form-data"'
//         }).then(function(result){
//             alert("successfully updated!");

//         }).catch(function(error){
//             alert ("mali");
//             console.log(error);
//         })
//     }



//     return(
//         <div>
//             <h1>Mermaid Registration List</h1>
//             <br></br>
//             <form action="">
//                 <input type="text" name="firstname" value={firstname} onChange = {(e) => setfirstname(e.target.value)} />
//                 <input type="text" name="lastname" value={lastname} onChange = {(e) => setlastname(e.target.value)}/>
//                 <input type="number" name="age" value={age} onChange = {(e) => setage(e.target.value)}/>
//                 <input type="text" name="email" value={email} onChange = {(e) => setemail(e.target.value)}/>
//                 <input type="password" name="pass" value={pass} onChange = {(e) => setpass(e.target.value)}/>
//                 <input type="text" name="fav_coffee" value={fav_coffee} onChange = {(e) => setfav_coffee(e.target.value)}/>
//                 <input type="submit" className="btn btn-success" onClick={submitBtn} />

//             </form>
//             <table>
//                 <thead>
//                     <tr>
//                         <th> First Name</th>
//                         <th> Last Name</th>
//                         <th> Age </th>
//                         <th> Email</th>
//                         <th> Password </th>
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
//                         <td><input defaultValue={val.fav_coffee}  id ={'fav_coffee'+val.costumer_id}/></td>

//                         <td><button className="btn btn-danger" id={val.costumer_id} onClick={delBtn}>Delete</button></td>
//                         <td><button className="btn btn-success" title={val.costumer_id} onClick={upBtn}>Update</button></td>
//                     </tr>
//                     )
//                 })}

//                 </tbody>

//             </table>
//         </div>
//     )
// }

// export default Student;