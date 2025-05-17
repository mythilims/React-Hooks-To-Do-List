import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import classnames from 'classnames';
const TabOneCom = React.lazy(() => import('./TabOne'));
const TabTwoCom = React.lazy(() => import('./TabTwo'));

function TabList() {
  const [activeTab, setActiveTab] = useState('1');
  return (<>
    <Row>
      <h6>2.𝗛𝗼𝘄 𝘄𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗱𝗲𝘀𝗶𝗴𝗻 𝗮 𝗧𝗮𝗯𝘀 𝗰𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁 𝘄𝗶𝘁𝗵 𝗰𝗼𝗻𝘁𝗲𝗻𝘁 𝘀𝘄𝗶𝘁𝗰𝗵𝗶𝗻𝗴</h6>
      <Nav tabs>
        <NavItem>
          <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => setActiveTab('1')}>
            Tab One
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => setActiveTab('2')}>
            Tab Two
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} >
        <TabPane tabId='1'>
          <TabOneCom />
        </TabPane>
        <TabPane tabId='2'>
          <TabTwoCom />
        </TabPane>
      </TabContent>
    </Row>
  </>)
}

export default TabList;