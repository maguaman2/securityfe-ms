import { FileOutlined,TeamOutlined, PieChartOutlined, UserOutlined,DesktopOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from "react";

import { BrowserRouter, NavLink,  Route, Routes } from "react-router-dom";
import Users from './pages/Users';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem(<NavLink to="/users">Users</NavLink>, 'sub1', <UserOutlined /> ),
  getItem('Team', 'sub2', <TeamOutlined />),
  getItem('Files', '9', <FileOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();



  return (
    <BrowserRouter>
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
    
          </Breadcrumb>

          <Routes>
                <Route path='/users' element={<Users />}></Route> 
           
                
          </Routes>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </BrowserRouter>
  );
};
export default App;