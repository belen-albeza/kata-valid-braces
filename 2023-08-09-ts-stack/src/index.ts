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

  const expected = [];
  for (const x of input) {
    if (isOpenBrace(x)) {
      expected.push(BRACES[x]);
    } else {
      const stored = expected.pop();
      if (stored !== x) {
        return false;
      }
    }
  }

  return expected.length === 0;
}
