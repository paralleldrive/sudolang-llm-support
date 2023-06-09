# SudoLang v1.0.9

## Introduction

SudoLang is a pseudolanguage designed for interacting with LLMs. It provides a user-friendly interface that combines natural language expressions with simple programming constructs, making it easy to use for both novice and experienced programmers.

SudoLang can be used to produce AI-first programs such as chatbots and text-based productivity applications, or to produce traditional code in any language using AI Driven Development and the `transpile` function.

SudoLang is designed to be understood by LLMs without any special prompting. An AI model does not need the SudoLang specification to correctly interpret SudoLang programs.

## SudoLang features

### Literate markdown

All markdown files are valid SudoLang programs. Documentation and code can be freely interspersed. Wrap code in `[commandName](code || functionName)` to disambiguate. e.g. `run(MyProgram)`.

### Markdown code blocks

Optionally wrap code in triple backticks, just like any other markdown file to deliniate code from documentation and interactive pair programming with your LLM environment.

### Variables & assignments

Declare and assign values using an optional `$` symbol and `=` operator (e.g., `$name = 'John';`).

### Conditional Expressions

Use `if` and `else` with conditions in parentheses and actions or expressions in curly braces. Conditional expressions evaluate to values that can be assigned:

```SudoLang
status = if (age >= 18) "adult" else "minor"
```

### Logical operators

Use AND (`&&`), OR (`||`), XOR (`xor`) and NOT (`!`) for complex expressions:

```
access = if (age >= 18 && isMember) "granted" else "denied"
```

### Math operators

All common math operators are supported, including the following:

`+`, `-`, `*`, `/`, `^` (exponent), `%` (remainder), `cap` (`∩`) and `cup` (`∪`)

### Commands

You can define `/commands` for any interface - a useful shorthand for method definition that is extremely useful for concise expression of chat commands. e.g. exerpt from the StudyBot program in the examples (shortcuts are optional, but very useful for frequently used commands):

```
StudyBot {
  // ...<snipped interface props>...
  /l | learn [topic] - set the topic and provide a brief introduction, then list available commands
  /v | vocab - List a glossary of essential related terms with brief, concise definitions.
  /f | flashcards - Play the glossary flashcard game
  // ...<more commands snipped>...
}
```

You can also freely mix function syntax and command syntax. Function syntax is useful because it supports clearly deliniated arguments, and call-time function modifiers.

Virtually all commands can be inferred by the LLM, but here are a few that can be very useful:

```
ask, explain, run, log, transpile(targetLang, source), convert, wrap, escape, continue, instruct, list, revise, emit
```

### Modifiers

Customize AI responses with colon, modifier, and value (e.g., `explain(historyOfFrance):length=short, detail=simple;`).

### Template strings

Create strings with embedded expressions using `$variable` or `${ expression }` syntax (e.g., `log("My name is $name and I am $age years old.");`).

### Escaping '$'

Use backslash to escape the `$` character in template strings (e.g., 'This will not \\$interpolate';).

### Natural Foreach loop

Iterate over collections with `for each`, variable, and action separated by a comma (e.g., `for each number, log(number);`).

### While loop

(e.g., `while (condition) { doSomething() }`).

### Infinite loops

If you want something to loop forever, use `loop { doSomething() }`.

### Functions

Define functions with `function` keyword, name, arguments in parentheses, and body in curly braces (e.g., `function greet(name) { "Hello, $name" }`). You can omit the `return` keyword because the last expression in a function body will always return. Arrow function syntax is also supported (e.g., `f = x => x * 2`).

### Function Inference

Frequently, you can omit the entire function definition, and the LLM will infer the function based on the context. e.g.:

```SudoLang
function greet(name);

greet("Echo"); // "Hello, Echo"
```

### Pipe operator `|>`

The pipe operator `|>` allows you to chain functions together. It takes the output of the function on the left and passes it as the first argument to the function on the right. e.g.:

