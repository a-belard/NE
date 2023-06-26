import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

const PageHeader = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const styles = {
    container: "flex justify-between items-center py-10",
    header: "text-3xl font-bold flex gap-4 items-center",
    btn: "px-4 py-2 text-white rounded-md text-xl",
    btnUser:
      "px-4 py-2 text-white h-14 w-14 rounded-full flex items-center justify-center text-xl bg-[color:var(--primaryColor)]",
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Binary Supermarket</h1>
      <div>
        <button className={styles.btnUser} onClick={onLogout} title="Logout">
          <FaUser />
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
