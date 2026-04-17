import { Navigate, Route, Routes } from "react-router-dom"

import { SiteLayout } from "@/components/site-layout"
import { CareerPage } from "@/pages/CareerPage"
import { CompanyPage } from "@/pages/CompanyPage"
import { HomePage } from "@/pages/HomePage"
import { PlaceholderPage } from "@/pages/PlaceholderPage"

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="company/about" element={<CompanyPage />} />
        <Route path="company/career" element={<CareerPage />} />
        <Route
          path="company"
          element={<Navigate to="/company/about" replace />}
        />
        <Route path="products/:slug" element={<PlaceholderPage />} />
        <Route path="solutions/:slug" element={<PlaceholderPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
