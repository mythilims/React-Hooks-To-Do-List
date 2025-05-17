import './App.css';
import React, { Suspense, createContext, useState } from 'react';
import { Col, Row, Card, CardHeader } from 'reactstrap';
export const Details = createContext('');
const CommonComponent = React.lazy(() => import('./Project/Common'));
const LoadingTaskCom = React.lazy(() => import('./Project/Todolist/AddTask'));
const LoadingTabList = React.lazy(() => import('./Project/Tab/TabList'));

function App() {
  const [comName, setComName] = useState('TODO');
  const handleClick = (name) => {
    setComName(name);
  }
  return (
    <div className="card">

      <Details.Provider value={{ title: 'To-Do List' }}>
        <CommonComponent handleClick={handleClick} />
        <Suspense fallback={<p>Loading...</p>}>
          <Row className='mt-5'>
            <Col md="12">
              <Card>
                {comName === 'TODO' && <LoadingTaskCom />}
                {comName === 'TAB' && <LoadingTabList />}
              </Card>

            </Col>

          </Row>


        </Suspense>
      </Details.Provider>
    </div>
  );
}

export default App;
