# TypeScript Closure Issue with setTimeout

This repository demonstrates a common issue related to closures in TypeScript when using `setTimeout` within a loop.

## The Problem
The `printNumbers2` function intends to print numbers from 1 to `n` with a slight delay using `setTimeout`. However, due to the way closures work in JavaScript (and TypeScript), the value of `i` is not captured at the time `setTimeout` is called. Instead, it's captured when the `setTimeout` callback finally executes, which occurs *after* the loop has completed. Therefore, the final value of `i` (which is `n + 1`) is printed repeatedly.

## Solution
The solution involves using an immediately invoked function expression (IIFE) to create a new scope for each iteration of the loop, effectively capturing the correct value of `i` for each callback.