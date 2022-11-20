import { useContext, useEffect, useState } from "react";
import Canvas from "./Canvas";
import SettingBar from "./SettingBar";
import Toolbar from "./Toolbar";
import { WebsocketContext } from "../contexts/WebsocketContext";
import Chat from "./Chat";
import canvasState from "../store/canvasState";

const Websocket = () => {
  const socket = useContext(WebsocketContext);
  const [messages, setMessages] = useState<string[]>([]);
  const [draw, setDraw] = useState<string>("");

  const onSend = (value: string, name: string) => {
    socket.emit("newMessage", `"${name}": ${value}`);
  };
  const onDraw = (data: string) => {
    socket.emit("newDraw", data);
    setDraw(data);
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected!");
    });
    socket.on("onMessage", (data) => {
      console.log("onMessage received!", data.content);
      setMessages((prev) => [...prev, data.content]);
    });
    socket.on("onDraw", (data) => {
      console.log("onDraw received!", data);
      setDraw(data.content);
      canvasState.updates(data.content);
    });
    return () => {
      console.log("Unregistering events...");
      socket.off("connect");
      socket.off("onMessage");
      socket.off("onDraw");
    };
  }, []);

  return (
    <div className="App">
      <Toolbar />
      <SettingBar />
      <Canvas onDraw={onDraw} draw={draw} />
      <Chat onSend={onSend} messages={messages} />
    </div>
  );
};

export default Websocket;
