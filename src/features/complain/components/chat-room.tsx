import { Avatar } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import { red } from "@mui/material/colors";
import { useAppSelector } from "../hooks/use-store";
import { IMessage } from "@/types/chat";

export default function ChatRoom() {
  const user = useAppSelector((state) => state.auth.entities);

  const socket = useMemo(() => {
    if (!user) return null;
    return io(import.meta.env.VITE_API_URL, {
      query: {
        userId: user.id,
      },
    });
  }, [user]);

  const [connected, setConnected] = useState(false);
  console.log("socket connect", connected);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [listRooms, setListRooms] = useState<string[]>([]);
  const [selectedRoom, setSelectedRoom] = useState("");
  // const [userInfo, setUserInfo] = useState({ username: "", userId: user?.id });

  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      console.log("connected");
      setConnected(true);
    });

    socket.on("fullChats", (data: IMessage[]) => {
      setMessages(data);
    });

    socket.on("connected", (data) => {
      console.log(data);
      setListRooms(data.rooms);
    });

    socket.on("receiveChats", (data) => {
      console.log(data);
      setMessages((prev) => [...(prev || []), data]);
      setMessage("");
    });

    return () => {
      socket.off("connect");
      socket.off("receiveChats");
    };
  }, [socket]);

  if (!socket) {
    return <p>Loading</p>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex h-[100%] justify-between px-8">
      {/* === */}
      <div className="flex h-[100%] w-[68px] cursor-pointer flex-col gap-6 border-r-[1px] border-background-teritery pr-4 pt-8 md:w-[30%]">
        {listRooms.length > 0 &&
          listRooms.map((room) => (
            <div
              key={room}
              onClick={() => {
                setSelectedRoom(room);
                setMessages([]);
                socket.emit("getChats", { roomId: room });
              }}
              className="flex cursor-pointer items-center gap-6"
            >
              <Avatar
                sx={{ bgcolor: red[500], width: 50, height: 50 }}
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="hidden md:block">
                <p>chat-{room}</p>
                <p className="text-sm text-gray-textB">
                  Yes, is there anything I can help
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* === */}
      <div className="flex h-[100%] w-full flex-col justify-center gap-8 py-4 pl-8 md:w-[70%]">
        {selectedRoom ? (
          <div className="flex h-[100%] w-full flex-col justify-end gap-8">
            <p className="rounded-md bg-background-secondary p-2 text-center">
              chat-{selectedRoom}
            </p>
            <div className="flex h-full flex-col gap-4 overflow-y-auto scrollbar-hide">
              {messages?.length > 0 &&
                messages.map((message) => (
                  <div key={message.id}>
                    {message.userId == String(user.id) ? (
                      <div className="flex justify-end">
                        <div className="h-fit w-fit rounded-l-lg rounded-t-lg bg-background-quaternary px-4 py-2">
                          <p className="font-extralight">{message.content}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-4">
                        <Avatar
                          sx={{ bgcolor: red[500], width: 50, height: 50 }}
                          alt={message?.user?.profile?.fullname}
                          src={String(message?.user?.profile?.profilePhoto)}
                        />
                        <div className="h-fit w-fit rounded-r-lg rounded-t-lg bg-background-teritery px-4 py-2">
                          <p className="font-extralight">{message.content}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
            <div className="flex gap-2">
              <input
                className="h-12 rounded-lg bg-background-quaternary p-5"
                placeholder="Send Message"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ width: "100%" }}
              />
              <button
                onClick={() =>
                  socket.emit("sendChat", {
                    roomId: selectedRoom,
                    userId: String(user?.id),
                    username: user?.username,
                    image: user?.profile.profilePhoto,
                    message,
                  })
                }
                className="rounded-md bg-red px-4"
              >
                Send
              </button>
            </div>
          </div>
        ) : (
          <p className="justify-center text-center">No selected chat room</p>
        )}
      </div>
    </div>
  );
}
