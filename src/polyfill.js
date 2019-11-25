class polyfill {
  _forEach() { // if lte IE 9
    if (window.NodeList && !NodeList.prototype.forEach)
      NodeList.prototype.forEach = Array.prototype.forEach
  }
  _closest() {
    if (window.Element && !Element.prototype.closest) {
      Element.prototype.closest =
      function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i,
            el = this;
        do {
          i = matches.length;
          while (--i >= 0 && matches.item(i) !== el) {};
        } while ((i < 0) && (el = el.parentElement));
        return el;
      };
    }
  }
  init() {
    this._forEach()
    this._closest()
  }
}

export default new polyfill().init()
