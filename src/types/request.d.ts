export interface RankingSample {
	id: number;
	designer: string;
	product: string;
	like: number;
	mark: boolean;
}

export interface MatchData {
	clothesId: number,
	createdAt: string,
	updatedAt: string,
	detailImg: string,
	likeCount: number,
	clothesName: string,
	preview: string,
	designerId: number,
	designerName: string
}

export interface postCodeBody {
	authCode: string | null;
}

export interface GtmId {
	gtmId: string | null;
}