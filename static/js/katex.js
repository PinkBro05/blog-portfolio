document.addEventListener("DOMContentLoaded", function() {
  // Load KaTeX CSS
  const katexCss = document.createElement("link");
  katexCss.rel = "stylesheet";
  katexCss.href = "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css";
  katexCss.integrity = "sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn";
  katexCss.crossOrigin = "anonymous";
  document.head.appendChild(katexCss);

  // Load KaTeX JS
  const katexScript = document.createElement("script");
  katexScript.src = "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js";
  katexScript.integrity = "sha384-cpW21h6RZv/phavutF+AuVYrr+dA8xD9zs6FwLpaCct6O9ctzYFfFr4dgmgccOTx";
  katexScript.crossOrigin = "anonymous";
  katexScript.defer = true;
  document.head.appendChild(katexScript);

  // Load auto-render extension for KaTeX
  const autoRenderScript = document.createElement("script");
  autoRenderScript.src = "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js";
  autoRenderScript.integrity = "sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05";
  autoRenderScript.crossOrigin = "anonymous";
  autoRenderScript.defer = true;
  document.head.appendChild(autoRenderScript);

  // Initialize auto-render after KaTeX is loaded
  autoRenderScript.onload = function() {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: false},
        {left: '\\[', right: '\\]', display: true}
      ],
      throwOnError: false
    });
  };
});