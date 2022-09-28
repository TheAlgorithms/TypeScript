# Contributing guidelines

## Before contributing

Welcome to [TheAlgorithms/TypeScript](https://github.com/TheAlgorithms/TypeScript)! Before sending your pull requests,
make sure that you **read the whole guidelines**. If you have any doubt on the contributing guide, please feel free to
[state it clearly in an issue](https://github.com/TheAlgorithms/TypeScript/issues/new) or on our [**Discord server**](https://discord.gg/c7MnfGFGa6).

## Contributing

### Contributor

We are very happy that you consider implementing algorithms and data structures for others! This repository is
referenced and used by learners from around the globe. Being one of our contributors, you agree and confirm that:

- You did your work - plagiarism is not allowed.
  - Any plagiarized work will not be merged.
- Your work will be distributed under [MIT License](LICENSE) once your pull request is merged.
- Your submitted work must fulfill our styles and standards.

**New implementations** are welcome! For example, new solutions to a problem, different representations of a graph data
structure, or algorithm designs with different complexity.

**Improving comments** and **writing proper tests** are also highly welcome.

### Contribution

We appreciate any contribution, from fixing grammar mistakes to implementing complex algorithms. Please read this
section if you are contributing to this repository.

If you submit a pull request that resolves an open issue, please help us to keep our issue list small by adding
`closes: #{$ISSUE_NO}` to your commit message. GitHub will use this tag to auto-close the issue if your PR is merged.

#### What is an Algorithm?

An Algorithm is one or more functions (or classes) that:

- Take one or more inputs.
- Perform some internal calculations or data manipulations.
- Return one or more outputs.
- Have minimal side effects.

Algorithms should be packaged in a way that would make it easy for readers to put them into larger programs.

Algorithms should:

- Have intuitive class and function names that make their purpose clear to readers.
- Use TypeScript naming conventions and intuitive variable names to ease comprehension.
- Be flexible to take different input values.
- Raise TypeScript exceptions (RangeError, etc.) on erroneous input values.

Algorithms in this repo should not be how-to examples for existing TypeScript packages. Instead, they should perform
internal calculations or manipulations to convert input values into different output values. Those calculations or
manipulations can use data types, classes, or functions of existing TypeScript packages but each algorithm in this repo
should add unique value.

#### File Naming Convention

- Filenames should use the UpperCamelCase (PascalCase) style.
- There should be no spaces in filenames.
- **Example:** `UserProfile.ts` is allowed. Do not use `userprofile.ts`, `Userprofile.ts`, `user-Profile.ts`, `userProfile.ts`; these methods are discouraged.

#### Commit Messages Formatting

- Prefer to use the following format: `<type>: <short summary>`. If necessary, put any extra information in the description.
- Commit types include (but are not limited to): 
  - **docs**: Documentantion only changes
  - **feat**: A new feature
  - **fix**: A bug fix
  - **chore**: Miscellaneous stuff that does not match any of the above

- **Examples**: 
  - `feat: add quicksort algorithm`
  - `chore: fix spelling`
  - `fix: improper error message`
  -  `docs: add contributing guidelines`

#### Module System

We use the [ES Module](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) system, which bring an official, standardized module system to JavaScript.

It roughly means you will need to use `export` and `import` statements instead of `module.exports` and `require()`.

#### Coding Style

To maximize the readability and correctness of our code, we require that new submissions follow the
[TypeScript Standard Style](https://github.com/standard/ts-standard).

In order to apply the coding style (where it can be done automatically). If an error is shown, please figure out what's
wrong, fix it and run standard again.

A few (but not all) of the things to keep in mind:

- Use camelCase with the leading character as lowercase for identifier names (variables and functions).
- Names start with a letter.
- Follow code indentation: Always use 2 spaces for indentation of code blocks.

```ts
function sum(arr: number[]): number {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

- Avoid using global variables and avoid `==`.
- Please use `let` over `var`.
- Please refrain from using `console.log` or any other console methods.
- **Absolutely** don't use `alert`.
- We strongly recommend the use of ECMAScript 6.
- Avoid the use of `any` type. Create an interface/class instead.
- Don't prefix Interfaces with `I`.
- Prefer not to use `null` nor `undefined` for explicit unavailability. 

```ts
// BAD
let foo = { x: 123, y: undefined };

// GOOD
let foo: { x: number, y?: number } = { x:123 };
```
- Annotate arrays as `foos: Foo[]` instead of `foos: Array<Foo>`.
- Avoid importing external libraries for basic algorithms. Only use those libraries for complicated algorithms.
- Most importantly:
  - **Be consistent in the use of these guidelines when submitting.**
  - Happy coding!

Written by [**@gefgu**](https://github.com/gefgu) and community, September 2022.
