function haikuComponent() {

  let component = {
    templateUrl: './src/components/haiku/haiku.tmpl.html',
    controller: haikuController,
    bindings: {
      data: '<'
    }
  };

  function haikuController() {
    let self = this;

    this.$onInit = function() {
      
    };

    this.$onChanges = function(change) {
      
    }
  }

  return component;
  
}

export { haikuComponent }