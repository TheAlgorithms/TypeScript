/**
 * Professional Example: Concurrent Data Fetching in TypeScript
 *
 * This module demonstrates best practices for fetching multiple independent
 * resources concurrently using `Promise.all` and `Promise.allSettled`.
 * Concurrent fetching significantly improves performance compared to
 * sequential fetching when requests do not depend on each other.
 */

import { Semaphore } from './Semaphore'

// --- Type Definitions ---

export interface User {
  id: number
  name: string
  email: string
}

export interface Post {
  id: number
  userId: number
  title: string
  body: string
}

export interface Comment {
  id: number
  postId: number
  name: string
  body: string
}

// --- Mock API Service ---
// In a real application, these would be actual fetch calls (e.g., using native fetch or axios).

const api = {
  async fetchUsers(): Promise<User[]> {
    // Simulating network latency
    await new Promise((resolve) => setTimeout(resolve, 500))
    return [
      { id: 1, name: 'Alice Smith', email: 'alice@example.com' },
      { id: 2, name: 'Bob Jones', email: 'bob@example.com' }
    ]
  },

  async fetchPosts(): Promise<Post[]> {
    await new Promise((resolve) => setTimeout(resolve, 800))
    return [
      {
        id: 101,
        userId: 1,
        title: 'TypeScript Tips',
        body: 'Use strict mode.'
      },
      {
        id: 102,
        userId: 2,
        title: 'Async/Await',
        body: 'Makes promises easier to read.'
      }
    ]
  },

  async fetchComments(): Promise<Comment[]> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    // Simulating a potential network error for demonstration purposes
    if (Math.random() < 0.1) {
      throw new Error('Network Error')
    }
    return [{ id: 1001, postId: 101, name: 'Charlie', body: 'Great tips!' }]
  }
}

// --- Concurrent Fetching Implementations ---

/**
 * Example 1: Using Promise.all
 *
 * Best when you need ALL requests to succeed. If any single promise rejects,
 * the entire Promise.all rejects immediately (fail-fast behavior).
 */
export async function fetchAllDataStrict(): Promise<{
  users: User[]
  posts: Post[]
  comments: Comment[]
}> {
  try {
    console.log('Starting concurrent fetch (Strict)...')
    const startTime = Date.now()

    // The requests are initiated concurrently.
    // We await the resolution of all promises together.
    const [users, posts, comments] = await Promise.all([
      api.fetchUsers(),
      api.fetchPosts(),
      api.fetchComments()
    ])

    const duration = Date.now() - startTime
    console.log(`Successfully fetched all data in ${duration}ms`)

    return { users, posts, comments }
  } catch (error) {
    // If ANY of the fetches fail, we catch the error here.
    console.error('Critical failure during concurrent data fetch:', error)
    throw new Error('Failed to load application data. Please try again later.')
  }
}

/**
 * Example 2: Using Promise.allSettled
 *
 * Best when requests are independent and you want to handle successes and
 * failures individually without failing the entire operation if one request fails.
 */
export async function fetchDataResiliently(): Promise<void> {
  console.log('\nStarting concurrent fetch (Resilient)...')
  const startTime = Date.now()

  const results = await Promise.allSettled([
    api.fetchUsers(),
    api.fetchPosts(),
    api.fetchComments()
  ])

  const duration = Date.now() - startTime
  console.log(`Finished resilient fetch in ${duration}ms`)

  // Process results safely using type narrowing
  const [usersResult, postsResult, commentsResult] = results

  if (usersResult.status === 'fulfilled') {
    console.log(`✅ Loaded ${usersResult.value.length} users.`)
  } else {
    console.error(`❌ Failed to load users:`, usersResult.reason)
  }

  if (postsResult.status === 'fulfilled') {
    console.log(`✅ Loaded ${postsResult.value.length} posts.`)
  } else {
    console.error(`❌ Failed to load posts:`, postsResult.reason)
  }

  if (commentsResult.status === 'fulfilled') {
    console.log(`✅ Loaded ${commentsResult.value.length} comments.`)
  } else {
    console.warn(
      `⚠️ Comments could not be loaded, continuing without them:`,
      commentsResult.reason
    )
  }
}

/**
 * Example 3: Rate-Limited Concurrent Fetching (Using Semaphore)
 *
 * Executes multiple async tasks with a limit on concurrency.
 * This is CRITICAL for bulk fetching to avoid rate-limiting, network congestion,
 * or overwhelming the server/database.
 *
 * @param tasks Array of functions that return Promises.
 * @param limit The maximum number of concurrent executions.
 */
export async function concurrentFetch<T>(
  tasks: (() => Promise<T>)[],
  limit: number
): Promise<T[]> {
  const semaphore = new Semaphore(limit)
  return Promise.all(tasks.map((task) => semaphore.run(task)))
}

/**
 * Demonstrates bulk fetching with concurrency limits.
 */
export async function fetchBulkDataWithLimits(): Promise<void> {
  console.log('\nStarting rate-limited bulk fetch (Max 3 concurrent)...')
  const startTime = Date.now()

  // Create 10 dummy tasks that take 200ms each
  const tasks = Array.from({ length: 10 }, (_, i) => async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    console.log(`Task ${i + 1} completed.`)
    return i + 1
  })

  // Limit to 3 concurrent requests at any given time
  await concurrentFetch(tasks, 3)

  const duration = Date.now() - startTime
  console.log(`Finished rate-limited fetch in ${duration}ms.`)
}

// --- Execution ---
// If you want to test this file, you can uncomment the lines below:
// async function runExamples() {
//   try {
//     await fetchAllDataStrict();
//     await fetchDataResiliently();
//     await fetchBulkDataWithLimits();
//   } catch (err) {
//     console.error("Application encountered a top-level error.", err);
//   }
// }
// runExamples();
