# Jawaab Chatbot

An interactive chatbot that visualizes the AI research process, powered by OpenRouter API.

## Setup

1. Make sure you have Node.js installed (v14+ recommended)

2. Install dependencies:
```bash
npm install
```

3. The OpenRouter API key is configured in the `.env` file.

## Running the Application

Start the development server:
```bash
npm run dev
```

Or for production:
```bash
npm start
```

The application will be available at http://localhost:3000

## Features

- Interactive analysis visualization inspired by Perplexity AI
- Real-time progress indicators for search, reading, and summarization processes
- Source credibility display and previews
- Expandable/collapsible analysis container

## Project Structure

- `answer.html` - The main HTML file with the UI implementation
- `.env` - Environment variables (API keys)
- `config.js` - Configuration settings and environment loading
- `api.js` - API interaction utilities for OpenRouter
- `server.js` - Express server implementation

## Making API Requests

Send a POST request to `/api/chat` with a JSON body:
```json
{
  "prompt": "Your question here",
  "model": "optional model name" 
}
```

The default model is "openai/gpt-3.5-turbo" if not specified.

## Security Note

Keep your API keys secure. Never commit the .env file to a public repository.

# Jawab Loading Animations

This repository contains a collection of loading animations and states for the Jawab project. These animations provide visual feedback during processing, thinking, and interaction states.

## Live Demo

Check out the [live demo](https://madhoundes.github.io/Jawab-preloading/icon-loader.html) to see all animations in action.

## Features

- Various loader styles with and without the app icon
- Different animation types:
  - Default loading indicators
  - Processing states
  - Thinking animations with bubbles
  - Analyzing indicators
  - Voice mode animations
  - Typing indicators
  - Message bubble animations

## Implementation

All animations are implemented using pure CSS and HTML, with minimal JavaScript for toggling states. The animations are designed to be:

- Lightweight
- Accessible
- Easy to integrate
- Visually consistent with the Jawab brand

## File Structure

- `icon-loader.html` - Contains all loading animations
- `icon-loader.css` - Styling for the animations
- `icon-loader.js` - Simple script to toggle loading states

## Getting Started

To use these animations in your project:

1. Include the CSS file in your HTML:
   ```html
   <link rel="stylesheet" href="icon-loader.css">
   ```

2. Copy the HTML structure for the desired animation
3. Add the JavaScript to toggle the loading state:
   ```javascript
   document.getElementById('toggleLoading').addEventListener('click', function() {
       document.querySelectorAll('.icon-container').forEach(container => {
           container.classList.toggle('loading');
       });
   });
   ```

## License

MIT 