import ChatList from "../../features/complain/components/chat-list";
import UserComplainList from "../../features/complain/components/user-complain-list";

function ComplainPage() {
  return (
    <div className="flex h-[100%] justify-between px-8">
      <UserComplainList />
      <ChatList />
    </div>
  );
}

export default ComplainPage;
