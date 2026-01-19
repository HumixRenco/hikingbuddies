interface MeetingTransportProps {
  description?: string;
  meetingLocation: string;
  meetingTime: string;
  transport: string;
  ticketPrice?: string;
}

const MeetingTransport = ({
  description,
  meetingLocation,
  meetingTime,
  transport,
  ticketPrice,
}: MeetingTransportProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-foreground">Meeting and transport</h2>
      
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-muted-foreground mb-1">Meeting location</p>
          <p className="font-medium text-foreground">{meetingLocation}</p>
        </div>
        <div>
          <p className="text-muted-foreground mb-1">Meeting time</p>
          <p className="font-medium text-foreground">{meetingTime}</p>
        </div>
        <div>
          <p className="text-muted-foreground mb-1">Transport</p>
          <p className="font-medium text-foreground">{transport}</p>
        </div>
        {ticketPrice && (
          <div>
            <p className="text-muted-foreground mb-1">Ticket price</p>
            <p className="font-medium text-foreground">{ticketPrice}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetingTransport;
