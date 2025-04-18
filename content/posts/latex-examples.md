+++
title = "LaTeX Examples for Blog Posts"
date = "2025-04-13"
author = "Pink"
cover = ""
tags = ["LaTeX", "Math", "Tutorial"]
keywords = ["LaTeX", "Math Typesetting", "Formulas"]
description = "A guide for using LaTeX in blog posts"
showFullContent = false
readingTime = true
hideComments = false
math = true  # Enable math rendering for this post
+++

# LaTeX Examples for Blog Posts

This post demonstrates how to use LaTeX in your blog posts for mathematical typesetting. You can now write complex mathematical expressions and equations directly in your Markdown files.

## Basic Inline Math

You can use inline math expressions by enclosing your LaTeX code in single dollar signs like this: $E = mc^2$. This is Einstein's famous equation.

When writing inline math, you don't need to add extra spaces around the dollar signs. For example, writing about angles like $\theta$ and $\phi$ is straightforward.

## Display Math Equations

For larger equations that should be centered on their own line, use double dollar signs:

$$\mathcal{L}(\theta) = -\frac{1}{N} \sum_{i=1}^{N} [y_i \log(h_\theta(x_i)) + (1 - y_i) \log(1 - h_\theta(x_i))]$$

This is the cross-entropy loss function commonly used in machine learning.

## Equation Systems and Alignment

You can also create aligned equation systems:

$$
\begin{align}
\frac{\partial J}{\partial w} &= \frac{1}{m} \sum_{i=1}^{m} (h_w(x^{(i)}) - y^{(i)}) \cdot x^{(i)} \\
\frac{\partial J}{\partial b} &= \frac{1}{m} \sum_{i=1}^{m} (h_w(x^{(i)}) - y^{(i)})
\end{align}
$$

## Table
$$
\begin{array}{ccc}
\text{Heading 1} & \text{Heading 2} & \text{Heading 3} \\\ \hline
\text{Data A1} & \text{Data A2} & \text{Dat A3} \\\
\text{Data B1} & \text{Dat B2} & \text{Data B3} \\\
\text{Data C1} & \text{Data C2} & \text{Data C3} \\\
\end{array}
$$

## Matrices

LaTeX is great for displaying matrices:

$$
A = \begin{bmatrix} 
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix}
$$

Or for a determinant:

$$
\det(A) = \begin{vmatrix} 
a & b \\
c & d
\end{vmatrix} = ad - bc
$$

## Greek Letters and Special Symbols

LaTeX makes it easy to include Greek letters like $\alpha$, $\beta$, $\gamma$, $\delta$, $\epsilon$, $\zeta$, $\eta$, $\theta$.

Upper-case Greek letters: $\Gamma$, $\Delta$, $\Theta$, $\Lambda$, $\Xi$, $\Pi$, $\Sigma$, $\Phi$, $\Psi$, $\Omega$.

Special mathematical symbols are also available:
- Infinity: $\infty$
- Set membership: $x \in X$
- Set operations: $A \cup B$, $A \cap B$, $A \setminus B$
- Integrals: $\int_{a}^{b} f(x) \, dx$
- Sum notation: $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$
- Product notation: $\prod_{i=1}^{n} i = n!$

## Diagrams and Trees

LaTeX can also be used for simple diagrams. Here's a representation of a directed graph:

$$
\begin{array}{ccc}
& C & \\\
\nearrow & \uparrow & \searrow \\\
A & \rightarrow & B \\\
\end{array}
$$

## Tips for Using LaTeX in Blog Posts

1. **Keep formulas readable**: Break complex formulas into smaller parts when possible
2. **Test your LaTeX**: Make sure it renders correctly before publishing
3. **Be consistent**: Use the same notation throughout your post
4. **Explain your notation**: Define symbols when you first use them
5. **Use inline math for simple expressions**: Save display math for more complex equations

## Conclusion

With LaTeX support in your Hugo blog, you can now write technical articles with proper mathematical notation. This makes your content more professional and easier to understand for technical audiences.

## References

- [KaTeX Documentation](https://katex.org/docs/supported.html)
- [LaTeX Mathematical Symbols](https://www.caam.rice.edu/~heinken/latex/symbols.pdf)
- [LaTeX Wikibook](https://en.wikibooks.org/wiki/LaTeX/Mathematics)