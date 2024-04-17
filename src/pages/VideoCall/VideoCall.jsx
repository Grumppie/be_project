import { useState } from 'react';
import { VideoRoom } from '../../components/VideoRoom/VidoRomm';

function VidoCall() {
  const [joined, setJoined] = useState(false);
  return (
    <div className="App">
      <h1>Mock Interview setup</h1>

      {!joined && (
        <button onClick={() => setJoined(true)}>
          Join Room
        </button>
      )}

      {joined && <VideoRoom />}
    </div>
  );
}

export default VidoCall;