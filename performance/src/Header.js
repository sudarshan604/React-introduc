// import themeContext from "./Theme";

import { ThemeContextConsumer } from "./Theme";

function Header() {
  return (
    <ThemeContextConsumer>
      {(value) => (
        <div>
          <h1>{value.theme === "light" ? "light" : "Darh"}Theme</h1>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
export default Header;
