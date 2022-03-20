// code your solution here
function saturdayFun(val = "roller-skate", sym = "!") {
  return "This Saturday, I want to " + val + sym;
}

function mondayWork(val = "go to the office", sym = ".") {
  return "This Monday, I will " + val + sym;
}

function wrapAdjective(symbol) {
  const msg = "You are ";
  const varthat = function (tex) {
    // console.log();
    const warn = "!";
    return msg + symbol + tex + symbol + warn;
  };
  return varthat;
}
