import {   useState, useEffect} from 'react'; //this
import axios from 'axios';

function Student() {
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [age, setAge] = useState();
    const [students, setStudents] = useState([]); //this

    //useEffect (function, param - dependency) - every refresh
    useEffect(()=>{
        const url = 'http://localhost/sat-app/db.php'; //link to db
        axios.get(url).then((response)=>{
            setStudents(response.data);
            console.log(students);
        })
    },[]) // this

    const submitBtn = function(e){
        e.preventDefault();
        let getData = new FormData();
        getData.append('fname',fname); //key-value pairs
        getData.append('lname',lname); //key-value pairs
        getData.append('age', age);
        getData.append('function', 'insert');

        axios({
            method: 'POST', //get / post
            url: 'http://localhost/sat-app/db.php', //db link
            data: getData , //data to be transfered
            config: 'Content-Type ="multipart/form-data"'
        }).then(function(response){
            //alert("successfully deleted!");
            const url = 'http://localhost/sat-app/db.php'; //link to db
            axios.get(url).then((response)=>{
                setStudents(response.data);
                console.log(students);
            })
        });
    }

    const delBtn = function(e){
        //alert (e.currentTarget.id);
        let getData = new FormData();
        getData.append('stud_id', e.currentTarget.id);
        getData.append('function', 'delete');
        axios({
            method: 'POST', //get / post
            url: 'http://localhost/sat-app/db.php', //db link
            data: getData , //data to be transfered
            config: 'Content-Type ="multipart/form-data"'
        }).then(function(result){
            //alert("successfully deleted!");
            const url = 'http://localhost/sat-app/db.php'; //link to db
            axios.get(url).then((response)=>{
                setStudents(response.data);
                console.log(students);
            })
        }).catch(function(error){
            alert ("mali");
            console.log(error);
        });
    }

    const upBtn = function(e){
        alert (e.currentTarget.title);
        let getData = new FormData();
        getData.append('stud_id', e.currentTarget.title);
        getData.append('fname',document.getElementById('fname'+e.currentTarget.title).value);
        getData.append('lname',document.getElementById('lname'+e.currentTarget.title).value)
        getData.append('age',document.getElementById('age'+e.currentTarget.title).value);
        getData.append('function', 'update');
        axios({
            method: 'POST',
            url: 'http://localhost/sat-app/db.php',
            data: getData ,
            config: 'Content-Type ="multipart/form-data"'
        }).then(function(result){
            alert("successfully updated!");

        }).catch(function(error){
            alert ("mali");
            console.log(error);
        })
    }



    return(
        <div>
            <h1>Student's List</h1>
            <br></br>
            <form action="">
                <input type="text" name="fname" value={fname} onChange = {(e) => setFname(e.target.value)} />
                <input type="text" name="lname" value={lname} onChange = {(e) => setLname(e.target.value)}/>
                <input type="number" name="age" value={age} onChange = {(e) => setAge(e.target.value)}/>
                <input type="submit" onClick={submitBtn} />

            </form>
            <table>
                <thead>
                    <tr>
                        <th> First Name</th>
                        <th> Last Name</th>
                        <th> Age</th>
                    </tr>
                </thead>
                  <tbody>
                  {students.map((val)=>{
                    return(
                    <tr key={val.stud_id}>
                        <td><input id ={'fname'+val.stud_id} defaultValue={val.firstname}  /></td>
                        <td><input defaultValue={val.lastname}  id ={'lname'+val.stud_id} /></td>
                        <td><input defaultValue={val.age}  id ={'age'+val.stud_id}/></td>
                        <td><button id={val.stud_id} onClick={delBtn}>Delete</button></td>
                        <td><button title={val.stud_id} onClick={upBtn}>Update</button></td>
                    </tr>
                    )
                })}

                </tbody>

            </table>
        </div>
    )
}

export default Student;