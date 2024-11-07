// import ChatList from "./chat-list";
// import UserComplainList from "./user-complain-list";

// export default function ChatRoom() {
//   return (
// <div className="flex h-[100%] justify-between px-8">
//   <UserComplainList />
//   <ChatList />
// </div>
//   );
// }

import { Avatar } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { red } from "@mui/material/colors";

const ChatRoom = () => {
  const { userId } = useParams();

  const socket = useMemo(() => {
    return io("http://localhost:3000", {
      query: {
        userId,
      },
    });
  }, []);
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { message: string; userId: string; username: string }[]
  >([]);
  const [listRooms, setListRooms] = useState<string[]>([]);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [userInfo, setUserInfo] = useState({ username: "", userId: userId });

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
      setConnected(true);
    });

    socket.on(
      "fullChats",
      (data: { message: string; userId: string; username: string }[]) => {
        setMessages(data);
      },
    );

    socket.on("connected", (data) => {
      console.log(data);
      setListRooms(data.rooms);
    });

    socket.on("receiveChats", (data) => {
      console.log(data);
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("connect");
      socket.off("receiveChats");
    };
  }, []);

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
                <p>room-{room}</p>
                <p className="text-sm text-gray-textB">
                  Yes, is there anything I can help
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* === */}
      <div className="flex h-[100%] w-full flex-col justify-end gap-8 py-4 pl-8 md:w-[70%]">
        <p className="rounded-md bg-background-secondary p-2 text-center">
          room-{selectedRoom}
        </p>
        <div className="flex h-full flex-col gap-8 overflow-y-auto scrollbar-hide">
          {messages?.length > 0 &&
            messages.map((message) => (
              <div key={message.message}>
                {message.userId === userInfo.userId ? (
                  <div className="flex justify-end">
                    <div className="h-fit w-fit rounded-l-lg rounded-t-lg bg-background-quaternary px-4 py-2">
                      <p className="font-extralight">{message.message}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <Avatar
                      sx={{ bgcolor: red[500], width: 50, height: 50 }}
                      alt="Remy Sharp"
                      src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <div className="h-fit w-fit rounded-r-lg rounded-t-lg bg-background-teritery px-4 py-2">
                      <p className="font-extralight">{message.message}</p>
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
                userId: userInfo.userId,
                username: userInfo.username,
                message,
              })
            }
            className="rounded-md bg-red px-4"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
