import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APEX_DOMAIN = "1000promptchuyengia.shop";
const WWW_DOMAIN = "www.1000promptchuyengia.shop";

export function proxy(req: NextRequest) {
  const host = req.headers.get("host") || "";
  if (host === APEX_DOMAIN) {
    const url = req.nextUrl.clone();
    url.host = WWW_DOMAIN;
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
