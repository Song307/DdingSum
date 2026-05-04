interface ChatDetailPageProps {
  params: {
    matchId: string;
  };
}

export default function ChatDetailPage({ params }: ChatDetailPageProps) {
  const { matchId } = params;

  return (
    <div>
      <h1>채팅 상세</h1>
      <p>Match ID: {matchId}</p>
      {/* AI가 1:1 채팅 페이지 구현 */}
    </div>
  );
}
