import { getResponse } from "@/Utils";

export default async function BaseService({ apiUrl }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${apiUrl}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          ClientId: `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
          ClientSecret: `${process.env.NEXT_PUBLIC_CLIENT_SECRET}`,
        },
      },
      { cache: "no-cache" }
    );
    return getResponse(await response.json());
  } catch (err) {
    return getResponse(err);
  }
}
