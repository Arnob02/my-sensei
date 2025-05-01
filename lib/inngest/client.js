import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "my-sensei",
  name: "My Sensei",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
