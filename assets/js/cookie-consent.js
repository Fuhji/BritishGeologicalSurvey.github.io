window.cookieconsent.initialise({
  palette: {
    popup: {
      background: '#e3e9f2',
      text: '#002e40',
    },
    button: {
      background: '#002e40',
      text: '#ffffff',
    },
  },
  type: 'opt-in',
  content: {
    message:
      'This website uses cookies to improve your experience. We’ll assume you’re okay with this, but you can opt out if you wish. ',
    dismiss: 'Accept',
    href: 'https://www.bgs.ac.uk/legal-and-policy/privacy/',
  },
  onInitialise: function (status) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      loadGAonConsent();
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
    }
  },
  onStatusChange: function (status, chosenBefore) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      loadGAonConsent();
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
    }
  },
  onRevokeChoice: function () {
    var type = this.options.type;
    if (type == 'opt-in') {
      // disable cookies
    }
    if (type == 'opt-out') {
      // enable cookies
      loadGAonConsent();
    }
  },
});
