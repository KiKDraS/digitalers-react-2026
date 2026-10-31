class Observer {
  subscribers = [];

  constructor(state) {
    this.state = state;
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  updateState(newState) {
    this.state = this.state + newState;
    this.subscribers.forEach((subscriber) => subscriber.render(this.state));
  }

  dispatch(newState) {
    this.updateState(newState);
  }
}

const store = new Observer(0);

const subscriber = {
  render: (state) => {
    console.log(`Subscriber - state: ${state}`);
  },
};

store.subscribe(subscriber);

store.dispatch(1);
store.dispatch(1);
store.dispatch(1);
