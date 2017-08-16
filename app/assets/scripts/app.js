function person(){
  this.greet : function(){
    console.log("hey");
  }
}

var me = new person();
me.greet();
