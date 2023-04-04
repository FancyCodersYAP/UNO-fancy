module.exports = {
  process(_, sourcePath) {
    return {
      code: `module.exports = ${JSON.stringify(sourcePath)};`,
    };
  },
};
