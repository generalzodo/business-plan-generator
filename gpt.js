import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to send a prompt to the ChatGPT API
exports.sendMessage = async function (prompt) {
  try {
    return await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          "role": "system",
          "content": "You are a helpful assistant."
        },
       ...prompt
      ],
      temperature: 0.7,
      // max_tokens: 128,
      top_p: 1,
    });

  } catch (error) {
    console.error('Error communicating with the API:', error);
    throw error;
  }
}

// Example usage:

