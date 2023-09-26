export interface RankingSample {
	id: number;
	designer: string;
	product: string;
	like: number;
	mark: boolean;
}

export interface WorldcupSample {
	id: number;
	product: string;
	designer: string;
	src: string;
}

export interface ShareData {
	title: string,
	text: string,
}

export const worldcupList = [
	{
		id: 1,
		designer: '뻐끔',
		product: '열대어 셔츠',
		src: '/img/productsampleimg.png',
	},
	{ id: 2, designer: '민집', product: '새콤한 감귤 모자', like: 30, mark: true, src: '/img/productsampleimg.png' },
	{
		id: 3,
		designer: '짜잉',
		product: '보송보송 츄리닝 바지',
		src: '/img/productsampleimg.png',
	},
	{
		id: 4,
		designer: '비니',
		product: '프란체스카 올블랙 티셔츠',
		src: '/img/productsampleimg.png',
	},
	{ id: 5, designer: '브리', product: '짱멋진 롱스커트', src: '/img/productsampleimg.png' },
	{ id: 6, designer: '초록', product: '개구리 머리띠',  src: '/img/productsampleimg.png' },
	{ id: 7, designer: '피터', product: '스파이더맨 거미줄', src: '/img/productsampleimg.png' },
	{ id: 8, designer: '상도', product: '상도역 출근룩', src: '/img/productsampleimg.png' },
];
