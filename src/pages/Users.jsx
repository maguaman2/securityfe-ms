import { useState, useEffect } from "react";
import { listUsers } from '../services/usersServices';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'firstname',
    dataIndex: 'firstname',
    key: 'firstname',
  },
  {
    title: 'password',
    dataIndex: 'password',
    key: 'password',
  },
  {
    title: 'lastname',
    dataIndex: 'lastname',
    key: 'lastname',
  },

];


const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    listUsers().then(data => {
      setUsers(data);      
    }
    );
  }, []);

  return (
    <>
      
      <Table columns={columns} dataSource={users} />
    </>

  );


}


export default Users;




