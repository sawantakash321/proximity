
export const buildPayload = (type, channelName, symbols) => {
  return {
    "type": type,
    "payload": {
      "channels": [
        {
          "name": channelName,
          "symbols": symbols
        }
      ]
    }
  }
}