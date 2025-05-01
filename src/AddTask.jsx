import { useState, useCallback } from 'react'
import { Button, Col, Input, Row } from 'reactstrap';
import ToDoList from "./ToDoList";
import TotalNoTask from './TotalNoTask';
function AddTask() {
    const [taskName, setTaskName] = useState('');
    const [taskList, setTaskList] = useState([]);
    const addTask = useCallback(() => {
        if (taskName !== '') {
            setTaskList((
                pre => [
                    ...pre,
                    {
                        name: taskName,
                        disabled: true,
                        btnName: 'Edit'

                    }
                ]
            ))
            setTaskName('');
        }

    }, [taskName]);
    const setEditName = useCallback((value, key) => {
        let UpdateTask = [...taskList];
        UpdateTask[key].name = value;
        setTaskList(UpdateTask);
    }, [taskList])
    const editTask = useCallback((key, btnName) => {
        let UpdateTask = [...taskList];
        if (btnName === 'Edit') {
            UpdateTask[key].disabled = false;
            UpdateTask[key].btnName = 'Save';
        } else if (btnName === 'Save') {
            UpdateTask[key].btnName = 'Edit';
            UpdateTask[key].disabled = true;
        } else {
            UpdateTask[key].btnName = 'Completed';
            UpdateTask[key].disabled = true;
        }
        setTaskList(UpdateTask);
    }, [taskList]);

    const deleteTask = useCallback((key) => {
        let UpdateTask = [...taskList];
        UpdateTask.splice(key, 1);
        setTaskList(UpdateTask);
    }, []);
    return (
        <>
            <p>To-Do List</p>

            <Row>
                <TotalNoTask taskList={taskList}/>
            </Row>
            <Row>
                <Col md="5">
                    <Input value={taskName} onChange={(e) => setTaskName(e.target.value)}>
                    </Input>

                </Col>

                <Col md="3">
                    <Button onClick={() => addTask()} color='primary'>Add Task</Button>
                </Col>
            </Row>

            <Row >
                <ToDoList taskList={taskList} deleteTask={deleteTask} editTask={editTask} setEditName={setEditName} />

            </Row>

        </>
    )
}

export default AddTask;