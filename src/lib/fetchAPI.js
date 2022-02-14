async function _fetchAPI(apiURL, query, variables) {
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(apiURL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export default _fetchAPI;
