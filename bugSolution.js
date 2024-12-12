The solution involves ensuring that the component using `useParams` is a child of a route with a dynamic segment.

```javascript
//Correct Usage
function UserDetail() {
  const { id } = useParams();
  console.log(id); // Output: the actual ID
  return (
    <div>User Detail {id}</div>
  );
}

function Users() {
  return (
    <Routes>
      <Route path=':id' element={<UserDetail />} />
    </Routes>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users/*" element={<Users />} />
      </Route>
    </Routes>
  );
}
```
By nesting the `UserDetail` component within a route with `:id`, the `useParams` hook can correctly access the dynamic segment parameter.