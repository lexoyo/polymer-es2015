class MyElement {
  constructor () {
  }

  get is () {
    return 'my-element';
  }

  created() {
    this.properties = {
      who: {
        value: 'ES2015!',
        type: String
      }
    };
  };

  ready() {
    console.log('element ready');
  };

}

// register this element
Polymer(MyElement);

