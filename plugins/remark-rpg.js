const flatMap = require("unist-util-flatmap");

module.exports = _options => tree => {
  Object.assign(tree, flatMap(tree, replaceDice));
};

function replaceDice(node) {
  if (node.type === "text") {
    const tokens = node.value.split(/\b(?=d[1-9][0-9]*)|(?<=d[1-9][0-9]*)\b/);

    return tokens.map(token => {
      const die = token.match(/^d([1-9][0-9]*)$/);

      return die === null
        ? { type: "text", value: token }
        : { type: "jsx", value: `<Die sides="${die[1]}"/>` }
    });
  }

  return [node];
}
