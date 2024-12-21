```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/another-page');
    // Some other code here that might cause a race condition
    doSomethingElse(); 
  };

  const doSomethingElse = () => {
    // This function might access router.query or router.asPath before the route change is complete
    console.log(router.query);
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent;
```