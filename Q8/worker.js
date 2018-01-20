self.addEventListener(
  "message",
  function(event) {
    var data = event.data;
    switch (data.cmd) {
      case "start":
        self.postMessage(`Worker Initialised. Message: '${data.msg}'`);
        break;
      case "stop":
        self.postMessage(
          `Worker Destroyed. Message: '${data.msg}' (Buttons are no longer working)`
        );
        self.close();
        break;
      default:
        self.postMessage(`Unknown message: '${data.msg}'`);
    }
  },
  false
);
