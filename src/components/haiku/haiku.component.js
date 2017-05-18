function haikuComponent() {

  let component = {
    templateUrl: './src/components/haiku/haiku.tmpl.html',
    controller: haikuController,
    bindings: {
      data: '<'
    }
  };

  function haikuController() {
    
  }

  return component;
  
}

export { haikuComponent }