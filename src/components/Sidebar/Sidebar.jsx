import { Menu, Layout } from "antd";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Layout.Sider className="side-bar">
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]}>
        <Menu.Item key="/">
          {/* <Link to="/"></Link> */}
          Ana Sayfa
        </Menu.Item>
        <Menu.Item key="post/create-post">
          {/* <Link to="/post/create-post"></Link> */}
          Yeni Post
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
