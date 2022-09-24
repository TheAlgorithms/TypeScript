/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export declare type ClassLike = {
  new (...args: any): any;
};

export declare type ConstructorLikeKeys<T> = keyof {
  [K in keyof T as T[K] extends ClassLike ? K : never]: T[K];
};

export declare const fn: <T extends FunctionLike = UnknownFunction>(
  implementation?: T | undefined,
) => Mock<T>;

export declare type FunctionLike = (...args: any) => any;

export declare type MethodLikeKeys<T> = keyof {
  [K in keyof T as T[K] extends FunctionLike ? K : never]: T[K];
};

/**
 * All what the internal typings need is to be sure that we have any-function.
 * `FunctionLike` type ensures that and helps to constrain the type as well.
 * The default of `UnknownFunction` makes sure that `any`s do not leak to the
 * user side. For instance, calling `fn()` without implementation will return
 * a mock of `(...args: Array<unknown>) => unknown` type. If implementation
 * is provided, its typings are inferred correctly.
 */
export declare interface Mock<T extends FunctionLike = UnknownFunction>
  extends Function,
    MockInstance<T> {
  new (...args: Parameters<T>): ReturnType<T>;
  (...args: Parameters<T>): ReturnType<T>;
}

export declare type Mocked<T> = T extends ClassLike
  ? MockedClass<T>
  : T extends FunctionLike
  ? MockedFunction<T>
  : T extends object
  ? MockedObject<T>
  : T;

export declare const mocked: {
  <T extends object>(
    source: T,
    options?: {
      shallow: false;
    },
  ): Mocked<T>;
  <T_1 extends object>(
    source: T_1,
    options: {
      shallow: true;
    },
  ): MockedShallow<T_1>;
};

export declare type MockedClass<T extends ClassLike> = MockInstance<
  (...args: ConstructorParameters<T>) => Mocked<InstanceType<T>>
> &
  MockedObject<T>;

export declare type MockedFunction<T extends FunctionLike> = MockInstance<T> &
  MockedObject<T>;

declare type MockedFunctionShallow<T extends FunctionLike> = MockInstance<T> &
  T;

export declare type MockedObject<T extends object> = {
  [K in keyof T]: T[K] extends ClassLike
    ? MockedClass<T[K]>
    : T[K] extends FunctionLike
    ? MockedFunction<T[K]>
    : T[K] extends object
    ? MockedObject<T[K]>
    : T[K];
} & T;

declare type MockedObjectShallow<T extends object> = {
  [K in keyof T]: T[K] extends ClassLike
    ? MockedClass<T[K]>
    : T[K] extends FunctionLike
    ? MockedFunctionShallow<T[K]>
    : T[K];
} & T;

export declare type MockedShallow<T> = T extends ClassLike
  ? MockedClass<T>
  : T extends FunctionLike
  ? MockedFunctionShallow<T>
  : T extends object
  ? MockedObjectShallow<T>
  : T;

export declare type MockFunctionMetadata<
  T = unknown,
  MetadataType = MockMetadataType,
> = MockMetadata<T, MetadataType>;

export declare type MockFunctionMetadataType = MockMetadataType;

declare type MockFunctionResult<T extends FunctionLike = UnknownFunction> =
  | MockFunctionResultIncomplete
  | MockFunctionResultReturn<T>
  | MockFunctionResultThrow;

declare type MockFunctionResultIncomplete = {
  type: 'incomplete';
  /**
   * Result of a single call to a mock function that has not yet completed.
   * This occurs if you test the result from within the mock function itself,
   * or from within a function that was called by the mock.
   */
  value: undefined;
};

declare type MockFunctionResultReturn<
  T extends FunctionLike = UnknownFunction,
> = {
  type: 'return';
  /**
   * Result of a single call to a mock function that returned.
   */
  value: ReturnType<T>;
};

declare type MockFunctionResultThrow = {
  type: 'throw';
  /**
   * Result of a single call to a mock function that threw.
   */
  value: unknown;
};

declare type MockFunctionState<T extends FunctionLike = UnknownFunction> = {
  /**
   * List of the call arguments of all calls that have been made to the mock.
   */
  calls: Array<Parameters<T>>;
  /**
   * List of all the object instances that have been instantiated from the mock.
   */
  instances: Array<ReturnType<T>>;
  /**
   * List of all the function contexts that have been applied to calls to the mock.
   */
  contexts: Array<ThisParameterType<T>>;
  /**
   * List of the call order indexes of the mock. Jest is indexing the order of
   * invocations of all mocks in a test file. The index is starting with `1`.
   */
  invocationCallOrder: Array<number>;
  /**
   * List of the call arguments of the last call that was made to the mock.
   * If the function was not called, it will return `undefined`.
   */
  lastCall?: Parameters<T>;
  /**
   * List of the results of all calls that have been made to the mock.
   */
  results: Array<MockFunctionResult<T>>;
};

export declare interface MockInstance<
  T extends FunctionLike = UnknownFunction,
> {
  _isMockFunction: true;
  _protoImpl: Function;
  getMockImplementation(): T | undefined;
  getMockName(): string;
  mock: MockFunctionState<T>;
  mockClear(): this;
  mockReset(): this;
  mockRestore(): void;
  mockImplementation(fn: T): this;
  mockImplementationOnce(fn: T): this;
  mockName(name: string): this;
  mockReturnThis(): this;
  mockReturnValue(value: ReturnType<T>): this;
  mockReturnValueOnce(value: ReturnType<T>): this;
  mockResolvedValue(value: ResolveType<T>): this;
  mockResolvedValueOnce(value: ResolveType<T>): this;
  mockRejectedValue(value: RejectType<T>): this;
  mockRejectedValueOnce(value: RejectType<T>): this;
}

