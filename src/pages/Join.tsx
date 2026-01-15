import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

/* LOGO */
import logo from "@/assets/logo.jpg";

type UserType = {
  name: string;
  email: string;
  password: string;
};

const Join = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();

    const users: UserType[] = JSON.parse(
      localStorage.getItem("pawsitive_users") || "[]"
    );

    if (users.find((u) => u.email === email)) {
      toast({
        title: "Account already exists",
        description: "Please sign in instead.",
        variant: "destructive",
      });
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("pawsitive_users", JSON.stringify(users));

    toast({
      title: "Account created 🎉",
      description: "You can now sign in.",
    });

    setTimeout(() => navigate("/auth"), 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 paw-pattern opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="glass-card-premium rounded-3xl p-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 shadow-glow">
              <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            </div>

            <h1 className="text-2xl font-display font-bold mb-2">
              Join the Pack
            </h1>
            <p className="text-muted-foreground">
              Become part of a supportive pet community
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleJoin}>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                required
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/50 border focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/50 border focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/50 border focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <Button variant="hero" className="w-full" size="lg">
              Create Account
            </Button>
          </form>

          <p className="text-center text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/auth" className="text-primary font-semibold">
              Sign In
            </Link>
          </p>

          <div className="mt-8 flex gap-3 text-xs text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
            Demo mode — user data is stored locally.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Join;
