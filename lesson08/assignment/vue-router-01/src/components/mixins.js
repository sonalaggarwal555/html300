export default{
  created: function () {
    console.log('checkout my mixin')
  },
  data () {
    return {
      isHidden: false,
      myVal: true
    }
  },
  mehtods: {
    toggleShowHide () {
      this.isHidden = !this.isHidden
    },
    myMethod () {
      var element = document.getElementById('border')
      element.classList.toggle('frame')
      console.log('..............')
    },
    displayMessage: function () {
      console.log('Printing from a mixin function')
    }
  }
}
