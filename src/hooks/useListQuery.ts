'use client';
import { PagenationQueryType, ProductType } from "@/types/request";
import { useEffect, useMemo, useState } from "react";
import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { baseURL, getAllProductByType } from "@/apis/list";
import axios from "axios";

interface useListQueryProps {
    queryKey: any;
    activatedTab: string;
}

const useListQuery = ({ queryKey, activatedTab }: useListQueryProps) => {
  const fetchProduct = async (pageParam:unknown|number) => {
    const accessToken = localStorage.getItem('access');
    const response = await axios.get(`${baseURL}api/v1/clothes/type/${activatedTab}?page=${pageParam}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  };

  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery<PagenationQueryType>({
    queryKey : queryKey,
    queryFn : (context) => fetchProduct(context.pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.number+1,
  });

  const products = useMemo(() => {
    // 데이터 가공
    const productList:ProductType[] = [];
    data?.pages.map((product) => {
        product.content?.map((item) => {
            productList.push(item)
        })
    })
    return productList;
  }, [data]);

  return { products, isLoading, isError, fetchNextPage, isFetchingNextPage, hasNextPage };
};

export default useListQuery;