import { useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function FloatingChatBox() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [form, setForm] = useState(initialForm);

  const formRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        "service_hdtlqow",
        "template_zw6eef4",
        formRef.current,
        "LLLFa7fk49l4IGgR7"
      );

      setStatus({
        type: "success",
        message: "Thanks. Your message has been sent successfully.",
      });

      setForm(initialForm);
      formRef.current.reset();
    } catch (error) {
      console.error("Floating chat EmailJS error:", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="floating-chat">
      {open && (
        <div className="chat-panel">
          <div className="chat-header">
            <div>
              <strong>Chat with ArMil</strong>
              <div className="chat-subtitle">
                Send a quick project inquiry
              </div>
            </div>

            <button
              type="button"
              className="chat-icon-btn"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <form ref={formRef} className="chat-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="contact"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => {
                handleChange({
                  target: { name: "name", value: e.target.value },
                });
              }}
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
              name="details"
              placeholder="Tell us about your project..."
              rows="4"
              value={form.message}
              onChange={(e) => {
                handleChange({
                  target: { name: "message", value: e.target.value },
                });
              }}
              required
            />

            <input type="hidden" name="company" value="Website Chat Inquiry" />
            <input type="hidden" name="phone" value="" />
            <input type="hidden" name="service" value="Floating Chat Inquiry" />
            <input type="hidden" name="projectName" value="Website Chat" />
            <input type="hidden" name="location" value="" />
            <input type="hidden" name="deadline" value="" />
            <input type="hidden" name="budget" value="" />
            <input type="hidden" name="fileLink" value="" />
            <input type="hidden" name="referralSource" value="Floating Chat Box" />

            <button
              type="submit"
              className="btn btn-primary full"
              disabled={sending}
            >
              <Send size={16} />
              {sending ? "Sending..." : "Send Inquiry"}
            </button>

            {status.message && (
              <p className={`form-status form-status-${status.type}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      )}

      <button
        type="button"
        className="chat-fab"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open chat"
      >
        <MessageCircle size={22} />
      </button>
    </div>
  );
}