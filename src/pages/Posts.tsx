import { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/* === IMAGES (ALREADY IN PROJECT) === */
import petDog1 from "@/assets/pet-dog-1.jpg";
import petCat1 from "@/assets/pet-cat-1.jpg";
import petDog2 from "@/assets/pet-dog-2.jpg";
import petCat2 from "@/assets/pet-cat-2.jpg";

/* =========================================================
   POSTS DATA — 6 EXAMPLE POSTS
========================================================= */
const POSTS = [
  {
    id: 1,
    author: { name: "Sarah Mitchell", avatar: petDog1 },
    pet: { name: "Max", type: "Golden Retriever" },
    content: "Max just learned his 10th trick! 🎉 Any tips for teaching 'play dead'?",
    image: petDog1,
    likes: 234,
    comments: 45,
    time: "2h ago",
  },
  {
    id: 2,
    author: { name: "James Chen", avatar: petCat1 },
    pet: { name: "Whiskers", type: "Orange Tabby" },
    content: "Whiskers found the perfect sunny spot and refuses to move ☀️🐱",
    image: petCat1,
    likes: 189,
    comments: 32,
    time: "4h ago",
  },
  {
    id: 3,
    author: { name: "Emma Wilson", avatar: petDog2 },
    pet: { name: "Snowball", type: "Pomeranian" },
    content: "First day at the dog park and Snowball made so many friends 🐕💕",
    image: petDog2,
    likes: 312,
    comments: 67,
    time: "6h ago",
  },
  {
    id: 4,
    author: { name: "Arjun Verma", avatar: petDog1 },
    pet: { name: "Rocky", type: "Labrador" },
    content: "Rocky’s first vet visit went great today! 🐶",
    image: petDog1,
    likes: 142,
    comments: 21,
    time: "8h ago",
  },
  {
    id: 5,
    author: { name: "Neha Kapoor", avatar: petCat2 },
    pet: { name: "Luna", type: "Persian Cat" },
    content: "Any suggestions for healthy homemade food for cats? 🐾",
    image: petCat2,
    likes: 198,
    comments: 40,
    time: "10h ago",
  },
  {
    id: 6,
    author: { name: "Karthik R", avatar: petDog2 },
    pet: { name: "Simba", type: "Indie Dog" },
    content: "Evening walks are Simba’s favorite part of the day 🌅🐕",
    image: petDog2,
    likes: 176,
    comments: 29,
    time: "12h ago",
  },
];

/* =========================================================
   POST CARD
========================================================= */
const PostCard = ({ post }: { post: (typeof POSTS)[0] }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card-premium rounded-2xl overflow-hidden card-hover"
    >
      {/* HEADER */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={post.author.avatar} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{post.author.name}</p>
            <p className="text-xs text-muted-foreground">
              {post.pet.name} • {post.pet.type}
            </p>
          </div>
        </div>
        <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
      </div>

      {/* CONTENT */}
      <div className="px-4 pb-3 text-muted-foreground">
        {post.content}
      </div>

      {/* IMAGE */}
      <img
        src={post.image}
        alt={post.pet.name}
        className="w-full h-64 object-cover"
      />

      {/* ACTIONS */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex gap-4">
          <button
            onClick={toggleLike}
            className="flex items-center gap-2"
          >
            <Heart
              className={`w-5 h-5 ${
                liked ? "fill-primary text-primary" : ""
              }`}
            />
            {likes}
          </button>

          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            {post.comments}
          </div>

          <Share2 className="w-5 h-5" />
        </div>

        <Bookmark className="w-5 h-5" />
      </div>

      <p className="px-4 pb-4 text-xs text-muted-foreground">
        {post.time}
      </p>
    </motion.div>
  );
};

/* =========================================================
   POSTS PAGE
========================================================= */
const Posts = () => {
  return (
    <>
      <Navbar />

      <main className="pt-28 pb-24 aurora-bg">
        <div className="container mx-auto px-4 md:px-6">
          {/* HEADER + CREATE POST */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-display font-bold">
              Community Posts
            </h1>

            <Link
              to="/create-post"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
            >
              <Plus className="w-4 h-4" />
              Create Post
            </Link>
          </div>

          {/* POSTS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Posts;
