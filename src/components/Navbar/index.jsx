'use client';

import React from 'react';
import { HomeOutlined, MailOutlined } from '@ant-design/icons';
// import { Menu } from 'antd';
import { Menu } from 'antd/es';

import './index.scss';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Dashboard', 'sub1', <HomeOutlined />),
  getItem(
    'COMPONENTS',
    'grp',
    null,
    [
      getItem('UI Element', 'sub2', <MailOutlined />, [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
      ]),
      getItem('Form', 'sub3', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
      ]),
    ],
    'group'
  ),
  getItem('Navigation One', 'sub4', <MailOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];
function Navbar({ collapsed }) {
  return (
    <div
      style={{
        width: collapsed ? 70 : 256, // Điều chỉnh chiều rộng của menu
      }}
    >
      <Menu
        defaultSelectedKeys={['sub1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
}
export default Navbar;
