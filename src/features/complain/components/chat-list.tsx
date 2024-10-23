import { MyChat, OtherChat } from "./ui/chat-box";

export default function ChatList() {
  return (
    <div className="flex h-[100%] w-full flex-col justify-end gap-8 py-8 pl-8 md:w-[70%]">
      <MyChat />
      <OtherChat />
      <MyChat />
      <OtherChat />
      <input
        className="h-14 rounded-lg bg-background-quaternary p-5"
        placeholder="Send Message"
      />
    </div>
  );
}
