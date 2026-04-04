import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export default function ImageLightbox({
  open,
  images = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext,
  title = "",
}) {
  useEffect(() => {
    if (!open) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose, onPrev, onNext]);

  if (!open || !images.length) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button className="lightbox-close" onClick={onClose} type="button">
          <X size={20} />
        </button>

        {images.length > 1 && (
          <>
            <button className="lightbox-nav left" onClick={onPrev} type="button">
              <ChevronLeft size={22} />
            </button>
            <button className="lightbox-nav right" onClick={onNext} type="button">
              <ChevronRight size={22} />
            </button>
          </>
        )}

        <motion.div
          className="lightbox-content"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          <img
            src={images[currentIndex]}
            alt={title || "Project image"}
            className="lightbox-image"
          />
          <div className="lightbox-caption">
            <div>{title}</div>
            {images.length > 1 && (
              <div>
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}