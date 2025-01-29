# Chef Mistral 🧑‍🍳

Chef Mistral is an AI-powered recipe suggestion application built with React. Simply input 4 or more ingredients, and let Chef Mistral create a delicious recipe for you! This project was created as part of the learning journey following the "Learn React JS - Full Beginner's Tutorial (2024) & Practice Projects" course.

## 🌟 Features

- Input multiple ingredients (minimum 4)
- Receive AI-generated recipe suggestions
- Clean and intuitive user interface
- Responsive design for all devices

## 🛠️ Technologies Used

- React 18
- Vite
- Hugging Face / Mistral

> [!NOTE]
>
> ## ⚠️ Important Note
>
> This repository does not include the API key for Claude. You will need to:
>
> 1. Obtain your own API key from [HuggingFace](https://huggingface.co/settings/tokens)
> 2. Create a `.env` file in the root directory
> 3. Add your API key as follows:

```
VITE_HF_ACCESS_KEY=your_api_key_here
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository:

```bash
git clone https://github.com/yourusername/chef-mistral.git
```

2. Navigate to the project directory:

```bash
cd chef-mistral
```

3. Install dependencies:

```bash
npm install
```

4. Create and configure your `.env` file as mentioned in the Important Note section

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and visit:

```
http://localhost:5173
```

## 📚 Learning Resource

This project was built while following the React JS Beginner's Tutorial (2024) available on YouTube. You can find the tutorial [here](https://www.youtube.com/watch?v=x4rFhThSX04).

## 🤝 Contributing

Feel free to submit issues and pull requests to improve the application.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
