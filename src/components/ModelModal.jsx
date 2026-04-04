import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ModelViewer from "./ModelViewer";

export default function ModelModal({ open, onClose, title, modelPath }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="model-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="model-modal-panel"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          <div className="model-modal-header">
            <div>
              <div className="mini-pill">Interactive 3D Model</div>
              <h3 className="model-modal-title">{title}</h3>
            </div>

            <button className="model-close-btn" onClick={onClose} type="button">
              <X size={18} />
            </button>
          </div>

          <p className="model-modal-text">
            Rotate the model by hand to explore geometry, proportions, and detailing.
          </p>

          <ModelViewer modelPath={modelPath} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}