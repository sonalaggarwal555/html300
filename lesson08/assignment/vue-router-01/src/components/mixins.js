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
  methods: {
    toggleShowHide () {
      this.isHidden = !this.isHidden
    },
    myMethod () {
      var element = document.getElementById('border')
      element.classList.toggle('frame')
      console.log('mixin method')
    },
    displayMessage: function () {
      console.log('Printing from a mixin function')
    }
  }
}
