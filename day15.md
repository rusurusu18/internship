UseEffect ko kam haru 

____________ComponentLifecycle________
=>Mount(create)-update-Hide(Removed)
It is the series of the stage that a react component goes through from the time it is created until it is removed from the screen.

1 Mounting
Mounting is when a component is created and displayed on the screen from the first time.
example:
function App(){
    return(
    <h1>Hellow react</h1>
    )
}

2 Updating
It is the phase updating happens whenever state changes , props change and context changes 

3 Unmounting
It means the component is removed from the screen 


________________useContext_____________
(props ko alternative jastai)
=>It helps to share data between components without passing props manually through every leveler components (avoids "props drilling")

Example to share data from app to profile we cant do using props 
App(username="Rushu")
Navbar()
Menu()
Profile()

with context
App----> Context----> Any components
Any component can access the shared data directly 

Step 1 create user context
Step 2 create provider for available the data inside
Step3 creating consumer to consume the data


___________useMemo_______


___________useRef________



________Event_Handling_________________
it is the process of the responding the user actions such as clicking a button, typing in an input field, hovering over an element or submitting a form 


user action click(button)-----function execute(handleClick())----- ui updates(button has been clicked)


_________________Forms________________________
It is used to collect information from the users
-Login page 
-Signup page 
-Contactus page 


___________flow of react from______________
user type (Rushu)---onChange()----updates state (useState(""))---u=input value changes--- UI updates


____________Controlled components____________
A controlled components is an input element whose value is controlled by react state 

_________Why Controlled Components?__________
= EASY VALIDATION
= EASY FORM SUBMISSION
= REAL TIME UPDATES
= BETTER DATA MANAGEMENT


__________React-Router-DOM_________

It is a library that enables client side routing in react application.
 
It allows user to navigate between pages without reloading the entire browser pages.


package install :
npm install react-router-dom


//createBrowserRouter
It is a funxtion provided by react router dom that creates a router object by defining all applications routes in one place


_______OLD METHOD__________
<BrowserRouter>
<Routes> // <App />
<Route   >

_______NEW METHOD SYNTAX________
const router = createBrowserRouter([

])

____Features of createBrowserRouter___
- cleaner method
- more scalable (update,delete)
- better for large applications
- supports loaders and actions 


________Layout_________
Mall
|
|---Home
|
|---About

