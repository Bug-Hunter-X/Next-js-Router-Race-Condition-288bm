# Next.js Router Race Condition

This repository demonstrates a potential race condition when using the `router.push()` method in Next.js.  The issue arises when attempting to access the router's state (e.g., `router.query`, `router.asPath`) immediately after initiating a route change using `router.push()`.  Because route changes are asynchronous, the state might not be updated yet, leading to unexpected behavior or errors.

## Problem

The example `bug.js` file shows a `handleClick` function that pushes a new route and immediately attempts to read the updated route data.  This race condition results in incorrect data being read.

## Solution

The solution provided in `bugSolution.js` uses a Promise to ensure the route update is completed before accessing the updated data. This prevents the race condition.