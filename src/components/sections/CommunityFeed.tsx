import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  Image as ImageIcon,
  Send,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate } from "react-router-dom";

import petDog1 from "@/assets/pet-dog-1.jpg";
import petCat1 from "@/assets/pet-cat-1.jpg";
import petDog2 from "@/assets/pet-dog-2.jpg";
import petCat2 from "@/assets/pet-cat-2.jpg";

/* ================= POSTS DATA ================= */
const posts = [
  {
    id: 1,
    author: {
      name: "Sarah Mitchell",
      avatar: petDog1,
      handle: "@sarahpets",
      badge: "Top Contributor",
    },
    pet: {
      name: "Max",
      type: "Golden Retriever",
    },
    content:
      "Max just learned his 10th trick! 🎉 He's officially the smartest pup on the block.",
    image: petDog1,
    likes: 234,
    comments: 45,
    time: "2h ago",
    isLiked: false,
  },
  {
    id: 2,
    author: {
      name: "James Chen",
      avatar: petCat1,
      handle: "@jamescatdad",
      badge: "Pet Parent",
    },
    pet: {
      name: "Whiskers",
      type: "Orange Tabby",
    },
    content:
      "Whiskers discovered the sunny spot on the windowsill today ☀️🐱",
    image: petCat1,
    likes: 189,
    comments: 32,
    time: "4h ago",
    isLiked: true,
  },
  {
    id: 3,
    author: {
      name: "Emma Wilson",
      avatar: petDog2,
      handle: "@emmapom",
      badge: "Top Contributor",
    },
    pet: {
      name: "Snowball",
      type: "Pomeranian",
    },
    content:
      "First day at the dog park and Snowball made so many friends! 🐕💕",
    image: petDog2,
    likes: 312,
    comments: 67,
    time: "6h ago",
    isLiked: false,
  },
];

/* ================= POST CARD ================= */
const PostCard = ({ post }: { post: typeof posts[0] }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl overflow-hidden"
    >
      {/* HEADER */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 border-2 border-primary/20">
            <AvatarImage src={post.author.avatar} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold flex items-center gap-2">
              {post.author.name}
              <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary flex items-center gap-1">
                <Award className="w-3 h-3" />
                {post.author.badge}
              </span>
            </p>
            <p className="text-sm text-muted-foreground">
              {post.pet.name} • {post.pet.type}
            </p>
          </div>
        </div>
        <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
      </div>

      {/* CONTENT */}
      <div className="px-4 pb-3">{post.content}</div>

      {/* IMAGE */}
      <img
        src={post.image}
        alt={post.pet.name}
        className="w-full h-72 object-cover"
      />

      {/* ACTIONS */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex gap-4">
          <button onClick={handleLike} className="flex gap-1 items-center">
            <Heart
              className={`w-5 h-5 ${
                isLiked ? "fill-primary text-primary" : ""
              }`}
            />
            {likes}
          </button>
          <MessageCircle className="w-5 h-5" />
          <Share2 className="w-5 h-5" />
        </div>
        <Bookmark className="w-5 h-5" />
      </div>
    </motion.div>
  );
};

/* ================= COMMUNITY FEED ================= */
export const CommunityFeed = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handlePost = () => {
    if (!selectedImage) {
      alert("You have to upload an image of your pet");
      return;
    }
    navigate("/auth");
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* VALUE COPY */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-muted-foreground text-lg">
            A place where pet parents share real moments, tips, and experiences —
            helping each other raise happier, healthier pets.
          </p>
        </div>

        {/* CREATE POST */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="glass-card rounded-2xl p-4">
            <div className="flex gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={petCat2} />
                <AvatarFallback>Y</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <textarea
                  placeholder="Share something about your pet..."
                  className="w-full bg-transparent resize-none focus:outline-none min-h-[60px]"
                />

                <div className="flex justify-between items-center mt-3 pt-3 border-t">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleImageClick}
                      className="p-2 hover:bg-muted rounded-full"
                    >
                      <ImageIcon className="w-5 h-5 text-primary" />
                    </button>

                    {selectedImage && (
                      <span className="text-xs text-muted-foreground">
                        Image selected
                      </span>
                    )}

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </div>

                  <Button size="sm" onClick={handlePost}>
                    <Send className="w-4 h-4 mr-2" />
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* POSTS */}
        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No posts yet — be the first to share your pet story 🐾
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link to="/posts">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
