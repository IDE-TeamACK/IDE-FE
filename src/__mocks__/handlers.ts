/* eslint-disable no-console */

import {
  type HttpHandler,
  type HttpResponseResolver,
  HttpResponse,
  http,
  delay,
} from "msw";

const delayMS = 1200;
const baseURL = `${process.env.API_URL}/api/v1`;

const get = (path: string, resolver: HttpResponseResolver) =>
  http.get(baseURL + path, async (info) => {
    console.log(`[MSW]: ${info.request.method} ${info.request.url} ✅`);
    await delay(delayMS);
    return resolver(info);
  });

const post = (path: string, resolver: HttpResponseResolver) =>
  http.post(baseURL + path, async (info) => {
    const body = await info.request.json();
    console.log(`[MSW]: ${info.request.method} ${info.request.url} ✅`);
    console.log(` ﾤ ${JSON.stringify(body)}`);
    await delay(delayMS);
    return resolver(info);
  });

const error = (message: string, status: number) =>
  HttpResponse.json({ message: `${message} (MSW)` }, { status });

const getParams = (url: string) => new URL(url).searchParams;

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiS0lNIiwiaWF0IjozNzMxMDQ0ODI2OSwiZXhwIjozNzMxMDQ0ODI3MH0.JN5xnjehhf6ng5j7mZDYmcyZt0mX07yEbFEgBl3wm78";

const handlers: HttpHandler[] = [
  post("/auth/login", () => {
    // 인가된 사용자
    return HttpResponse.json({
      token,
      memberId: "member-id",
      hasExtraDetails: true,
    });
    // 인가되지 않은 사용자
    return HttpResponse.json({
      token: null,
      memberId: null,
      hasExtraDetails: false,
    });
  }),
  get("/auth/join/username-duplicate", ({ request }) => {
    const params = getParams(request.url);
    const name = params.get("name");
    const testNames = ["test", "user", "chan", "asdf"];

    if (!name) {
      return error("유효하지 않은 요청입니다", 400);
    }
    return HttpResponse.json({
      isDuplicate: testNames.some((testName) => testName === name),
    });
  }),
];

export default handlers;
