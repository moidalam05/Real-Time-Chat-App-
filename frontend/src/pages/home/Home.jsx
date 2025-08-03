import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex justify-between w-full h-screen bg-gray-400 bg-opacity-0 rounded-lg">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
