export interface Article {

    articleName: string;
    loadTypes: string;

    isStorageItem: boolean;
    articleCode: number;

    tvaRate: number;

    isFodec: number;
    purchasePrice: number;
    sellingPrice: number;

    unityType: string;

    fixMinQuantity: number;
    fixMaxQuantity: number;

    created: Date;
    updated: Date;

}