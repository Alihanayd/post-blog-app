import { Avatar, Dropdown, Layout, Menu } from "antd";
import "./AppHeader.css";

const AppHeader = () => {
  const menu = () => {
    return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["/"]}>
        <Menu.Item key="exit">Çıkış Yap</Menu.Item>
      </Menu>
    );
  };
  return (
    <Layout.Header className="app-header">
      <Dropdown overlay={menu} placement="bottomLeft">
        <Avatar style={{ background: "#87d068" }}>U</Avatar>
      </Dropdown>
    </Layout.Header>
  );
};

export default AppHeader;
