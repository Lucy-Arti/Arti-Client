'use client';
import { PagenationQueryType, ProductType } from "@/types/request";
import { useEffect, useMemo, useState } from "react";
import { QueryFunctionContext, useInfiniteQuery } from "react-query";

interface useListQueryProps {
    queryKey: any;
    queryFn: (context?: QueryFunctionContext) => Promise<PagenationQueryType>;
}

const useListQuery = ({ queryKey, queryFn }: useListQueryProps) => {
  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<PagenationQueryType>(
    queryKey,
    queryFn,
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage.number + 1;
        return lastPage.number === lastPage.totalPages ? undefined : nextPage;
      },
      retry: 0,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  const products = useMemo(() => {
    // 상품 컴포넌트(ProductCard.tsx)의 props에 맞춰 데이터 가공처리
    const productList:ProductType[] = [];
    data?.pages.map((product) => {
        product.content?.map((item) => {
            productList.push(item)
        })
    })
    return productList;
  }, [data]);

  return { products, isLoading, isError, fetchNextPage, isFetchingNextPage };
};

export default useListQuery;