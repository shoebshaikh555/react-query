# <img align="left" alt="React" width="170px" height="60px" src="https://raw.githubusercontent.com/TanStack/query/main/media/repo-dark.png" />

<br/><br/><br/><br/>

React Query is a library for **fetching** data in a React application. State management libraries are not great for working with the asynchronous or server state. React query facilitates the asynchronous or server state management.

<br/>

### **Client state VS Server State**

1.  Client State is the state persisted in your app/browser memory and is accessed/updated synchronously.

2.  Server State is the state persisted remotely and requires asynchronous APIs for fetching or updating.

3.  It has shared ownership.

4.  UI may not be in sync with the remote data.

5.  It becomes very challenging dealing with the caching, deduping (eliminate) multiple requests for same data, updating stale data in the background and performance optimization (pagination and lazy loading).

### **UseQuery Hook**

1. The UseQuery hook is used to fetch data.

2. **useQuery** hook will have two arguments. The first one is the unique key for identifying the query. The second one argument is a function that accepts a promise.

3. **isLoading** is the boolean promise value returned by useQuery hook that indicates that the data is being fetched.

4. **data** is the promise value returned by useQuery hook that represents the data fetched by the query.

5. **isError** is the boolean promise value returned by useQuery hook that indicates some error has occured while fetching the data.

6. **error** is the error object returned by the useQuery hook promise that describes the error occured while fetching the data.

7. **isRefetching** is the flag that indicates the background refetching of the query.

### **ReactQueryDevtools**

1. ReactQueryDevtools is used for debugging the react queries.

2. It will create a floating button on click of which will open the react query dev tools.

3. The stale tab will list down keys all the queries executed.

4. The queries can be filtered and sorted.

5. On click of the query key will open the query details section.

6. The query details will consist of query key, Observers, Last Updated time, Actions, Data Explorer and Query Explorer.

### **Query Cache**

1. The Query Cache is used for caching the query results.

2. Every query is cached by default for 5 minutes and react query relies on that cache for the subsequent requests.

3. The react query makes a background refetch call to make the data consistent.

4. Query cache time can also be configured using the useQuery hook using the cacheTime property.

### **Stale Time**

1. The Stale Time is used to reduce the number of request for data that does not change frequently.

2. The stale time is zero seconds by default.

3. The stale time can also be configured using the useQuery hook using the staleTime property.

### **Refetch Defaults**

1. The **refetchOnMount** property of the useQuery hook will indicate the default behaviour of refetching a query.

2. The **refetchOnMount** property when set to true will refetch the query every time a component is mounted.

3. The **refetchOnWindowFocus** property will refetch the query when clicked inside the main document window.

4. The **refetchOnWindowFocus** property will only make the refetch when the data is stale form.

### **Polling**

1. Polling refers to fetching data at regular intervals.

2. The UI will always be in sync with the remote data irrespective with configuration of **refetchOnMount** and **refetchOnWindowFocus**.

3. **refetchInterval** property of useQuery is enable to continuous refetch of the query in that interval.

4. **refetchIntervalInBackground** property of useQuery enables the refetch process even when the window is out of focus.

### **Fetching data using useQuery on en event**

1. The enabled property of the useQuery lets us to control the on-mount query call. When enabled is set to false will restrict the useQuery to get called on-mount of the component.

2. The refetch function of the useQuery helps us to call the useQuery on an event.

### **Success and Error Callbacks**

1. When fetching data, you might want to perform side-effects on completion of the query.

2. The **onSuccess** and **onError** properties of useQuery are used to perform callbacks.

3. React Query automatically injects data or error onSuccess and onError.

### **Data Transformation**

1. The data transformation property of useQuery hook is used to transform or filter the data coming from the useQuery into the desired format.

2. The select options is used to transform data or select only a part of data returned by the query.

### **Custom Query Hook**

1. Parallel Queries are queries fetched in parallel to maximise query concurrency.

2. Parallel queries can be executed by calling the useQuery hook multiple times.

### **Dynamic Parallel Queries**

1. The useQuery hook provides a property called keepPreviousData which can be used in applications that require pagination.

2. The keepPreviousData will maintain the previous data while new data is being requested.
3. The previous data is seamlessly swaped when the new data arrives.
4. The isFetching flag is used to show that the data is being fetched.

### **Infinite Queries**

1. The React Query provides a hook called useInfiniteQuery to cater to the applications requiring infinite scroll/pagination.

2. The useInfiniteQuery injects some params such as pageParam into the fetcher function.

3. The getNextPageParam property is used to dynamically change the pageParam parameter.

4. The getNextPageParam receives two parameters i.e lastPage and pages.

5. The pages parameter refers to the array of API responses where each response corresponds to the data being fetched at a time.

6. The hasNextPage parameter returned by the getNextPageParam indicates if the exististence of the next data if needs to be fetched.

7. The fetchNextPage page parameter is used to fetch the next page data.

### **Mutations**

1. The mutations are used for adding and updating the data on server.

2. The **useMutation** hook is used to perform mutations.

3. The useMutation hook unlike useQuery does not require a key.

4. It accepts two arguments. The first argument is the function that post data into the backend.

### **Query Invalidation**

1. The **useQueryClient** is used to invalidate the current query.

2. On invalidating the current active will make a refetch.

### **Handling Mutation Responses**

1. On completion of mutation and invalidating the current query will require a network call.

2. We can use the object sent in the mutation response and update the query with the new data without making a network call.

3. The **setQueryData** function is used to update the query data. It takes two parameters. First is the query key and the second is an arrow function. This function will receive the old query data as an argument.

### **Optimistic Updates**

1. Optimistic Updates allows the ability to update the states before performing the mutation under the assumption that it will be successful.

2. It will the user an expression that the app is lazing fast.
   The onMutate callback is called before the actual mutation is fired and would receive the same variables as that of mutation function.

3. All refetch needs to cancelled so that it they won’t overwrite the optimistic updates. The cancelQueries method of the queryClient instance is used for cancelling the refetch.

4. The current query data needs to controlled in case if the mutation fails. The getQueryData method of the queryClient instance is used for this purpose.

5. The onError is used if the mutation encounters any error. It will have three arguments. The first argument is the error. The second argument are the variables passed to the mutation. The argument is the context which contains the additional information pertaining to the mutation like the previous query data.

6. The onSettled callback function is called if the mutation is either successful or encounters an error. The data is refetch using invalidateQueries method of the queryClient instance.

### **Axios Interceptor**

1. Using the Axios Interceptor with network request will provide features like base url, bearer token, custom error handling etc.

2. The base url is set in the axios.create client.

3. A wrapping function called ‘request’ is used to wrap all the axios requests. This function will accept all the options that the axios accepts.
