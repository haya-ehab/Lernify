import React, { createContext, useContext, useEffect, useRef, useState } from "react";

interface WebSocketContextType {
  sendMessage: (msg: string) => boolean; // ✅ now returns boolean
  lastMessage: string | null;
}

export const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lastMessage, setLastMessage] = useState<string | null>(null);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    ws.current = new WebSocket(`${protocol}//${window.location.host}/ws`);

    ws.current.onmessage = (event) => {
      setLastMessage(event.data);
    };

    ws.current.onopen = () => {
      console.log("✅ WebSocket connected");
    };

    ws.current.onerror = (error) => {
      console.error("❌ WebSocket error", error);
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  const sendMessage = (msg: string): boolean => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(msg);
      return true; // ✅ sent successfully
    } else {
      console.warn("⚠️ WebSocket is not open. Message not sent:", msg);
      return false; // ❌ not sent
    }
  };

  return (
    <WebSocketContext.Provider value={{ sendMessage, lastMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};

// ✅ custom hook
export const useWebSocket = () => {
  const ctx = useContext(WebSocketContext);
  if (!ctx) {
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  }
  return ctx;
};
