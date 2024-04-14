import { QRCode } from 'react-qr-code';
import { v4 as uuidv4 } from 'uuid';
import SSEBridge from './SSEBridge';

function App() {
  // This sessionID will be unique, even if the browser tab is duplicated, to ensure chain-of-custody.
  const sessionId = uuidv4();
  const serverUrl = `http://localhost:3001/events/new?session_id=${sessionId}`;

  return <div>
    <a href={serverUrl} target="_blank" rel="noreferrer">
      <QRCode value={serverUrl} />
    </a><br />
    <SSEBridge sessionId={sessionId} />
  </div>;
}

export default App;
