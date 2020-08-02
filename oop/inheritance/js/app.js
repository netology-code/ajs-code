{
  function Messenger(name) {
    this.name = name;
  }
  Messenger.prototype.send = function(recipient, msg) {
    console.log(`Messenger send ${msg} to ${recipient}`);
  };

  function MultiMessenger(name, logo) {
    Messenger.call(this, name);
    this.logo = logo;
  }
  MultiMessenger.prototype = Object.create(Messenger.prototype);
  MultiMessenger.prototype.constructor = MultiMessenger;
  MultiMessenger.prototype.send = function(recipient, msg) {
    if (recipient.startsWith('netology:')) {
      Messenger.prototype.send.call(this, recipient, msg);
      return;
    }

    console.log(`Messenger send by viber ${msg} to ${recipient}`);
  };

  const viber = new MultiMessenger('viber', 'V');
  viber.send('netology:author', '...');
  viber.send('author', '...');
}

{
  class Messenger {
    constructor(name) {
      this.name = name;
    }
    send(recipient, msg) {
      console.log(`Messenger send ${msg} to ${recipient}`);
    }
  }
  class MultiMessenger extends Messenger {
    constructor(name, logo) {
      super(name);
      this.logo = logo;
    }
    send(recipient, msg) {
      if (recipient.startsWith('netology:')) {
        super.send(recipient, msg);
        return;
      }

      console.log(`Messenger send by viber ${msg} to ${recipient}`);
    }
  }

  const viber = new MultiMessenger('viber', 'V');
  viber.send('netology:author', '...');
  viber.send('author', '...');
}
