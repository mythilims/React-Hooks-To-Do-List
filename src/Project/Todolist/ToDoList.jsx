import React from "react";
import { Button, Col, Input, Row } from 'reactstrap';
function ToDoList ({taskList,editTask,deleteTask,setEditName}) {
  return (
    <>
    {taskList.map((item,key)=>{
          return(
            <div className='g-3' key={key}>
              <Row>
             <Col md="5" >
              <Input disabled={item.disabled} value={item.name} onChange={(e) =>setEditName(e.target.value,key)}>
              </Input>
             </Col>
             <Col md="3">
             {item.btnName !=='Completed' && <Button color="warning" onClick={()=>editTask(key,item.btnName)}>{item.btnName}</Button>}
             <Button color="success" onClick={()=>editTask(key,'Completed')}>Completed</Button>

             {item.btnName !=='Completed' && <Button color="danger"  onClick={()=>deleteTask(key)}>Delete</Button>}
             </Col>
             </Row>
            </div>
          )
        })}
    </>
  )
}

export default React.memo(ToDoList)
