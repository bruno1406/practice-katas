// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
  let i = 0;
  if (url.indexOf("//www.") > 0) {
    i = url.indexOf("//www.") + 6;
  } else if (url.indexOf("www.") >= 0) {
    i = url.indexOf("www.") + 4;
  } else if (url.indexOf("//") > 0) {
    i = url.indexOf("//") + 2;
  }
  return url.substr(i).split(".")[0];
}

domainName("http://github.com/carbonfive/raygun");
