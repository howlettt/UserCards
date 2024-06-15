import { useEffect, useRef } from "react";

export interface RequestParams {
  signal: AbortSignal;
}

export interface RequestInfo {
  abort: () => void;
  params: RequestParams;
}

export interface RequestManager {
  newRequest: (timeoutSeconds?: number) => RequestInfo;
}

/**
 * Manages requests
 * - aborts requests when the parent component is unmounted
 * - aborts requests after a default timeout of 30 seconds
 * (source stolen from another personal project)
 */
export default function useRequestManager(): RequestManager {
  const requestManager = useRef({} as RequestManager);
  const controllers = useRef([] as AbortController[]);

  useEffect(() => {
    return (): void => {
      for (const controller of controllers.current) {
        controller.abort();
      }
    };
  }, []);

  function abort(controller: AbortController): void {
    controller.abort();
    controllers.current = controllers.current.filter((c) => c !== controller);
  }

  requestManager.current.newRequest = (
    timeoutSeconds?: number,
  ): RequestInfo => {
    const controller = new AbortController();
    controllers.current.push(controller);

    const timeout = window.setTimeout(
      (): void => {
        abort(controller);
      },
      (timeoutSeconds ?? 30) * 1000,
    );

    return {
      abort: (): void => {
        window.clearTimeout(timeout);
        abort(controller);
      },
      params: { signal: controller.signal },
    };
  };

  return requestManager.current;
}
