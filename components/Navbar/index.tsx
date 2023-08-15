"use client";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  HomeOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { NextPage } from "next";
import "./index.scss";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "sub1", <HomeOutlined />),
  getItem(
    "COMPONENTS",
    "grp",
    null,
    [
      getItem("UI Element", "sub2", <MailOutlined />, [
        getItem("Option 1", "1"),
        getItem("Option 2", "2"),
        getItem("Option 3", "3"),
        getItem("Option 4", "4"),
      ]),
      getItem("Form", "sub3", <MailOutlined />, [
        getItem("Option 5", "5"),
        getItem("Option 6", "6"),
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ],
    "group"
  ),
];

export interface Props {
  collapsed: boolean;
}

const App: NextPage<Props> = ({ collapsed }) => {
  return (
    <div className={`${collapsed == true ? "w-[70px]" : "w-[256px]"}`}>
      <Menu
        defaultSelectedKeys={["sub1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default App;
