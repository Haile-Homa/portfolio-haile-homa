// src/components/AIChat/ChatModal.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaTimes, FaPaperPlane, FaRobot } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../../styles/ChatMarkdown.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

const ChatModal = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 **Hey there!** I’m *Haile Homa’s 🐐 AI Assistant*\nAsk me anything about Haile’s **projects**, **skills**, or **journey** — I’m here to help!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
    return () => clearTimeout(timer);
  }, [messages, loading]);

  // Typewriter effect
  const typeWriterEffect = (text, callback) => {
    let i = 0;
    const interval = setInterval(() => {
      setMessages((prev) => {
        const lastMsg = prev[prev.length - 1];
        if (!lastMsg || lastMsg.role !== "assistant") return prev;
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...lastMsg,
          content: text.slice(0, i + 1),
        };
        return updated;
      });
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, 20); // speed (ms per character)
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || `Request failed with status ${res.status}`);
      }

      // Add empty assistant message first
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      // Animate response
      typeWriterEffect(data.response, () => setLoading(false));
    } catch (err) {
      console.error("💥 Chat Error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `⚠️ **Error:** ${err.message || "Something went wrong."}\n\n🔄 Try again in a bit..`,
        },
      ]);
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-85 sm:w-96 h-[28rem] 
      bg-white dark:bg-[#0f172a] border border-gray-300 dark:border-gray-700 
      rounded-2xl shadow-2xl flex flex-col z-50 animate-fadeIn transition-colors duration-300">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 
        bg-gradient-to-r from-sky-600 to-sky-500 dark:from-sky-700 dark:to-sky-800 
        text-white rounded-t-2xl">
        <span className="font-semibold flex items-center gap-2">
          <FaRobot /> AI Assistant
        </span>
        <button onClick={onClose} className="hover:text-gray-200 transition-colors">
          <FaTimes size={18} />
        </button>
      </div>

      {/* Chat Section */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm 
        bg-gray-50 dark:bg-[#1e293b] text-gray-800 dark:text-gray-100 
        transition-colors duration-300 scrollbar-thin scrollbar-thumb-sky-400 dark:scrollbar-thumb-sky-600">

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div key={i} className={`chat-md p-2 rounded-lg  leading-relaxed ${msg.role === "user"
              ? "bg-sky-100 dark:bg-sky-800 text-right"
              : "bg-gray-200 dark:bg-gray-700 text-left"
              }`}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  strong: ({ node, ...props }) => <strong className="font-semibold text-sky-600 dark:text-blue-400" {...props} />,
                  a: ({ node, ...props }) => <a className="text-sky-500 underline" target="_blank" rel="noopener noreferrer" {...props} />
                }}
              >
                {msg.content}
              </ReactMarkdown>
            </div>
          </div>
        ))}

        {/* AI “thinking” animation */}
        {loading && (
          <div className="flex items-center text-gray-400 text-xs italic gap-1">
            AI is thinking
            <span className="flex space-x-1 ml-1">
              <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.2s]" />
              <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.1s]" />
              <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" />
            </span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Section */}
      <div className="p-3 border-t border-gray-200 dark:border-gray-700 
        flex gap-2 bg-white dark:bg-[#0f172a] transition-colors duration-300">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg p-2 text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <button
          onClick={handleSend}
          className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-sky-600 
            text-white px-3 rounded-lg flex items-center justify-center transition-colors"
        >
          <FaPaperPlane size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChatModal;