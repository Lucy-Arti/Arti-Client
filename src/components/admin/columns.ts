export const USER_INFO_COLUMNS =[
    {
        accessor: "name",
        Header: "이름",
      },
      {
        accessor: "nickname",
        Header: "닉네임",
      },
      {
        accessor: "email",
        Header: "이메일",
      },
      {
        accessor: "phone",
        Header: "전화번호",
      },
      {
        accessor: "birth",
        Header: "생년월일",
      },
      {
        accessor: "joindate",
        Header: "가입날짜",
      },
      {
        accessor: "votecount",
        Header: "투표 횟수",
      },
      {
        accessor: "voteproduct",
        Header: "투표한 옷",
      },
      {
        accessor: "lastvisit",
        Header: "마지막 접속 일시",
      },
];

export const VOTE_STATUS_COLUMNS =[
    {
        accessor: "name",
        Header: "이름",
      },
      {
        accessor: "nickname",
        Header: "닉네임",
      },
      {
        accessor: "votedate",
        Header: "투표 일시",
      },
      {
        accessor: "firstround",
        Header: "8강에서 투표한 옷",
      },
      {
        accessor: "secondround",
        Header: "4강에서 투표한 옷",
      },
      {
        accessor: "finalround",
        Header: "결승에서 투표한 옷",
      },
];

export const CLOTHES_INFO_COLUMNS =[
    {
        accessor: "productname",
        Header: "옷 이름",
      },
      {
        accessor: "designer",
        Header: "디자이너",
      },
      {
        accessor: "firstround",
        Header: "8강 투표 횟수",
      },
      {
        accessor: "secondround",
        Header: "4강 투표 횟수",
      },
      {
        accessor: "finalround",
        Header: "결승 투표 횟수",
      },
      {
        accessor: "totalpoint",
        Header: "총 점수",
      },
      {
        accessor: "todaypoint",
        Header: "오늘 점수",
      },
];

export const DESIGNER_INFO_COLUMNS =[
    {
        accessor: "name",
        Header: "이름",
      },
      {
        accessor: "about",
        Header: "소개글",
      },
      {
        accessor: "product",
        Header: "옷",
      },
];