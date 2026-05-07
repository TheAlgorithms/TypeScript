/**
 * @function Semaphore
 * @description A Semaphore is a synchronization primitive that limits the number
 * of concurrent asynchronous operations. It maintains a set of permits.
 * Each acquire() blocks if necessary until a permit is available, and then takes it.
 * Each release() adds a permit, potentially releasing a blocking acquirer.
 *
 * @see https://en.wikipedia.org/wiki/Semaphore_(programming)
 */
export class Semaphore {
  private queue: Array<{
    resolve: () => void
    reject: (reason?: any) => void
    timeoutId?: NodeJS.Timeout
  }> = []
  private activeCount: number = 0

  /**
   * @param maxConcurrency The maximum number of concurrent operations allowed.
   */
  constructor(private readonly maxConcurrency: number) {
    if (maxConcurrency <= 0) {
      throw new Error('Max concurrency must be at least 1.')
    }
  }

  /**
   * Acquires a permit from the semaphore.
   * If no permits are available, it returns a promise that resolves
   * when a permit is released by another task.
   *
   * @param timeoutMs Optional. The maximum amount of time (in ms) to wait in the queue.
   * @returns {Promise<void>} A promise that resolves when a permit is acquired.
   */
  public async acquire(timeoutMs?: number): Promise<void> {
    if (this.activeCount < this.maxConcurrency) {
      this.activeCount++
      return Promise.resolve()
    }

    return new Promise<void>((resolve, reject) => {
      const queueItem: {
        resolve: () => void
        reject: (reason?: any) => void
        timeoutId?: NodeJS.Timeout
      } = { resolve, reject }

      if (timeoutMs !== undefined) {
        queueItem.timeoutId = setTimeout(() => {
          // Remove from queue
          const index = this.queue.indexOf(queueItem)
          if (index !== -1) {
            this.queue.splice(index, 1)
          }
          reject(
            new Error(
              `Timeout of ${timeoutMs}ms exceeded while waiting for Semaphore permit.`
            )
          )
        }, timeoutMs)
      }

      this.queue.push(queueItem)
    })
  }

  /**
   * Releases a permit back to the semaphore.
   * If there are tasks waiting in the queue, the first one is notified
   * and allowed to proceed.
   */
  public release(): void {
    const nextTask = this.queue.shift()
    if (nextTask) {
      // Clear the timeout if the task had one
      if (nextTask.timeoutId) {
        clearTimeout(nextTask.timeoutId)
      }
      // Pass the permit directly to the next waiting task
      nextTask.resolve()
    } else {
      // No one is waiting, so just decrement the active count
      this.activeCount--
    }
  }

  /**
   * A helper method that wraps an asynchronous task.
   * It handles the acquisition and release of the permit automatically,
   * even if the task fails.
   *
   * @param task A function that returns a Promise.
   * @param queueTimeoutMs Optional. Throw an error if the task waits in the queue longer than this.
   * @returns {Promise<T>} The result of the task.
   */
  public async run<T>(
    task: () => Promise<T>,
    queueTimeoutMs?: number
  ): Promise<T> {
    await this.acquire(queueTimeoutMs)
    try {
      return await task()
    } finally {
      this.release()
    }
  }

  /**
   * Returns the current number of active permits.
   */
  public getActiveCount(): number {
    return this.activeCount
  }

  /**
   * Returns the number of tasks currently waiting for a permit.
   */
  public getQueueLength(): number {
    return this.queue.length
  }
}
