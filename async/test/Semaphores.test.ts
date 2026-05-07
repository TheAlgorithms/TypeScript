import { Semaphore } from '../Semaphore'
import { concurrentFetch } from '../Concurrent_Data_Fetching'

describe('Semaphore', () => {
  it('should limit concurrency to the specified amount', async () => {
    const limit = 2
    const semaphore = new Semaphore(limit)
    let activeTasks = 0
    let maxObservedActive = 0

    const task = async () => {
      activeTasks++
      maxObservedActive = Math.max(maxObservedActive, activeTasks)
      await new Promise((resolve) => setTimeout(resolve, 50))
      activeTasks--
    }

    const tasks = Array.from({ length: 5 }, () => semaphore.run(task))
    await Promise.all(tasks)

    expect(maxObservedActive).toBeLessThanOrEqual(limit)
  })

  it('should handle task failures gracefully and release permits', async () => {
    const semaphore = new Semaphore(1)

    const failingTask = async () => {
      throw new Error('Task failed')
    }

    const successfulTask = async () => {
      return 'Success'
    }

    await expect(semaphore.run(failingTask)).rejects.toThrow('Task failed')

    const result = await semaphore.run(successfulTask)
    expect(result).toBe('Success')
    expect(semaphore.getActiveCount()).toBe(0)
  })

  it('should timeout if waiting in the queue too long', async () => {
    const semaphore = new Semaphore(1)

    // Task 1 takes the only permit and holds it for 100ms
    const longTask = async () =>
      new Promise((resolve) => setTimeout(resolve, 100))
    const p1 = semaphore.run(longTask)

    // Task 2 tries to run, but will only wait in queue for 20ms
    const impatientTask = async () => {
      return 'Done'
    }

    await expect(semaphore.run(impatientTask, 20)).rejects.toThrow(
      'Timeout of 20ms exceeded while waiting for Semaphore permit.'
    )

    await p1 // Wait for the first task to finish cleanly
  })
})

describe('concurrentFetch', () => {
  it('should return results in the correct order', async () => {
    const task1 = async () => {
      await new Promise((r) => setTimeout(r, 50))
      return 'First'
    }
    const task2 = async () => {
      await new Promise((r) => setTimeout(r, 10))
      return 'Second'
    }
    const task3 = async () => {
      await new Promise((r) => setTimeout(r, 30))
      return 'Third'
    }

    const results = await concurrentFetch([task1, task2, task3], 2)

    expect(results).toEqual(['First', 'Second', 'Third'])
  })

  it('should execute all tasks without exceeding the limit', async () => {
    let active = 0
    let maxActive = 0

    const createTask = (id: number) => async () => {
      active++
      maxActive = Math.max(maxActive, active)
      await new Promise((r) => setTimeout(r, 20))
      active--
      return id
    }

    const tasks = Array.from({ length: 10 }, (_, i) => createTask(i))
    const results = await concurrentFetch(tasks, 3)

    expect(maxActive).toBeLessThanOrEqual(3)
    expect(results).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
