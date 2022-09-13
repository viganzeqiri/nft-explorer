import { Routes, Route } from "react-router-dom";

import { Explorer } from "pages/explorer";
import { NotFound } from "pages/not-found";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Explorer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
