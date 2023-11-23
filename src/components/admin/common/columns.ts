export const USER_INFO_COLUMNS = [
	{
		accessor: 'name',
		Header: '이름',
	},
	{
		accessor: 'nickname',
		Header: '닉네임',
	},
	{
		accessor: 'email',
		Header: '이메일',
	},
	{
		accessor: 'phone',
		Header: '전화번호',
	},
	{
		accessor: 'birth',
		Header: '생년월일',
	},
	{
		accessor: 'joindate',
		Header: '가입날짜',
	},
	{
		accessor: 'votecount',
		Header: '투표 횟수',
	},
	{
		accessor: 'voteproduct',
		Header: '투표한 옷',
	},
	{
		accessor: 'lastvisit',
		Header: '마지막 접속 일시',
	},
];

export const VOTE_INFO_COLUMNS = [
	{
		accessor: 'name',
		Header: '이름',
	},
	{
		accessor: 'nickname',
		Header: '닉네임',
	},
	{
		accessor: 'votedate',
		Header: '투표 일시',
	},
	{
		accessor: 'firstround',
		Header: '8강에서 투표한 옷',
	},
	{
		accessor: 'secondround',
		Header: '4강에서 투표한 옷',
	},
	{
		accessor: 'finalround',
		Header: '결승에서 투표한 옷',
	},
];

export const CLOTHES_INFO_COLUMNS = [
	{
		accessor: 'productname',
		Header: '구분',
	},
	{
		accessor: 'clothesName',
		Header: '옷 이름',
	},
	{
		accessor: 'designerName',
		Header: '디자이너',
	},
	{
		accessor: 'designerName',
		Header: '댓글 개수',
	},
	{
		accessor: 'likeCount',
		Header: '저장 개수',
	},
	{
		accessor: 'score',
		Header: '투표 Score',
	},
	{
		accessor: 'finalround',
		Header: '구매 링크',
	},
];

export const DESIGNER_INFO_COLUMNS = [
	{
		accessor: 'name',
		Header: '이름',
	},
	{
		accessor: 'about',
		Header: '소개글',
	},
	{
		accessor: 'product',
		Header: '옷',
	},
];
