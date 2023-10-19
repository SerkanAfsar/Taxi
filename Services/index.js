export default async function BaseService({ apiUrl }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${apiUrl}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      },
      { cache: "no-cache" }
    );
    const result = await response.json();
    return result;
  } catch (err) {
    return {
      success: "failure",
      message: err.message,
    };
  }
}
