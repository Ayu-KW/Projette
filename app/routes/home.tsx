import { useOutletContext } from "react-router";

import type { Session } from "@supabase/supabase-js";

type RootContext = {
  session: Session | null;
};

export default function Home() {
  const { session } = useOutletContext<RootContext>();

  return (
    <div className="p-6">
      {session ? (
        <div>✅ Logged in: {session.user.email}</div>
      ) : (
        <div>❌ Not logged in</div>
      )}
    </div>
  );
}
