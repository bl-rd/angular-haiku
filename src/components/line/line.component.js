let lineComponent = {
  templateUrl: './src/components/line/line.tmpl.html',
  controller: lineController,
  bindings: {
    data: '<',
    index: '<'
  }
};

function lineController() {
  let self = this;

  this.$onInit = function() {
    console.log('initialised line', self.index);
    // @todo use the index property to delay the transition...
    let id = `#line-${self.index}`;
    let diff = self.index + 1 * 1.5;
    setTimeout(function() {
      document.querySelector(id).classList.add('thing');
    }, diff);

  }
}

export { lineComponent };