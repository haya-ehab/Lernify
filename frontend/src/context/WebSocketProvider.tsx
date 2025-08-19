
import { createContext, useEffect, useState, ReactNode } from "react";

export const WebSocketContext = createContext<WebSocket | null>(null);

export function WebSocketProvider({ children }: { children: ReactNode }) {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/ws");
    setSocket(ws);

    ws.onopen = () => console.log("✅ WS connected");
    ws.onclose = () => console.log("🔌 WS closed");

    return () => ws.close();
  }, []);

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
}
