import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="font-IRANYekan bg-default">
      <Navbar />
      <div>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
