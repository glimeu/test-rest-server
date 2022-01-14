import "dotenv/config";

import { app } from "./app";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://192.168.0.150:${PORT}/`);
});
