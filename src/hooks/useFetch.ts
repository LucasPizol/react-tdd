import { useCallback, useEffect, useState } from "react";

export const useFetch = <T>(
  request: () => Promise<T>,
  initialValues?: Partial<T>
) => {
  const [data, setData] = useState<T>(initialValues as T);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const refetch = useCallback(async () => {
    try {
      setLoading(true);
      const response = await request();
      setData(response);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refetch();
  }, []);

  return { data, loading, error, refetch };
};
