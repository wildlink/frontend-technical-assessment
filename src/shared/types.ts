export const MessageType = {
  GET_RATE: 'GET_RATE',
} as const;

export type MessageType = (typeof MessageType)[keyof typeof MessageType];

export interface GetRateMessage {
  type: typeof MessageType.GET_RATE;
  domain: string;
}

export interface GetRateResponse {
  rate: number | null;
}
