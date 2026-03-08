What is Virtual DOM and how React uses it for rendering optimization?
-The Virtual DOM (VDOM) is a lightweight, in-memory representation (a JavaScript object) of the real DOM.
-You can think of it as a copy of the real DOM, but it’s faster to manipulate because it doesn’t directly interact with the browser.
-Reffer Omkar Shinde Notes of How React works behind scene.

How does React identify which parts of the DOM to update?
-Read React Notes by Omkar.

Difference between state and props?
-Read React notes by Omkar.


What is React Pure Component?
A Pure Component is a special type of React component that only re-renders when its props or state actually change.
React does this by performing a shallow comparison of the previous and next props and state.
If nothing changed → no re-render
If something changed → re-render
This helps improve performance by avoiding unnecessary renders.
In Functional based component this can be achieved by memo.

How do you improve React app performance?
I improve React performance by avoiding unnecessary re-renders using React.memo, useCallback, and useMemo, implementing code-splitting with React.lazy, optimizing state management, and handling large lists with pagination or virtualization. I also debounce user inputs and cache API responses.


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
2.Suppose when a component is heavy and there is scenario that they have props as a type variable then we can use memo
3.So memo place that componennt in memory (but if the props value chnages then it re-render, if props value is same then it not re-render.);

e.g or syntax:
const archive=memo(function ({show}){

});

. useMemo
1.When we use memo to our function so it memorize but when we pass function and objects as a props then it not work as expected so in that scenario for object we should useMemo
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
-> On that page inside useEffect i dispatch() thunk function then inside thunk only i do an async operation and inside slice there is one option extraReducer which accept callback function and the thunk always return promise
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
inside reducer i create two action creator function (addItem,removeItem)
add cart button present on that page i use dispatch action 
and on cartList page i useSelector 
e.g. let cartList=useSelector((state)=>state.cart);

<!-- configureStore -->
const store=configureStore({
    reducer:{
        user:userSlice,
        cart:CartSlice
    }
});
<!-- Provde store to app -->
<Provider store={store}>
      <App />
</Provider>

Context API With useReducer.

const randomContext=createContext();


const initialState={};
function reducer(state,action){
    switch(action.type){
        case '':
        return {}
    }
}
function RandomProvider({children}){
    const [state,dispatch]=useReducer(reducer,initialState);
    const {one,two}=state;
    <randomContext.Provider value={{one,two}}>{children}</randomContext.Provider>
}

function useRandom(){
    const context=useContext(randomContext);
    return context;
}

return {useRandom, RandomProvider}
<!-- From Component we dispatch like -->
 onClick={() => dispatch({ type: "restart" })};

 <!-- In index.js -->
 <React.StrictMode>
    <RandomProvider>
      <App />
    </RandomProvider>
  </React.StrictMode>


What is React Query?
-React Query (now called TanStack Query) is a data fetching and caching library for React.
It helps with:
Fetching server data
Caching & automatic updates
Background refetching
Request deduplication


Why use React Query instead of Redux / Context for API data?
-React Query automatically manages cache, re-fetching, and background synchronization — things Redux doesn’t do by default.

How does React Query fetch data?
const {isLoading:isUserLoad,data:user}=useQuery({
        queryKey:['user'],
        queryFn:getUser,
});

return {isUserLoad,user};

What is the purpose of queryKey?
-Identifies each query in the cache.
-Used for caching, refetching, and invalidation.

What is Query invalidation
-It tells React Query: “This data is outdated — refetch it!”
-const queryClient = useQueryClient();
-queryClient.invalidateQueries(['users']);

What is mutation in react query?
-Mutations are side-effect operations.
e.g.
const queryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: newUser => fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(newUser),
  }),
  onSuccess: () => queryClient.invalidateQueries(['users']),
});

What is Refetching and when does it happen automatically?
React Query automatically refetches data when:
Window is refocused.
Network reconnects.
Query becomes stale.

What are staleTime and cacheTime?
staleTime:How long data is considered fresh.
cacheTime:How long unused data stays in cache before garbage collected.

<!-- IMP -->
How does React Query handle caching and background updates?
-Keeps old data until the new one is fetched (keepPreviousData).
-Automatically refetches in background if data is stale.
useQuery({
  queryKey: ['posts', page],
  queryFn: fetchPosts,
  keepPreviousData: true
});

15. How do you retry failed requests?
useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  retry: 1, // only 1 retry
});