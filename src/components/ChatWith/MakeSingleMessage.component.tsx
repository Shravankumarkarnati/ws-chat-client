import moment from "moment";

interface IMessageData {
  message: string;
  date: string;
  sentOrReceived?: number;
}

const MakeSingleMessage: React.FC<IMessageData> = ({
  message,
  date,
  sentOrReceived,
}) => {
  const formatDate = moment(date).format("hh:mm A");
  const justifyClass = sentOrReceived === 1 ? "justify-end" : "justify-start";
  const bgClass =
    sentOrReceived === 1 ? "bg-color-gray-light-2" : "bg-color-gray-light-3";
  return (
    <div className={"flex flex-1 my-2  " + justifyClass}>
      <div
        className={
          "w-auto max-w-1/2 rounded-xl mx-2 px-4 py-2 flex flex-col   " +
          bgClass
        }
      >
        <span className="text-sm">{message}</span>
        <span className="text-xs text-right flex-1">{formatDate}</span>
      </div>
    </div>
  );
};

export default MakeSingleMessage;
