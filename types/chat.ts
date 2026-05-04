// 채팅 관련 타입
export interface Message {
  id: string;
  matchId: string;
  senderId: string;
  content: string;
  createdAt: Date;
  isRead: boolean;
}

export interface ChatRoom {
  id: string;
  user1Id: string;
  user2Id: string;
  lastMessage: Message | null;
  createdAt: Date;
  expiresAt: Date;
  isExpired: boolean;
}
