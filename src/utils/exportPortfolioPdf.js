export async function exportPortfolioPdf() {
  const root = document.getElementById('root')

  if (!root) {
    throw new Error('Portfolio root not found.')
  }

  const [{ jsPDF }, { default: html2canvas }] = await Promise.all([
    import('jspdf'),
    import('html2canvas'),
  ])

  const captureTarget = document.querySelector('main') || root
  const previousScrollY = window.scrollY

  window.scrollTo({ top: 0, behavior: 'auto' })

  // Give the browser one frame to settle sticky/fixed layout before capture.
  await new Promise((resolve) => window.requestAnimationFrame(resolve))

  const canvas = await html2canvas(captureTarget, {
    useCORS: true,
    backgroundColor: '#020617',
    scale: 2,
    scrollY: -window.scrollY,
    windowWidth: document.documentElement.clientWidth,
    windowHeight: Math.max(captureTarget.scrollHeight, window.innerHeight),
  })

  window.scrollTo({ top: previousScrollY, behavior: 'auto' })

  const imageData = canvas.toDataURL('image/jpeg', 0.92)
  const pdf = new jsPDF('p', 'mm', 'a4')
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  const imageHeight = (canvas.height * pageWidth) / canvas.width

  let heightLeft = imageHeight
  let position = 0

  pdf.addImage(imageData, 'JPEG', 0, position, pageWidth, imageHeight, undefined, 'FAST')
  heightLeft -= pageHeight

  while (heightLeft > 0) {
    position = heightLeft - imageHeight
    pdf.addPage()
    pdf.addImage(imageData, 'JPEG', 0, position, pageWidth, imageHeight, undefined, 'FAST')
    heightLeft -= pageHeight
  }

  pdf.save('Dhinesh-VN-IEEE-Portfolio.pdf')
}
