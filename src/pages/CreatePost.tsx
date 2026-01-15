import { useState } from "react";
import { motion } from "framer-motion";
import { ImagePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const CreatePost = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    // Demo-only submit
    navigate("/posts");
  };

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 aurora-bg">
        <section className="container mx-auto px-4 md:px-6 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card-premium rounded-3xl p-8 shadow-float"
          >
            <h1 className="text-2xl font-display font-bold mb-6">
              Create a Post
            </h1>

            {/* TEXT */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share something about your pet..."
              rows={4}
              className="w-full mb-4 px-4 py-3 rounded-xl bg-background border focus:ring-2 focus:ring-primary outline-none resize-none"
            />

            {/* IMAGE UPLOAD */}
            <label className="flex items-center gap-3 cursor-pointer text-sm text-primary mb-4">
              <ImagePlus className="w-5 h-5" />
              Add Photo
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />
            </label>

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-56 object-cover rounded-xl mb-4"
              />
            )}

            {/* ACTIONS */}
            <div className="flex justify-end gap-3">
              <Button
                variant="ghost"
                onClick={() => navigate("/posts")}
              >
                Cancel
              </Button>

              <Button
                variant="hero"
                onClick={handleSubmit}
                disabled={!content}
              >
                Post
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              Demo only — posts are not persisted.
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CreatePost;
