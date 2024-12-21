```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = async () => {
    const promise = new Promise(resolve => router.events.on('routeChangeComplete', resolve));
    router.push('/another-page');
    await promise; // Wait for route change to complete
    doSomethingElse();
  };

  const doSomethingElse = () => {
    console.log(router.query);
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent;
```