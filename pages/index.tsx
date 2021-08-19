import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CircularProgress } from '@material-ui/core';
import Link from '../src/Link';

import { useGitHubStars } from '../src/querys';

export function Example() {
  const { isLoading, error, data, isFetching } = useGitHubStars();

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) {
    return <div>err happened</div>;
  }
  if (isFetching) return <CircularProgress />;

  return (
    <div>
      <h1>{data.id}</h1>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>
      <strong>🍴 {data.forks_count}</strong>
      <pre style={{ fontSize: 12 }}>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
}

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Example />
      </Box>
    </Container>
  );
}
