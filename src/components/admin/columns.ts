import { UserInfoData } from "@/types/request";

export const USER_INFO_COLUMNS =[
    {
        accessor: "name" as keyof UserInfoData,
        Header: "이름",
      },
      {
        accessor: "nickname" as keyof UserInfoData,
        Header: "닉네임",
      },
      {
        accessor: "email" as keyof UserInfoData,
        Header: "이메일",
      },
      {
        accessor: "phone" as keyof UserInfoData,
        Header: "전화번호",
      },
      {
        accessor: "birth" as keyof UserInfoData,
        Header: "생년월일",
      },
      {
        accessor: "joindate" as keyof UserInfoData,
        Header: "가입날짜",
      },
      {
        accessor: "votecount" as keyof UserInfoData,
        Header: "투표 횟수",
      },
      {
        accessor: "voteproduct" as keyof UserInfoData,
        Header: "투표한 옷",
      },
      {
        accessor: "lastvisit" as keyof UserInfoData,
        Header: "마지막 접속 일시",
      },
];