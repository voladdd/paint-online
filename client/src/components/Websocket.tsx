import { useContext, useEffect, useState } from "react";
import Canvas from "./Canvas";
import SettingBar from "./SettingBar";
import Toolbar from "./Toolbar";
import { WebsocketContext } from "../contexts/WebsocketContext";
import Chat from "./Chat";

const Websocket = () => {
  const socket = useContext(WebsocketContext);
  const [messages, setMessages] = useState<string[]>([]);
  const onSend = (value: string) => {
    socket.emit("newMessage", value);
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected!");
    });
    socket.on("onMessage", (data) => {
      console.log("onMessage received!", data.content);
      setMessages((prev) => [...prev, data.content]);
    });
    return () => {
      console.log("Unregistering events...");
      socket.off("connect");
      socket.off("onMessage");
    };
  }, []);

  return (
    <div className="App">
      <Toolbar />
      <SettingBar />
      <Canvas />
      <Chat onSend={onSend} messages={messages} />
    </div>
  );
};

export default Websocket;
