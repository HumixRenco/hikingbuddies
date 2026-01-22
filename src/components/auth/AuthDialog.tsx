import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function AuthDialog({ open, onOpenChange }: Props) {
  const { toast } = useToast();
  const [tab, setTab] = React.useState<"login" | "signup">("login");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!open) {
      setTab("login");
      setEmail("");
      setPassword("");
      setLoading(false);
    }
  }, [open]);

  async function handleLogin() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast({ title: "Couldn’t log in", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "You’re in!", description: "Let’s create something fun." });
    onOpenChange(false);
  }

  async function handleSignup() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) {
      toast({ title: "Couldn’t sign up", description: error.message, variant: "destructive" });
      return;
    }
    toast({
      title: "Account created",
      description: "You’re good to go — open Create event again to continue.",
    });
    onOpenChange(false);
  }

  const disabled = loading || !email.trim() || password.length < 6;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Log in to create events</DialogTitle>
          <DialogDescription>
            Quick login so we can save who created what — no spam, promise.
          </DialogDescription>
        </DialogHeader>

        <Tabs value={tab} onValueChange={(v) => setTab(v as any)} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Log in</TabsTrigger>
            <TabsTrigger value="signup">Sign up</TabsTrigger>
          </TabsList>

          <div className="mt-4 grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="auth-email">Email</Label>
              <Input
                id="auth-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="auth-password">Password</Label>
              <Input
                id="auth-password"
                type="password"
                autoComplete={tab === "login" ? "current-password" : "new-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 6 characters"
              />
            </div>
          </div>

          <TabsContent value="login" className="mt-4">
            <Button variant="cta" className="w-full" disabled={disabled} onClick={handleLogin}>
              {loading ? "Logging in…" : "Log in"}
            </Button>
          </TabsContent>
          <TabsContent value="signup" className="mt-4">
            <Button variant="cta" className="w-full" disabled={disabled} onClick={handleSignup}>
              {loading ? "Creating…" : "Create account"}
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
