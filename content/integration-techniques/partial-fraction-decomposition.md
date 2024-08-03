---
title: 'Partial Fraction Decomposition'
metaTitle: 'This is the title tag of this page'
metaDescription: 'This is the meta description'
---

# Overview

**Partial fraction decomposition** (PFD) is a technique that helps us to integrate rational functions. Recall that rational functions are simply functions which have a polynomial numerator and denominator.

The goal of partial fraction decomposition is to turn a single rational function into a combination of rational functions, each of which we know how to integrate (using a u-substitution, a trig integral, or the natural log rule).

Which integral do you know how to calculate:

$$
\int \frac{4x+1}{x^2+x} \ dx \ \ \ \ \text {or} \ \ \ \ \int \left( \frac{1}{x} + \frac{3}{x+1} \right) dx ?
$$

It should be clear that the second integral is easier. _But what if I told you that those two integrals were the same?_

## Adding Rational Functions

To get a better understanding of this technique, we begin by adding two simple rational functions.

<div class="exampleContainer" style="border: 1px solid gray; border-radius: 8px; padding: 0px 15px">

### Example 1:

Add $\frac{1}{x}$ and $\frac{3}{x+1}$.

$$
\begin{aligned}
  \frac{1}{x} + \frac{3}{x+1} &= \frac{1}{x} \left( \frac{x+1}{x+1} \right) + \frac{3}{x+1}\left( \frac{x}{x} \right)\\
  &= \frac{x+1+3x}{x(x+1)}\\
  &= \frac{4x+1}{x^2+x}
\end{aligned}
$$

</div>

Now the question becomes, given $x$, how do we I work backwards to get $\frac{1}{x} + \frac{3}{x+1}$?

<details class="exampleProblem">
  <summary>View Solution</summary>

text

<!-- Given $x$, we can decompose the fraction $\frac{4x+1}{x^2+x}$ back into the sum of $\frac{1}{x}$ and $\frac{3}{x+1}$ by reversing the steps of addition and simplification. -->

</details>

<!--
$$
\begin{matrix}
   a & b \\
   c & d
\end{matrix}
$$ -->
