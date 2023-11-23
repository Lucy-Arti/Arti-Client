export interface MatchData {
	clothesId: number;
	createdAt: string;
	updatedAt: string;
	detailImg: string;
	likeCount: number;
	clothesName: string;
	preview: string;
	designerId: number;
	designerName: string;
}
export interface RankData {
	clothesId: number;
	createdAt: string;
	updatedAt: string;
	detailImg: string;
	likeCount: number;
	clothesName: string;
	preview: string;
	designerId: number;
	designerName: string;
	score: number;
}

export interface postCodeBody {
	authCode: string | null;
}

export interface GtmId {
	gtmId: string | null;
}

export type ProductType = {
	clothesId: number;
	createdAt: string | null;
	updatedAt: string | null;
	detailImg: string | null;
	likeCount: number | null;
	clothesName: string | null;
	preview: string | null;
	designerId: number | null;
	designerName: string | null;
	score: number | null;
};

export interface PointPossibleData {
	mission: PointPossibleType;
	point: number;
}

export interface PointPossibleType {
	comment: boolean;
	follow: boolean;
	friend: boolean;
	story: boolean;
	visit: boolean;
	vote: boolean;
}
export interface PointHistoryType {
	pointHistory : any[],
	savedPoint: number,
}
export interface InviteResultType {
	invited: number,
	accumulated: number,
}
