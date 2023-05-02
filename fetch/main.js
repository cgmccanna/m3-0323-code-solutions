async function logData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/usrs', {
    method: 'GET'
  });
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  console.log(data);
}

logData();
