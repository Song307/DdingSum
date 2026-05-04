// AI 분석 관련 타입
export interface ConversationAnalysis {
  responseSpeed: number;
  conversationInitiative: number;
  emotionalExpression: number;
  messageLengthTrend: number;
  nicknameFrequency: number;
  totalScore: number;
}

export interface AnalysisResult {
  id: string;
  userId: string;
  matchId?: string;
  analysis: ConversationAnalysis;
  stage: 'stranger' | 'friend' | 'early-som' | 'ripened-som' | 'dating-ready';
  comment: string;
  createdAt: Date;
}

export interface ConversationInput {
  messages: {
    sender: string;
    content: string;
    timestamp: Date;
  }[];
}
