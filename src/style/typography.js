import { injectGlobal } from "emotion";

injectGlobal`
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");

body {
  font-family: "Montserrat", sans-serif;
  font-size: var(--default-font-size);
}

h1 {
  font-weight: 700;
}

a,
a:link,
a:hover,
a:visited,
a:active {
  text-decoration: none;
}

a:hover {
  transition: all 0.3s ease-in-out;
}
`;
