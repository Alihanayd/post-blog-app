import { Layout } from "antd";
import "./AppContent.css";

const AppContent = (props) => {
  return (
    <Layout.Content className="app-content">
      <div className="app-content-wrapper">{props.children}</div>
    </Layout.Content>
  );
};

export default AppContent;