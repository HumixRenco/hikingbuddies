import * as React from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

type AuthState = {
  user: User | null;
  loading: boolean;
};

export function useAuth() {
  const [state, setState] = React.useState<AuthState>({ user: null, loading: true });

  React.useEffect(() => {
    let mounted = true;

    supabase.auth
      .getUser()
      .then(({ data }) => {
        if (!mounted) return;
        setState({ user: data.user ?? null, loading: false });
      })
      .catch(() => {
        if (!mounted) return;
        setState({ user: null, loading: false });
      });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setState({ user: session?.user ?? null, loading: false });
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  return state;
}
