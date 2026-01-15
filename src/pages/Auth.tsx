import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

/* LOGO */
import logo from "@/assets/logo.jpg";

type User = {
  name: string;
  email: string;
  password: string;
};

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const users: User[] = JSON.parse(
      localStorage.getItem("pawsitive_users") || "[]"
    );

    const matchedUser = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    );

    if (!matchedUser) {
      toast({
        title: "Invalid credentials",
        description: "Email or password is incorrect.",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem(
      "pawsitive_logged_in_user",
      JSON.stringify(matchedUser)
    );
    localStorage.setItem("pawsitive_is_logged_in", "true");

    toast({
      title: "Login successful 🎉",
      description: `Welcome back, ${matchedUser.name}!`,
    });

    setTimeout(() => navigate("/"), 1000);
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
              Welcome Back
            </h1>
            <p className="text-muted-foreground">
              Sign in to continue to Pawsitive Community
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleLogin}>
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
              Sign In
            </Button>
          </form>

          <p className="text-center text-muted-foreground mt-6">
            Don’t have an account?{" "}
            <Link to="/join" className="text-primary font-semibold">
              Join Now
            </Link>
          </p>

          <div className="mt-8 flex gap-3 text-xs text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
            Demo mode — authentication uses local browser storage.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
