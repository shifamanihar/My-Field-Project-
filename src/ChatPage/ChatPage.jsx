import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaPaperPlane, FaUserCircle, FaRobot, FaComments } from "react-icons/fa";
import "./ChatPage.css";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "m0",
      role: "assistant",
      content:
        "👋 Hi! I can answer your queries using RJ College data. Ask me about admissions, fees, timetable, or exams.",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const listRef = useRef(null);
  const canSend = useMemo(
    () => input.trim().length > 0 && !loading,
    [input, loading]
  );

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setError("");
    setLoading(true);

    const userMsg = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    try {
      const botReply = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "🤖 (Mock reply) Soon I’ll be connected to backend with RJ College data.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setTimeout(() => {
        setMessages((m) => [...m, botReply]);
        setLoading(false);
      }, 1200);
    } catch (e) {
      setError("⚠️ Error: Backend not reachable.");
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (canSend) sendMessage(input);
    }
  }

  return (
    <div className="chat-page">
      <div className="chat-wrapper">
        <div className="chat-container">
          {/* Header */}
          <div className="chat-header">
            <FaComments className="header-icon" />
            <h3>RJ College Helpdesk</h3>
          </div>

          {/* Messages */}
          <div ref={listRef} className="chat-body">
            {messages.map((m) => (
              <div key={m.id} className={`message-wrapper ${m.role}`}>
                <div className="avatar">
                  {m.role === "user" ? <FaUserCircle /> : <FaRobot />}
                </div>
                <div className={`message ${m.role}`}>
                  <p>{m.content}</p>
                  <span className="msg-time">{m.time}</span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="message-wrapper assistant">
                <div className="avatar">
                  <FaRobot />
                </div>
                <div className="message typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="chat-footer">
            {error && <div className="chat-error">{error}</div>}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
            />
            <button onClick={() => sendMessage(input)} disabled={!canSend}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
