import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Image, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import petDog1 from "@/assets/pet-dog-1.jpg";
import petCat1 from "@/assets/pet-cat-1.jpg";
import petDog2 from "@/assets/pet-dog-2.jpg";
import petCat2 from "@/assets/pet-cat-2.jpg";

const posts = [
  {
    id: 1,
    author: {
      name: "Sarah Mitchell",
      avatar: petDog1,
      handle: "@sarahpets",
    },
    pet: {
      name: "Max",
      type: "Golden Retriever",
    },
    content: "Max just learned his 10th trick! 🎉 He's officially the smartest pup on the block. Any tips for teaching 'play dead'? #DogTraining #ProudPetParent",
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
    },
    pet: {
      name: "Whiskers",
      type: "Orange Tabby",
    },
    content: "Whiskers discovered the sunny spot on the windowsill today. I haven't seen her move in 3 hours. Living her best life! ☀️🐱 #CatLife #SunnyDays",
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
    },
    pet: {
      name: "Snowball",
      type: "Pomeranian",
    },
    content: "First day at the dog park and Snowball made so many friends! This community is amazing for setting up playdates. 🐕💕 #DogPark #NewFriends",
    image: petDog2,
    likes: 312,
    comments: 67,
    time: "6h ago",
    isLiked: false,
  },
];

interface PostProps {
  post: typeof posts[0];
}

const PostCard = ({ post }: PostProps) => {
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
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 border-2 border-primary/20">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-foreground">{post.author.name}</p>
              <span className="text-xs text-muted-foreground">{post.author.handle}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {post.pet.name} • {post.pet.type}
            </p>
          </div>
        </div>
        <button className="p-2 hover:bg-muted rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-foreground leading-relaxed">{post.content}</p>
      </div>

      {/* Image */}
      <div className="relative aspect-square max-h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.pet.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isLiked ? "liked" : "unliked"}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Heart
                    className={`w-6 h-6 ${isLiked ? "fill-primary text-primary" : ""}`}
                  />
                </motion.div>
              </AnimatePresence>
              <span className="font-medium">{likes}</span>
            </motion.button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <MessageCircle className="w-6 h-6" />
              <span className="font-medium">{post.comments}</span>
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Share2 className="w-6 h-6" />
            </button>
          </div>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Bookmark className="w-6 h-6" />
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-3">{post.time}</p>
      </div>
    </motion.div>
  );
};

export const CommunityFeed = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Community Feed
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            See What's <span className="gradient-text">Happening</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the conversation with pet parents from around the world.
          </p>
        </motion.div>

        {/* Create Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="glass-card rounded-2xl p-4">
            <div className="flex gap-4">
              <Avatar className="w-12 h-12 border-2 border-primary/20">
                <AvatarImage src={petCat2} />
                <AvatarFallback>Y</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <textarea
                  placeholder="Share something about your pet..."
                  className="w-full bg-transparent resize-none focus:outline-none text-foreground placeholder:text-muted-foreground min-h-[60px]"
                />
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-muted rounded-full transition-colors">
                      <Image className="w-5 h-5 text-primary" />
                    </button>
                  </div>
                  <Button size="sm">
                    <Send className="w-4 h-4 mr-2" />
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/posts">View All Posts</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
