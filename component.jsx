/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WnO93fzPfld
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");
  const handleButtonClick = (value) => {
    setInput(input + value);
  };
  const handleClear = () => {
    setInput("");
    setResult(0);
  };
  const handleEquals = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };
  const handleOperation = (operation) => {
    setInput(input + operation);
  };
  const handleSquareRoot = () => {
    setResult(Math.sqrt(parseFloat(input)));
    setInput(Math.sqrt(parseFloat(input)).toString());
  };
  const handlePower = () => {
    setResult(Math.pow(parseFloat(input), 2));
    setInput(Math.pow(parseFloat(input), 2).toString());
  };
  const handleInverse = () => {
    setResult(1 / parseFloat(input));
    setInput((1 / parseFloat(input)).toString());
  };
  const handleFactorial = () => {
    let factorial = 1;
    for (let i = 1; i <= parseFloat(input); i++) {
      factorial *= i;
    }
    setResult(factorial);
    setInput(factorial.toString());
  };
  const handleAddition = () => {
    setInput(input + "+");
  };
  const handleSubtraction = () => {
    setInput(input + "-");
  };
  const handleMultiplication = () => {
    setInput(input + "*");
  };
  const handleDivision = () => {
    setInput(input + "/");
  };
  const handleModulo = () => {
    setInput(input + "%");
  };
  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Advanced Calculator
          </h1>
        </div>
        <div className="relative h-[580px] overflow-hidden rounded-lg bg-card shadow-lg">
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 bg-card p-6 rounded-lg">
            <div className="w-full">
              <div className="bg-muted rounded-lg p-4 mb-4 text-right text-3xl font-bold">
                {result}
              </div>
              <div className="grid grid-cols-4 gap-4">
                <Button
                  onClick={handleClear}
                  className="rounded-lg bg-red-500 text-2xl font-bold text-white"
                >
                  C
                </Button>
                <Button
                  onClick={handleSquareRoot}
                  className="rounded-lg bg-primary text-2xl font-bold text-primary-foreground"
                >
                  √
                </Button>
                <Button
                  onClick={handlePower}
                  className="rounded-lg bg-primary text-2xl font-bold text-primary-foreground"
                >
                  x²
                </Button>
                <Button
                  onClick={handleInverse}
                  className="rounded-lg bg-primary text-2xl font-bold text-primary-foreground"
                >
                  1/x
                </Button>
                <Button
                  onClick={() => handleButtonClick("7")}
                  className="rounded-lg bg-muted text-2xl font-bold"
                >
                  7
                </Button>
                <Button
                  onClick={() => handleButtonClick("8")}
                  className="rounded-lg bg-muted text-2xl font-bold"
                >
                  8
                </Button>
                <Button
                  onClick={() => handleButtonClick("9")}
                  className="rounded-lg bg-muted text-2xl font-bold"
                >
                  9
                </Button>
                <Button
                  onClick={handleDivision}
                  className="rounded-lg bg-primary text-2xl font-bold text-primary-foreground"
                >
                  /
                </Button>
                <Button
                  onClick={() => handleButtonClick("4")}
                  className="rounded-lg bg-muted text-2xl font-bold"
                >
                  4
                </Button>
                <Button
                  onClick={() => handleButtonClick("5")}
                  className="rounded-lg bg-muted text-2xl font-bold"
                >
                  5
                </Button>
                <Button
                  onClick={() => handleButtonClick("6")}
                  className="rounded-lg bg-muted text-2xl font-bold"
                >
                  6
                </Button>
                <Button
                  onClick={handleMultiplication}
                  className="rounded-lg bg-primary text-2xl font-bold text-primary-foreground"
                >
                  *
                </Button>
                <Button
                  onClick={() => handleButtonClick("1")}
                  className="rounded-lg bg-muted text-2xl font-bold"
                >
                  1
                </Button>
                <Button
                  onClick={() => handleButtonClick("2")}
                  className="rounded-lg bg-muted text-2xl font-bold"
                >
                  2
                </Button>
                <Button
                  onClick={() => handleButtonClick("3")}
                  className="rounded-lg bg-muted text-2xl font-bold"
                >
                  3
                </Button>
                <Button
                  onClick={handleSubtraction}
                  className="rounded-lg bg-primary text-2xl font-bold text-primary-foreground"
                >
                  -
                </Button>
                <Button
                  onClick={() => handleButtonClick("0")}
                  className="rounded-lg bg-muted text-2xl font-bold col-span-2"
                >
                  0
                </Button>
                <Button
                  onClick={() => handleButtonClick(".")}
                  className="rounded-lg bg-muted text-2xl font-bold"
                >
                  .
                </Button>
                <Button
                  onClick={handleFactorial}
                  className="rounded-lg bg-primary text-2xl font-bold text-primary-foreground"
                >
                  x!
                </Button>
                <Button
                  onClick={handleAddition}
                  className="rounded-lg bg-primary text-2xl font-bold text-primary-foreground"
                >
                  +
                </Button>
                <Button
                  onClick={handleCalculate}
                  className="rounded-lg bg-primary text-2xl font-bold text-primary-foreground"
                >
                  =
                </Button>
                <Button
                  onClick={handleModulo}
                  className="rounded-lg bg-primary text-2xl font-bold text-primary-foreground"
                >
                  %
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
