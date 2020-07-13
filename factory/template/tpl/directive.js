module.exports = function (name) {
  return `const ${name} = {
    bind() {

    },
    // When the bound element is inserted into the DOM...
    inserted(el) {
        // el.focus();
    },
    update() {

    },
    unbind() {

    }
};

export default ${name};`
}