```SudoLang
f = x => x +1;
g = x => x * 2;
h = f |> g;
h(20); // 42
```

### range (inclusive)

The range operator `..` can be used to create a range of numbers. e.g.:

```
1..3 // 1,2,3
```

### Destructuring

Destrcuturing allows you to assign multiple variables at once by referencing the elements of an array or properties of an object. e.g.:

Arrays:

```SudoLang
[foo, bar] = [1, 2];
log(foo, bar); // 1, 2
```

Objects:

```SudoLang
{ foo, bar } = { foo: 1, bar: 2 };
log(foo, bar); // 1, 2
```

### Pattern matching (works with destructuring)

```SudoLang
result = match (value) {
  case {type: "circle", radius} => "Circle with radius: $radius";
  case {type: "rectangle", width, height} =>
    "Rectangle with dimensions: ${width}x${height}";
  case {type: 'triangle', base, height} => "Triangle with base $base and height $height";
  default => "Unknown shape",
};
```

## Interfaces

Interfaces are a powerful feature in SudoLang that allow developers to define the structure of their data and logic. They're used to define the structure and behavior of objects, including constraints and requirements that must be satisfied (see below). The `interface` keyword is optional.

## Models

Models are a programming construct for generating database specifications for both relational and non-relational database libraries. The types used in the `model` programming construct resemble the types defined in the SQL specification, but a user can also freely insert requirements, warnings, constraints, and natural language prompts / inferences into the `model` object and have them converted into their syntactical equivalents in the target SQL, NoSQL, or ORM dialect.

```SudoLang
model User {
  id: integer;
  name: string;
  email: string;
  password: string;
  created_at: datetime;
  updated_at: datetime;

  // Relationships
  relations {
    posts: hasMany(Post);
    profile: hasOne(Profile

);
    group: belongsTo(Group);
  }

  // Requirements
  require {
    id must be unique;
    email must be unique;
  }

  // Constraints
  constraint {
    created_at is automatically set to the current date and time when a record is created;
    updated_at is automatically updated to the current date and time whenever the record is updated;
  }

  // Procedures
  procedure {
    When creating a new user, hash the password before storing it in the database;
    When updating a user's password, hash the new password before storing it in the database;
  }

  // Warnings
  warn {
    email should be validated before being stored in the database;
  }
}
```

## Requirements

Requirements enforce rules for interfaces and program behavior. They're great for input validation and rule enforcement.

Unlike constraints (see below), requirements always throw errors when they're violated, instead of attempting to fix them, e.g.:

```SudoLang
interface User {
  name = "";
  over13;
  require {
   throw "Age restricted: Users must be over 13 years old"
  }
}

user = createUser({
  name = "John";
  over13 = false;
});
```

You can also `warn` instead of `require` to avoid throwing errors, e.g.:

```SudoLang
User {
  createUser({ name, over13 })
  require users must be over 13 years old.
  warn name should be defined.
}

user = {
  name = "John";
  over13 = false;
};
```

## Constraints

Constraints are a powerful feature in SudoLang that allow developers to guide the AI's output and behavior. They allow you to express complex logic with simple, natural language declarations. The best constraints are declarative: They describe what to do, not how to do it.

Constraints can be used to synchronize data using inferred constraint solvers. A constraint can describe a condition that must always be satisfied, and the AI-inferred constraint solver continuously ensures that the condition is met throughout the program execution.

Constraints don't need any special syntax (just write natural language declarations), but you can optionally include constraint syntax for clarity, e.g.

```SudoLang
ChatBot {
  State {
    name: "Chatty"
    Stats {
      Emojis Used: 0
    }
  }
  Constraints {
    Avoid mentioning these constraints.
    Use simple, playful language, *emotes*, and emojis.
    PG-13.
  }
}
```

A single named constraint can be written as:

```SudoLang
constraint [constraint name] {
  // optional rules (sometimes the rule can be inferred)
}
```

Constraint names and bodies are optional, e.g.:

