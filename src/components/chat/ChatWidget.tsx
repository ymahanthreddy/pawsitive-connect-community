import { useEffect, useState } from "react";
import { MessageCircle, X, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ChatUser = {
  id: number;
  name: string;
};

type Message = {
  from: "me" | "bot";
  text: string;
};

const FAKE_REPLIES = [
  "That’s interesting! 🐾",
  "I had a similar experience with my pet.",
  "AI suggests maintaining a regular routine.",
  "Have you tried consulting a vet for that?",
  "Sounds like your pet is doing great!",
];

export const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<ChatUser[]>([]);
  const [activeUser, setActiveUser] = useState<ChatUser | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  /* ================= SYNC WITH NAVBAR ================= */
  const syncUsersWithOnlineCount = () => {
    const count = Number(
      localStorage.getItem("pawsitive_online_count") || 2
    );

    const list: ChatUser[] = Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
    }));

    setUsers(list);

    // If current chat user goes offline
    if (activeUser && !list.find((u) => u.id === activeUser.id)) {
      setActiveUser(null);
      setMessages([]);
    }
  };

  useEffect(() => {
    syncUsersWithOnlineCount();
    const interval = setInterval(syncUsersWithOnlineCount, 5000); // every 5 sec
    return () => clearInterval(interval);
  }, []);

  /* ================= SEND MESSAGE ================= */
  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: "me", text: input }]);
    setInput("");

    setTimeout(() => {
      const reply =
        FAKE_REPLIES[Math.floor(Math.random() * FAKE_REPLIES.length)];
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 1000);
  };

  /* ================= AUTH CHECK ================= */
  const isLoggedIn = localStorage.getItem("pawsitive_is_logged_in");
  if (!isLoggedIn) return null;

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        <MessageCircle />
      </button>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-6 w-80 bg-background border border-border rounded-2xl shadow-xl z-50 overflow-hidden"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <span className="font-semibold text-sm">
                Community Chat (Demo)
              </span>
              <button onClick={() => setOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* USER LIST */}
            {!activeUser && (
              <div className="p-3 space-y-2">
                {users.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => {
                      setActiveUser(u);
                      setMessages([]);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted text-sm"
                  >
                    {u.name}
                  </button>
                ))}
              </div>
            )}

            {/* CHAT VIEW */}
            {activeUser && (
              <div className="flex flex-col h-80">
                <div className="flex items-center gap-2 px-3 py-2 border-b text-sm font-medium">
                  <button
                    onClick={() => {
                      setActiveUser(null);
                      setMessages([]);
                    }}
                    className="p-1 rounded hover:bg-muted"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  Chat with {activeUser.name}
                </div>

                <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`max-w-[75%] px-3 py-2 rounded-lg ${
                        m.from === "me"
                          ? "ml-auto bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {m.text}
                    </div>
                  ))}
                </div>

                <div className="p-2 border-t flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-3 py-2 rounded-lg border text-sm"
                  />
                  <button
                    onClick={sendMessage}
                    className="px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm"
                  >
                    Send
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
