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
export interface RankData {
	clothesId: number,
	createdAt: string,
	updatedAt: string,
	detailImg: string,
	likeCount: number,
	clothesName: string,
	preview: string,
	designerId: number,
	designerName: string,
	score : number
}

export interface postCodeBody {
	authCode: string | null;
}

export interface GtmId {
	gtmId: string | null;
}