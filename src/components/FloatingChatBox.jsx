import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function FloatingChatBox() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent("Website Inquiry - ArMil Engineering");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:armilengineering@yahoo.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="floating-chat">
      {open && (
        <div className="chat-panel">
          <div className="chat-header">
            <div>
              <strong>Chat with ArMil</strong>
              <div className="chat-subtitle">Send a quick project inquiry</div>
            </div>
            <button
              className="chat-icon-btn"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <form className="chat-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-primary full">
              <Send size={16} />
              Send Inquiry
            </button>
          </form>
        </div>
      )}

      <button
        className="chat-fab"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open chat"
      >
        <MessageCircle size={22} />
      </button>
    </div>
  );
}