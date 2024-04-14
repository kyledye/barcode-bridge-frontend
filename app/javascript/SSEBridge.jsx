import React, { useEffect, useState } from 'react';

function SSEBridge(sessionId) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const eventSource = new EventSource(`http://localhost:3001/events/stream?session_id=${sessionId.sessionId}`);

    eventSource.onmessage = (event) => {
      console.log('Received message:', event.data);
      // Handle received message (e.g., update state)
      setMessage(event.data);
    };

    eventSource.onerror = (error) => {
      console.error('EventSource failed:', error);
    };

    return () => {
      eventSource.close();
    };
  }, [sessionId]);

  return (
    <div>
      <h2>SSE Message</h2>
      <textarea type="text" value={message} readOnly />
    </div>
  );
}

export default SSEBridge;