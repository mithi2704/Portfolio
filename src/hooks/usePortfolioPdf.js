import { useState } from 'react'
import { exportPortfolioPdf } from '../utils/exportPortfolioPdf'

export function usePortfolioPdf() {
  const [isExporting, setIsExporting] = useState(false)

  const downloadPdf = async () => {
    if (isExporting) {
      return
    }

    setIsExporting(true)
    try {
      await exportPortfolioPdf()
    } finally {
      setIsExporting(false)
    }
  }

  return {
    isExporting,
    downloadPdf,
  }
}
