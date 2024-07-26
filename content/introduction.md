---
title: "Introduction"
metaTitle: "This is the title tag of this page"
metaDescription: "This is the meta description"
---

Some introduction text. Lists out all the headings from h1 to h6. Markdown link handling for relative and absolute URLs. Easy to customise.

# Heading H1
Heading 1 text

```javascript
import "./node_modules/katex/dist/katex.css";
import "remark-math";
import "rehype-katex";
```

```math
L = \frac{1}{2} \rho v^2 S C_L
```
$$
\begin{matrix}
   a & b \\
   c & d
\end{matrix}
$$

The $\boldsymbol{p}\textbf{-Series Test}$ states that:

- If $p>1$, the $p$-series $\sum_{n=1}^\infty \frac{1}{n^p}$ converges
- If $0<p \leq 1$, the $p$-series $\sum_{n=1}^\infty \frac{1}{n^p}$ diverges 

<details class="exampleProblem">
  <summary>View Solution</summary>

  ### Some Javascript
  ```js
  function logSomething(something) {
    console.log('Something', something);
  }
  ```
</details>

Inline: $L=\frac{1}{2}$
Block:
$$
2 \pi = \frac{3.1415}{3}
$$

## Heading H2
Heading 2 text

### Heading H3
Heading 3 text

#### Heading H4
Heading 4 text

##### Heading H5
Heading 5 text

###### Heading H6
Heading 6 text

# Another H1

## Lists
- Item 1
- Item 2
- Item 3
- Item 4
- Item 5

## Links

* Relative: [Codeblock](/codeblock)
* Absolute: [Demo](https://learn.hasura.io/graphql/react)