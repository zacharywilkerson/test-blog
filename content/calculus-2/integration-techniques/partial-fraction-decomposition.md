---
title: "Partial Fraction Decomposition"
metaTitle: "This is the title tag of this page"
metaDescription: "This is the meta description"
---

<!-- <YoutubeEmbed link="https://www.youtube.com/embed/bLrrin1oEkA?si=VyGWTGjJZOSSMcYb"> -->
<!-- <iframe width="100%" height="750" src="https://www.youtube.com/embed/bLrrin1oEkA?si=VyGWTGjJZOSSMcYb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->


# Overview
**Partial fraction decomposition** (PFD) is a technique that helps us to integrate rational functions. Recall that rational functions are simply functions which have a polynomial numerator and denominator.

The goal of partial fraction decomposition is to turn a single rational function into a combination of rational functions, each of which we know how to integrate (using a u-substitution, a trig integral, or the natural log rule).

Which integral do you know how to calculate: 
$$
\int \frac{4x+1}{x^2+x} \ dx \ \ \ \ \text {or} \ \ \ \ \int \left( \frac{1}{x} + \frac{3}{x+1} \right) dx ?
$$

It should be clear that the second integral is easier. *But what if I told you that those two integrals were the same?*

# Adding Rational Functions
To get a better understanding of this technique, we begin by adding two simple rational functions.


<div class="exampleContainer" style="padding: 0px 15px">

## Exercise 1:
Add $\frac{1}{x}$ and $\frac{3}{x+1}$.

$$
    \begin{aligned}
      \frac{1}{x} + \frac{3}{x+1} &= \frac{1}{x} \left( \frac{x+1}{x+1} \right) + \frac{3}{x+1}\left( \frac{x}{x} \right)\\
      &= \frac{x+1+3x}{x(x+1)}\\
      &= \frac{4x+1}{x^2+x}
    \end{aligned}
$$

</div>

Now the question becomes, given $x$, how do we work backwards to get $\frac{1}{x} + \frac{3}{x+1}$?

## Exercise 2:
Decompose $\frac{4x+1}{x^2+x}$.

1. Factor the denominator:
$$
\begin{aligned}
  \frac{4x+1}{x^2+x} &= \frac{4x+1}{x(x+1)}
\end{aligned}
$$

2. Split the fraction into two:
$$
\begin{aligned}
  \frac{4x+1}{x(x+1)} &= \frac{A}{x} + \frac{B}{x+1}
\end{aligned}
$$

3. Solve for the coefficients in the numerator:
$$
\begin{aligned}
  \frac{4x+1}{x(x+1)} &= \frac{A}{x} + \frac{B}{x+1}\\
  &= \frac{A}{x} \left( \frac{x+1}{x+1} \right) + \frac{B}{x+1} \left( \frac{x}{x} \right)\\
  &= \frac{A(x+1) + B(x)}{x(x+1)}\\\\
  \Rightarrow 4x+1 &= A(x+1)+B(x)\\
  &= Ax+A+Bx\\
  &= (A+B)x+A\\
\end{aligned}
$$

&emsp;&emsp; *(3a) Polynomial Mirroring Method*
$$
\begin{aligned}
  4x+1 &= A(x+1)+B(x)
\end{aligned}
$$
$$
\begin{gathered}
  \underline{\text{Compare }x\text{ coefficients:}} & \ \ \ & \underline{\text{Compare constants:}}\\
  4x=(A+B)x & \ \ \ & 1=A\\
  4=A+B & & \boxed{A=1}\\
  4=1+B & & \\
  \boxed{B=3}
\end{gathered}
$$

&emsp;&emsp; *(3b) Heaviside "Cover-Up" Method*
$$
\begin{aligned}
  4x+1 &= A(x+1)+B(x)
\end{aligned}
$$
$$
\begin{gathered}
  \underline{\text{Let } x=-1\text{:}} & \ \ \ & \underline{\text{Let } x=0\text{:}}\\
  4(-1)+1=A(-1+1)+B(-1) & & 4(0)+1=A(0+1)+B(0)\\
  -3=-B & & 1=A\\
  \boxed{B=3} & & \boxed{A=1}
\end{gathered}
$$

Note that we had two options to use when finding the coefficients:
- **Polynomial Mirroring Method**: comparing coefficients based on powers of $x$
- **Heaviside "Cover-Up" Method**: strategically choosing values of $x$ to cancel terms out

Occasionally, we might benefit from using a combination of both methods to get our coefficients.

# Proper and Improper Rational Functions


# Non-Repeating Linear Factors

<div class="exampleContainer" style="border: 1px solid gray; border-radius: 8px; padding: 0px 15px">

## Exercise 3:
Add $\frac{1}{x}$ and $\frac{3}{x+1}$.

$$
\begin{aligned}
  \frac{1}{x} + \frac{3}{x+1} &= \frac{1}{x} \left( \frac{x+1}{x+1} \right) + \frac{3}{x+1}\left( \frac{x}{x} \right)\\
  &= \frac{x+1+3x}{x(x+1)}\\
  &= \frac{4x+1}{x^2+x}
\end{aligned}
$$

</div>

# Repeating Linear Factors

# Non-Repeating Quadratic Irreducible Factors

# Repeating Quadratic Irreducible Factors

When working with a repeating quadratic irreducible factor in the denominator, we combine the processes seen for a repeating linear factor and a quadratic irreducible factor.

We won’t do an example for this case, but you can see the general structure of the decomposition below.

# Recap

Partial fraction decomposition is a great technique to use when the integrand is a rational function (polynomial in numerator and denominator) for which the denominator can be factored.

[INSERT IMAGE]

If the rational function is improper, meaning the degree of the numerator is greater than or equal to the degree of the denominator, long division should be performed before performing a partial fraction decomposition.

# Practice Problems

<details class="exampleProblem">
  <summary>View Solution</summary>

  We find a common denominator:
  $$
    \begin{aligned}
      \frac{1}{x} + \frac{3}{x+1} &= \frac{1}{x} \left( \frac{x+1}{x+1} \right) + \frac{3}{x+1}\left( \frac{x}{x} \right)\\
      &= \frac{x+1+3x}{x(x+1)}\\
      &= \frac{4x+1}{x^2+x}
    \end{aligned}
  $$

</details>