const { nodeFromUrl, dateFromtext, stringDateFromText } = require('./src');

export const main = async () => {
  const node = await nodeFromUrl(require('./src/config'));
  console.log(stringDateFromText(node.textContent));
  console.log(dateFromtext(node.textContent));
};

(async () => {
  await main();
})();
