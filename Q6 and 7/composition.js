const barker = state => ({
  bark: () => console.log(`Woof, I am ${state.name}`)
});

const driver = state => ({
  drive: () => (state.position = state.position + state.speed)
});

const killer = state => ({
  kill: name => console.log(`${state.name} killed ${name}`)
});

const murderRobotDog = name => {
  let state = {
    name,
    speed: 100,
    position: 0
  };

  return Object.assign({}, barker(state), driver(state), killer(state));
};

var fluffels = murderRobotDog('Mr. Fluffels');
fluffels.bark();
fluffels.kill("Jerry");
