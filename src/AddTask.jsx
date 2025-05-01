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
        let UpdateTask = taskList.map((task, index) => key === index ? { ...task, name: value } : task);
        setTaskList(UpdateTask);
    }, [taskList]);

    const editTask = useCallback((key, btnName) => {
        let updateTaskList = taskList.map((task, index) => {
            if (index === key) {
                if (btnName === 'Edit') {
                    return { ...task, disabled: false, btnName: 'Save' }

                } else if (btnName === 'Save') {
                    return { ...task, disabled: true, btnName: 'Edit' }

                } else {
                    return { ...task, disabled: true, btnName: 'Completed' }

                }
            } else {
                return task
            }
        })


        setTaskList(updateTaskList);
    }, [taskList]);

    const deleteTask = useCallback((key) => {
        let UpdateTask =taskList.filter((_,keys) => keys!==key  );
        setTaskList(UpdateTask);
    }, [taskList]);
    return (
        <>
            <p>To-Do List</p>

            <Row>
                <TotalNoTask taskList={taskList} />
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