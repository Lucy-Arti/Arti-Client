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

export type ProductType = {
	clothesId: number,
	createdAt: string|null,
	updatedAt: string|null,
	detailImg: string|null,
	likeCount: number|null,
	clothesName: string|null,
	preview: string|null,
	designerId: number|null,
	designerName: string|null,
	score: number|null
}

// admin 페이지용 type
export interface ClothesInfoData {
	type: string;
	clothesName:string;
	designerName:string;
	commentCount:number;
	likeCount:number;
	score: number;
	purchaseLink: string;
}