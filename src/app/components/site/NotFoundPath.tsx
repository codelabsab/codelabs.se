"use client";

import { usePathname } from "next/navigation";

export default function NotFoundPath() {
  const pathname = usePathname();
  const name = pathname.replace(/^\/+|\/+$/g, "") || "unknown";
  return <span className="text-crit">Error from server (NotFound): pages &quot;{name}&quot; not found</span>;
}
