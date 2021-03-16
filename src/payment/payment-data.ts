export interface IPaymentData {
    response?: string;
    txnType?: string;
    timezone?: string;
    txnDatetime?: string;
    hashAlgorithm?: string;
    hash?: string;
    storeName?: string;
    mode?: string;
    chargeTotal?: string;
    currency?: string;
    responseFailUrl?: string;
    responseSuccessUrl?: string;
    paymentForm: string;
}
