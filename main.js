const homeText = Termpage.replace(`
...My name is Pongsiri Chuaychoonoo (Savepong), welcome to my terminal!
...Type help for the list of available commands....\n\n`,
  {
    help: Termpage.color('orange'),
    Savepong: Termpage.link('https://www.savepong.com'),
  });

function processInput(input = '') {
  input = input.toLowerCase().trim();
  const commands = ['hi', 'github', 'medium', 'image'];

  switch (input) {
    case 'hi':
      return { text: homeText };
      break;
  
    case 'github':
      return { text: '<a href="https://github.com/savepong" target="_blank">https://github.com/savepong</a>'};
  
    case 'medium':
      return { text: '<a href="https://medium.com/@savepong" target="_blank">https://medium.com/@savepong</a>'};

    case 'help':
      return { text: 'Available commands are 👇 ', commands: commands };

    default:
      return { text: '', commands: commands };
      break;
  }

  if (input === "help") {
    return { text: "Available commands are `home`, `help` and `image`", commands: commands };
  } else if (input === 'home') {
    return { text: homeText, commands: commands };
  } else if (input === 'image') {
    return { text: '<img width="200" height="200" src="https://avatars0.githubusercontent.com/u/15765838?s=460&v=4" alt="me"/>', commands: commands };
  } else if (input) {
    return { text: 'Command not found\n', commands: commands };
  } else {
    return { text: '', commands: commands };
  }
}

Termpage.init(
  document.getElementById('window1'),
  processInput,
  {
    initialCommand: window.location.hash.substr(1) || 'hi'
  }
);

// Termpage.init(
//   document.getElementById('window2'),
//   (input) => {
//     if (!input) { return '' }
//     else if (input === 'home') {
//       return 'This terminal demonstrates async commands that have 50% chance of failing';
//     }
//     let resolveP;
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (Math.random() > 0.5) {
//           resolve({
//             text: 'async request was successfull'
//           });
//         } else {
//           reject()
//         }
//       }, 500);
//     });
//     return promise;
//   },
//   {
//     initialCommand: 'home',
//     prompt: Termpage.color('green', 'type_anything:') + ':',
//     autoFocus: false
//   }
// );

