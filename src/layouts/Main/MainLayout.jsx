import { Layout } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import AppHeader from "../../components/AppHeader/AppHeader";
import AppContent from "../../components/AppContent/AppContent";

const MainLayout = (props) => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <AppHeader />

        <AppContent>{props.children}</AppContent>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
