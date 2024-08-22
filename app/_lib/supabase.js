import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY; // Replace with your Supabase API key
export async function fetchRowById(id) {
  const endpoint = `${SUPABASE_URL}/rest/v1/cabins?id=eq.${id}`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
  });

  // Ensure response is not empty
  if (response.bodyUsed) {
    console.error("Response body has already been used.");
    return;
  }

  if (!response.ok) {
    console.error("Error fetching data:", response.status, response.statusText);
    const errorText = await response.text();
    console.error("Error response:", errorText);
    return;
  }

  const data = await response.json();
  const cabin = data[0];
  // console.log("Fetched Row:", cabin);
  return cabin;
}
