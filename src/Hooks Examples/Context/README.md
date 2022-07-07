# useContext

<div dir="rtl">
React context היא דרך לנהל state גלובלי. אפשר להשתמש ב context גם במחלקה וגם בפונקציה.

הוא בעצם מקל עלינו את העבודה עם useState - במקום להעביר פונקציות וערכים לבנים, אנחנו נעטוף את הבנים ב provider, ו react
תדאג לבד להעביר את המידע.

לדוגמא אם נרצה להעביר רק עם state ערך לבן החמישי של קומפוננטה זה ייראה משהו כזה.

<div dir="ltr">

```js
function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user}/>
    </>
  );
}

function Component2({user}) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user}/>
    </>
  );
}

function Component3({user}) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user}/>
    </>
  );
}

function Component4({user}) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user}/>
    </>
  );
}

function Component5({user}) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
```

</div>
אפשר להבין את הבעיה כאן, כומה זה יכול להיות מסובך.

אז כדי לפתור את הבעיה הזאת react יצרו את context.

## שימוש בדרך הפשוטה

ניצור ה context ואז ב נעטוף את הילדים עם ה Provider, ונעביר ב value את הערך שנרצה להעביר לילדים.
<div dir="ltr"> 

```js
import {useState, createContext} from "react";

import ClassContextComponent from "./ClassContextComponent";
import FunctionContextComponent from "./FunctionContextComponent";

export const ThemeContext = createContext()

export default function SimpleWay() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevState) => !prevState);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent/>
        <ClassContextComponent/>
      </ThemeContext.Provider>
    </>
  );
}
```

</div>

## איך נגשים למידע

### במחלקה

* נייבא את ה context
* נעטוף את איפה שאנחנו רוצים את המידע עם Consumer

<div dir="ltr">

```js
import React, {Component} from "react";
import {ThemeContext} from "./index";

export default class ClassContextComponent extends Component {
  themeStyle(dark) {
    return {
      backgroundColor: dark ? "#333" : "#CCC",
      color: dark ? "#CCC" : "#333",
      padding: "2rem",
      margin: "2rem",
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyle(darkTheme)}>Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
```

</div>

### בפונקציה

אפשר לראות שמחלקה זה טיפה מסובך לכן ריאקט יצרנו לנו את ה hook שנקרא useContext.

* נייבא את ה context ואת ה useContext
* כדי לקבל את המידע מה-context נעביר ל useContext את ה context, והוא ישלוף את המידע

<div dir="ltr">

```js
import React, {useContext} from "react";
import {ThemeContext} from "./index";

export default function FunctionContextComponent() {
  const darkTheme = useContext(ThemeContext);

  const theme = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <div style={theme}>Function Theme</div>
    </>
  );
}
```

</div>

> ה context עובד כמו satet, כל פעם שהוא יתעדכן, יתבצע רינדור מחדש, אפשר להשתמש ב useMemo כדי לייעל תהליכים
> גם אם משתמשים ב useContext חייבים להשתמש ב Provider

## שימוש עם הוק שלנו

כדי להקל על התהליך של הגישה למידע, ולרכז את כל הקוד שקשור למקום אחד אפשר ליצור hook משלנו שהוא יהיה ה context

* נייבא את useState, createContext, useContext
* ניצור את contextים שנרצה
* ניצור את ה hook כדי שיאפשרו לנו להשתמש ב context בצורה יותר ברורה וקלה
* ניצור קומפוננט ששם יהיו לנו הערכים שנרצה להעביר - צריך לקבל את הchildren מה props ולשים אותם בתוך ה Providerים

<div dir="ltr">

```js
import React, {useState, createContext, useContext} from "react";

const ThemeContext = createContext();
const UpdateThemeContext = createContext();

// הוק משלנו כדי להקל עלינו עם השימוש
export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(UpdateThemeContext);
}

export function ThemeProvider({children}) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevState) => !prevState);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <UpdateThemeContext.Provider value={toggleTheme}>
        {children}
      </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
```

</div>
עכשיו כדי להשתמש במידע ובהוקים

**באבא:**

* נייבא את הקומפוננט שיצרנו(ששם יש את ה provider)
* נעטוף את הילדים שנרצה

**בבנים:**

* נייבא את ההוקים שיצרנו
* נוציא את המידע מהם

<div dir="ltr">

```js
// in the root component
import {ThemeProvider} from "./ThemeContext";
import FunctionContextComponent from "./FunctionContextComponent";

export default function CustomHook() {
  return (
    <ThemeProvider>
      <FunctionContextComponent/>
    </ThemeProvider>
  );
}


// in the children
import {useTheme, useThemeUpdate} from "./ThemeContext";

export default function FunctionContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const theme = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={theme}>Function Theme</div>
    </>
  );
}
```

</div>

</div>