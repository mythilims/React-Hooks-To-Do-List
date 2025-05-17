import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import classnames from 'classnames';
const TabOneCom = React.lazy(() => import('./TabOne'));
const TabTwoCom = React.lazy(() => import('./TabTwo'));

function TabList() {
  const [activeTab, setActiveTab] = useState('1');
  return (<>
    <Row>
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