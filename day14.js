//props are used to pass data from parent component to child components
//in props only can send data from parent to child

import { useState } from "react";

//prop are read only (no changes can be made)

//App.jsx as parent
//students.jsx
//users.jsx
//teacher.jsx


//state is a built in react object used to store data that can change over time 
//when the state change , react automatically updates the user interface(UI)
//like: number in cart increases, notifications turning to 0

//hooks: special rreact inbuilt function that lets function components use react features such as:
//useState, useEffect, useContext, useMemo, etc

const [value, setValue] = useState(0)
