var vorpal = require('vorpal')();

vorpal.command('duck', 'Outputs "rabbit"')
      .action(function(args, callback) {
        this.log('Wabbit');
        callback();
      });

vorpal.delimiter('daffy$')
      .show();
