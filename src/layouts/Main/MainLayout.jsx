import { Layout } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";

const MainLayout = (props) => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        {/* header */}

        {/* content */}

        {props.children}
      </Layout>
    </Layout>
  );
};

export default MainLayout;
