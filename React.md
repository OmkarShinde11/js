What is Virtual DOM and how React uses it for rendering optimization?
-The Virtual DOM (VDOM) is a lightweight, in-memory representation (a JavaScript object) of the real DOM.
-You can think of it as a copy of the real DOM, but it’s faster to manipulate because it doesn’t directly interact with the browser.
-It helps React efficiently decide what changes need to be made in the actual DOM.
-Render Phase (Virtual DOM Creation):
    Whenever your component’s state or props change, React re-renders that component to create a new Virtual DOM tree.

-Diffing Algorithm (Comparison Step):
    React then compares the new Virtual DOM tree with the previous one (before the update).

-This process is called reconciliation.

-React finds the minimal set of changes (differences) between the two virtual DOMs.

-Batch Updates (Real DOM Update):
    After finding what’s changed, React updates only the parts of the real DOM that actually changed — instead of re-rendering the whole UI.

-This avoids expensive DOM operations and improves performance.


How does React identify which parts of the DOM to update?
-Read React Notes by Omkar.

Difference between state and props?
-Read React notes by Omkar.


What’s the difference in forms handling?
1. React Controlled Element.
---React treats form inputs as part of the component’s state — this gives you full control over the input values.
---The form input’s value is controlled by React state.
---You update it using onChange and store it in useState.

2. THird Party Library.
React Form Hook: Here We use React hook form where it take care of handaling state.no need to create a controlled element also there are some inbuilt function which are used for validation use register then for submit a form use onSubmit function. to validate something based on some value use getValues.

React Context API:
What problem does it solve? What’s the drawback compared to Redux?
---The Context API solves the problem of prop drilling —
i.e., passing props manually through multiple nested components just to reach a deeply nested child.
---Allow us to pass a global state to entire app.

For difference with redux Read React Notes By Omkar


What is React.lazy?
---React.lazy() lets you lazy-load components — meaning, a component is not loaded until it’s actually needed (e.g., when a user navigates to that page).
This helps reduce the initial bundle size and improve app loading time.

What is Suspense?
<Suspense> is a React component used to show a fallback (like a loader) while a lazy-loaded component is being fetched.
You must wrap lazy components inside a Suspense boundary.


Why are keys important in React lists?
---Keys are unique identifiers given to elements in a list.
They help React track which items have changed, been added, or removed between renders.
When React re-renders a list (for example, after state changes), it uses keys to decide:
Which items are new,
Which items have been removed, and
Which items have been moved or updated.
Without keys, React can’t match old elements with new ones correctly, which may lead to:
Incorrect re-renders,


What is Redux?
---Redux is a state management library that stores your application’s state in a single store (global object).
It helps in predictable state transitions using actions and reducers.

What is an Action Creator?
---A function that returns an action object.

What is combineReducers()?
---Used to split state logic into multiple reducers and merge them.

What is redux-thunk?
---A middleware that lets you write async logic (like API calls) inside action creators.

What is the role of the Provider component?
---Wraps your app and makes the Redux store available to all components



useCallback is used to memoize a function definition, so that it doesn’t get recreated on every render unless its dependencies change.


Children Composition:
Children Composition prevents wated re-renders.
e.g.
function Test(){
    const [count,setCount]=useState(0);
    function INC(){
        setCount((count)=>count+1);
    };

    return (
        <>
        <div><button onClick={INC}>Inc</button></div>
        </SlowCmp>
        </>
    )
}
In Above e.g. on every click state is change so it update a DOM but SlowCmp is not used that state still that also re-render
So we Can Prevent this wasted re-render by children Composition.

function Counter({children}){
    const [count,setCount]=useState(0);
    function INC(){
        setCount((count)=>count+1);
    };

    return (
        <>
        <div><button onClick={INC}>Inc</button></div>
        {children}
        </>
    )
};

function Test(){
    <Counter>
    </SlowCmp>
    </Counter>
}

memo,useMemo,useCallback 
. memo
1.Memo component is used to memorize a component
2.Suppose when a component is heavy and there is scenario that state have props as a type variable then we can use memo
3.So memo place that componennt in memory (but if the props value chnages then it re-render, if props value is same then it not re-render.);

e.g or syntax:
const archive=memo(function ({show}){

});

. useMemo
1.When we use memo to our function so it memorize but when we pass function and objects then it not work as expected so in that scenario for object we should useMemo
2.Because when props pass as object and function in javascript two objects and function are not same.
e.g. or syntax.

useMemo it seems like useEffect it accept a callback function and dependency array.
const archiveOptions=useMemo(()=>{
    return {
        title:`Total ${post.length} post are there`,
        show:false,
    }
},[post.length]);

so in above code this object is recreated on post length changes until that object is not created and component not re-render.

.useCallback
1.useCallback used to memorize a function 
2.This scenario is happen when we pass props as a function 
3.e.g. or syntax 
Same like useMemo

Diff in useMemo and useCallback
usememo memorize an result while useCallback memorize an function.


what is Redux?
---Redux is a state management library that stores your application’s state in a single store (global object).
It helps in predictable state transitions using actions and reducers.

What are the main principles of Redux?
---Single source of truth – only one store for the entire app.
---State is read-only – can only be changed by dispatching an action.
---Changes are made with pure functions – reducers must be pure.

What is the difference between state and store?
---state → local (component-level using useState).
---store → global (Redux-managed shared state).

What are pure functions, and why are reducers pure?
---Pure functions: same input → same output, no side effects.

What are middleware in Redux?
---Middleware intercept actions before they reach reducers.
---Used for logging, API calls, async logic (like redux-thunk).

What is the role of the Provider component?
---Wraps your app and makes the Redux store available to all components using React Context.
---This is in mostly in main.jsx

How do you connect a component to Redux?
--- For getting data i use useSelector();
--- and for updation i use useDispatch();

What is Redux Toolkit (RTK)?
---A newer, official way to write Redux logic with less boilerplate.
---Provides helpers: createSlice, configureStore, createAsyncThunk



Question:
Your application needs to fetch a list of users from an API (/api/users) and display them in a React component.
You must show:
A loading spinner while data is fetching
The list of users on success
An error message on failure
How would you handle this in Redux?
-> On that page inside useEffect i dispatch() thunk function then inside thunk only i do an async operation and inside slice there is one option extraReducer which accept callback function and the thunk always retun promise
So i handle the result of thunk in following way

extraReducers:(builder)=>
  builder
  .addCase(fetchAddress.pending,(state,action)=>{state.status='loading'})
  .addCase(fetchAddress.fulfilled,(state,action)=>{state.position=action.payload.position,state.address=action.payload.address,state.status='idle'})
  .addCase(fetchAddress.rejected,(state,action)=>{state.error=action.error.message,state.status='error'})

  so then till time of data is coming from api so inside pending i update a status='loading'
  and in component using useSelector i get a state and bases on status value i show spinner.


Question:
You have two components:
CartList – shows all items in the cart.
AddToCartButton – allows adding new items.
Both need to update and reflect the same global cart data.
How would you design your Redux logic so both stay in sync without manually passing props?


in cartSlice 
in side reducer i create two action creator function (addItem,removeItem)
add bcart button present on that page i use dispatch action 
and on cartList page i useSelector 
e.g. let cartList=useSelector((state)=>state.cart);