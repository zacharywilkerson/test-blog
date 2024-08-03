import 'katex/dist/katex.min.css';
import 'mathjax/es5/tex-mml-chtml.js';

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      type="text/javascript"
      id="MathJax-script"
      async
      src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML"
    />,
    <script
      dangerouslySetInnerHTML={{
        __html: `
          MathJax.Hub.Config({
            tex2jax: {
              inlineMath: [['$', '$'], ['\\(', '\\)']],
              displayMath: [['$$', '$$'], ['\\[', '\\]']],
              processEscapes: true,
            },
          });
        `,
      }}
    />,
  ]);
};

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This tutorial has been updated. ` + `Reload to display the latest version?`
  );
  if (answer === true) {
    window.location.reload();
  }
};
