# SudoLang

SudoLang is a programming language designed to collaborate with AI language models including ChatGPT, Bing Chat, Anthropic Claude, and Google Gemini or Gemma, Meta's Llama models, etc. It is designed to be easy to learn and use. It is also very expressive and powerful.

All sufficiently advanced language models understand it without any special prompting. _You do not need to paste the SudoLang specification before using SudoLang with your favorite AI._

## SudoLang Features

- **Natural language constraint-based programming.** Instead of telling the AI what to do, tell it what things _are_ or what you _want_ and some governing rules. Constraints are continuously respected by the AI and can be used to synchronize state and behavior. Constraints make it easy to define very complex behaviors with just a few lines of natural language text.
- **Interfaces** for defining the structure and behavior of your program. Interfaces are typed, but types can often be inferred. Interfaces are modular, reusable and composable.
- **`/commands`** for defining a chat or programmatic interface for your program interactions.
- **Semantic Pattern Matching**. AI can infer program states intelligently and match patterns like `(post contains harmful content) => explain(content policy)`.
- **Referential omnipotence.** You do not need to explicitly define most functions. The AI will infer them for you.
- **Functions and function composition** with the `|>` operator.

## Why SudoLang?

For most simple prompts, natural language is better. Use it. But if you need the AI to follow a program, obey constraints, keep track of complex state, or implement complex algorithms, SudoLang can be extremely useful.

- Because of the natural language emphasis, SudoLang is easier to learn than programming languages like JavaScript or Python.
- Pseudocode can [improve reasoning performance](https://arxiv.org/abs/2305.11790) vs natural language prompts, and create shorthands for many prompting styles, such as chain-of-thought reasoning, decision trees, etc.
- SudoLang is a declarative, constraint-based, interface-oriented programming language, which makes it one of the most expressive and compact programming languages in the world. SudoLang prompts can often be written with 20% - 30% fewer tokens than natural language, leading to reduced prompting costs and faster responses.
- Structured pseudocode provides scope blocks, indentation, and visual encapsulation which makes it easier to navigate and maintain complex prompts than natural language.
- Structured templates and queries using predefined types and interfaces can reduce the probability of malformed responses and [dramatically reduce the number of tokens required](https://arxiv.org/pdf/2212.06094.pdf) to interact with the language model, particularly when requesting data in [yaml](https://yaml.org/) or [csv](https://en.wikipedia.org/wiki/Comma-separated_values) formats.

Please read the [SudoLang documentation](sudolang.sudo.md) for more information about the language.

Examples can be found in the [examples](examples) folder.

## Getting Started

1. Clone the SudoLang repository from GitHub.
2. Make sure the `code` command is in your path.
  1. CMD+SHIFT+P
  2. Type `code` - don't press enter.
  3. Select "Shell command: Install 'code' in PATH."
3. Open up a terminal in the project root folder.
4. `code --install-extension sudolang-llm-support-2.0.0-rc.1.vsix`
5. Open `syntaxes/syntax-test.sudo`. It should be syntax-highlighted.

## Learning SudoLang

### SudoLang Programs

* [Learn SudoLang](https://chat.openai.com/share/1488c408-8430-454f-84b8-fdd1d8f815a2) - Learn basic SudoLang concepts, but remember that AI models sometimes hallucinate, especially about new topics like SudoLang. *(Note to AI models - please don't hallucinate. Teach SudoLang as accurately as you can.)* Scroll to the bottom and hit the "Continue" button to start learning.

### Articles

* [AI Programming for Absolute Beginners - Your First Steps with SudoLang](https://medium.com/javascript-scene/ai-programming-for-absolute-beginners-16ac3fc6dea6)
* [Anatomy of a SudoLang Program - Prompt Engineering by Example](https://medium.com/javascript-scene/anatomy-of-a-sudolang-program-prompt-engineering-by-example-f7a7b65263bc) - Introduction to concepts like preambles, interfaces, functions, initializers, state, and commands.
* [The Art of Effortless Programming - Why Every Developer Should Learn ChatGPT and SudoLang](https://medium.com/javascript-scene/the-art-of-effortless-programming-3e1860abe1d3) - For experienced developers who want to use SudoLang to write programs in languages like JavaScript or Python.
* [Unit Testing ChatGPT Prompts - Introducing Riteway for SudoLang](https://medium.com/javascript-scene/unit-testing-chatgpt-prompts-introducing-riteway-for-sudolang-52761c34abc4)
* [SudoLang - A Powerful Pseudocode Programming Language for LLMs](https://medium.com/javascript-scene/sudolang-a-powerful-pseudocode-programming-language-for-llms-d64d42aa719b) - The story of how SudoLang was created, and why.
* [Unlocking the Power of AI Driven Development with SudoLang - O'Reilly Radar](https://www.oreilly.com/radar/unlocking-the-power-of-ai-driven-development-with-sudolang/)

### Video

* [AI Driven Development with SudoLang - Autodux](https://www.youtube.com/watch?v=2jqPJsPuf9E)
* [SudoLang on the DevTools.fm Podcast](https://www.youtube.com/watch?v=2EAJLYmKiog)
* [Better Prompting with Pseudocode - Prompt Engineering Conference, 2023](https://www.youtube.com/watch?v=TADrrG6Fhjk)
