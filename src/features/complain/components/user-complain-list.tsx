import UserChatCard from "./ui/user-chat-card";

export default function UserComplainList() {
  return (
    <div className="flex h-[100%] w-[68px] flex-col gap-6 border-r-[1px] border-background-teritery pr-4 pt-8 md:w-[30%]">
      <UserChatCard />
      <UserChatCard />
      <UserChatCard />
    </div>
  );
}
