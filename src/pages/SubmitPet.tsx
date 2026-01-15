import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Trophy, ArrowLeft, Upload, Camera, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const SubmitPet = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    if (!image) {
      alert("Please upload a photo of your pet before submitting");
      return;
    }
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          {/* BACK */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card-premium rounded-3xl p-8"
          >
            {/* HEADER */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Trophy className="w-8 h-8 text-accent-foreground" />
              </div>

              <h1 className="text-3xl font-display font-bold mb-2">
                Submit Your Pet
              </h1>

              <p className="text-muted-foreground">
                Enter your furry friend for <span className="font-medium">Pet of the Week</span> and
                celebrate their uniqueness with the community.
              </p>
            </div>

            {/* WHY THIS MATTERS */}
            <div className="text-center text-sm text-muted-foreground mb-8">
              Highlighting pets helps inspire responsible ownership and joyful community engagement.
            </div>

            {/* FORM */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Pet's Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your pet's name"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Breed
                </label>
                <input
                  type="text"
                  placeholder="Enter breed"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* UPLOAD PHOTO */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Upload Photo
                </label>

                <div
                  onClick={handleUploadClick}
                  className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition cursor-pointer"
                >
                  {preview ? (
                    <img
                      src={preview}
                      alt="Pet preview"
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  ) : (
                    <>
                      <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                      <p className="text-muted-foreground">
                        Click to upload your pet’s photo
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        PNG or JPG • Max 10MB
                      </p>
                    </>
                  )}
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Why should your pet win?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what makes your pet special..."
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* SUBMIT */}
              <Button
                type="button"
                variant="hero"
                size="lg"
                className="w-full"
                onClick={handleSubmit}
              >
                <Upload className="w-5 h-5 mr-2" />
                Submit Pet
              </Button>
            </form>

            {/* SAFETY / DEMO NOTE */}
            <div className="mt-8 flex gap-3 text-xs text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
              <p>
                Submissions are shown for demonstration purposes. Final submission
                requires signing in to ensure authenticity and community safety.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SubmitPet;
