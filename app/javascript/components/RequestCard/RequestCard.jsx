import RequestAvatar from "./RequestAvatar";
import RequestInfo from "./RequestInfo";
import RequestActions from "./RequestActions";

export default function RequestCard({
  request,
  statusFilter,
  onAccept,
  onReject,
}) {
  const { guest_name } = request;

  return (
    <div className="bg-white rounded-2xl shadow-card p-5 flex flex-col sm:flex-row gap-4">
      <RequestAvatar guestName={guest_name} />

      <RequestInfo request={request} />

      {statusFilter === "pending" && (
        <RequestActions onAccept={onAccept} onReject={onReject} />
      )}
    </div>
  );
}
