const BRACES = {
  "(": ")",
  "{": "}",
  "[": "]",
};

type OpenBrace = keyof typeof BRACES;

function isOpenBrace(x: string): x is OpenBrace {
  return x in BRACES;
}

export function isValidExpression(input: string): boolean {
  if (input === "") {
    return true;
  }

  for (const x of input) {
    if (!isOpenBrace(x)) {
      return false;
    }

    const index = findMatchingBrace(x, input.slice(1)) + 1;
    if (index >= 0) {
      return (
        isValidExpression(input.slice(1, index)) &&
        isValidExpression(input.slice(index + 1))
      );
    }
  }

  return false;
}

function findMatchingBrace(brace: OpenBrace, input: string): number {
  const closing = BRACES[brace];

  let count = 0;
  for (const [i, x] of [...input].entries()) {
    if (x === brace) {
      count++;
    } else if (x === closing) {
      if (count === 0) {
        return i;
      }
      count--;
    }
  }

  return -Infinity;
}