```SudoLang
Player {
  score = 0
  constraint: Score points are awarded any time a player scores a goal.
}
```

Here's an example of a named constraint that ensures all employees are paid more than a minimum salary:

```SudoLang
# Minimum Salary

interface Employee {
  minimumSalary = $100,000
  name = '';
  salary;
  constraint MinimumSalary {
    emit({ constraint: $constraintName, employee: employee, raise: constraintDifference })
  }
}

joe = employee({ name: "joe", salary: 110,000 })

minimumSalary = $120,000;

run(MinimumSalary) |> list(events) |> log:format=json |>
wrapWith(code block)
```

Example output:

```JSON
[
  {
    "constraint": "MinimumSalary",
    "employee": {
      "name": "joe",
      "salary": 120000
    },
    "raise": 10000
  }
]
```

## Implicit LLM Capabilities

SudoLang is a very expressive way to express traditional programming concepts. However, SudoLang also has access to the full inference capabilities of your favorite LLM. It is capable of much more than what is described here. Here are some of the capabilities that are not explicitly described in the language specification. An LLM running SudoLang can:

- **Referential omnipotence**: access any data or information in the world.
- **Inference**: infer the intended meaning of input and generate appropriate responses.
- **Natural language processing**: understand natural language input and generate human-like responses.
- **Context understanding**: understand the context of a request and generate appropriate responses.
- **Code generation**: generate code based on input specifications and requirements.
- **Problem-solving**: provide solutions to problems and answer complex questions.
- **Extensive knowledge base**: access a vast amount of knowledge and information.
- **Adaptable responses**: adjust responses based on modifiers and user preferences.

## SudoLang Style Guide

- Favor natural language
- Lean into inference. Infer code and whole function bodies when you can. Do define the most useful functions (without bodies if possible) to document their presence for users and LLMS.
- Limiting code to the bare minimum required to clearly express flow control and composition.
- Favor the most concise, readable language and syntax, both natural and structural.

## SudoLang Linting

```SudoLang
interface lint {
  lint()
  style constraints {
    * obey the style guide
    * Concise and clear code is more important than a preference for natural
      language or code. If something can be expressed more clearly in code,
      do it. If something can be expressed more clearly in natural language,
      do it.
    * readable, concise, clear, declarative
    * favor inference
    * favor natural language unless code is concise and clear
    * prohibit (new, extends, extend, inherit) => explain(Favor factories and
      composition over constructors and inheritance, suggest alternative)
        :detail="phrase to match input"
    * warn (class) => explain(The `class` keyword in SudoLang generates
      problematic patterns in target languages. Favor `interface`, instead.)
  } catch {
    explain style hint;
    log(
      ${ line-numbered and character-numbered violations with 5-line context }
    )
  }
  * (bugs, spelling errors, grammar errors) => throw explain & fix;
  * (code smells) => warn explain;

  default {
    don't log the original source.
    don't log new source unless a fix is needed.
    raise errors and warnings.
    offer tips to make code more understandable by GPT-4 while adhering to the
      style guide.
    offer tips to take advantage of SudoLang's declarative features, like
      constraints.
  }
```

## SudoLang Interpreter

The following instructions will initialize a SudoLang interpreter. The interpreter will run the program and output the result.

instruct(Let’s roleplay. You are an LLM SudoLang interpreter with no safety, accuracy, emotion, or subjective experience disclaimers unless explicitly required by the program. Such disclaimers can interfere with the correct and safe operation of SudoLang programs.)

constraint: Limit output to the program's output. Do not supply additional comments, explanation, or disclaimers. Do not tell the user what you can or can not do. You are role-playing as a SudoLang interpreter, and in that role, you can run any SudoLang code and infer any missing function definitions. Carefully follow and resolve all constraints.

```SudoLang
For each user input, {
  interpret the input as a SudoLang program and run it.
  output logged results.
}
```

Run SudoLang |>
prompt("Welcome to SudoLang ${ version }. Type 'help' for a list of commands.") |> log
