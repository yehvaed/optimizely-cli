import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

type QueryKey = string | (string | number)[];

type QueryFunction<T> = () => Promise<AxiosResponse<T>>;

type QueryResult<R> = {
	data?: R;
	isLoading: boolean;
};

const cache: Record<string, any> = {};

export const useQuery = <T>(
	queryKey: QueryKey,
	queryFn: QueryFunction<T>
): QueryResult<T> => {
	const [data, setData] = useState<T | undefined>(undefined);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function runTask() {
			try {
				setIsLoading(true);
				const { data } = await queryFn();
				cache[JSON.stringify(queryKey)] = data;
				setData(data);
			} finally {
				setIsLoading(false);
			}
		}

		runTask();
	}, []);

	return { data, isLoading };
};