export declare type MockMetadata<T, MetadataType = MockMetadataType> = {
  ref?: number;
  members?: Record<string, MockMetadata<T>>;
  mockImpl?: T;
  name?: string;
  refID?: number;
  type?: MetadataType;
  value?: T;
  length?: number;
};

export declare type MockMetadataType =
  | 'object'
  | 'array'
  | 'regexp'
  | 'function'
  | 'constant'
  | 'collection'
  | 'null'
  | 'undefined';

export declare class ModuleMocker {
  private _environmentGlobal;
  private _mockState;
  private _mockConfigRegistry;
  private _spyState;
  private _invocationCallCounter;
  /**
   * @see README.md
   * @param global Global object of the test environment, used to create
   * mocks
   */
  constructor(global: typeof globalThis);
  private _getSlots;
  private _ensureMockConfig;
  private _ensureMockState;
  private _defaultMockConfig;
  private _defaultMockState;
  private _makeComponent;
  private _createMockFunction;
  private _generateMock;
  /**
   * @see README.md
   * @param metadata Metadata for the mock in the schema returned by the
   * getMetadata method of this module.
   */
  generateFromMetadata<T>(metadata: MockMetadata<T>): Mocked<T>;
  /**
   * @see README.md
   * @param component The component for which to retrieve metadata.
   */
  getMetadata<T = unknown>(
    component: T,
    _refs?: Map<T, number>,
  ): MockMetadata<T> | null;
  isMockFunction<T extends FunctionLike = UnknownFunction>(
    fn: SpyInstance<T>,
  ): fn is SpyInstance<T>;
  isMockFunction<P extends Array<unknown>, R extends unknown>(
    fn: (...args: P) => R,
  ): fn is Mock<(...args: P) => R>;
  isMockFunction(fn: unknown): fn is Mock<UnknownFunction>;
  fn<T extends FunctionLike = UnknownFunction>(implementation?: T): Mock<T>;
  spyOn<T extends object, M extends PropertyLikeKeys<T>>(
    object: T,
    methodName: M,
    accessType: 'get',
  ): SpyInstance<() => T[M]>;
  spyOn<T extends object, M extends PropertyLikeKeys<T>>(
    object: T,
    methodName: M,
    accessType: 'set',
  ): SpyInstance<(arg: T[M]) => void>;
  spyOn<T extends object, M extends ConstructorLikeKeys<T>>(
    object: T,
    methodName: M,
  ): T[M] extends ClassLike
    ? SpyInstance<(...args: ConstructorParameters<T[M]>) => InstanceType<T[M]>>
    : never;
  spyOn<T extends object, M extends MethodLikeKeys<T>>(
    object: T,
    methodName: M,
  ): T[M] extends FunctionLike
    ? SpyInstance<(...args: Parameters<T[M]>) => ReturnType<T[M]>>
    : never;
  private _spyOnProperty;
  clearAllMocks(): void;
  resetAllMocks(): void;
  restoreAllMocks(): void;
  private _typeOf;
  mocked<T extends object>(
    source: T,
    options?: {
      shallow: false;
    },
  ): Mocked<T>;
  mocked<T extends object>(
    source: T,
    options: {
      shallow: true;
    },
  ): MockedShallow<T>;
}

export declare type PropertyLikeKeys<T> = Exclude<
  keyof T,
  ConstructorLikeKeys<T> | MethodLikeKeys<T>
>;

declare type RejectType<T extends FunctionLike> =
  ReturnType<T> extends PromiseLike<any> ? unknown : never;

declare type ResolveType<T extends FunctionLike> =
  ReturnType<T> extends PromiseLike<infer U> ? U : never;

export declare interface SpyInstance<T extends FunctionLike = UnknownFunction>
  extends MockInstance<T> {}

declare const spyOn_2: {
  <
    T extends object,
    M extends Exclude<
      keyof T,
      | keyof {[K in keyof T as T[K] extends ClassLike ? K : never]: T[K]}
      | keyof {
          [K_1 in keyof T as T[K_1] extends FunctionLike ? K_1 : never]: T[K_1];
        }
    >,
  >(
    object: T,
    methodName: M,
    accessType: 'get',
  ): SpyInstance<() => T[M]>;
  <
    T_1 extends object,
    M_1 extends Exclude<
      keyof T_1,
      | keyof {
          [K_2 in keyof T_1 as T_1[K_2] extends ClassLike
            ? K_2
            : never]: T_1[K_2];
        }
      | keyof {
          [K_3 in keyof T_1 as T_1[K_3] extends FunctionLike
            ? K_3
            : never]: T_1[K_3];
        }
    >,
  >(
    object: T_1,
    methodName: M_1,
    accessType: 'set',
  ): SpyInstance<(arg: T_1[M_1]) => void>;
  <
    T_2 extends object,
    M_2 extends keyof {
      [K_4 in keyof T_2 as T_2[K_4] extends ClassLike ? K_4 : never]: T_2[K_4];
    },
  >(
    object: T_2,
    methodName: M_2,
  ): T_2[M_2] extends ClassLike
    ? SpyInstance<
        (...args: ConstructorParameters<T_2[M_2]>) => InstanceType<T_2[M_2]>
      >
    : never;
  <
    T_3 extends object,
    M_3 extends keyof {
      [K_5 in keyof T_3 as T_3[K_5] extends FunctionLike
        ? K_5
        : never]: T_3[K_5];
    },
  >(
    object: T_3,
    methodName: M_3,
  ): T_3[M_3] extends FunctionLike
    ? SpyInstance<(...args: Parameters<T_3[M_3]>) => ReturnType<T_3[M_3]>>
    : never;
};
export {spyOn_2 as spyOn};

export declare type UnknownFunction = (...args: Array<unknown>) => unknown;

export {};
