module.exports = function check(str, bracketsConfig) {
  let stack = []

  for(let i=0; i<str.length; i++) {
    for(let j=0; j<bracketsConfig.length; j++) {
      if(bracketsConfig[j][0] == str[i]) {
        if(bracketsConfig[j][0] != bracketsConfig[j][1]) {
          stack.push(str[i])
          break;
        }
        else {
          if(stack.length == 0) {
            stack.push(str[i])
            break;
          }
          else {
            if(stack[stack.length-1] != str[i]) {
              stack.push(str[i])
              break;
            }
          }
        } 
      }
      if(bracketsConfig[j][1] == str[i]) {
        if(bracketsConfig[j][0] != bracketsConfig[j][1]) {
          if(!stack.length) {
            return false
          }
          if(stack[stack.length-1] == bracketsConfig[j][0]) {
            stack.pop()
            break;
          }
        }
        else {
          if(stack[stack.length-1] == str[i] && stack.length != 0) {
            stack.pop()
            break;
          }
        }
      }
    }
  }
  return !stack.length ? true : false
}
