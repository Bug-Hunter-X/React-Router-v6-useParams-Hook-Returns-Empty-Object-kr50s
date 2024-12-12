In React Router Dom v6, using the `useParams` hook inside a component that's not directly nested within a route that matches a dynamic segment will result in an empty object being returned.  This happens because `useParams` relies on the nearest parent route with dynamic parameters to provide its context. If that context is missing, it defaults to an empty object.

```javascript
//Incorrect Usage
function MyComponent() {
  const { id } = useParams(); // id will always be undefined
  console.log(id); // Output: undefined
  return <div>My Component</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  );
}
```