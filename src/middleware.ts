import { NextResponse, type NextRequest } from "next/server";

const baseURL = process.env.NEXT_PUBLIC_FE_URL;

export async function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  if (pathname.startsWith("/oauth/kakao") && searchParams.has("error")) {
    return NextResponse.redirect(`${baseURL}/login`);
  }

  return NextResponse.next();
}
