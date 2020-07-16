module.exports = function (name) {
  return `const ${name} = {
    bind() {},
    inserted(el) {},
    update() {},
    unbind() {}
};

export default ${name};`
}
