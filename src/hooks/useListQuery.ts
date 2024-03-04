'use client';
import { PagenationQueryType, ProductType } from "@/types/request";
import { useEffect, useMemo, useState } from "react";
import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { baseURL, getAllProductByType } from "@/apis/list";
import axios from "axios";

interface useListQueryProps {
    queryKey: any;
    // fetchFn: (type: string, page: number) => Promise<PagenationQueryType>;
    activatedTab: string;
    // queryFn: (context?: QueryFunctionContext) => Promise<PagenationQueryType>;
}

const useListQuery = ({ queryKey, activatedTab }: useListQueryProps) => {
  const fetchProduct = async (pageParam:unknown|number) => {
    const accessToken = localStorage.getItem('access');
    const response = await axios.get(`${baseURL}api/v1/clothes/type/${activatedTab}?page=${pageParam}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
    // return {
    //   result: result.blacklist,
    //   nextPage: pageParam + 1,
    //   isLast: result.is_last,
    // }; 
  };

  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<PagenationQueryType>({
    queryKey : queryKey,
    queryFn : (context) => fetchProduct(context.pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => pages.length === (lastPage.number - 1) ? undefined : lastPage.number+1
  });

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