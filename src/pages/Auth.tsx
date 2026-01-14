import { motion } from "framer-motion";
import { PawPrint, Mail, Lock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Auth = () => {
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
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 shadow-glow">
              <PawPrint className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-display font-bold text-foreground mb-2">
              Welcome Back
            </h1>
            <p className="text-muted-foreground">
              Sign in to Pawsitive Community
            </p>
          </div>

          <form className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button variant="hero" className="w-full" size="lg">
              Sign In
            </Button>
          </form>

          <p className="text-center text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link to="/join" className="text-primary font-semibold hover:underline">
              Join Now
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
