import React, { useState } from 'react';
import { Container, View, Body } from './styles';



export default function Home(){
   

const [users, setUsers] = useState([
    {id: 1, name:'JP'},
])

    function handleAddUsers(e){
       
        setUsers([...users, {id: users.length+1, name:'nome'}]);
        
            e.preventDefault()
    }
    function handleDeleteUsers(id){
        setUsers([...users].splice(id,1))
    }
    
    return(
        <Body> 
        <Container>
            <form>
                <h2>Nome</h2>
                <input
                    type="text"
                   
               />
            <button onClick={handleAddUsers}>Add</button>
            </form>
        </Container>
        <View>
            <h2>View</h2>
            <table>
              {users.map(user =>(
                  <tr key={user.id}>
                  <td> {user.name} </td>
                  <td>     
                      <button>Editar</button>
                      <button onClick={handleDeleteUsers}>Deletar</button>
                  </td>
              </tr>
              ))}
            
            </table>
        </View>
        </Body>
    );
}