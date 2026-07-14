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


useMemo
useRef




_______________API fetching____________ 


