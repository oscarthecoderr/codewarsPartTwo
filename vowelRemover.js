//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut (string) {
  string = string.replace(/[a,e,i,o,u]/gi,'')
  return string
}