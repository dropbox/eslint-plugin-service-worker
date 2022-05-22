const report = (context, ...nodes) => {
  const n = nodes.length;
  if (!context) {
    throw new Error('context is missing!');
  }
  if (n < 1) {
    throw new Error('report requires at least one argument!');
  }
  const nodePath = nodes.map(({ name }) => name).join('.');
  context.report({
    node: nodes[n - 1],
    message: `${nodePath} does not exist in service worker.`,
  });
};

module.exports = {
  report,
};
