# SudoLang

SudoLang is a programming language designed to collaborate with AI language models including ChatGPT, Bing Chat, Anthropic Claude, and Google Bard. It is designed to be easy to learn and use. It is also very expressive and powerful.

All sufficiently advanced language models understand it without any special prompting. _You do not need to paste the SudoLang specification before using SudoLang with your favorite AI._

## SudoLang Features

- Natural language constraint-based programming. Instead of telling the AI what to do, tell it what things _are_ and the rules that govern them. Constraints are dynamically solved at runtime and can be used to synchronize the state and behavior of multiple objects. Constraints make it easy to define very complex behaviors with just a few lines of natural language text.
- Interfaces for defining the structure and behavior of your program.
- `/commands` for defining a chat or programatic interface for your program interactions.
- Referrential omnipotence. You do not need to explicitly define most functions. The AI will infer them for you.
- Functions and function composition with the `|>` operator.

## Why SudoLang?

For most simple prompts, natural language is better. Use it. But if you need the AI to follow a program, obey constraints, keep track of complex state, or implement complex algorithms, SudoLang can be extremely useful.

- Because of the natural language emphasis, SudoLang is easier to learn than programming languages like JavaScript or Python.
- Pseudocode can [improve reasoning performance](https://arxiv.org/abs/2305.11790) vs natural language prompts, and create shorthands for many prompting styles, such as chain-of-thought reasoning, decision trees, etc.
- SudoLang is a declarative, constraint-based, interface-oriented programming language, which makes it one of the most expressive and compact programming languages in the world. SudoLang prompts can often be written which save 20% - 30% tokens vs natural language, leading to reduced prompting costs and faster responses.
- Structured pseudocode provides scope blocks, indentation, and visual encapsulation which makes it easier to navigate and maintain complex prompts.
- Structured templates and queries using predefined types and interfaces can reduce the probability of malformed responses and [dramatically reduce the number of tokens required](https://arxiv.org/pdf/2212.06094.pdf) to interact with the language model, particularly when requesting data in [yaml](https://yaml.org/) or [csv](https://en.wikipedia.org/wiki/Comma-separated_values) formats.

Please read the [SudoLang documentation](sudolang.sudo.md) for more information about the language.

Examples can be found in the [examples](examples) folder.
