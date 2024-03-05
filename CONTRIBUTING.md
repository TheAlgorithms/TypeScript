# Contributing guidelines

## Before contributing

Welcome to [TheAlgorithms/TypeScript](https://github.com/TheAlgorithms/TypeScript)! Before sending your pull requests,
make sure that you **read the whole guidelines**. If you have any doubt on the contributing guide, please feel free to
[state it clearly in an issue](https://github.com/TheAlgorithms/TypeScript/issues/new) or on our [**Discord server**](https://the-algorithms.com/discord/).

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

- Filenames should use the snake_case style. This is needed for our workflows to work correctly.
- There should be no spaces in filenames.
- **Example:** `user_profile.ts` is allowed. Do not use `userprofile.ts`, `Userprofile.ts`, `user-Profile.ts`, `userProfile.ts`, `UserProfile.ts`; these naming conventions are discouraged.

#### Commit Messages Formatting

- Prefer to use the [Conventional Commits](https://www.conventionalcommits.org/) format: `<type>: <short summary>`. If necessary, put any extra information in the description.
- Commit types include (but are not limited to):
  - **docs**: Documentation only changes
  - **feat**: A new feature
  - **fix**: A bug fix
  - **test**: Adding or fixing tests
  - **chore**: CI / code quality / minor quality of life improvements

- **Examples**:
  - `feat: add quicksort algorithm`
  - `chore: fix spelling`
  - `fix: improper error message`
  - `docs: add contributing guidelines`
  - `test: add test for quicksort algorithm`

#### Module System

We use the [ES Module](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) system, which brings an official, standardized module system to TypeScript.

It roughly means you will need to use `export` and `import` statements instead of `module.exports` and `require()`.

#### Coding Style

To maximize the readability and correctness of our code, we require that new submissions follow the
[TypeScript Standard Style](https://github.com/standard/ts-standard).

A few (but not all) of the things to keep in mind:

- Naming conventions:
  - Names always start with a letter (not with an underscore).
  - Use `UpperCamelCase` for classes, interfaces & types.
  - Use `lowerCamelCase` for functions and local variables.
  - Use `SCREAMING_SNAKE_CASE` for global ("universal") constants.
- Code indentation: Always use 2 spaces for indentation of code blocks.

```ts
function sum(arr: number[]): number {
  let total = 0;
  for (const elem of arr) total += elem;
  return total;
}
```

- Avoid using global variables and avoid `==` (use `===` instead).
- Use only `let` and `const`, never use `var`; inline expressions which are only used a single time unless naming a variable adds to the readability.
- Prefer proper input/output of your functions over side effects.
- We required the use of TypeScript.
- Only use `any` if appropriate. Prefer to create proper types instead.
- No redundant naming. Don't prefix interfaces with `I`, class members with `m`, function with `func` or `f`, etc.
- Prefer using optional fields over `null` or `undefined`.
- Annotate arrays as `foos: Foo[]` instead of `foos: Array<Foo>`.
- Refrain from importing external libraries. Implement the algorithms "from scratch".
- Most importantly:
  - **Be consistent in the use of these guidelines when submitting.**
  - Happy coding!

##### Bad

```ts
let foo = { x: 123, y: undefined };
````

##### Good

```ts
let foo: { x: number, y?: number } = { x: 123 };
```

#### Writing Good Tests

Trivial "algorithms" or formulas (think `abs`) may go without tests. Everything else **must** have decent test coverage.
While it is not required that your tests trigger execution of every line of code you have written,
you should definitely test edge cases, selected standard inputs, larger inputs and ideally even randomized inputs.

Tests are written using [Jest](https://jestjs.io/). If you can meaningfully divide your test cases into descriptive classes,
use a `describe` block for the algorithm and `it` blocks for classes of test cases.
If you can not classify your test cases (which is the case especially for trivial algorithms like Fibonacci numbers or factorials),
use a single `test` block for all test cases. **Do not** use `describe` & `it` blocks with redundant descriptions for the `it` blocks:

##### Bad

```ts
describe("Factorial", () => {
  // Bad: it-blocks add absolutely no value
  it("works", () => {
    expect(factorial(0)).toBe(1);
  });
  it("works #2", () => {
    expect(factorial(1)).toBe(1);
  });
  // Bad: Redundant it-block description
  it("3! is 6", () => {
    expect(factorial(3)).toBe(6);
  });
  // Bad: Redundant it-block description
  it("4! is 24", () => {
    // Bad: Naming these variables adds no value; they should have been inlined
    const input = 4;
    const expected = 24;
    expect(factorial(input)).toBe(expected);
  });
});
```

##### Good

```ts
// Good: Much more concise, still the same coverage
test("Factorial", () => {
  expect(factorial(0)).toBe(1);
  expect(factorial(1)).toBe(1);
  expect(factorial(3)).toBe(6);
  expect(factorial(4)).toBe(24);
});
```

##### Even Better

```ts
// More concise, plus we get test name formatting
describe("Factorial", () => {
  test.each([[0, 1], [1, 1], [3, 6], [4, 24]])('%i! = %i', (n, expected) => {
    expect(factorial(n)).toBe(expected);
  });
});
```
