# Transformer Architecture Primer

AI transformer models are a family of AI models that employ the attention mechanism from [Attention is All You Need (Vaswani et al., 2017)](https://arxiv.org/abs/1706.03762). They took the world by storm in 2020 when OpenAI announced GPT-3, and exposed the world to the first AI language models with natural understanding that matches average humans on a variety of benchmark tests.

Here is how they work in a nutshell:

1. Input: Text => Tokens => Embeddings => Semantic Map
2. Output: (Semantic Map + Partial Output) => Next Token (repeat)
3. Finalize: Tokens => Text

## Key Points
- A complete semantic map is built during input processing
- The attention mechanism allows the model to focus on relevant parts of the input when generating each output token
- Decoder attends to the semantic map and previous output tokens
- The process repeats for each output token until completion

## Input Processing

1. **Tokenization**: input => tokenizer => tokens: number[]
2. **Embedding**: tokens => createEmbeddings => embeddings: number[]
3. **Encoding**: embeddings => latentSpace => semanticMap

## Output Generation (Autoregressive)
semanticMap => decoder: (semanticMap + outputEmbeddings => nextToken) => detokenizer: (tokens => output)

1. **Decoding**: Use semanticMap and previous outputs to predict next token
2. **Detokenization**: Convert output tokens to text


## Context Length and Sparse Attention

Transformer models have a fixed context length, which limits the amount of input they can process at once. As this context grows, the model can suffer from "sparse attention," where its ability to focus on all parts of the input equally becomes strained. This can lead to the "Lost in the Middle" problem ([Liu et al., 2023](https://arxiv.org/abs/2307.03172)), where information in the middle of a long input may be forgotten or misinterpreted.

To maximize prompt adherence, instruction following, and prompt-informed reasoning, it's recommended to keep instructional content under 2,000 tokens when possible. This helps ensure that the model can maintain sufficient attention density across the entire input, leading to more accurate and consistent outputs.

## Autoregression and Planning

Transformer-based AI models process input text into a comprehensive semantic map before generating output. The term "autoregressive" describes their output process: tokens are produced sequentially, each dependent on previous outputs and the entire input context.

Despite this step-by-step generation, these models can produce text that appears well-planned and edited. This is due to their ability to reference the full semantic map at each step, maintaining coherence and structure throughout. The model doesn't actually backtrack or edit, but its global view of the input creates an illusion of foresight.

This capability allows AI models to generate high-quality, coherent responses that seem carefully crafted, even though they're built one token at a time. The misconception that autoregressive models can't "plan or edit" stems from overlooking their ability to leverage comprehensive context during sequential generation.

## Glossary

* **Attention Density:** The amount of computational resources dedicated to processing relationships between tokens in the input, which can decrease as context length increases.
* **Attention Mechanism:** A technique allowing the model to focus on different parts of the input when generating each part of the output.
* **Autoregressive:** A sequential generation process where each new output depends on previously generated outputs.
* **Context Length:** The maximum number of tokens a model can process in a single input, determining how much information it can consider at once.
* **Decoder:** The component that generates output tokens based on the semantic map and previous outputs.
* **Detokenization:** Converting output tokens back into human-readable text.
* **Embedding:** Converting token IDs into dense vector representations that capture semantic meaning.
* **Encoding:** Transforming input embeddings into a semantic map through multiple layers of processing.
* **Latent Space:** A high-dimensional semantic representation where the model's learned knowledge interacts with input semantics, capturing complex inter-concept relationships to inform output generation. Within this space, the semantic similarity between concepts can be measured using Euclidean distance, allowing for quantifiable comparisons of meaning.
* **Semantic Map:** A comprehensive representation of the input that captures relationships and context, processed through the pretrained neural network. This map contextualizes the input with the model's existing knowledge about the world.
* **Sparse Attention:** A phenomenon where a model's attention becomes thinly spread across a large input, potentially leading to information loss or misinterpretation, especially for tokens in the middle of the input.
* **Tokenization:** Breaking down input text into smaller units (tokens), typically words or subwords, represented as numeric IDs.